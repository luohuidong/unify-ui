import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./pagination-item.js";
import "./pagination-arrow.js";

@customElement("u-pagination")
export class UPagination extends LitElement {
  @property({ type: Number })
  total = 0;

  @property({ type: Number })
  pageSize = 20;

  @property({ type: Number })
  current = 0;

  private _dispatchChange(current: number) {
    if (current === this.current) return;

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          current,
          pageSize: this.pageSize,
        },
      })
    );
  }

  private get maxPage() {
    return Math.ceil(this.total / this.pageSize);
  }

  private get items() {
    if (this.maxPage <= 7) {
      return Array.from({ length: this.maxPage }, (_, i) => i + 1);
    }

    // maxPage > 7
    if (this.current < 5) {
      return [1, 2, 3, 4, 5, "...", this.maxPage];
    } else if (this.current > this.maxPage - 4) {
      return [
        1,
        "...",
        this.maxPage - 4,
        this.maxPage - 3,
        this.maxPage - 2,
        this.maxPage - 1,
        this.maxPage,
      ];
    } else {
      return [1, "...", this.current - 1, this.current, this.current + 1, "...", this.maxPage];
    }
  }

  private _handlePrevClick() {
    if (this.current > 1) {
      this._dispatchChange(this.current - 1);
    }
  }

  private _handleNextClick() {
    if (this.current < this.maxPage) {
      this._dispatchChange(this.current + 1);
    }
  }

  render() {
    return html`
      <u-pagination-arrow
        type="prev"
        .disabled=${this.current === 1}
        @click="${this._handlePrevClick}"
      ></u-pagination-arrow>

      ${this.items.map((page) =>
        typeof page === "number"
          ? html`
              <u-pagination-item
                .page=${page}
                .active=${this.current === page}
                @click=${() => this._dispatchChange(page)}
              ></u-pagination-item>
            `
          : html`<div class="ellipsis">...</div>`
      )}

      <u-pagination-arrow
        type="next"
        .disabled=${this.current === this.maxPage}
        @click="${this._handleNextClick}"
      ></u-pagination-arrow>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ellipsis {
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "u-pagination": UPagination;
  }
}
