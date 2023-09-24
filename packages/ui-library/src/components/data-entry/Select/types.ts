export type Value = string | number | boolean;

export interface SelectProps {
  modelValue: Value | undefined;
  placeholder?: string;
}

export interface SelectEmits {
  (e: "update:modelValue", value: Value | Value[] | undefined): void;
  (e: "change", value: Value | Value[] | undefined): void;
}
