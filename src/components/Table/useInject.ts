import { inject } from "vue";

import * as injectKeys from "./injectKeys";
import { RootProps } from "./types";

export function useInject() {
  const rootProps = inject(injectKeys.rootPropsKey) as RootProps;

  return {
    rootProps,
  };
}
