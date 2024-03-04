import type { RuleItem } from "async-validator";

export type ValidateStatus = "success" | "error" | undefined;

export type Model = Record<string, unknown>;

export interface FormProps {
  model: Model;
  layout?: "horizontal" | "vertical" | "inline";
  labelWidth?: string;
}

export interface FormItemInfo {
  rules: RuleItem[];
  validateStatus: ValidateStatus;
  validateMessage: string;
}
