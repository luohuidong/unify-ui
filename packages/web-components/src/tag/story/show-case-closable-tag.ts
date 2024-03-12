import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "iconify-icon";

@customElement("show-case-closable-tag")
export class UTag extends LitElement {
  @state()
  types = ["default", "success", "info", "warning", "error"];

  handleClose(type: string) {
    this.types = this.types.filter((t) => t !== type);
  }

  render() {
    return html`
      ${this.types.map(
        (type) =>
          html`<u-tag type=${type} closable @close=${() => this.handleClose(type)}>
            ${type}
          </u-tag>`
      )}
    `;
  }
}
