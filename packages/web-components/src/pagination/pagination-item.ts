import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("u-pagination-item")
class UPaginationItem extends LitElement {
  @property({ type: Number })
  page = 0;

  @property({ type: Boolean })
  active = false;

  private _dispatchChange(current: number) {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          current,
        },
      })
    );
  }

  render() {
    const classes = {
      button: true,
      "pagination-item--normal": true,
      "pagination-item--active": this.active,
    };

    return html`
      <button class=${classMap(classes)} @click=${() => this._dispatchChange(this.page)}>
        ${this.page}
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

    .pagination-item--normal {
      color: var(--u-gray-900);
    }
    .pagination-item--normal:hover {
      background-color: var(--u-gray-100);
    }

    .pagination-item--active {
      background-color: var(--u-color-primary);
      color: var(--u-color-light);
    }
    .pagination-item--active:hover {
      background-color: var(--u-color-primary-hover);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "u-pagination-item": UPaginationItem;
  }
}
