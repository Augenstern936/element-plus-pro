/*
 * @Description: 用于创建表单，统一处理相关逻辑
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-11-17 21:28:10
 */
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { useVModel } from "@vueuse/core";
import { ColProps, ElForm, ElFormItem, FormInstance, formProps, FormValidateCallback } from "element-plus";
import { DefineComponent, FunctionalComponent, defineComponent, inject, ref, watch } from "vue-demi";
import "./create-form.scss";
import { CreateFormProps, ProFormColumn } from "./typing";
import useFormContent from "./useFormContent";
import useFormProps from "./useFormProps";
import { useSubmitter } from "./useSubmitter";
import { omitObjectProperty, pickObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject } from "@vueuse/core";
import { getObjectDeepValue, setObjectDeepValue } from "../utils";

export const CreateForm = defineComponent<CreateFormProps>((props, ctx) => {
  const formRef = ref<FormInstance>();

  const model: Record<string, any> = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

  const bindModel = ref<{ [x: string]: any }>({ ...model.value });

  const immediate = ref(true);

  const { columns } = useFormProps(props, ctx.slots?.default?.() as []);

  const { Content } = useFormContent(props, model.value, ctx);

  const { Submitter, config } = useSubmitter(props.submitter);

  const submitterNotColWrapper = inject("submitterNotColWrapper", false) as boolean;

  const { data } = useFetchData({
    params: props.params,
    request: async () => await props?.request?.(props.params ?? {})
  });

  const onChange = (k: string, v: any) => {
    setObjectDeepValue(model.value, k, v);
    props?.onValuesChange?.(model.value, k);
  };

  const validateFormRules = () => {
    if (!formRef.value) return;
    formRef.value.validate(valid => {
      if (valid) {
        ctx.emit("finish", model.value);
      } else {
        ctx.emit("failed", model.value);
      }
    });
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
            const onReset = () => {
              formRef.value?.resetFields();
              ctx.emit("reset", model.value ?? {});
            };

            const onSubmit = () => {
              if (typeof config.value.onSubmit === "function") {
                const isNext = config?.value?.onSubmit?.(model.value);
                return isNext === true ? validateFormRules() : false;
              }
              if (typeof props.onSubmit === "function") {
                const isNext = props?.onSubmit?.(model.value);
                return isNext === true ? validateFormRules() : false;
              }
              validateFormRules();
            };

            const submitterElement = (
              <>
                {ctx.slots.submitter ? (
                  <Submitter
                    {...omitObjectProperty(config.value, ["onReset", "onSubmit"])}
                    render={(props, doms) => ctx.slots.submitter?.({ props, doms }) as any}
                    onReset={onReset}
                    onSubmit={onSubmit}
                  />
                ) : (
                  <Submitter
                    {...omitObjectProperty(config.value, ["onReset", "onSubmit"])}
                    onReset={onReset}
                    onSubmit={onSubmit}
                  />
                )}
              </>
            );
            return submitterNotColWrapper === true ? (
              submitterElement
            ) : (
              <ColWrapper {...(props.colProps as ColProps)}>
                <ElFormItem class={"pro-form-item-submitter"} label=" ">
                  {submitterElement}
                </ElFormItem>
              </ColWrapper>
            );
          }
        }}
      />
    </ElForm>
  );
}) as DefineComponent<CreateFormProps>;

CreateForm.props = CreateFormProps;

export * from "./useSubmitter";

export * from "./typing";
