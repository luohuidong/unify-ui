import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "../index.js";

@customElement("show-case-basic-usage")
export class UTag extends LitElement {
  @state()
  items = [
    { label: "Tab1", value: "tab1" },
    { label: "Tab2", value: "tab2" },
    { label: "Tab3", value: "tab3" },
    { label: "Tab4", value: "tab4" },
    { label: "Tab5", value: "tab5" },
    { label: "Tab6", value: "tab6" },
  ];

  @state()
  activeTab = "tab1";

  private _handleTabClick(e: CustomEvent<string>) {
    this.activeTab = e.detail;
  }

  render() {
    return html`
      <u-tabs .items=${this.items} .activeTab=${this.activeTab} @tab-click=${this._handleTabClick}>
      </u-tabs>
    `;
  }
}
