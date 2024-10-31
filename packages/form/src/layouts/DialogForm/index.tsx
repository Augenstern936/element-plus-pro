/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-10-31 12:00:29
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\index.tsx
 */
import "./dialog-form.scss";
import { withInstall } from "@element-plus-ui/pro-utils";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import { proDialogFormProps, ProDialogFormProps } from "./typing";
import { ElDialog } from "element-plus";
import { ProButton } from "@element-plus-ui/pro-button";
import { GenerateForm, Submitter } from "../../core";
import { isObject, useVModel } from "@vueuse/core";
import { SubmitterProps } from "../../core/GenerateForm/Submitter";

const DialogForm = defineComponent<ProDialogFormProps>(
  (props, ctx) => {
    const formRef = ref();

    const open = props.open != void 0 ? useVModel(props, "open", ctx.emit) : ref(false);

    const TriggerElement = computed(() => {
      if (typeof props.trigger === "function") {
        return props.trigger();
      }
      if (isObject(props.trigger)) {
        return (
          <ProButton
            {...props.trigger}
            onClick={() => {
              open.value = !open.value;
            }}
          />
        );
      }
      return <></>;
    });

    const columns = computed(() => {
      const slots = (ctx.slots?.default?.() ?? [])?.map((item: any) => {
        item["is"] = "element";
        return item;
      });

      const columnsConfig = props?.columns ?? [];

      return [...slots, ...columnsConfig];
    });

    ctx.expose({
      validate: () => formRef.value?.validate(),
      validateField: () => formRef.value?.validateField(),
      resetFields: () => formRef.value?.resetFields(),
      scrollToField: () => formRef.value?.scrollToField(),
      clearValidate: () => formRef.value?.clearValidate(),
      fields: () => formRef.value?.fields()
    });

    return () => (
      <div
        class={"pro-dialog-form"}
        style={{
          "--title-size": !Number.isNaN(props.titleSize) ? `${props.titleSize}px` : props.titleSize,
          "--title-color": props.titleColor,
          "--title-weight": props.titleWeight || 600
        }}
      >
        {TriggerElement.value}
        <ElDialog
          title={props.title}
          width={props.width}
          {...props.dialogProps}
          v-model={open.value}
          v-slots={{
            default: () => <GenerateForm {...props} ref={formRef} columns={columns.value} submitter={false} />,
            footer: () => {
              if (props.submitter === false) {
                return "";
              }
              if (typeof props.submitter === "function") {
                return (props.submitter as Function)();
              }
              if (Array.isArray(props.submitter) && props.submitter.length) {
                return props.submitter.map((config, index) => <ProButton key={index} {...config} />);
              }
              const config = isObject(props.submitter) ? (props.submitter as SubmitterProps) : {};
              return (
                <Submitter
                  {...config}
                  align={config.align ?? "right"}
                  reversal={config.reversal ?? true}
                  resetButtonTitle={config.resetButtonTitle ?? "取消"}
                  submitButtonTitle={config.submitButtonTitle ?? "确定"}
                  hideResetButton={config.hideResetButton ?? false}
                  onReset={() => {
                    if (typeof config.onReset === "function") {
                      return config.onReset({});
                    }
                    ctx.emit("cancel");
                    if (props.open != void 0) {
                      return ctx.emit("update:open", false);
                    }
                    open.value = false;
                  }}
                  onSubmit={v => {
                    if (typeof config.onSubmit === "function") {
                      return config.onSubmit(v);
                    }
                    ctx.emit("confirm", v);
                  }}
                />
              );
            }
          }}
        />
      </div>
    );
  },
  {
    name: "ProDialogForm"
  }
) as DefineComponent<ProDialogFormProps>;

DialogForm.props = proDialogFormProps;

export * from "./typing";

export const ProDialogForm = withInstall(DialogForm);
