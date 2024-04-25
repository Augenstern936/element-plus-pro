/*
 * @Description:
 * @Date: 2024-04-10 17:42:22
 * @LastEditTime: 2024-04-10 17:43:13
 */
import type { ISelectProps } from "element-plus";
import type { CSSProperties } from "vue";

export interface ProFieldTreeSelectProps extends Omit<ISelectProps, "options"> {
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}
