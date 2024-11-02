/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-29 09:58:07
 * @LastEditTime: 2024-11-01 15:21:20
 * @FilePath: \element-plus-pro\packages\form\src\layouts\StepsForm\StepForm.tsx
 */
import mitt from "mitt";
import { DefineComponent, defineComponent, inject, ref } from "vue-demi";
import { proStepFormProps, ProStepFormProps } from "./typing";
import { GenerateForm, Submitter } from "../../core";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";

export const emitter = mitt();

const StepForm = defineComponent<ProStepFormProps>(
  (props, ctx) => {
    const model = props.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const total = inject("total") as number;
    const current = inject("current") as number;
    const submitter = inject("submitter") as Record<string, any>;
    return () => (
      <GenerateForm
        {...omitObjectProperty(props, ["stepProps"])}
        v-model={model.value}
        v-slots={{ default: ctx.slots.default }}
        style={{ width: "50%", margin: "auto" }}
        submitter={() => (
          <Submitter
            {...submitter}
            reversal={current !== 0}
            hideResetButton={current === 0 && total > 1}
            resetButtonTitle={total > 1 ? "上一步" : "重置"}
            submitButtonProps={{
              title: current + 1 === total ? "提交" : "下一步",
              onClick: () => {
                if (total > 1 && current + 1 < total) {
                  return emitter.emit("next");
                }
                emitter.emit("submit");
              }
            }}
            onReset={() => {
              if (total > 1) {
                return emitter.emit("prev");
              }
            }}
          />
        )}
      />
    );
  },
  {
    name: "ProStepForm"
  }
) as DefineComponent<ProStepFormProps>;

StepForm.props = proStepFormProps;

export default StepForm;
