/*
 * @Description:
 * @Date: 2024-04-10 17:57:47
 * @LastEditTime: 2024-05-29 15:05:12
 */
import type { TimePickerDefaultProps } from "element-plus";
import type { CSSProperties } from "vue";

export interface BaseTimePickerProps extends Partial<TimePickerDefaultProps> {
	mode?: "read" | "edit";
	style?: CSSProperties;
}

export type ProFieldTimeProps = Omit<BaseTimePickerProps, "isRange">;

export type ProFieldTimeRangeProps = Omit<BaseTimePickerProps, "isRange">;
