import { dialogProps } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { PropType, VNode, ExtractPropTypes } from "vue-demi";
import { TextWeight } from "@element-plus-ui/pro-types";

export const proDialogProps = {
  ...dialogProps,
  modelValue: {
    type: Boolean,
    default: void 0
  },
  titleSize: {
    type: [Number, String],
    default: "var(--el-dialog-title-font-size)"
  },
  titleColor: {
    type: String,
    default: "var(--el-text-color-primary)"
  },
  titleWeight: {
    type: [Number, String] as PropType<TextWeight>,
    default: 600
  },
  trigger: {
    type: [Object, Function] as PropType<VNode | ProButtonProps | ((e: { open: Function }) => VNode | ProButtonProps)>
  }
};

export type ProDialogProps = Partial<ExtractPropTypes<typeof proDialogProps>>;
