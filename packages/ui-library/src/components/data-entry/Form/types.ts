export type Model = Record<string, unknown>;

export interface FormProps {
  model: Model;
  layout: "horizontal" | "vertical" | "inline";
}
