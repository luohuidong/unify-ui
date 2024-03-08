import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('u-pagination-square')
class UPaginationSquare extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  selected = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    .container {
      height: 30px;
      min-width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--u-gray-200);
      border-radius: 4px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'u-pagination-square': UPaginationSquare;
  }
}
