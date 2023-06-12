import type { RuleItem } from "async-validator";

export type Model = Record<string, unknown>;

export interface FormProps {
  model: Model;
  layout: "horizontal" | "vertical" | "inline";
}

export type ValidateStatus = "success" | "error" | undefined;

export interface FormItemInfo {
  rules: RuleItem[];
  validateStatus: ValidateStatus;
  validateMessage: string;
}
