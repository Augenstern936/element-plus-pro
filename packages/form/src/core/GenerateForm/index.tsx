/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-07-27 15:36:10
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\index.tsx
 */
import { useFetchData } from "@element-plus-pro/hooks";
import { useVModel } from "@vueuse/core";
import { ColProps, ElForm, ElFormItem } from "element-plus";
import { DefineComponent, FunctionalComponent, computed, defineComponent, ref } from "vue-demi";
import Submitter from "./Submitter";
import "./style.scss";
import { GenerateFormProps, generateFormProps } from "./typing";
import useFormContent from "./useFormContent";
import useFormProps from "./useFormProps";

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
  const model = props.modelValue !== void 0 ? useVModel(props, "modelValue", ctx.emit) : ref({});

  const { Content } = useFormContent(props, ctx);

  const { data } = useFetchData({
    params: props.params,
    request: props.request
  });

  const actionProps = computed(() => {
    return typeof props?.submitter === "boolean" ? {} : props.submitter;
  });

  return () => {
    const { columns } = useFormProps(props, ctx.slots?.default?.() as []);

    return (
      <ElForm {...props} model={model.value} class={"generate-form"}>
        <Content
          {...props}
          columns={columns.value}
          v-model={model.value}
          v-slots={{
            submitter: (ColWrapper: FunctionalComponent<ColProps>) => {
              if (ctx.slots.submitter) {
                return ctx.slots.submitter(model.value, ColWrapper);
              }
              return (
                <>
                  {props.readonly !== true && (
                    <ColWrapper {...(props.colProps as ColProps)}>
                      <ElFormItem class={"pro-form-item-submitter"} label=" ">
                        <Submitter {...actionProps.value} />
                      </ElFormItem>
                    </ColWrapper>
                  )}
                </>
              );
            }
          }}
        ></Content>
      </ElForm>
    );
  };
}) as DefineComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from "./typing";

export { GenerateForm };
