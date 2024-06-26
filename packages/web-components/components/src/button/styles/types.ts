import { css } from "lit";

export const buttonTypeStyle = css`
  .type-primary {
    color: white;
    background-color: var(--u-indigo-600);
    border: 1px solid var(--u-indigo-600);
  }

  .type-primary:hover,
  .type-primary:active {
    background-color: var(--u-indigo-500);
    border-color: var(--u-indigo-500);
  }

  .type-secondary {
    color: var(--u-gray-900);
    background-color: var(--u-color-light);
    border: 1px solid var(--u-gray-200);
  }

  .type-secondary:hover,
  .type-secondary:active {
    background-color: var(--u-gray-50);
    border-color: var(--u-gray-200);
  }

  .type-soft {
    color: var(--u-indigo-600);
    background-color: var(--u-indigo-50);
    border: 1px solid var(--u-indigo-50);
  }

  .type-soft:hover,
  .type-soft:active {
    background-color: var(--u-indigo-100);
    border-color: var(--u-indigo-100);
  }
`;
