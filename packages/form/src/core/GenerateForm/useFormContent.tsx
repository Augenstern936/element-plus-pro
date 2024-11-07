/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-21 17:49:59
 * @LastEditTime: 2024-11-04 21:59:13
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\useFormContent.tsx
 */
import { ProField, ProFieldProps } from "@element-plus-ui/pro-field";
import { formatPlaceholder, omitObjectProperty, pickObjectProperty } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElFormItem, ElSpace, ElTooltip, formItemProps } from "element-plus";
import { SetupContext, ref } from "vue-demi";
import { useGridHelpers } from "../helpers";
import { GenerateFormProps, ProFormColumn } from "./typing";
import ProIcon from "@element-plus-ui/pro-icon";

const useFormContent = (formProps: GenerateFormProps, formCtx: SetupContext) => {
  const getFormItemProps = (item: ProFormColumn, model: Record<string, any>) => {
    const itemProps = pickObjectProperty(item, Object.keys(formItemProps) as any[]);
    return {
      ...itemProps,
      prop: item.dataField,
      label: typeof item.label === "function" ? item.label(model, formProps.columns as ProFormColumn[]) : item.label
    };
  };

  const getFieldProps = (item: ProFormColumn) => {
    const { label, valueType = "text", readonly } = item;
    return {
      ...pickObjectProperty(item, [
        "size",
        "marker",
        "request",
        "valueEnum",
        "separator",
        "placeholder",
        "mappingEnumValue",
        "fieldProps"
      ]),
      type: valueType,
      mode: readonly === true || formProps.readonly === true ? "read" : "edit",
      placeholder: formatPlaceholder(typeof label === "string" ? label : "", valueType)
    } as ProFieldProps;
  };

  const Content = (props: Record<string, any>, ctx: SetupContext) => {
    const model = props.modelValue !== void 0 ? useVModel(props, "modelValue", ctx.emit) : ref({});
    const { RowWrapper, ColWrapper } = useGridHelpers(props);
    return (
      <RowWrapper gutter={10} {...props?.rowProps}>
        {props.columns?.map((item: any, index: number) => {
          const { key, hidden, dataField, tooltip } = item;
          const id = key || dataField || index;
          const hide = typeof hidden === "function" ? hidden(model.value, formProps.columns) : hidden;
          if (hide === true) return null;
          if (item.is === "slot") {
            return <ColWrapper {...props.colProps} key={id} v-slots={{ default: () => formCtx.slots.default?.()[item.index] }} />;
          }
          if (item.is === "element") {
            return <ColWrapper {...props.colProps} key={id} v-slots={{ default: () => item }} />;
          }
          const formItemProps = getFormItemProps(item as ProFormColumn, model);
          const slotName = key || dataField;
          return (
            <ColWrapper key={id} {...props?.colProps}>
              <ElFormItem
                {...omitObjectProperty(formItemProps, ["label"])}
                v-slots={{
                  label: () => (
                    <ElSpace size={3} style={formProps.labelStyle}>
                      {tooltip && (
                        <ElTooltip placement={"top"} content={tooltip}>
                          <ProIcon.InfoFilled size={16} />
                        </ElTooltip>
                      )}
                      {formItemProps.label}
                    </ElSpace>
                  )
                }}
              >
                {slotName && formCtx.slots[slotName] ? (
                  formCtx.slots[slotName]?.()
                ) : (
                  <>
                    {dataField ? (
                      <ProField {...getFieldProps(item as ProFormColumn)} v-model={model.value[dataField]} />
                    ) : (
                      <ProField {...getFieldProps(item as ProFormColumn)} />
                    )}
                  </>
                )}
              </ElFormItem>
            </ColWrapper>
          );
        })}
        {ctx.slots?.submitter && ctx.slots?.submitter?.(ColWrapper)}
      </RowWrapper>
    );
  };

  return {
    Content
  };
};

export default useFormContent;
