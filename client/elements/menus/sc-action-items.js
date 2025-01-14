import { LitElement, html, css, unsafeCSS } from 'lit';
import '@material/web/iconbutton/icon-button';

import { store } from '../../redux-store';
import { LitLocalized } from '../addons/sc-localization-mixin';
import { icon } from '../../img/sc-icon';
import { API_ROOT } from '../../constants';
/*
Base toolbar that appears on the top right in the header of every page.
*/

const scSiteLayout = document.querySelector('sc-site-layout');
const localizedStrings = {
  buttonViewCompactText: scSiteLayout.localizedStringById('interface:viewCompactButtonText'),
  buttonViewComfyText: scSiteLayout.localizedStringById('interface:viewComfyButtonText'),
  buttonToolsText: scSiteLayout.localizedStringById('interface:toolsButtonText'),
  buttonInfoText: scSiteLayout.localizedStringById('interface:infoButtonText'),
  buttonShowParallelsText: scSiteLayout.localizedStringById('interface:showParallelsButtonText'),
  buttonShowToCText: scSiteLayout.localizedStringById('interface:showToCButtonText'),
  buttonShowParallelTableViewText: scSiteLayout.localizedStringById(
    'interface:showParallelTableViewButtonText'
  ),
  buttonSearchOptionsText: scSiteLayout.localizedStringById('interface:searchOptionsButtonText'),
  buttonSearchFilterText: scSiteLayout.localizedStringById('interface:searchFilterButtonText'),
};

export class SCActionItems extends LitLocalized(LitElement) {
  static properties = {
    suttaplexListEnabled: { type: Boolean },
    localizedStringsPath: { type: String },
    displaySettingMenu: { type: Boolean },
    displayToolButton: { type: Boolean },
    displayInfoButton: { type: Boolean },
    tableOfContents: { type: Boolean },
    displayCompactButton: { type: Boolean },
    displayComfyButton: { type: Boolean },
    displayViewModeButton: { type: Boolean },
    displaySearchOptionsButton: { type: Boolean },
    colorTheme: { type: String },
    suttaMetaText: { type: String },
    suttaPublicationInfo: { type: Object },
    range_uid: { type: String },
    siteLanguage: { type: String },
  };

  constructor() {
    super();
    const state = store.getState();
    this.suttaplexListEnabled = state.suttaplexListDisplay;
    this.colorTheme = state.colorTheme;
    this.activeClass = this.colorTheme === 'light' ? 'active-light' : 'active-dark';
    this.localizedStringsPath = '/localization/elements/interface';
    this.currentRoute = state.currentRoute;
    this.siteLanguage = state.siteLanguage;

    this.actions.changeDisplaySettingMenuState(false);
    this.actions.changeDisplaySuttaParallelsState(false);
    this.actions.changeDisplaySuttaToCState(false);
    this.actions.changeDisplaySuttaInfoState(false);

    this.tableOfContents = !!state.tableOfContents.items.length;
    this.displaySettingMenu = state.displaySettingMenu;
    this.displayToolButton = state.displayToolButton;
    this.displayInfoButton = state.displayInfoButton;
    this.displayViewModeButton = state.displayViewModeButton;
    this.displayParallelTableView = state.displayParallelTableView;
    this.displaySearchOptionsButton = state.displaySearchOptionsButton;
  }

  static styles = css`
    .white-icon {
      color: var(--sc-inverted-text-color);
    }

    #tools_menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      height: 60px;
    }

    .invisible {
      display: none;
    }

    .toolButtons {
      position: relative;
      box-sizing: border-box;
      border-bottom: 4px solid transparent;
      border-top: 4px solid transparent;
      padding: 2.3px 0 2.3px 0;
      height: 60px;
      width: 48px;
    }

    #btnSearchFilter:after,
    #btnSearchOptions:after,
    #btnViewCompact:after,
    #btnViewComfy:after,
    #btnTools:after,
    #btnInfo:after,
    #btnShowParallels:after,
    #btnShowToC:after,
    #btnShowParallelTableView:after {
      font-size: var(--sc-font-size-xxs);
      font-weight: 600;
      font-stretch: condensed;
      position: absolute;
      bottom: 2px;
      width: 100%;
      text-align: center;
    }

    #btnViewCompact:after {
      content: '${unsafeCSS(localizedStrings.buttonViewCompactText)}';
    }

    #btnViewComfy:after {
      content: '${unsafeCSS(localizedStrings.buttonViewComfyText)}';
    }

    #btnTools:after {
      content: '${unsafeCSS(localizedStrings.buttonToolsText)}';
    }

    #btnInfo:after {
      content: '${unsafeCSS(localizedStrings.buttonInfoText)}';
    }

    #btnShowParallels:after {
      content: '${unsafeCSS(localizedStrings.buttonShowParallelsText)}';
    }

    #btnShowToC:after {
      content: '${unsafeCSS(localizedStrings.buttonShowToCText)}';
    }

    #btnShowParallelTableView:after {
      content: '${unsafeCSS(localizedStrings.buttonShowParallelTableViewText)}';
    }

    #btnSearchOptions:after {
      content: '${unsafeCSS(localizedStrings.buttonSearchOptionsText)}';
    }

    #btnSearchFilter:after {
      content: '${unsafeCSS(localizedStrings.buttonSearchFilterText)}';
    }

    #btnSearchFilter,
    #btnSearchOptions,
    #btnShowParallels,
    #btnShowParallelTableView {
      display: flex;
    }

    .active-light {
      font-weight: 800;
      border-bottom: 4px solid var(--sc-primary-color-light) !important;
    }

    .active-dark {
      font-weight: 800;
      border-bottom: 4px solid var(--sc-primary-color-dark) !important;
    }

    @media only screen and (max-width: 600px) {
      #tools_menu.contextToolbarExpand {
        width: 100%;
        justify-content: space-around;
        align-items: flex-end;
      }
    }

    .icon {
      fill: var(--sc-inverted-text-color);
    }
  `;

  render() {
    return html`
      <div id="tools_menu">
        <md-icon-button
          class="white-icon toolButtons"
          id="btnShowToC"
          @click=${this._onBtnShowToCClick}
          slot="actionItems"
          ?hidden=${this.tableOfContents}
        >
          ${icon.toc}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnViewCompact"
          @click=${this._onBtnViewCompactClick}
          slot="actionItems"
          ?hidden=${this.displayCompactButton}
        >
          ${icon.view_compact}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnViewComfy"
          @click=${this._onBtnViewCompactClick}
          slot="actionItems"
          ?hidden=${this.displayComfyButton}
        >
          ${icon.view_comfy}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnInfo"
          @click=${this._onBtnInfoClick}
          slot="actionItems"
          ?hidden=${this.displayInfoButton}
        >
          ${icon.info}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnTools"
          @click=${this._onBtnToolsClick}
          slot="actionItems"
          ?hidden=${this.displayToolButton}
        >
          ${icon.visibility}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnSearchOptions"
          @click=${this.#onBtnSearchOptionsClick}
          slot="actionItems"
          ?hidden=${this.displaySearchOptionsButton}
        >
          ${icon.language}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnSearchFilter"
          @click=${this.#onBtnSearchFilterClick}
          slot="actionItems"
          ?hidden=${this.displaySearchOptionsButton}
        >
          ${icon.filter}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnShowParallels"
          @click=${this._onBtnShowParallelsClick}
          slot="actionItems"
          ?hidden=${this.displayToolButton}
        >
          ${icon.parallels}
        </md-icon-button>

        <md-icon-button
          class="white-icon toolButtons"
          id="btnShowParallelTableView"
          @click=${this._onBtnShowParallelTableViewClick}
          slot="actionItems"
        >
          ${this.displayParallelTableView ? icon.tableView_twotone : icon.tableView}
        </md-icon-button>
      </div>
    `;
  }

  get actions() {
    return {
      toggleSuttaplexDisplay(suttaplexdisplay) {
        store.dispatch({
          type: 'SUTTPLEX_LIST_DISPLAY',
          suttaplexdisplay,
        });
      },
      changeToolbarTitle(title) {
        store.dispatch({
          type: 'CHANGE_TOOLBAR_TITLE',
          title,
        });
      },
      saveToolbarTitle(title) {
        store.dispatch({
          type: 'SAVE_TOOLBAR_TITLE',
          toolbarTitle: title,
        });
      },
      changeDisplaySettingMenuState(display) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SETTING_MENU_STATE',
          displaySettingMenu: display,
        });
      },
      changeDisplayToolButtonState(display) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_TOOL_BUTTON_STATE',
          displayToolButton: display,
        });
      },
      changeDisplaySuttaParallelsState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SUTTA_PARALLELS_STATE',
          displaySuttaParallels: displayState,
        });
      },
      changeDisplaySuttaToCState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SUTTA_TOC_STATE',
          displaySuttaToC: displayState,
        });
      },
      changeDisplaySuttaInfoState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SUTTA_INFO_STATE',
          displaySuttaInfo: displayState,
        });
      },
      changeDisplayParallelTableViewState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_PARALLEL_TABLE_VIEW_STATE',
          displayParallelTableView: displayState,
        });
      },
    };
  }

  firstUpdated() {
    this._displayToolButtonStateChange();
    this._displayViewModeButtonStateChange();
    this._viewModeChanged();
    this._displayToCButtonStateChange();
    this.#setBtnShowParallelTableViewDisplayState();
    this.#setBtnShowParallelTableViewIcon();
    this.#displaySearchOptionsButtonStateChange();
    this.scSiteLayout = document.querySelector('sc-site-layout');
  }

  hideItems() {
    this._hideSuttaInfo();
    this._hideSuttaParallels();
    this._hideSettingMenu();
    this._hideSuttaToC();
    this.#hideSearchOptions();
    this.#hideSearchFilter();
  }

  _onBtnInfoClick() {
    this.displaySuttaInfo = store.getState().displaySuttaInfo;
    if (!this.displaySuttaInfo) {
      const { displaySettingMenu, displaySuttaParallels, displaySuttaToC } = store.getState();
      if (displaySettingMenu) {
        this.actions.changeDisplaySettingMenuState(false);
        this._hideSettingMenu();
      }
      if (displaySuttaParallels) {
        this.actions.changeDisplaySuttaParallelsState(false);
        this._hideSuttaParallels();
      }
      if (displaySuttaToC) {
        this.actions.changeDisplaySuttaToCState(false);
        this._hideSuttaToC();
      }
      this.actions.changeDisplaySuttaInfoState(true);
      this._showSuttaInfo();
    } else {
      this.actions.changeDisplaySuttaInfoState(false);
      this._hideSuttaInfo();
    }
  }

  _showSuttaInfo() {
    const isSegmentedText = !this.suttaMetaText;
    if (isSegmentedText) {
      this.scSiteLayout.querySelector('#bilara-sutta-info').show?.();
    } else {
      this.scSiteLayout.querySelector('#sutta-info').show?.();
    }
    this.shadowRoot.querySelector('#btnInfo')?.classList.add(this.activeClass);
  }

  _onBtnViewCompactClick(e) {
    this.actions.toggleSuttaplexDisplay(e.currentTarget.id === 'btnViewCompact');
    this._viewModeChanged();
  }

  _displayViewModeButtonStateChange() {
    const displayStyle = this.displayViewModeButton ? 'inherit' : 'none';
    this.shadowRoot.querySelector('#btnViewCompact').style.display = displayStyle;
    this.shadowRoot.querySelector('#btnViewComfy').style.display = displayStyle;
    this._viewModeChanged();
  }

  #setBtnShowParallelTableViewDisplayState() {
    const displayStyle = this.currentRoute.name?.toUpperCase() === 'SUTTAPLEX' ? 'inherit' : 'none';
    const btnShowParallelTableView = this.shadowRoot.querySelector('#btnShowParallelTableView');
    if (btnShowParallelTableView) {
      btnShowParallelTableView.style.display = displayStyle;
    }
  }

  _viewModeChanged() {
    if (!this.displayViewModeButton) {
      return;
    }
    const isCompactView = store.getState().suttaplexListDisplay;
    if (isCompactView) {
      this.displayCompactButton = false;
      this.displayComfyButton = true;
      this.shadowRoot.querySelector('#btnViewCompact').style.display = 'none';
      this.shadowRoot.querySelector('#btnViewComfy').style.display = 'inherit';
    } else {
      this.displayCompactButton = true;
      this.displayComfyButton = false;
      this.shadowRoot.querySelector('#btnViewCompact').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnViewComfy').style.display = 'none';
    }
    this.requestUpdate();
  }

  _onBtnToolsClick(e) {
    this.displaySettingMenu = store.getState().displaySettingMenu;
    if (!this.displaySettingMenu) {
      const { displaySuttaParallels, displaySuttaInfo, displaySuttaToC } = store.getState();
      if (displaySuttaParallels) {
        this.actions.changeDisplaySuttaParallelsState(false);
        this._hideSuttaParallels();
      }
      if (displaySuttaInfo) {
        this.actions.changeDisplaySuttaInfoState(false);
        this._hideSuttaInfo();
      }
      if (displaySuttaToC) {
        this.actions.changeDisplaySuttaToCState(false);
        this._hideSuttaToC();
      }
      this.actions.changeDisplaySettingMenuState(true);
      this._showSettingMenu();
    } else {
      this.actions.changeDisplaySettingMenuState(false);
      this._hideSettingMenu();
    }
  }

  #onBtnSearchOptionsClick(e) {
    this.#hideSearchFilter();
    const searchOptionsTopSheet = this.scSiteLayout.querySelector('#search-options');
    searchOptionsTopSheet.toggle();
  }

  #onBtnSearchFilterClick(e) {
    this.#hideSearchOptions();
    const searchFilterTopSheet = this.scSiteLayout.querySelector('#search-filter');
    searchFilterTopSheet.toggle();
  }

  _hideSettingMenu() {
    this.scSiteLayout.querySelector('#setting_menu')?.hide?.();
    this.actions.changeDisplaySettingMenuState(false);
    this.shadowRoot.querySelector('#btnTools')?.classList.remove(this.activeClass);
  }

  _showSettingMenu() {
    this.scSiteLayout.querySelector('#setting_menu')?.show?.();
    this.shadowRoot.querySelector('#btnTools')?.classList.add(this.activeClass);
  }

  _hideSuttaParallels() {
    this.scSiteLayout.querySelector('#sutta_parallels')?.hide?.();
    this.actions.changeDisplaySuttaParallelsState(false);
    this.shadowRoot.querySelector('#btnShowParallels')?.classList.remove(this.activeClass);
  }

  _hideSuttaToC() {
    this.scSiteLayout.querySelector('#sutta_toc')?.hide?.();
    this.actions.changeDisplaySuttaToCState(false);
    this.shadowRoot.querySelector('#btnShowToC')?.classList.remove(this.activeClass);
  }

  _hideSuttaInfo() {
    this.scSiteLayout.querySelector('#sutta-info')?.hide?.();
    this.scSiteLayout.querySelector('#bilara-sutta-info')?.hide?.();
    this.actions.changeDisplaySuttaInfoState(false);
    this.shadowRoot.querySelector('#btnInfo')?.classList.remove(this.activeClass);
  }

  #hideSearchOptions() {
    const searchOptions = this.scSiteLayout.querySelector('#search-options');
    if (searchOptions) {
      searchOptions.hide?.();
    }
  }

  #hideSearchFilter() {
    const searchFilter = this.scSiteLayout.querySelector('#search-filter');
    if (searchFilter) {
      searchFilter.hide?.();
    }
  }

  _showSuttaParallels() {
    this.scSiteLayout.querySelector('#sutta_parallels')?.show?.();
    this.shadowRoot.querySelector('#btnShowParallels')?.classList.add(this.activeClass);
  }

  _showSuttaToC() {
    this.scSiteLayout.querySelector('#sutta_toc')?.show?.();
    this.shadowRoot.querySelector('#btnShowToC')?.classList.add(this.activeClass);
  }

  _onBtnShowParallelsClick() {
    this.bindDataToSCSuttaParallels(this.range_uid || store.getState().currentRoute.params.suttaId);
    this.displaySuttaParallels = store.getState().displaySuttaParallels;
    if (!this.displaySuttaParallels) {
      const { displaySettingMenu, displaySuttaInfo, displaySuttaToC } = store.getState();
      if (displaySettingMenu) {
        this.actions.changeDisplaySettingMenuState(false);
        this._hideSettingMenu();
      }
      if (displaySuttaInfo) {
        this.actions.changeDisplaySuttaInfoState(false);
        this._hideSuttaInfo();
      }
      if (displaySuttaToC) {
        this.actions.changeDisplaySuttaToCState(false);
        this._hideSuttaToC();
      }
      this.actions.changeDisplaySuttaParallelsState(true);
      this._showSuttaParallels();
    } else {
      this.actions.changeDisplaySuttaParallelsState(false);
      this._hideSuttaParallels();
    }
  }

  bindDataToSCSuttaParallels(uid) {
    if (!uid) {
      return;
    }
    const url = `${API_ROOT}/suttaplex/${uid}?language=${this.siteLanguage}`;
    fetch(url)
      .then(r => r.json())
      .then(suttaplex => {
        this.scSiteLayout.querySelector('#sutta_parallels').suttaplexItem = suttaplex[0];
      })
      .catch(e => console.error(e));
  }

  _onBtnShowParallelTableViewClick() {
    this.actions.changeDisplayParallelTableViewState(!this.displayParallelTableView);
  }

  #setBtnShowParallelTableViewIcon() {
    this.requestUpdate();
  }

  showParallelsTopSheet() {
    this._onBtnShowParallelsClick();
  }

  _onBtnShowToCClick() {
    this.displaySuttaToC = store.getState().displaySuttaToC;
    if (!this.displaySuttaToC) {
      const { displaySettingMenu, displaySuttaInfo, displaySuttaParallels } = store.getState();
      if (displaySettingMenu) {
        this.actions.changeDisplaySettingMenuState(false);
        this._hideSettingMenu();
      }
      if (displaySuttaInfo) {
        this.actions.changeDisplaySuttaInfoState(false);
        this._hideSuttaInfo();
      }
      if (displaySuttaParallels) {
        this.actions.changeDisplaySuttaParallelsState(false);
        this._hideSuttaParallels();
      }
      this.actions.changeDisplaySuttaToCState(true);
      this._showSuttaToC();
    } else {
      this.actions.changeDisplaySuttaToCState(false);
      this._hideSuttaToC();
    }
  }

  hideTopSheets() {
    this._hideSettingMenu();
    this._hideSuttaInfo();
    this._hideSuttaParallels();
    this._hideSuttaToC();
    this.#hideSearchOptions();
    this.#hideSearchFilter();
  }

  stateChanged(state) {
    super.stateChanged(state);
    if (this.displaySettingMenu !== state.displaySettingMenu) {
      this.displaySettingMenu = state.displaySettingMenu;
    }
    if (this.displayToolButton !== state.displayToolButton) {
      this.displayToolButton = state.displayToolButton;
    }
    if (this.displayViewModeButton !== state.displayViewModeButton) {
      this.displayViewModeButton = state.displayViewModeButton;
    }
    if (this.colorTheme !== state.colorTheme) {
      this.colorTheme = state.colorTheme;
    }
    if (this.suttaMetaText !== state.suttaMetaText) {
      this.suttaMetaText = state.suttaMetaText;
    }
    if (this.suttaPublicationInfo !== state.suttaPublicationInfo) {
      this.suttaPublicationInfo = state.suttaPublicationInfo;
    }
    if (this.suttaplexListEnabled !== state.suttaplexListDisplay) {
      this.suttaplexListEnabled = state.suttaplexListDisplay;
    }
    if (this.tableOfContents !== !!state.tableOfContents.items.length) {
      this.tableOfContents = !!state.tableOfContents.items.length;
    }
    if (this.displayParallelTableView !== state.displayParallelTableView) {
      this.displayParallelTableView = state.displayParallelTableView;
      this.#setBtnShowParallelTableViewIcon();
    }
    if (this.currentRoute !== state.currentRoute) {
      this.currentRoute = state.currentRoute;
      this.#setBtnShowParallelTableViewDisplayState();
    }
    if (this.siteLanguage !== state.siteLanguage) {
      this.siteLanguage = state.siteLanguage;
    }
    if (this.displaySearchOptionsButton !== state.displaySearchOptionsButton) {
      this.displaySearchOptionsButton = state.displaySearchOptionsButton;
      this.#displaySearchOptionsButtonStateChange();
    }
  }

  updated(changedProps) {
    if (changedProps.has('displayToolButton')) {
      this._displayToolButtonStateChange();
    }
    if (changedProps.has('displayViewModeButton')) {
      this._displayViewModeButtonStateChange();
    }
    if (changedProps.has('colorTheme')) {
      this.activeClass = this.colorTheme === 'light' ? 'active-light' : 'active-dark';
      this._resetToolButtonsActiveClass();
    }
    if (changedProps.has('suttaplexListEnabled')) {
      this._viewModeChanged();
    }
    if (changedProps.has('suttaMetaText') || changedProps.has('suttaPublicationInfo')) {
      this._suttaMetaTextChanged();
    }
    if (changedProps.has('tableOfContents')) {
      this._displayToCButtonStateChange();
    }
  }

  _suttaMetaTextChanged() {
    const displayStyle = this.suttaMetaText || this.suttaPublicationInfo ? 'inherit' : 'none';
    const btnInfo = this.shadowRoot.querySelector('#btnInfo');
    if (btnInfo) {
      btnInfo.style.display = displayStyle;
    }
  }

  _displayToCButtonStateChange() {
    if (this.tableOfContents) {
      this.shadowRoot.querySelector('#btnShowToC').style.display = 'inherit';
    } else {
      this.shadowRoot.querySelector('#btnShowToC').style.display = 'none';
    }
  }

  #displaySearchOptionsButtonStateChange() {
    if (this.displaySearchOptionsButton) {
      this.shadowRoot.querySelector('#btnSearchOptions').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnSearchFilter').style.display = 'inherit';
    } else {
      this.shadowRoot.querySelector('#btnSearchOptions').style.display = 'none';
      this.shadowRoot.querySelector('#btnSearchFilter').style.display = 'none';
    }
  }

  _displayToolButtonStateChange() {
    if (this.displayToolButton) {
      this.shadowRoot.querySelector('#btnTools').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnInfo').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnShowParallels').style.display = 'inherit';
      this._suttaMetaTextChanged();
      this._displayToCButtonStateChange();
      this.shadowRoot.querySelector('#tools_menu').classList.add('contextToolbarExpand');
    } else {
      this.shadowRoot.querySelector('#btnTools').style.display = 'none';
      this.shadowRoot.querySelector('#btnInfo').style.display = 'none';
      this.shadowRoot.querySelector('#btnShowParallels').style.display = 'none';
      this.shadowRoot.querySelector('#btnShowToC').style.display = 'none';
      this.shadowRoot.querySelector('#tools_menu').classList.remove('contextToolbarExpand');
    }
  }

  _setToolButtonsVisible(visible) {
    this.shadowRoot.querySelectorAll('.toolButtons').forEach(e => {
      if (e.style.display !== 'none') {
        visible ? e.classList.remove('invisible') : e.classList.add('invisible');
      }
    });
  }

  _resetToolButtonsActiveClass() {
    this.shadowRoot.querySelectorAll('.toolButtons').forEach(e => {
      if (e.classList.contains('active-light') || e.classList.contains('active-dark')) {
        e.classList.remove('active-light');
        e.classList.remove('active-dark');
        e.classList.add(this.activeClass);
      }
    });
  }
}

customElements.define('sc-action-items', SCActionItems);
