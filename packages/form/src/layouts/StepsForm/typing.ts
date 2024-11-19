/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-11-17 17:03:58
 *
 */
import { StepProps, StepsProps } from "element-plus";
import { CreateFormProps, type ProFormColumn } from "../../core/CreateForm";
import type { DefineComponent, ExtractPropTypes, PropType } from "vue-demi";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";

export const proStepsFormProps = {
  ...CreateFormProps,
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
  ...omitObjectProperty(CreateFormProps, ["submitter"]),
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
