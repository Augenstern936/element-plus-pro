/*
 * @Description:;
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2025-01-02 16:22:08
 *
 */
import "./dialog-form.scss";
import { pickObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import { proDialogFormProps, ProDialogFormProps } from "./typing";
import { FormInstance } from "element-plus";
import { ProDialog } from "@element-plus-ui/pro-dialog";
import { CreateForm, useSubmitter } from "../../core";
import { isObject, useVModel } from "@vueuse/core";
import { getFormRefExpose } from "../../core/utils";

const DialogForm = defineComponent<ProDialogFormProps>(
  (props, ctx) => {
    const formRef = ref<FormInstance>();

    const open = props.open != void 0 ? useVModel(props, "open", ctx.emit) : ref(false);

    const model = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const { Submitter, config } = useSubmitter(props.submitter, ctx);

    const columns = computed(() => {
      const slots = (ctx.slots?.default?.() ?? [])?.map((item: any) => {
        item["is"] = "element";
        return item;
      });
      return [...slots, ...(props?.columns ?? [])];
    });

    const slots = computed(() => {
      const slotMap: Record<string, any> = {
        ...ctx.slots,
        default: () => <CreateForm {...props} ref={formRef} columns={columns.value} submitter={false} v-model={model.value} />
      };
      if (props.readonly !== true) {
        slotMap["footer"] = () => (
          <Submitter
            {...config.value}
            align={config.value.align ?? "right"}
            reverse={config.value.reverse === void 0 ? true : !config.value.reverse}
            resetButtonTitle={config.value.resetButtonTitle ?? "取消"}
            submitButtonTitle={config.value.submitButtonTitle ?? "确定"}
            hideResetButton={config.value.hideResetButton ?? false}
            onReset={() => {
              if (typeof config.value.onReset === "function") {
                return config.value.onReset({});
              }
              ctx.emit("cancel");
              if (props.open != void 0) {
                return ctx.emit("update:open", false);
              }
              open.value = false;
            }}
            onSubmit={() => {
              if (!formRef.value) return;
              formRef.value.validate(async vaild => {
                if (vaild) {
                  const result = await props?.onFinish?.(model.value ?? {});
                  open.value = result === true ? false : open.value;
                } else {
                  ctx.emit("failed", model.value);
                }
              });
            }}
          />
        );
      }
      return slotMap;
    });

    ctx.expose({
      ...getFormRefExpose(formRef.value)
    });

    return () => (
      <ProDialog
        {...pickObjectProperty(props, ["title", "width", "trigger"])}
        {...props.dialogProps}
        v-model={open.value}
        v-slots={slots.value}
      />
    );
  },
  {
    name: "ProDialogForm"
  }
) as DefineComponent<ProDialogFormProps>;

DialogForm.props = proDialogFormProps;

export * from "./typing";

export type ProDialogFormInstance = InstanceType<typeof DialogForm>;

export const ProDialogForm = withInstall(DialogForm);
