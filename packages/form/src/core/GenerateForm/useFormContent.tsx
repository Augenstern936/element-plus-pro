/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-21 17:49:59
 * @LastEditTime: 2024-11-10 21:48:42
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\useFormContent.tsx
 */
import { ProField, ProFieldProps } from "@element-plus-ui/pro-field";
import { formatPlaceholder, omitObjectProperty, pickObjectProperty } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElFormItem, ElSpace, ElTooltip, formItemProps } from "element-plus";
import { SetupContext } from "vue-demi";
import { useGridHelpers } from "../helpers";
import { GenerateFormProps, ProFormColumn } from "./typing";
import ProIcon from "@element-plus-ui/pro-icon";

const useFormContent = (formProps: GenerateFormProps, formCtx: SetupContext) => {
  const getFormItemProps = (item: ProFormColumn, model: Record<string, any>) => {
    const itemProps = pickObjectProperty(item, Object.keys(formItemProps) as any[]);
    return {
      ...itemProps,
      prop: item.prop,
      label: typeof item.label === "function" ? item.label(model, item) : item.label
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
      ] as any[]),
      type: valueType,
      mode: readonly === true || formProps.readonly === true ? "read" : "edit",
      placeholder: formatPlaceholder(typeof label === "string" ? label : "", valueType)
    } as ProFieldProps;
  };

  const formatField = (field: string | Array<string>) => {
    if (typeof field === "string") {
      return field;
    }
    if (Array.isArray(field)) {
      return field.join(".");
    }
    return "";
  };

  const Content = (props: Record<string, any>, ctx: SetupContext) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const { RowWrapper, ColWrapper } = useGridHelpers(props);
    return (
      <RowWrapper gutter={10} {...props?.rowProps}>
        {props.columns?.map((item: any, index: number) => {
          const { key, hidden, prop, tooltip } = item;
          const id = key || prop || index;
          const hide = typeof hidden === "function" ? hidden(model.value, formProps.columns) : hidden;
          if (hide === true) return null;
          if (item.is === "slot") {
            return <ColWrapper {...props.colProps} key={id} v-slots={{ default: () => formCtx.slots.default?.()[item.index] }} />;
          }
          if (item.is === "element") {
            return <ColWrapper {...props.colProps} key={id} v-slots={{ default: () => item }} />;
          }
          const formItemProps = getFormItemProps(item as ProFormColumn, model);
          const slotName = key || prop;
          const proFieldProps = getFieldProps(item as ProFormColumn);
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
                    {prop ? (
                      <ProField
                        {...proFieldProps}
                        v-model={model.value[formatField(prop)]}
                        onChange={v => props?.onChange?.(formatField(prop), v)}
                        // fieldProps={{
                        //   ...proFieldProps.fieldProps,
                        //   onChange: v => {
                        //     props?.onChange?.(formatField(prop), v);
                        //     (proFieldProps?.fieldProps ?? ({} as any))?.onChange?.(v);
                        //   }
                        // }}
                      />
                    ) : (
                      <ProField {...proFieldProps} />
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
