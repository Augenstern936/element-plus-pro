/*
 * @Description:
 * @Date: 2024-04-10 17:57:47
 * @LastEditTime: 2024-07-09 17:03:03
 */
import type { TimePickerDefaultProps } from "element-plus";
import type { CSSProperties } from "vue-demi";
import { ProFieldMode } from "../../typing";

export interface BaseTimePickerProps extends Partial<TimePickerDefaultProps> {
	mode?: ProFieldMode;
	style?: CSSProperties;
}

export type ProFieldTimeProps = Omit<BaseTimePickerProps, "isRange">;

export type ProFieldTimeRangeProps = Omit<BaseTimePickerProps, "isRange">;
