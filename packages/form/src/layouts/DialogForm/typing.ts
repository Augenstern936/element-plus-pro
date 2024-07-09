/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-07-09 17:06:20
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\typing.ts
 */
import { dialogProps } from "element-plus";
import type { ExtractPropTypes } from "vue-demi";

export const proDialogFormProps = {
	...dialogProps,
};

export type ProDialogFormProps = Partial<ExtractPropTypes<typeof proDialogFormProps>>;
