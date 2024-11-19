/*
 * @Description: 步骤项表单组件
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-10-29 09:58:07
 * @LastEditTime: 2024-11-19 10:59:34
 *
 */
import mitt from "mitt";
import { DefineComponent, defineComponent, inject, ref } from "vue-demi";
import { proStepFormProps, ProStepFormProps } from "./typing";
import { CreateForm, useSubmitter } from "../../core";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject, useVModel } from "@vueuse/core";
import { getFormRefExpose } from "../../core/utils";
import { FormInstance } from "element-plus";

export const emitter = mitt();

const StepForm = defineComponent<ProStepFormProps>(
  (props, ctx) => {
    const model = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const formRef = ref<FormInstance>();

    const total = inject("total") as number;
    const current = inject("current") as number;
    const submitter = inject("submitter") as Record<string, any>;

    const { config } = useSubmitter(submitter, ctx);

    const onSubmitAction = async () => {
      if (total > 1 && current + 1 < total) {
        return validate(
          async () => {
            const result = await props?.onFinish?.(model.value ?? {});
            if (result === true || result === void 0) {
              emitter.emit("next");
            }
          },
          () => {
            props?.onFailed?.(model.value ?? {});
          }
        );
      }
      validate(
        () => {
          if (typeof props?.onFinish === "function") {
            return props.onFinish(model.value ?? {});
          }
          emitter.emit("submit");
        },
        () => {
          if (typeof props?.onFailed === "function") {
            return props.onFailed(model.value ?? {});
          }
          emitter.emit("failed");
        }
      );
    };

    const validate = (success: Function, failed: Function) => {
      if (!formRef.value) return;
      formRef.value.validate(vaild => {
        return vaild ? success() : failed();
      });
    };

    ctx.expose({
      ...getFormRefExpose(formRef.value)
    });

    return () => (
      <CreateForm
        {...omitObjectProperty(props, ["stepProps"])}
        ref={formRef}
        v-model={model.value}
        v-slots={{ default: ctx.slots.default }}
        style={{ width: "50%", margin: "auto" }}
        submitter={{
          ...config.value,
          reverse: current !== 0,
          hideResetButton: current === 0 && total > 1,
          resetButtonTitle: total > 1 ? "上一步" : "重置",
          submitButtonProps: {
            title: current + 1 === total ? "提交" : "下一步",
            onClick: onSubmitAction
          },
          onReset: () => {
            if (total > 1) {
              return emitter.emit("prev");
            }
          }
        }}
      />
    );
  },
  {
    name: "ProStepForm"
  }
) as DefineComponent<ProStepFormProps>;

StepForm.props = proStepFormProps;

export default StepForm;
