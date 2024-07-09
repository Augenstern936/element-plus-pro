/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-07-09 17:06:44
 * @FilePath: \element-plus-pro\packages\form\src\layouts\LoginForm\typing.ts
 */
import { formProps } from "element-plus";
import type { ExtractPropTypes } from "vue-demi";

export const proLoginFormProps = {
	...formProps,
};

export type ProLoginFormProps = Partial<ExtractPropTypes<typeof proLoginFormProps>>;
