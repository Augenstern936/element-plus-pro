/*
 * @Description:
 * @Date: 2024-04-10 17:42:22
 * @LastEditTime: 2024-05-29 15:04:47
 */
import type { ISelectProps } from "element-plus";
import type { CSSProperties } from "vue";

export interface ProFieldTreeSelectProps extends Partial<Omit<ISelectProps, "options">> {
	mode: "read" | "edit";
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}
