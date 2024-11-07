/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-11-06 21:51:53
 * @FilePath: \element-plus-pro\packages\form\src\layouts\StepsForm\typing.ts
 */
import { StepProps, StepsProps } from "element-plus";
import { generateFormProps, type ProFormColumn } from "../../core/GenerateForm";
import type { DefineComponent, ExtractPropTypes, PropType } from "vue-demi";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";

export const proStepsFormProps = {
  ...generateFormProps,
  active: {
    type: Number,
    default: 0
  },
  steps: {
    type: Array as PropType<StepsType>
  },
  columns: {
    type: Array as PropType<ProStepsFormColumn[]>,
    default: []
  },
  stepsProps: {
    type: Object as PropType<StepsProps>,
    default: []
  },
  hideStepsBar: {
    type: Boolean,
    default: false
  },
  onActiveChange: {
    type: Function as PropType<(index?: number) => void>
  }
};

export enum StepsIndexEnum {
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十"
}

export const proStepFormProps = {
  ...omitObjectProperty(generateFormProps, ["submitter"]),
  stepProps: {
    type: Object as PropType<StepProps>
  }
};

export interface StepConfig extends Partial<StepProps> {
  columns?: ProFormColumn[];
}

export type StepsType = string[] | StepConfig[];

export type ProStepsFormColumn = Array<ProFormColumn[] | ProFormColumn>;

export type ProStepFormProps = Partial<ExtractPropTypes<typeof proStepFormProps>>;

export type ProStepsFormProps = Partial<ExtractPropTypes<typeof proStepsFormProps>>;

export type ProStepsFormSuperProps = DefineComponent<ProStepsFormProps> & {
  StepForm: DefineComponent<ProStepFormProps>;
};
