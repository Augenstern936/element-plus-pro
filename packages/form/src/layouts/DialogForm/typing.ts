/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-04-11 22:31:36
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\typing.ts
 */
import { dialogProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';

export const proDialogFormProps = {
	...dialogProps,
};

export type ProDialogFormProps = Partial<ExtractPropTypes<typeof proDialogFormProps>>;
