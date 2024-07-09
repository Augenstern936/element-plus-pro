/*
 * @Description:
 * @Date: 2024-04-10 17:42:22
 * @LastEditTime: 2024-07-09 17:09:23
 */
import type { ISelectProps } from "element-plus";
import type { CSSProperties } from "vue-demi";
import { ProFieldMode } from "../../typing";

export interface ProFieldTreeSelectProps extends Partial<Omit<ISelectProps, "options">> {
	mode?: ProFieldMode;
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}
