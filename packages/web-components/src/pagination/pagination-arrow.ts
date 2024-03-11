import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import 'iconify-icon';

@customElement('u-pagination-arrow')
class UPaginationArrow extends LitElement {
  @property()
  type: 'prev' | 'next' = 'prev';

  @property({ type: Boolean })
  disabled = false;

  render() {
    const classes = {
      button: true,
      'icon-container': true,
    };

    return html`
      <button class=${classMap(classes)} .disabled=${this.disabled}>
        ${this.type === 'prev'
          ? html`<iconify-icon class="icon" icon="ep:arrow-left-bold"></iconify-icon>`
          : html`<iconify-icon class="icon" icon="ep:arrow-right-bold"></iconify-icon>`}
      </button>
    `;
  }

  static styles = css`
    .button {
      min-width: 30px;
      height: 30px;
      background: none;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .button:disabled {
      cursor: not-allowed;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon-container:hover {
      background-color: var(--u-gray-100);
    }

    .icon {
      font-size: 14px;
      color: var(--u-gray-400);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'u-pagination-arrow': UPaginationArrow;
  }
}
