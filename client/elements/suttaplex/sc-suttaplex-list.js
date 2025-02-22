import { html, LitElement } from 'lit';
import { cache } from 'lit/directives/cache.js';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { API_ROOT } from '../../constants';
import { store } from '../../redux-store';
import { partitionAsync } from '../../utils/partitionAsync';
import { isFallenLeaf } from '../../utils/sc-structure';
import { LitLocalized } from '../addons/sc-localization-mixin';
import { getURLParam } from '../addons/sc-functions-miscellaneous';
import { suttaplexListCss, suttaplexListTableViewCss } from './sc-suttaplex-list.css.js';
import './sc-suttaplex-section-title';
import '../addons/sc-error-icon';
import { RefreshNavNew, setNavigation } from '../navigation/sc-navigation-common';
import { transformId, getParagraphRange } from '../../utils/suttaplex';
import '@material/web/button/filled-button';

class SCSuttaplexList extends LitLocalized(LitElement) {
  static properties = {
    localizedStringsPath: { type: String },
    categoryId: { type: String },
    suttaplexListDisplay: { type: String },
    suttaplexData: { type: Array },
    networkError: { type: Object },
    parallelsLite: { type: Array },
    expansionData: { type: Array },
  };

  get actions() {
    return {
      changeToolbarTitle(title) {
        store.dispatch({
          type: 'CHANGE_TOOLBAR_TITLE',
          title,
        });
      },
      changeLinearProgressActiveState(active) {
        store.dispatch({
          type: 'CHANGE_LINEAR_PROGRESS_ACTIVE_STATE',
          linearProgressActive: active,
        });
      },
      changeDisplayParallelTableViewState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_PARALLEL_TABLE_VIEW_STATE',
          displayParallelTableView: displayState,
        });
      },
      toggleSuttaplexDisplay(suttaplexdisplay) {
        store.dispatch({
          type: 'SUTTPLEX_LIST_DISPLAY',
          suttaplexdisplay,
        });
      },
    };
  }

  get apiUrl() {
    return `${API_ROOT}/suttaplex/${this.categoryId}?language=${this.language}`;
  }

  get rangeSuttaplexApiUrl() {
    return `${API_ROOT}/range_suttaplex/${this.categoryId}?language=${this.language}`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/interface';
    this.siteLanguage = store.getState().siteLanguage;
    this.displayParallelTableView = store.getState().displayParallelTableView;
    this.#showTableViewButton();
    this._setViewState();
  }

  #showTableViewButton() {
    const scSiteLayout = document.querySelector('sc-site-layout');
    const scActionItems = scSiteLayout?.querySelector('#action_items');
    const btnShowParallelTableView = scActionItems?.shadowRoot.querySelector(
      '#btnShowParallelTableView'
    );
    if (btnShowParallelTableView) {
      btnShowParallelTableView.style.display = 'inherit';
    }
  }

  #loadSCSuttaplex() {
    import(
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      './card/sc-suttaplex.js'
    ).catch(err => {
      console.error(err);
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.#loadSCSuttaplex();
    this.addEventListener('click', () => {
      this._hideTopSheets();
    });
    this._fetchExpansionData();
    this._updateURLParams();
  }

  async _fetchExpansionData() {
    this.expansionData = await fetch(`${API_ROOT}/expansion`).then(r => r.json());
  }

  _hideTopSheets() {
    const scActionItems = document.querySelector('sc-site-layout').querySelector('#action_items');
    scActionItems?.hideItems();
  }

  isSuttaplex(item) {
    return item.type === 'leaf';
  }

  isPatimokkha() {
    return this.categoryId?.endsWith('-pm');
  }

  isPatimokkhaRuleCategory(uid) {
    return uid?.includes('-pm-');
  }

  shouldExpandAll() {
    return this.suttaplexData.length <= 3;
  }

  hasError() {
    return this.networkError || (this.suttaplexData && this.suttaplexData.length === 0);
  }

  calculateClass(itemType) {
    return itemType === 'grouping' ? 'node' : 'vagga-node';
  }

  // Close parallels when navigating to new page
  areParallelsOpen() {
    return this.suttaplexData.length === 1;
  }

  computeItemDifficulty(difficulty) {
    if (!difficulty) {
      return;
    }
    if (difficulty.name) {
      return difficulty.name;
    }
    const levels = { 1: 'beginner', 2: 'intermediate', 3: 'advanced' };
    return levels[difficulty];
  }

  stateChanged(state) {
    super.stateChanged(state);
    if (
      this.categoryId !== state.currentRoute?.params?.categoryId ||
      this.siteLanguage !== state.siteLanguage
    ) {
      this.categoryId = state.currentRoute.params.categoryId;
      this.siteLanguage = state.siteLanguage;
      if (this.categoryId && state.siteLanguage) {
        this._fetchCategory();
      }

      if (this.siteLanguage !== state.siteLanguage) {
        this.siteLanguage = state.siteLanguage;
      }

      RefreshNavNew(this.categoryId);
    }

    if (this.suttaplexListDisplay !== state.suttaplexListDisplay) {
      this.suttaplexListDisplay = state.suttaplexListDisplay;
      this._updateURLParams();
    }
    if (this.displayParallelTableView !== state.displayParallelTableView) {
      this.displayParallelTableView = state.displayParallelTableView;
      this._updateURLParams();
      this.requestUpdate();
    }
  }

  async _fetchCategory() {
    this.suttaplexLoading = true;
    this.actions.changeLinearProgressActiveState(this.suttaplexLoading);
    this.networkError = null;

    try {
      let responseData = await fetch(this.apiUrl).then(r => r.json());
      if (!responseData[0].uid) {
        responseData = await fetch(this.rangeSuttaplexApiUrl).then(r => r.json());
        this.isSuttaInRangeSutta = true;
        this.rangeCategoryId = responseData[0].uid;
      }
      this.priorityAuthorUid = responseData[0].priority_author_uid;
      await this.#addFallenLeavesToSuttaplexList(responseData[0].uid, responseData);
      this.suttaplexData = [];
      partitionAsync(
        responseData,
        part => (this.suttaplexData = [...this.suttaplexData, ...part]),
        15,
        100
      ).then(() => this._updateMetaData());
      this.initTableView();
    } catch (e) {
      this.networkError = e;
    }

    this.suttaplexLoading = false;
    this.actions.changeLinearProgressActiveState(this.suttaplexLoading);
  }

  async #addFallenLeavesToSuttaplexList(categoryId, suttaPlexList) {
    const firstAcronym = this.#getFirstAcronymFromSuttaPlexList(suttaPlexList);
    const parentAcronym = firstAcronym.slice(0, firstAcronym.lastIndexOf(' ')) || this.categoryId;
    try {
      const responseData = await fetch(
        `${API_ROOT}/fallen_leaves_suttaplex/${this.categoryId}?language=${this.language}`
      ).then(r => r.json());
      if (responseData?.length > 0) {
        for (const suttaPlex of responseData) {
          suttaPlex.isFallenLeaf = true;
        }
        suttaPlexList.push(...responseData);
        for (const suttaPlex of suttaPlexList) {
          suttaPlex.hasFallenLeaves = true;
          suttaPlex.index = parseInt(suttaPlex.uid?.replaceAll(this.categoryId, ''), 10);
          if (Object.hasOwn(suttaPlex, 'isFallenLeaf') && suttaPlex.isFallenLeaf) {
            suttaPlex.acronym = `${parentAcronym} ${suttaPlex.uid?.replaceAll(
              this.categoryId,
              ''
            )}`;
          }
        }
        suttaPlexList.sort((a, b) => a.index - b.index);
      }
    } catch (error) {
      console.error(error);
    }
  }

  #getFirstAcronymFromSuttaPlexList(suttaPlexList) {
    if (!suttaPlexList) {
      return '';
    }
    for (const suttaPlex of suttaPlexList) {
      if (suttaPlex.acronym) {
        return suttaPlex.acronym;
      }
    }
    return '';
  }

  _updateMetaData() {
    const { suttaplexData, isSuttaInRangeSutta, categoryId, rangeCategoryId } = this;
    if (this.suttaplexData && this.suttaplexData.length) {
      const { title, original_title, blurb } = suttaplexData[0];
      let description = this.localize('interface:metaDescriptionText');
      if (blurb) {
        description = blurb;
      }

      if (!isSuttaInRangeSutta) {
        RefreshNavNew(categoryId);
        this.actions.changeToolbarTitle(original_title);
      } else {
        RefreshNavNew(rangeCategoryId);
        this.actions.changeToolbarTitle(title);

        setTimeout(() => {
          const currentNav = store.getState().navigationArray;
          const lastNavItem = currentNav[currentNav.length - 1];
          if (lastNavItem.uid !== 'home') {
            lastNavItem.title = this.suttaplexData[0].title;
            setNavigation(currentNav);
          }
        }, 100);
      }

      const pageTitle = `${title || original_title}—Suttas and Parallels`;
      document.dispatchEvent(
        new CustomEvent('metadata', {
          detail: {
            pageTitle,
            title: pageTitle,
            description,
            bubbles: true,
            composed: true,
          },
        })
      );
    }
  }

  async initTableView() {
    this.suttaplexItem = await (
      await fetch(`${API_ROOT}/parallels_lite/${this.categoryId}`)
    ).json();
    this.parallelsLite = [];
    for (const item of this.suttaplexItem) {
      if (item.parallels?.length === 0) {
        this.parallelsLite.push({
          uid: item.uid,
          from: item.uid,
          fromTitle: item.uid,
          name: item.name,
          acronym: item.acronym,
          to: [],
          original_root: item.original_root,
        });
      } else {
        for (const parallel of item.parallels) {
          const parallels = this.parallelsLite.find(
            x => x.from === parallel.from && x.uid === item.uid
          );
          if (parallels) {
            parallels.to.push({
              to: parallel.to.to,
              toTitle: parallel.to.to ? this.#formatParallelToTitle(parallel.to.to) : '',
              uid: parallel.to.uid,
              acronym: parallel.to.acronym
                ? parallel.to.acronym
                : transformId(parallel.to.uid, this.expansionData),
              parallel_root: parallel.to.parallel_root,
            });
          } else {
            this.parallelsLite.push({
              uid: item.uid,
              from: parallel.from,
              fromTitle: parallel.from ? this.#formatParallelFromTitle(parallel.from) : '',
              name: item.name,
              acronym: item.acronym,
              original_root: item.original_root,
              to: [
                {
                  to: parallel.to.to,
                  toTitle: parallel.to.to ? this.#formatParallelToTitle(parallel.to.to) : '',
                  uid: parallel.to.uid,
                  acronym: parallel.to.acronym
                    ? parallel.to.acronym
                    : transformId(parallel.to.uid, this.expansionData),
                  parallel_root: parallel.to.parallel_root,
                },
              ],
            });
          }
        }
      }
    }
  }

  #formatParallelFromTitle(parallelFromTitle) {
    return parallelFromTitle?.replaceAll('#', ':').replaceAll('-:', '-').replaceAll('-', '–');
  }

  #formatParallelToTitle(parallelToTitle) {
    return parallelToTitle
      .replaceAll('#', ':')
      .replaceAll('-:', '-')
      .replaceAll('~', '')
      .replaceAll('-', '–');
  }

  suttaplexTemplate(item) {
    return html`
      <sc-suttaplex
        .item=${item}
        .parallelsOpened=${this.areParallelsOpen(item)}
        .difficulty=${this.computeItemDifficulty(item.difficulty)}
        .suttaplexListStyle=${this.suttaplexListDisplay ? 'compact' : ''}
        .expansionData=${this.expansionData}
        .isPatimokkha=${this.isPatimokkha()}
        .isPatimokkhaDetails=${this.isPatimokkha() && item.uid !== this.categoryId}
        .isSuttaInRangeSutta=${this.isSuttaInRangeSutta}
        .inRangeSuttaId=${this.categoryId}
        .priorityAuthorUid=${this.priorityAuthorUid}
        .isFallenLeaf=${isFallenLeaf(item.uid)}
        class=${ifDefined(
          this.isPatimokkha() && item.uid !== this.categoryId ? 'hidden' : undefined
        )}
      ></sc-suttaplex>
      ${this.isPatimokkha && item.uid === this.categoryId
        ? html`
            <md-filled-button
              id="btnShowParallelsAndDetails"
              @click=${this.onShowParallelsClick}
              class=${this._calculateButtonClass()}
            >
              ${this.localize('interface:showParallelsAndDetails')}
            </md-filled-button>
          `
        : ''}
    `;
  }

  _calculateButtonClass() {
    const classList = [];
    if (this.suttaplexListDisplay) {
      classList.push('compact');
    }
    if (!this.isPatimokkha()) {
      classList.push('hidden');
    }
    return classList.join(' ');
  }

  onShowParallelsClick() {
    const hiddenCards = this.shadowRoot.querySelectorAll('.hidden');
    const showedCards = this.shadowRoot.querySelectorAll('.show');
    if (hiddenCards.length > 0 && showedCards.length === 0) {
      this.shadowRoot.querySelectorAll('.hidden').forEach(x => {
        x.classList.remove('hidden');
        x.classList.add('show');
        this.shadowRoot.querySelector('#btnShowParallelsAndDetails').label = this.localize(
          'interface:hideParallelsAndDetails'
        );
      });
    } else {
      this.shadowRoot.querySelectorAll('.show').forEach(x => {
        x.classList.remove('show');
        x.classList.add('hidden');
        this.shadowRoot.querySelector('#btnShowParallelsAndDetails').label = this.localize(
          'interface:showParallelsAndDetails'
        );
      });
    }
  }

  _setViewState() {
    const view = getURLParam('view');
    if (view && ['normal', 'dense', 'table'].includes(view.toLowerCase())) {
      if (view === 'normal') {
        this.displayParallelTableView = false;
        this.suttaplexListDisplay = false;
        this.actions.changeDisplayParallelTableViewState(false);
        this.actions.toggleSuttaplexDisplay(false);
      }
      if (view === 'dense') {
        this.displayParallelTableView = false;
        this.suttaplexListDisplay = true;
        this.actions.changeDisplayParallelTableViewState(false);
        this.actions.toggleSuttaplexDisplay(true);
      }
      if (view === 'table') {
        this.displayParallelTableView = true;
        this.actions.changeDisplayParallelTableViewState(true);
      }
    }
  }

  _updateURLParams() {
    const { suttaplexListDisplay, displayParallelTableView, siteLanguage } = store.getState();
    const langParam = `lang=${siteLanguage}`;
    let urlParams;
    if (!displayParallelTableView) {
      urlParams = `?view=${suttaplexListDisplay ? 'dense' : 'normal'}&${langParam}`;
    } else {
      urlParams = `?view=table&${langParam}`;
    }
    history.replaceState(null, null, urlParams);
  }

  sectionTemplate(item) {
    return html`
      <section class=${this.calculateClass(item.type)}>
        <sc-suttaplex-section-title
          .inputTitle=${item.translated_title || item.original_title}
          .inputText=${item.blurb}
          .inputType=${item.type}
          .label=${this.localize('interface:expandSection')}
          .opened=${this.shouldExpandAll()}
          .originalTitle=${item.original_title}
          .isPatimokkhaRuleCategory=${this.isPatimokkhaRuleCategory(item.uid)}
          class=${this.isPatimokkha() && item.uid !== this.categoryId ? 'hidden' : ''}
        ></sc-suttaplex-section-title>
      </section>
    `;
  }

  get parallels_lite() {
    return this.parallelsLite;
  }

  tableViewTemplate(parallelsLite) {
    return parallelsLite?.length
      ? html`
          <table>
            <tbody>
              ${parallelsLite.map(
                item => html`
                  <tr>
                    <td class="sutta_uid">
                      <a
                        class="uid"
                        href=${this._getRootSuttaUrl(item.original_root, item.uid, item.from)}
                        >${item.acronym || item.from}${item.fromTitle.split(':').length > 1
                          ? `:${item.fromTitle.split(':')[1]}`
                          : ''}</a
                      >
                    </td>
                    <td class="sutta_title">${item.name}</td>
                    <td class="parallels">
                      ${item.to.map(
                        (toItem, i) => html`
                          ${item.to.length !== i + 1
                            ? html`<a
                                  class="uid"
                                  href=${this._getRootSuttaUrl(
                                    toItem.parallel_root,
                                    toItem.uid,
                                    toItem.to
                                  )}
                                  >${toItem.acronym || toItem.uid}${toItem.toTitle.split(':')
                                    .length > 1
                                    ? `:${toItem.toTitle.split(':')[1]}`
                                    : ''}</a
                                >,`
                            : html`
                                <a
                                  class="uid"
                                  href=${this._getRootSuttaUrl(
                                    toItem.parallel_root,
                                    toItem.uid,
                                    toItem.to
                                  )}
                                  >${toItem.acronym || toItem.uid}${toItem.toTitle.split(':')
                                    .length > 1
                                    ? `:${toItem.toTitle.split(':')[1]}`
                                    : ''}</a
                                >
                              `}
                        `
                      )}
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        `
      : '';
  }

  _getRootSuttaUrl(rootDetail, originalUid, uidAndHash) {
    const { uid, lang, author_uid } = rootDetail[0] || {};
    const paragraphRange = getParagraphRange(uidAndHash, true);
    return uid && lang && author_uid
      ? `/${uid}/${lang}/${author_uid}${paragraphRange}`
      : `/${originalUid}`;
  }

  static styles = [suttaplexListCss, suttaplexListTableViewCss];

  normalViewTemplate() {
    return html`
      <div class="division-content main">
        ${this.hasError() ? html` <sc-error-icon type="no-network"></sc-error-icon> ` : ''}
        ${this.suttaplexData &&
        repeat(
          this.suttaplexData,
          item => item.key,
          item =>
            this.isSuttaplex(item) ||
            isFallenLeaf(item.uid) ||
            (this.isPatimokkha() && !this.isPatimokkhaRuleCategory(item.uid))
              ? this.suttaplexTemplate(item)
              : this.sectionTemplate(item)
        )}
      </div>
    `;
  }

  render() {
    return html`
      ${cache(
        this.displayParallelTableView
          ? this.tableViewTemplate(this.parallelsLite)
          : this.normalViewTemplate()
      )}
    `;
  }
}

customElements.define('sc-suttaplex-list', SCSuttaplexList);
