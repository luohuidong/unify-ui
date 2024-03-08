import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'iconify-icon';
import './square.js';

@customElement('u-pagination')
class UPagination extends LitElement {
  @property({ type: Number })
  total = 0;

  @property({ type: Number })
  pageSize = 20;

  @property({ type: Number })
  current = 0;

  render() {
    return html`
      <div class="container">
        <u-pagination-square>
          <iconify-icon icon="ep:arrow-left-bold" width="16" height="16"></iconify-icon>
        </u-pagination-square>

        <u-pagination-square>1</u-pagination-square>

        <u-pagination-square>
          <iconify-icon icon="ep:arrow-right-bold" width="16" height="16"></iconify-icon>
        </u-pagination-square>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'u-pagination': UPagination;
  }
}
