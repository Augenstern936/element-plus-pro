/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-04-11 22:38:15
 * @FilePath: \element-plus-pro\packages\form\src\layouts\StepForm\typing.ts
 */
import { formProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';

export const proStepFormProps = {
	...formProps,
};

export type ProStepFormProps = Partial<ExtractPropTypes<typeof proStepFormProps>>;
