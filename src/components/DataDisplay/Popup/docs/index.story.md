# Popup

## API

| 属性             | 说明                                                          | 类型    | 默认值  | 是否必须 |
| ---------------- | ------------------------------------------------------------- | ------- | ------- | -------- |
| placement        | 弹窗位置 "top", "bottom", "left", "right"                     | string  | -       | 是       |
| appendToBody     | 弹窗是否插入到 body                                           | boolean | false   | 否       |
| overlayClassName | 弹窗类名                                                      | string  | -       | 否       |
| backgroundColor  | 弹窗背景颜色                                                  | string  | -       | 否       |
| showArrow        | 弹窗是否展示箭头                                              | boolean | true    | 否       |
| trigger          | 弹窗触发方式，"hover"、 "click"、"focus"、"controlled"        | string  | "hover" | 否       |
| visible          | trigger 为 controlled 的时候需要传 visible 来控制弹窗是否展示 | boolean | -       | 否       |

需要注意，当 Popup trigger prop 为 controlled 的时候为受控模式，该模式必须传 visible prop 来控制弹窗的展示。
