/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-05-27 15:23:21
 */
import { descriptionProps } from "element-plus";
import type { ExtractPropTypes } from "vue";
import { JSX } from "vue/jsx-runtime";
export interface ProDescriptionsItem {
  label: string;
  span?: number;
  field?: string;
  copyable?: boolean;
  render?: (data) => JSX.Element;
}

type ElDescriptionsProps = ExtractPropTypes<typeof descriptionProps>;
export interface ProDescriptionsProps extends Omit<ElDescriptionsProps, "title"> {
  gap?: number;
  title?: string | string[];
  items: ProDescriptionsItem[] | ProDescriptionsItem[][];
  data?: Record<string, any>;
  emptyText?: string;
  bodyStyle?: Record<string, any>;
  titlePrefixVerticalLine?: boolean;
}
