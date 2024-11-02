/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-11-02 13:52:47
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\index.tsx
 */
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { useVModel } from "@vueuse/core";
import { ColProps, ElForm, ElFormItem, ElMessage, FormInstance } from "element-plus";
import { DefineComponent, FunctionalComponent, defineComponent, ref } from "vue-demi";
import Submitter from "./Submitter";
import "./generate-form.scss";
import { GenerateFormProps, generateFormProps } from "./typing";
import useFormContent from "./useFormContent";
import useFormProps from "./useFormProps";
import { isObject } from "@vueuse/core";
import ProButton from "@element-plus-ui/pro-button";
import { getFormRefExpose } from "../utils";

export const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
  const model = props.modelValue !== void 0 ? useVModel(props, "modelValue", ctx.emit) : ref({});

  const formRef = ref<FormInstance>();

  const { columns } = useFormProps(props, ctx.slots?.default?.() as []);

  const { Content } = useFormContent(props, ctx);

  const { data } = useFetchData({
    params: props.params,
    request: props.request
  });

  const renderSubmitter = () => {
    if (isObject(props.submitter) || props.submitter === true) {
      return (
        <Submitter
          onReset={() => ctx.emit("reset")}
          onSubmit={async () => {
            if (!formRef.value) return;
            await formRef.value.validate(valid => {
              if (valid) {
                ctx.emit("finish", model.value);
              } else {
                ElMessage.warning("表单验证未通过~");
              }
            });
          }}
          {...(props?.submitter as Record<string, any>)}
        />
      );
    }
    if (typeof props.submitter === "function") {
      return (props.submitter as Function)();
    }
    if (Array.isArray(props.submitter) && props.submitter.length) {
      return props.submitter.map((config, index) => <ProButton key={index} {...config} />);
    }
    return "";
  };

  ctx.expose({
    ...getFormRefExpose(formRef.value)
  });

  return () => (
    <ElForm ref={formRef} model={model.value} {...props} class={"generate-form"}>
      <Content
        {...props}
        columns={columns.value}
        v-model={model.value}
        v-slots={{
          submitter: (ColWrapper: FunctionalComponent<ColProps>) => {
            if (!columns.value.length) return "";
            if (ctx.slots.submitter) {
              return ctx.slots.submitter(model.value, ColWrapper);
            }
            if (props.submitter === false) return "";
            return (
              <>
                {props.readonly !== true && (
                  <ColWrapper {...(props.colProps as ColProps)}>
                    <ElFormItem class={"pro-form-item-submitter"} label=" ">
                      {renderSubmitter()}
                    </ElFormItem>
                  </ColWrapper>
                )}
              </>
            );
          }
        }}
      />
    </ElForm>
  );
}) as DefineComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps;

export { Submitter };

export * from "./typing";
