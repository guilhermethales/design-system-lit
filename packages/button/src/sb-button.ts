/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


import {LitElement, html, customElement, css, property} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/**
 * An example button element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('sb-button')
export class SbButton extends LitElement {
  @property({ type: String })
  color = 'primary';

  @property({ type: String })
  size = 'medium';

  @property({ type: String })
  variant = 'contained';


  static styles = css`
    :host {
      --font-xsmall: 12px;
      --font-small: 14px;
      --font-medium: 16px;
      --font-large: 18px;
      --font-xlarge: 20px;
      --spacing-small: 8px;
      --spacing-xxsmall: 8px;
      --spacing-xsmall: 16px;
      --spacing-small: 24px;
      --spacing-medium: 32px;
      --spacing-large: 40px;
      --spacing-xlarge: 48px;
      --spacing-xxlarge: 56px;
      --color-primary: #1BA39C;
      --color-warn: #EFC94C;
      --color-danger:#DF494A;
      --color-white:#FFF;
    }

    .sb-button {
      background: var(--button-background, var(--color-primary));
      border: 1px solid var(--button-borderColor, var(--color-primary));
      border-radius: 4px;
      box-sizing: border-box;
      color: var(--button-color, var(--color-white));
      cursor: pointer;
      font-size: var(--button-fontsize, var(--font-medium));
      font-weight: 500;
      height: var(--button-size, 40px);
      outline: none;
      padding: 0 var(--button-paddingRightLeft, var(--spacing-small));
    }

    :host([size='xsmall']) {
      --button-size: 24px;
      --button-fontsize: var(--font-xsmall);
      --button-paddingRightLeft: var(--spacing-xxsmall);
    }

    :host([size='small']) {
      --button-size: 32px;
      --button-fontsize: var(--font-small);
      --button-paddingRightLeft: var(--spacing-xsmall);
    }

    :host([size='large']) {
      --button-size: 48px;
      --button-fontsize: var(--font-large);
      --button-paddingRightLeft: var(--spacing-medium);
    }

    :host([size='xlarge']) {
      --button-size: 56px;
      --button-fontsize: var(--font-xlarge);
      --button-paddingRightLeft: var(--spacing-large);
    }
  
    :host([color='danger']) {
      --button-background: var(--color-danger);
      --button-borderColor: var(--color-danger);
    }

    :host([color='warn']) {
      --button-background: var(--color-warn);
      --button-borderColor: var(--color-warn);
    }

    :host([variant='outlined']) {
      --button-background: transparent;
      --button-color: var(--button-borderColor, var(--color-primary));
    }
  `;

  render() {
    return html`
      <button class=${classMap({
        'sb-button': true,
        })}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-button': SbButton;
  }
}
