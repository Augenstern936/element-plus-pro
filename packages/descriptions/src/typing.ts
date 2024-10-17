/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-10-15 16:03:11
 */
import { GeneratePropTypes, Marker } from "@element-plus-ui/pro-types";
import { descriptionProps } from "element-plus";
import type { PropType } from "vue-demi";
import { CSSProperties } from "vue-demi";
import { JSX } from "vue/jsx-runtime";

export const proDescriptionProps = {
  ...descriptionProps,
  gap: {
    type: Number
  },
  title: {
    type: [String, Object, Array] as PropType<ProDescriptionsTitle>
  },
  items: {
    type: Array as PropType<ProDescriptionsItems>,
    required: true
  },
  data: {
    type: Object as PropType<{ [x: string]: any }>
  },
  emptyText: {
    type: String
  },
  labelStyle: {
    type: Object as PropType<CSSProperties>
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>
  }
} as const;

export type TitleJsonConfig = {
  text: string | string[];
  textStyle?: CSSProperties;
  mark?: boolean | TitleMark;
};

export type TitleMark = {
  color?: string;
  shape?: "bar" | Marker;
};

export type ProDescriptionsTitle = string | TitleJsonConfig | Array<string>;

export type ProDescriptionsItems = ProDescriptionsItem[] | ProDescriptionsItem[][];

export type ProDescriptionsItem = {
  label: string;
  span?: number;
  dataField?: string;
  copyable?: boolean;
  render?: (data: Record<string, any>) => JSX.Element;
};

export type ProDescriptionsProps = GeneratePropTypes<typeof proDescriptionProps>;
