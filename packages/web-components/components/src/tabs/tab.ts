import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("u-tab")
class UTab extends LitElement {
  @property()
  label: string = "";

  @property()
  value: string = "";

  @property({ type: Boolean })
  isActive: boolean = false;

  private _handleTabClick(value: string) {
    this.dispatchEvent(new CustomEvent<string>("tab-click", { detail: value }));
  }

  render() {
    const tabClassName = {
      tab: true,
      "tab--hover": !this.isActive,
      "tab--active": this.isActive,
    };
    return html`
      <button
        class="tab tab--hover"
        class=${classMap(tabClassName)}
        @click=${() => this._handleTabClick(this.value)}
      >
        ${this.label}
      </button>
    `;
  }

  static styles = css`
    .tab {
      height: 40px;

      color: var(--u-gray-500);
      font-size: 14px;
      font-weight: 500;

      border: none;
      border-bottom: 2px solid transparent;
      outline: none;

      cursor: pointer;
      background: none;
    }

    .tab--hover:hover {
      color: var(--u-gray-700);
      border-bottom: 2px solid var(--u-gray-300);
    }

    .tab--active {
      color: var(--u-color-primary);
      border-bottom: 2px solid var(--u-color-primary);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "u-tab": UTab;
  }
}
