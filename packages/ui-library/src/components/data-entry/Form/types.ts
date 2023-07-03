import type { RuleItem } from "async-validator";

import type { ValidateStatus } from "@/types/form";

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
