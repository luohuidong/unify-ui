import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "../index.js";

@customElement("show-case-pagination-basic-usage")
class ShowCaseBasicUsage extends LitElement {
  @state()
  total = 500;

  @state()
  pageSize = 20;

  @state()
  current = 1;

  handleChange(e: CustomEvent<{ current: number; pageSize: number }>) {
    this.current = e.detail.current;
    this.pageSize = this.pageSize;
  }

  render() {
    return html`
      <u-pagination
        .total=${this.total}
        .pageSize=${this.pageSize}
        .current=${this.current}
        @change=${this.handleChange}
      >
      </u-pagination>
    `;
  }
}
