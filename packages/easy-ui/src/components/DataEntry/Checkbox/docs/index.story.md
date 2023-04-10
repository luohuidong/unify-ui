# Checkbox

```vue
<script setup lang='ts'>
import { ref } from "vue";
const checked = ref(true);
</script>

<template>
<EzCheckbox v-model="checked1" label="One"></EzCheckbox>
</template>
```

## API

| 属性       | 说明     | 类型    | 默认值 |
| ---------- | -------- | ------- | ------ |
| modelValue | 绑定值   | boolean | -      |
| label      | 标题     | string  |        |
| disabled   | 是否禁用 | boolean | -      |

### 事件

| 事件   | 说明             |
| ------ | ---------------- |
| change | 值变更的时候触发 |