import { html } from 'lit';

export const icon = {
  abbreviations: html`<svg class="abbreviations icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368 368" width="24" height="24"><path d="M353 197.5H219a15 15 0 00-15 15v123a15 15 0 0015 15h134a15 15 0 0015-15v-123a15 15 0 00-15-15zm-85 89.8c1 3.5 2.5 6.5 4.4 8.8 1.9 2.2 4 3.8 6.7 5a25.7 25.7 0 0016.4.8c2-.5 3.7-1.4 5-2.5a12 12 0 003.4-4c.8-1.6 1.3-3.4 1.5-5.6l.1-.9s.4-3.4 4-3.4h14c4.7 0 4.1 4 4.1 4l-.1 1.2a34 34 0 01-24.7 30.3 48.4 48.4 0 01-32.7-1.3 39.3 39.3 0 01-14.2-10 44.5 44.5 0 01-8.8-15.6c-2-5.9-3-12.4-3-19.6a61 61 0 013-19.6 41.9 41.9 0 0123.1-25.4 46.1 46.1 0 0144.3 4.9 32 32 0 0113 23.2l.1 1.6s.6 4.3-4.6 4.3h-13.8c-3.5 0-3.7-3.4-3.7-3.4v-1.8a12.5 12.5 0 00-4.8-8.5 22.4 22.4 0 00-12.3-3.5c-3.5 0-6.6.6-9.3 1.8a17.7 17.7 0 00-6.6 5 22 22 0 00-4.5 8.6c-1.1 3.6-1.7 8-1.7 12.8 0 4.9.6 9.2 1.7 12.8zM179.8 93.5h9.2c1.1 0 1.7-1 1.3-2L185 77.4c-.4-1-1-1-1.4 0l-5 14c-.5 1.1.1 2.1 1.2 2.1z"/><path d="M118 170.5h134a15 15 0 0015-15v-123a15 15 0 00-15-15H118a15 15 0 00-15 15v123a15 15 0 0015 15zm21.1-35l34.7-90.2a3 3 0 012.7-1.8H192c1 0 2.3.7 2.7 1.7l36.9 90.4c.4 1-.2 1.9-1.3 1.9H210c-1.1 0-2.3-1-2.7-2l-8.2-21.2a3 3 0 00-2.8-1.8H173c-1.1 0-2.3.7-2.7 1.7l-7.8 21.4c-.4 1-1.6 1.9-2.7 1.9h-19.3c-1 0-1.7-1-1.3-2zm9.9 62H15a15 15 0 00-15 15v123a15 15 0 0015 15h134a15 15 0 0015-15v-123a15 15 0 00-15-15zm-37.6 118.8a46 46 0 01-28.5 8.2H50.3s-8.3-.5-8.3-8.3v-85.4c0-5.9 6-6.3 6-6.3h32.7a51 51 0 0127.4 6.3c6.3 4 9.5 9.9 9.5 17.2 0 5.4-1.9 10.1-5.8 14.1-3.8 4-8.8 6.9-14.8 8.4v.3c8 .9 13.6 3.5 18 7.8 4.6 4.4 6.9 9.7 6.9 16a26 26 0 01-10.5 21.7z"/><path d="M92 284.9a21 21 0 00-12.9-3.4H66v26h13a21 21 0 0013-3.5 12 12 0 004.7-9.8c0-4-1.6-7-4.7-9.3zm-3.8-23.6c2.8-2.2 4.2-5.1 4.2-9 0-7.3-5.8-10.8-17.5-10.8H66v23h10.5c5 0 8.8-1 11.7-3.2z"/></svg>`,
  advanced: html`<svg class="advanced icon" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" width="300" height="300"><path fill="none" d="M59.4 52.3a22 22 0 0 1-4.4 1l2.6 12.3 7.4-7.4a14 14 0 0 1-5.6-6z"></path><path fill="none" d="M37.5 50l8.6 8.5 1.2-5.5c-3.4-.7-6.4-2-8.6-4l-1.2 1z"></path><path fill="none" d="M84.9 38a.8.8 0 0 1-.4-1.2 8 8 0 0 0 1.5-4.5c0-5.2-5.7-9.8-13.1-10.6a.8.8 0 0 1-.7-.5C69.5 14 61.5 9 52.3 9a22 22 0 0 0-17.5 8c-.2.3-.6.5-.9.3-1.7-.6-3.5-1-5.4-1-6.5 0-11.9 4-11.9 9 0 .5 0 1 .2 1.5 0 .4-.1.8-.5 1-6 2.2-9.7 6.7-9.7 11.7 0 7.3 7.9 13.2 17.5 13.2a22.3 22.3 0 0 0 7.7-1.3c.2 0 .4 0 .6.2l13.5 13.6c.2.1.3.4.2.7L41 90.5v.4l.4.2H61c.1 0 .3 0 .4-.2v-.4l-3.7-17.6c0-.3 0-.5.2-.7l12.9-13c.1-.1.4-.2.7-.1 1.7.4 3.5.6 5.3.6 9.2 0 16.7-5.2 16.7-11.6 0-4.2-3.3-8-8.5-10zm-36 14.6l-1.6 7.7a.8.8 0 0 1-1.3.4L35.7 50.4a.8.8 0 0 1 .1-1.2c.9-.6 1.7-1.2 2.3-1.9.3-.3.8-.3 1.1 0a17 17 0 0 0 9.1 4.3.8.8 0 0 1 .7 1zm18 6l-9.2 9.2a.8.8 0 0 1-1.3-.4l-3.1-14.6a.8.8 0 0 1 .7-1c2-.2 3.8-.6 5.5-1.3a.8.8 0 0 1 1 .5c1 2.5 3.2 4.8 6.2 6.3.2.2.4.4.4.6s0 .5-.2.7z"></path><path d="M86.3 37c.8-1.6 1.2-3.1 1.2-4.7 0-6-5.8-11-14-12-3-7.8-11.5-13-21.2-13-7.3 0-14.2 3.1-18.4 8.2-1.7-.6-3.5-.9-5.4-.9-7.4 0-13.4 4.8-13.4 10.7v1.1C9 29 5 34 5 39.4c0 8.1 8.6 14.7 19.1 14.7 2.6 0 5.1-.4 7.5-1.1l13 12.9L39.2 90a2 2 0 0 0 .4 1.8c.4.5 1 .7 1.6.7H61a2 2 0 0 0 1.6-.7 2 2 0 0 0 .4-1.8L59.2 73l12.3-12.3c1.7.4 3.4.6 5.2.6 10.1 0 18.3-6 18.3-13.2 0-4.6-3.3-8.8-8.7-11.2zm-9.6 22.7c-1.8 0-3.6-.2-5.3-.6-.3 0-.6 0-.8.2L57.8 72.2c-.2.1-.3.4-.2.7l3.7 17.6v.4l-.4.2H41.3c-.1 0-.3 0-.4-.2v-.4L46 65.8c.1-.3 0-.6-.2-.7L32.4 51.5a.8.8 0 0 0-.8-.2c-2.4.8-4.9 1.3-7.5 1.3-9.6 0-17.5-6-17.5-13.2 0-5 3.7-9.5 9.7-11.8.4 0 .6-.5.5-.9a7 7 0 0 1-.2-1.4c0-5 5.4-9 12-9 1.8 0 3.6.3 5.3 1 .3 0 .7 0 1-.3a22 22 0 0 1 17.4-8c9.2 0 17.2 4.9 20 12.2 0 .3.3.5.6.5 7.4.8 13 5.4 13 10.6a8 8 0 0 1-1.4 4.5.8.8 0 0 0 .4 1.2c5.2 2 8.5 6 8.5 10.1 0 6.4-7.5 11.6-16.7 11.6z"></path><path d="M48.3 51.6a17 17 0 0 1-9-4.3.8.8 0 0 0-1.2 0c-.6.7-1.4 1.3-2.2 1.9a.8.8 0 0 0-.2 1.2L46 60.7a.8.8 0 0 0 1.3-.4l1.7-7.7c0-.2 0-.5-.2-.6a.8.8 0 0 0-.5-.4zm-2.2 7l-8.6-8.7 1.2-1c2.2 2 5.2 3.4 8.6 4.1L46 58.5zM66.7 57.3c-3-1.5-5.2-3.8-6.1-6.3-.1-.2-.3-.4-.5-.4h-.6c-1.7.6-3.6 1-5.5 1.2a.8.8 0 0 0-.7 1l3 14.6a.8.8 0 0 0 1.4.4l9.2-9.2a.8.8 0 0 0-.2-1.3zm-9 8.3L55 53.3c1.5-.2 3-.5 4.4-1 1 2.3 3 4.4 5.6 6l-7.4 7.3z"></path></svg>`,
  arrow_left: html`<svg class="arrow_left icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`,
  arrow_right: html`<svg class="arrow_right icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
  bedtime: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bedtime icon" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a10 10 0 100 20c4 0 7-2 9-5-8 0-12-8-9-15z"/></svg>`,
  beginner: html`<svg xmlns="http://www.w3.org/2000/svg" class="beginner icon" viewBox="0 0 100 100" style="width:100%;height:100%" pointer-events="none" display="block"><g fill-rule="evenodd"><path style="text-indent:0;text-transform:none;block-progression:tb" d="M36.6 69.9a1 1 0 000 2c1.6 0 2.9.6 5.4 1.9a1 1 0 101-1.8c-2.6-1.3-4.3-2-6.3-2.1z" overflow="visible"/><path d="M55.5 14a1 1 0 00-.8.8A17 17 0 0053 26.4a14.4 14.4 0 007.2 8.5h.2c.4 1 .5 2 .3 3-.3 1.5-1.2 3.2-2.1 5.1-1.6 3.4-3.4 7.6-1.8 12.7l-.4-.3-2.5-2c-.4-.5-1.2-.3-1.5.2-.9 1.6-1.8 2.6-2.7 2.7-.4 0-1 0-1.9-.6-.8-.5-1.9-1.4-3.1-2.9a1 1 0 00-.8-.3 1 1 0 00-1 1c-.2 1.6-.4 1.9-1.6 1.2-3.1-2.1-5.7-4-8.7-5.1-1.6-.7-3.4-1-5.3-1-1.5 0-3.1.2-4.9.7a40.2 40.2 0 00-9.4 4.4c-1.8 1-3.6 2.2-5.7 3.6a1 1 0 00-.3 1.3L15.4 79c.2.5.9.8 1.4.6a31.6 31.6 0 016.1-2.4c1.3-.4 2.5-.5 3.4-.4 2.1 0 3.5 1 5.2 2.2C35 81.7 39 85.8 49.2 86c9-.1 14.7-3.2 20.4-7.3 5.7-4.1 11.4-9.3 20.7-14a5 5 0 002.4-6c-.3-1-1-2-1.8-2.5a3.8 3.8 0 00-3.2-.5c-5.8 2-11.6 7.2-17.8 11.6a8.6 8.6 0 00-2.9-3.7c1.5-1.6 2.8-2.7 3.7-4 .5-.8.7-1.7.7-2.7 0-1-.4-2.1-1-3.4-.5-.7-1.9-.4-2 .4 0 1.1-1 2.5-2 2.8-.6.2-1.2 0-2-.4a7.9 7.9 0 01-2.4-3.1c-.3-.7-1.4-.7-1.8 0-.5 1-1 1.6-1.3 2-1.6-4.5 0-8 1.6-11.3.9-1.9 1.8-3.7 2.2-5.6a7 7 0 00-.7-4.7c1.8-3.4 2.4-6.8 1.6-10a16.9 16.9 0 00-7.9-9.6.8.8 0 00-.1 0h-.1zm.6 2.6c3 2.4 4.9 4.9 5.5 7.5a11.6 11.6 0 01-1 8 1 1 0 00-.7.1c-2.6-1.8-4.2-3.9-4.9-6.3-.7-2.6-.4-5.7 1-9.3zm-28.7 34c1.7 0 3.1.3 4.6.8 7.4 4 13.6 8.9 20.2 12 4.2 1.6 7.8.9 10.4 1 1.4 0 2.4.2 3.3.8a7 7 0 012.3 3.2c-6.4 4.3-13.2 7.4-20.7 5.7a1 1 0 00-1.3.7A1 1 0 0047 76c8.5 2 16.1-1.7 22.9-6.3l.2-.2c6.7-4.6 12.8-10 18.2-11.9.6-.1 1 0 1.5.3.4.3.8.8 1 1.4.4 1.2.3 2.7-1.5 3.7C80 67.8 74 73 68.5 77c-5.6 4-10.8 6.9-19.3 7-9.7-.2-13-3.7-16.5-6.4a11.2 11.2 0 00-6.3-2.7c-1 0-2 0-3.3.3l-8-20.3c3.1-1.8 5.7-3 8-3.7 1.6-.4 3-.6 4.3-.6zm17.2 5c.8.8 1.6 1.4 2.3 1.9 1.1.7 2.2 1 3.2.8 1.6-.2 2.7-1.4 3.5-2.7l1.8 1.5c.8.5 1.5 1 2.4 1l.8-.2c.2 0 .3 0 .4-.2h.2a4 4 0 001-.8 9 9 0 001-1.3 8 8 0 002.2 2.4c1 .7 2.4 1 3.4.7 1-.3 2-1 2.6-1.8 0 .7-.1 1.1-.4 1.6-.6 1-2 2.2-4 4.2-.8-.2-1.5-.3-2.3-.3-3-.1-6.1.5-9.7-.9a63.2 63.2 0 01-9-5l.5-.7.1-.2zm-31.3.3l7.9 19.8c-1.3.4-2.8 1-4.3 1.7L9.2 58.5l4-2.6z" overflow="visible"/></g></svg>`,
  bilara: html`<svg xmlns="http://www.w3.org/2000/svg" class="bilara icon" viewBox="0 0 100 125"><path d="M82.5 64.2l-.8 2.2-1 2.2-1.1 2.1-1.3 2a33.3 33.3 0 01-14.6 11.8l-1 .5-1.2.3c-.7.3-1.5.6-2.2.7l-2.3.5-2.4.3c-1.5.3-3 .2-4.6.2l-2.4-.2a16 16 0 01-2.3-.3c-1.5-.2-3-.7-4.5-1.1-1.5-.6-3-1.1-4.3-1.9a31.3 31.3 0 01-13.4-12.6 35.4 35.4 0 01-3.5-8.6 34.6 34.6 0 011-18.3 35.6 35.6 0 0110.7-14.8c2.5-1.8 5.2-3.3 8-4.4 3-1.1 6-1.8 9-2h.1c.5-.1 1-.4 1.2-.9a54.7 54.7 0 014.9-8.2l.6.5c.5.4.9.8 1.2 1.3a13.9 13.9 0 011.8 3.4c.2.5.7.8 1.2.8a24 24 0 019.5 1.6c1 .4 1.8 1 2.6 1.6.5.3 1 .3 1.4 0a13.2 13.2 0 015.8-2.5 14.9 14.9 0 01.5 4.5c0 1.8-.3 3.6-.7 5.3-.5 1.8-1 3.6-1.7 5.3-.7 1.7-1.5 3.3-2.6 4.7a13.3 13.3 0 01-9.3 5c-3.6.3-7.4-.9-10.3-3.3a14.1 14.1 0 0020.4-1 19 19 0 003-4.9 36.5 36.5 0 003-11c0-2 0-4-.6-6a.9.9 0 00-.9-.6c-1.5 0-3 .3-4.2.8a16.2 16.2 0 00-3 1.5 17.8 17.8 0 00-6-2.6 27.5 27.5 0 00-6-.9 22.8 22.8 0 00-1.8-3.2 11.1 11.1 0 00-2.5-2.5l-.5-.3-.8-.4c-.3 0-.7 0-1 .2a10 10 0 00-2.3 2.3l-1.6 2.4-2.3 4.3c-3 .4-6.1 1-9 2a38.3 38.3 0 00-8.9 5 36.4 36.4 0 00-13.7 26c0 3.4.3 6.7 1 10a36.4 36.4 0 0010.3 17c2.4 2.4 5.3 4.3 8.3 5.7 1.5.8 3 1.3 4.6 2 1.6.4 3.3.8 5 1l2.4.4 2.5.1c1.7 0 3.3 0 5-.3A33.6 33.6 0 0079 73.3l1.2-2.1 1-2.3c.5-.7.7-1.5 1-2.2.2-.8.6-1.6.7-2.4l.6-2.4c.2-.7.2-1.6.3-2.4l.2-1.2V54.7c-.1 3.2-.6 6.4-1.6 9.5z"/><path d="M69.2 37.6c1 .2 2 0 2.8-.7l-1.4-.1-1.2-.2-2.4-.9c.1.5.5.9.9 1.2.3.3.8.5 1.3.7zm-10.4-3.8h-1.3c-.5 0-.9-.2-1.2-.3-.8-.1-1.6-.4-2.5-.8.2.5.5.9.9 1.2.4.3.8.5 1.3.6 1 .3 2.1 0 2.8-.7z"/></svg>`,
  book: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="book icon" viewBox="0 0 24 24"><path d="M18 2H6L4 4v16l2 2h12l2-2V4l-2-2zM6 4h5v8l-2-1-3 1V4z"/></svg>`,
  cancel: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="cancel icon" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 13.6L15.6 17 12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6z"/></svg>`,
  cached: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="cached icon"><path d="M19 8l-4 4h3a6 6 0 01-8.8 5.3l-1.5 1.5A8 8 0 0020 12h3l-4-4zM6 12a6 6 0 018.8-5.3l1.5-1.5A8 8 0 004 12H1l4 4 4-4H6z"/></svg>`,
  check_circle_outline: html`<svg xmlns="http://www.w3.org/2000/svg" class="check_circle_outline icon" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
  chevron_left: html`<svg class="chevron_left icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,
  chevron_right: html`<svg class="chevron_right icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,
  close: html`<svg class="close icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
  compare_arrows: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="compare_arrows icon" viewBox="0 0 24 24"><path d="M9 14H2v2h7v3l4-4-4-4v3zm6-1v-3h7V8h-7V5l-4 4 4 4z"/></svg>`,
  content_copy: html`<svg class="content_copy icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>`,
  copyright: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="copyright icon" viewBox="0 0 24 24"><path d="M10 10.9l.4-1c.2-.2.3-.4.6-.5a1.8 1.8 0 011.5-.1c.2 0 .4.2.5.3l.4.6.1.6h1.8c0-.5-.1-.9-.3-1.3l-.7-1-1-.7c-.5-.2-1-.2-1.4-.2-.7 0-1.3.1-1.7.4s-1 .5-1.2.9-.6.8-.8 1.3-.2 1-.2 1.7v.2c0 .6 0 1.2.2 1.7s.4 1 .7 1.3.8.7 1.2 1 1 .3 1.7.3l1.4-.2 1-.7c.4 0 .6-.6.8-1l.3-1h-1.8a1.4 1.4 0 01-.5 1l-.5.3a2 2 0 01-.6 0c-.4 0-.7 0-1-.2-.2-.1-.4-.3-.5-.6l-.3-.9-.1-1V12v-1zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>`,
  credit_card: html`<svg class="credit_card icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>`,
  error: html`<svg class="error icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`,
  external: html`<svg class="external icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1280"><path d="M631 181h272l-60-60v272c0 15 7 31 18 42a61 61 0 0042 18 61 61 0 0043-18 62 62 0 0017-42V121c0-33-27-60-60-60H631a62 62 0 00-42 17 61 61 0 00-18 43 61 61 0 0018 42 62 62 0 0042 18z"/><path d="M494 614l45-45 108-107 130-131 113-112 55-55 1-1a62 62 0 0017-42 60 60 0 00-60-60 62 62 0 00-42 17l-45 45-108 108-130 130-113 113-55 55v1a62 62 0 00-18 42c0 15 6 32 17 42a61 61 0 0043 18 62 62 0 0042-18z"/><path d="M843 613v230l2-16a76 76 0 01-5 17l6-14a77 77 0 01-9 16l9-12a79 79 0 01-13 13l12-10a74 74 0 01-15 9l14-6c-6 3-11 4-17 5l16-2-25 1H191a70 70 0 01-11-1l16 2a76 76 0 01-16-5l14 6a77 77 0 01-16-9l12 10a79 79 0 01-13-13l10 12a74 74 0 01-10-16l6 14-4-17 2 16-1-25V267v-76l1-10-2 16 4-17-6 14a77 77 0 0110-16l-10 12c4-4 8-9 13-12l-12 9a74 74 0 0116-9l-14 6 16-5-16 2h231c15 0 32-7 42-18a61 61 0 0018-42 61 61 0 00-18-43 62 62 0 00-42-17H205c-18 0-35 0-52 5-12 4-24 9-34 16L99 98c-6 5-11 13-16 19a126 126 0 00-22 72v613c0 20-1 40 3 60l3 11a124 124 0 0033 53 126 126 0 0065 34c11 2 21 3 33 3h640c13-1 26-3 38-7 7-3 15-6 22-11 8-4 15-10 22-15a128 128 0 0038-62c5-17 5-34 5-51V612c0-15-7-31-17-42a61 61 0 00-43-18 61 61 0 00-42 18 64 64 0 00-18 43z"/></svg>`,
  file_download: html`<svg class="file_download icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>`,
  format_list_numbered: html`<svg class="format_list_numbered icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></svg>`,
  format_quote: html`<svg class="format_quote icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>`,
  forum: html`<svg class="forum icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></svg>`,
  help: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="help icon" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17h-2v-2h2v2zm2-7.8l-.8 1c-.8.7-1.2 1.3-1.2 2.8h-2v-.5a4 4 0 011.2-2.8l1.2-1.3c.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H8a4 4 0 118 0c0 .9-.4 1.7-1 2.3z"/></svg>`,
  highlight_off: html`<svg xmlns="http://www.w3.org/2000/svg" height="24" class="highlight_off icon" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
  info: html`<svg class="info icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  info_outline: html`<svg class="info_outline icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg>`,
  intermediate: html`<svg xmlns="http://www.w3.org/2000/svg" class="intermediate icon" viewBox="0 0 100 125"><path d="M25.8 54.9c-.6 0-1 .4-1 1v10.3c0 .6.4 1 1 1H29l5.7 25.2c.1.5.5.8 1 .8h28.7a1 1 0 001-.8L71 67.2h3.2c.6 0 1-.4 1-1V55.9c0-.6-.4-1-1-1H51v-26l2.5-.1a18 18 0 0017.4-17.4l.1-3.5a1 1 0 00-.3-.7 1 1 0 00-.7-.3l-3.5.1a18 18 0 00-17.4 17.4l-.1 3.5v4.5a18 18 0 00-15.6-10l-3.5-.1a1 1 0 00-.7.3 1 1 0 00-.3.7l.1 3.5a18 18 0 0017.4 17.4l2.5.1v10.5H25.8zm20.7-12.6A16.1 16.1 0 0131 26.8l-.1-2.5 2.5.1c8.4.3 15.2 7.1 15.5 15.5l.1 2.5-2.5-.1zm4.6-17.9c.3-8.4 7.1-15.2 15.5-15.5l2.5-.1-.1 2.5a16.1 16.1 0 01-15.5 15.5l-2.5.1.1-2.5zm12.4 66.8h-27l-5.4-24H69l-5.5 24zm9.7-26H26.8v-8.3h46.3v8.3z"/></svg>`,
  language: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="language icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7 6h-3c-.3-1.3-.8-2.5-1.4-3.6A8 8 0 0118.9 8zm-7-4a14 14 0 012 4h-4a14 14 0 012-4zM4.3 14a8.2 8.2 0 010-4h3.3a16.5 16.5 0 000 4H4.3zm.8 2h3c.3 1.3.7 2.5 1.3 3.6A8 8 0 015.1 16zm3-8H5a8 8 0 014.3-3.6C8.8 5.5 8.4 6.7 8 8zM12 20a14 14 0 01-2-4h4a14 14 0 01-2 4zm2.3-6H9.7a14.7 14.7 0 010-4h4.6a14.6 14.6 0 010 4zm.3 5.6c.6-1.2 1-2.4 1.4-3.6h3a8 8 0 01-4.4 3.6zm1.8-5.6a16.5 16.5 0 000-4h3.3a8.2 8.2 0 010 4h-3.3z"/></svg>`,
  link: html`<svg class="link icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>`,
  more_vert: html`<svg class="more_vert icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
  offline_bolt: html`<svg class="offline_bolt icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"/></svg>`,
  parallels: html`<svg class="parallels icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>`,
  pause: html`<svg class="pause icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>`,
  people: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="people icon" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 11c2 0 3-1 3-3s-1-3-3-3a3 3 0 100 6zm-8 0c2 0 3-1 3-3s-1-3-3-3a3 3 0 100 6zm0 2c-2 0-7 1-7 4v2h14v-2c0-3-5-4-7-4zm8 0h-1l2 4v2h6v-2c0-3-5-4-7-4z"/></svg>`,
  play_arrow: html`<svg class="play_arrow icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>`,
  pray: html`<svg class="pray icon" xmlns="http://www.w3.org/2000/svg" version="1.1" height="24" viewBox="0 0 100 100" width="24"><path d="M47 7h-2c-3 1-6 5-6 11v10l-1 2-3 3-3 9c-4 13-4 18-6 20-1 2-3 2-5 3L8 68l-2 2v21l2 2h31l2-2v-6l6-2 3-2a12 12 0 0 0 3 2l6 2v6l2 2h31l2-2V70l-2-2-13-3c-2-1-4-1-5-3-2-2-2-7-6-20l-3-9-3-3-1-2V18c0-6-3-10-6-11h-2l-3 1-3-1zm0 4l1 2v62c0 2-1 4-3 5-5 2-10-1-12-5-2-3-4-7-2-14l5-18 2-8 2-2 3-4V18c0-5 2-7 3-7h1zm6 0h1c1 0 3 2 3 7v11c0 2 2 3 3 4l2 2 2 8 5 18c2 7 0 11-2 14-2 4-8 8-12 5-2-1-3-3-3-5V13l1-2z"></path></svg>`,
  sc_logo: html`<svg class="sc_logo icon" xmlns="http://www.w3.org/2000/svg" fill="#b30309" version="1.1" viewBox="0 0 8000 8000"><defs><path id="shape" d="m39730 74861c-2167-1091-4101-2638-5710-4566-1532-1837-2733-3993-3520-6320-109-324-238-737-247-788-3-23 502-1864 1767-6437 975-3523 1773-6416 1775-6430 2-17 8-25 21-24 21 1 3495 1381 3505 1392 4 4-47 117-112 252-1092 2257-1975 5120-2303 7465-153 1094-165 1952-35 2630 299 1565 1104 3144 2265 4440 144 162 517 537 689 694 626 571 1265 1029 2018 1446l177 99v3143c0 1729-3 3142-7 3142-5 0-132-62-283-138zM39730 74861" /></defs><g transform="translate(0, 8000) scale(0.1, -0.1)"><rect x="18000" y="18000" width="45000" height="45000" fill="#ffc107" /><rect x="35000" y="-22000" width="45000" height="45000" transform="rotate(45)" fill="#ffc107" /><circle cx="40000" cy="40000" r="6000" fill="#fff" /><use href="#shape" /><use href="#shape" transform="rotate(45 4e4 4e4)" /><use href="#shape" transform="rotate(90 4e4 4e4)" /><use href="#shape" transform="rotate(135 4e4 4e4)" /><use href="#shape" transform="rotate(180 4e4 4e4)" /><use href="#shape" transform="rotate(225 4e4 4e4)" /><use href="#shape" transform="rotate(-90 4e4 4e4)" /><use href="#shape" transform="rotate(-45 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(45 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(90 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(135 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(180 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(225 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(-90 4e4 4e4)" /><use href="#shape" transform="translate(8e4) scale(-1 1) rotate(-45 4e4 4e4)" /></g></svg>`,
  school: html`<svg class="school icon" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13.2v4l7 3.8 7-3.8v-4L12 17l-7-3.8zM12 3L1 9l11 6 9-5v7h2V9L12 3z"></path></svg>`,
  search: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="search icon" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/></svg>`,
  settings: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="settings icon" viewBox="0 0 24 24"><path d="M19.4 13l.1-1v-1l2-1.6c.2-.2.3-.5.2-.7l-2-3.4c-.2-.3-.4-.3-.6-.3l-2.5 1-1.7-1-.4-2.6c0-.2-.3-.4-.5-.4h-4c-.3 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5c-.2-.1-.4 0-.6.2l-2 3.4c0 .3 0 .5.2.7l2 1.6a8 8 0 000 2l-2 1.6c-.2.2-.3.5-.2.7l2 3.4c.2.3.4.3.6.3l2.5-1 1.7 1 .4 2.6c0 .2.2.4.5.4h4c.3 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.5 1c.2.1.4 0 .6-.2l2-3.4c0-.2 0-.5-.2-.7l-2-1.6zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/></svg>`,
  share: html`<svg class="share icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>`,
  speaker: html`<svg class="speaker icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  stop: html`<svg class="stop icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 6h12v12H6z"></path></svg>`,
  swap_horiz: html`<svg class="swap_horiz icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg>`,
  toc: html`<svg class="toc icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>`,
  translate: html`<svg class="translate icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`,
  translation: html`<svg class="translation icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z"></path></svg>`,
  view_column: html`<svg class="view_column icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg>`,
  view_comfy: html`<svg class="view_comfy icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"/></svg>`,
  view_compact: html`<svg class="view_compact icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/></svg>`,
  visibility: html`<svg class="visibility icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
  wb_sunny: html`<svg class="wb_sunny icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>`,
  connecttointernet: html`<svg class="connecttointernet icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M495 990c-10 0-17-7-17-17V17c0-10 7-17 17-17s17 7 17 17v956c0 10-7 17-17 17z" fill="#9b9b9b"/><path d="M973 512H17c-10 0-17-7-17-17s7-17 17-17h956c10 0 17 7 17 17s-7 17-17 17zM870 239H119c-10 0-17-7-17-17s7-17 17-17h751c11 0 17 7 17 17s-6 17-17 17zM495 751H85c-10 0-17-7-17-17s7-17 17-17h410c10 0 17 7 17 17s-7 17-17 17z" fill="#9b9b9b"/><path d="M495 990c-160 0-290-222-290-495S335 0 495 0s290 222 290 495c0 10-7 17-17 17s-17-7-17-17c0-253-116-461-256-461S239 242 239 495s116 461 256 461c10 0 17 7 17 17s-7 17-17 17z" fill="#9b9b9b"/><path d="M495 990a495 495 0 11495-495c0 17 0 34-4 55 0 10-10 17-20 13-10 0-17-10-14-20 4-17 4-34 4-48 0-253-208-461-461-461S34 242 34 495s208 461 461 461c20 0 41 0 65-7 10 0 17 7 20 14 0 10-7 17-13 20-28 3-52 7-72 7zM734 887c-4 0-10 0-14-3-7-7-7-17 0-24l137-136c7-7 17-7 24 0s6 17 0 24L744 884c0 3-7 3-10 3z" fill="#9b9b9b"/><path d="M870 887c-3 0-10 0-13-3L720 748c-7-7-7-18 0-24s17-7 24 0l137 136c6 7 6 17 0 24 0 3-7 3-11 3z" fill="#9b9b9b"/><path d="M802 1024a221 221 0 110-444 221 221 0 110 444zm0-410c-102 0-188 86-188 188s86 188 188 188 188-85 188-188-85-188-188-188z" fill="#9b9b9b"/></svg>`,
  dataloaderror: html`<svg class="dataloaderror icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M1008 512a496 496 0 10-187 388 24 24 0 10-30-38 448 448 0 11102-114 24 24 0 0040 26c49-78 75-168 75-262zm-484 26L372 693a24 24 0 11-35-34l153-156-153-156a24 24 0 1135-33l152 155 153-155a24 24 0 1134 33L558 503l153 156a24 24 0 11-34 34L524 538z" fill="#9B9B9B"/></svg>`,
  generalerror: html`<svg class="generalerror icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M533 85a448 448 0 100 896 448 448 0 000-896zm0 854a405 405 0 110-811 405 405 0 010 811zm171-214a21 21 0 01-15-6L533 564 378 719a21 21 0 01-30-30l155-156-155-155a21 21 0 0130-30l155 155 156-155a21 21 0 1130 30L564 533l155 156a21 21 0 01-15 36z" fill="#9B9B9B"/></svg>`,
  nonetwork: html`<svg class="nonetwork icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" fill="#9B9B9B"><path d="M50.5 65.6H26.8a15.5 15.5 0 114.7-30.3 1.5 1.5 0 001.9-1 17.5 17.5 0 0134.3 2.2 1.5 1.5 0 001.6 1.3h1.2A13.9 13.9 0 0182.8 45a1.5 1.5 0 002.6-1.4 16.9 16.9 0 00-14.9-9A20.5 20.5 0 0031 32a18.5 18.5 0 10-4.1 36.5h23.7a1.5 1.5 0 000-3z"/><path d="M86.6 48.6H63.8a6.5 6.5 0 00-6.5 6.5v22.8a6.5 6.5 0 006.5 6.5h22.8a6.5 6.5 0 006.5-6.5V55.1a6.5 6.5 0 00-6.5-6.5zm3.5 29.3a3.5 3.5 0 01-3.5 3.5H63.8a3.5 3.5 0 01-3.5-3.5V55.1a3.5 3.5 0 013.5-3.5h22.8a3.5 3.5 0 013.5 3.5z"/><path d="M81.9 59.8a1.5 1.5 0 00-2.1 0l-4.6 4.6-4.6-4.6a1.5 1.5 0 00-2.1 2.1l4.6 4.6-4.6 4.6a1.5 1.5 0 102.1 2.1l4.6-4.6 4.6 4.6a1.5 1.5 0 002.1-2.1l-4.6-4.6 4.6-4.6a1.5 1.5 0 000-2z"/></svg>`,
  pagenotfound: html`<svg class="pagenotfound icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M965 0H59C26 0 0 26 0 58v907a59 59 0 0059 59h906a59 59 0 0059-59V58c0-32-26-58-59-58z" fill="#CCC"/><path d="M928 192H64v736a32 32 0 0032 32h832a32 32 0 0032-32V192h-32zM736 64H96a32 32 0 000 64h640a32 32 0 000-64zm96 0a32 32 0 100 64 32 32 0 000-64zm96 0a32 32 0 100 64 32 32 0 000-64z" fill="#FFF"/><path d="M359 568h-47v39h-31l74-127h-53l-78 132v39h88v53h47v-53h25v-44h-25v-39zm153-88c-32 0-56 10-72 30-16 21-24 48-24 82s8 61 24 81c16 21 40 31 72 31s57-10 72-31c16-20 24-47 24-81s-8-61-24-82c-15-20-40-30-72-30zm35 164c-8 14-19 20-35 20s-27-6-34-20c-7-13-11-30-11-52s4-39 11-53c7-13 19-19 34-19s27 6 35 19c7 14 11 31 11 53s-4 39-11 52zm228-37v-39h-47v39h-31l74-127h-53l-78 132v39h88v53h47v-53h25v-44h-25z" fill="#ED7161"/></svg>`,
  tableView: html`<svg class="tableview icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill=""><g><rect fill="none" height="24" width="24"/><path d="M19,7H9C7.9,7,7,7.9,7,9v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,9v2H9V9H19z M13,15v-2h2v2H13z M15,17v2h-2v-2H15z M11,15H9v-2h2V15z M17,13h2v2h-2V13z M9,17h2v2H9V17z M17,19v-2h2v2H17z M6,17H5c-1.1,0-2-0.9-2-2V5 c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v1h-2V5H5v10h1V17z"/></g></svg>`,
  tableView_twotone: html`<svg class="tableview_twotone icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill=""><g><rect fill="none" height="24" width="24"/><path d="M19,9v2H9V9H19z M13,15v-2h2v2H13z M15,17v2h-2v-2H15z M11,15H9v-2h2V15z M17,13h2v2h-2V13z M9,17h2v2H9V17z M17,19v-2h2v2H17z" fill="#3b763b"/><path d="M19,7H9C7.9,7,7,7.9,7,9v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,9v2H9V9H19z M13,15v-2h2v2H13z M15,17v2h-2v-2H15z M11,15H9v-2h2V15z M17,13h2v2h-2V13z M9,17h2v2H9V17z M17,19v-2h2v2H17z M6,17H5c-1.1,0-2-0.9-2-2V5 c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v1h-2V5H5v10h1V17z"/></g></svg>`,
};
