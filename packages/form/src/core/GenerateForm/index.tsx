/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-11-10 21:34:46
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\index.tsx
 */
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { useVModel } from "@vueuse/core";
import { ColProps, ElForm, ElFormItem, FormInstance, formProps, FormValidateCallback } from "element-plus";
import { DefineComponent, FunctionalComponent, defineComponent, ref, watch } from "vue-demi";
import "./generate-form.scss";
import { GenerateFormProps, generateFormProps, ProFormColumn } from "./typing";
import useFormContent from "./useFormContent";
import useFormProps from "./useFormProps";
import { useSubmitter } from "./useSubmitter";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject } from "@vueuse/core";
import { getObjectDeepValue, setObjectDeepValue } from "../utils";

export const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
  const formRef = ref<FormInstance>();

  const model: Record<string, any> = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

  const bindModel = ref<{ [x: string]: any }>({ ...model.value });

  const immediate = ref(true);

  const { columns } = useFormProps(props, ctx.slots?.default?.() as []);

  const { Content } = useFormContent(props, ctx);

  const { Submitter, config } = useSubmitter(props.submitter);

  const { data } = useFetchData({
    params: props.params,
    request: async () => await props?.request?.(props.params ?? {})
  });

  const onChange = (k: string, v: any) => {
    setObjectDeepValue(model.value, k, v);
    props?.onValuesChange?.(model.value, k);
  };

  watch(
    model,
    entity => {
      if (!immediate) {
        bindModel.value = { ...bindModel.value, ...entity };
      }
    },
    {
      deep: true
    }
  );

  watch(
    () => [columns.value, data.value],
    () => {
      if (!Array.isArray(columns.value) || !columns.value.length) return;
      if (!isObject(data.value) || !Object.keys(data.value).length) return;
      immediate.value = true;
      columns.value.forEach((item: ProFormColumn) => {
        if (!item.prop) return;
        const key = Array.isArray(item.prop) ? item.prop.join(".") : item.prop;
        const initValue = getObjectDeepValue(data.value as any, item.prop ?? "");
        if (initValue === void 0) return;
        bindModel.value[key] = initValue;
        setObjectDeepValue(model.value, key, initValue);
      });
      immediate.value = false;
    },
    {
      deep: true
    }
  );

  ctx.expose({
    validate: (callback: FormValidateCallback) => formRef.value?.validate(callback),
    validateField: () => formRef.value?.validateField(),
    resetFields: () => formRef.value?.resetFields(),
    scrollToField: () => formRef.value?.scrollToField(),
    clearValidate: () => formRef.value?.clearValidate(),
    fields: () => formRef.value?.fields()
  });

  return () => (
    <ElForm
      {...pickObjectProperty(props, Object.keys(formProps) as any[])}
      ref={formRef}
      model={model.value}
      class={"generate-form"}
      hideRequiredAsterisk={props?.readonly || props?.hideRequiredAsterisk}
    >
      <Content
        {...props}
        columns={columns.value}
        v-model={bindModel.value}
        onChange={onChange}
        v-slots={{
          submitter: (ColWrapper: FunctionalComponent<ColProps>) => {
            if (!columns.value.length || props.submitter === false || props.readonly === true) return "";
            if (ctx.slots.submitter) {
              return ctx.slots.submitter(model.value, ColWrapper);
            }
            return (
              <ColWrapper {...(props.colProps as ColProps)}>
                <ElFormItem class={"pro-form-item-submitter"} label=" ">
                  <Submitter
                    {...config.value}
                    onReset={() => ctx.emit("reset", model.value ?? {})}
                    onSubmit={() => {
                      if (!formRef.value) return;
                      formRef.value.validate(valid => {
                        if (valid) {
                          return ctx.emit("finish", model.value);
                        } else {
                          ctx.emit("failed", model.value);
                        }
                      });
                    }}
                  />
                </ElFormItem>
              </ColWrapper>
            );
          }
        }}
      />
    </ElForm>
  );
}) as DefineComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps;

export * from "./useSubmitter";

export * from "./typing";
