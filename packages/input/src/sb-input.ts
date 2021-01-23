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

import { LitElement, customElement, property, query, css, TemplateResult, html, CSSResultArray } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('sb-input')
export class SbInput extends LitElement {
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean }) autofocus = false;
  @property({ type: Boolean }) readonly = false;

    /**
   * The value of the input.
   */
  @property({ reflect: true })
  value = '';

  /**
    * Controls the error state and visibility of the `helperText`
  */
  @property({ type: Boolean, reflect: true })
  error = false;

  /**
      * Controls the error state and visibility of the `helperText`
    */
  @property({ type: String, reflect: true })
  helperText = '';


  @query('input') private textInput?: HTMLInputElement;
  
    /**
   * Handles `oninput` event on the `<input>`.
   * @param event The event.
   */
  protected _handleInput({ target }: Event) {
    this.value = (target as HTMLInputElement).value;
  }

  static get styles(): CSSResultArray {
    return [
      css`
        .sb-input {
          background:#FFFFFF;
          border: 1px solid #BEBDBD;
          box-sizing: border-box;
          border-radius: 4px;
          height: 48px;
          font-size: 16px;
          padding: 12px 17px;
          width: 100%;
        }

        .sb-input.sb-input--error {
          border: 1px solid red;
        }

        .sb-helper-text {
          color: grey;
          display: block;
          font-size: 14px;
          font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji";
          margin-top: 5px;
        }

        .sb-helper-text.sb-helper-text--error  {
          color: red;
        }
      `
    ];
  }

  render(): TemplateResult {
    const { _handleInput: handleInput } = this;

    const inputClasses = classMap({
      'sb-input': true,
      'sb-input--error': this.error,
    });

    const helperTextClasses = classMap({
      'sb-helper-text': true,
      'sb-helper-text--error': this.error,
    });

    return html`
      <div>
        <input 
          class="${inputClasses}"
          type="text" 
          placeholder="${this.placeholder}" 
          ?disabled="${this.disabled}"
          .value="${this.value}"
          @input="${handleInput}">
        <span class="${helperTextClasses}">${this.helperText}</span>
      </div>
      `;
  }

  get input(): HTMLInputElement | undefined {
    return this.textInput;
  }

  firstUpdated() {
    this.value = this.value || this.getAttribute('value') || '';
  }

  focus() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-input': SbInput;
  }
}