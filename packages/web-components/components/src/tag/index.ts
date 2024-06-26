import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "iconify-icon";

@customElement("u-tag")
class UTag extends LitElement {
  @property()
  type?: "default" | "success" | "info" | "warning" | "error" = "default";

  @property({ type: Boolean })
  closable? = false;

  _dispatchClose(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("close"));
  }

  render() {
    return html`
      <span class="tag type-${this.type}">
        <slot></slot>

        ${this.closable
          ? html`<iconify-icon
              icon="material-symbols:close"
              width="14"
              height="14"
              style="margin-left: 2px; cursor: pointer"
              @click=${this._dispatchClose}
            ></iconify-icon>`
          : undefined}
      </span>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      margin-right: 6px;
      padding: 4px 8px;

      border-width: 1px;
      border-style: solid;
      border-radius: 6px;

      font-size: var(--u-text-xs-font-size);
      line-height: var(--u-text-xs-line-height);
    }

    .type-default {
      color: var(--u-gray-500);
      background-color: var(--u-gray-50);
      border-color: var(--u-gray-200);
    }

    .type-info {
      color: var(--u-color-info-font);
      background-color: var(--u-color-info-background);
      border-color: var(--u-color-info-border);
    }

    .type-success {
      color: var(--u-color-success-font);
      background-color: var(--u-color-success-background);
      border-color: var(--u-color-success-border);
    }

    .type-warning {
      color: var(--u-color-warning-font);
      background-color: var(--u-color-warning-background);
      border-color: var(--u-color-warning-border);
    }

    .type-error {
      color: var(--u-color-error-font);
      background-color: var(--u-color-error-background);
      border-color: var(--u-color-error-border);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "u-tag": UTag;
  }
}
