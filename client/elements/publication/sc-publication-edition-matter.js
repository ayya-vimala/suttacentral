import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { API_ROOT } from '../../constants';

import { LitLocalized } from '../addons/sc-localization-mixin';
import { setNavigation } from '../navigation/sc-navigation-common';
import { SCPublicationStyles } from '../styles/sc-publication-styles';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles';
import { store } from '../../redux-store';
import { editionId } from './sc-publication-common';

export class SCPublicationEditionMatter extends LitLocalized(LitElement) {
  static properties = {
    matter: { type: String },
    matterContent: { type: Object },
  };

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.matter = store.getState().currentRoute.params.matter;
  }

  firstUpdated() {
    this.#fetchMatter();
  }

  stateChanged(state) {
    super.stateChanged(state);
    if (this.changedRoute !== state.currentRoute) {
      this.changedRoute = state.currentRoute;
      this.matter = store.getState().currentRoute.params.matter;
      if (!this.matter) {
        return;
      }
      this.#fetchMatter();
    }
  }

  #updateNav() {
    const navArray = store.getState().navigationArray;
    const currentPath = store.getState().currentRoute.path;
    navArray.length = 3;
    navArray.push({
      title: 'Publications-Edition Preface',
      url: `${currentPath}`,
      type: 'PublicationPage',
    });
    setNavigation(navArray);
  }

  async #fetchMatter() {
    try {
      this.editionFiles = await (
        await fetch(`${API_ROOT}/publication/edition/${editionId}/files`)
      ).json();
      for (const key in this.editionFiles) {
        if (Object.hasOwn(this.editionFiles, key) && key.includes(this.matter.toLowerCase())) {
          this.matterContent = this.editionFiles[key];
        }
      }
      this.requestUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.matterContent) {
      return html``;
    }
    return html`
      <style>
        ${typographyCommonStyles}
        ${typographyStaticStyles}
        ${SCPublicationStyles}
      </style>
      <main>${unsafeHTML(this.matterContent)}</main>
    `;
  }
}

customElements.define('sc-publication-edition-matter', SCPublicationEditionMatter);
