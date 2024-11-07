/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-11-06 16:42:43
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\index.tsx
 */
import "./drawer-form.scss";
import { withInstall } from "@element-plus-ui/pro-utils";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import { proDrawerFormProps, ProDrawerFormProps } from "./typing";
import { ElDrawer, FormInstance } from "element-plus";
import { ProButton } from "@element-plus-ui/pro-button";
import { GenerateForm, useSubmitter } from "../../core";
import { isObject, useVModel } from "@vueuse/core";
import { getFormRefExpose } from "../../core/utils";

const DrawerForm = defineComponent<ProDrawerFormProps>(
  (props, ctx) => {
    const formRef = ref<FormInstance>();

    const open = props.open != void 0 ? useVModel(props, "open", ctx.emit) : ref(false);

    const model = props.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const { Submitter, config } = useSubmitter(props.submitter);

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
      return "";
    });

    const columns = computed(() => {
      const slots = (ctx.slots?.default?.() ?? [])?.map((item: any) => {
        item["is"] = "element";
        return item;
      });
      return [...slots, ...(props?.columns ?? [])];
    });

    ctx.expose({
      ...getFormRefExpose(formRef.value)
    });

    return () => (
      <div
        class={"pro-drawer-form"}
        style={{
          "--title-size": !Number.isNaN(props.titleSize) ? `${props.titleSize}px` : props.titleSize,
          "--title-color": props.titleColor,
          "--title-weight": props.titleWeight || 600
        }}
      >
        {TriggerElement.value}
        <ElDrawer
          title={props.title}
          width={props.width}
          {...props.DrawerProps}
          v-model={open.value}
          v-slots={{
            default: () => (
              <GenerateForm {...props} ref={formRef} columns={columns.value} submitter={false} v-model={model.value} />
            ),
            footer: () => (
              <Submitter
                {...config.value}
                align={config.value.align ?? "right"}
                reversal={config.value.reversal ?? true}
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
                onSubmit={v => {
                  if (!formRef.value) return;
                  formRef.value.validate(vaild => {
                    if (vaild) {
                      ctx.emit("finish", model.value);
                    } else {
                      ctx.emit("failed", model.value);
                    }
                  });
                }}
              />
            )
          }}
        />
      </div>
    );
  },
  {
    name: "ProDrawerForm"
  }
) as DefineComponent<ProDrawerFormProps>;

DrawerForm.props = proDrawerFormProps;

export * from "./typing";

export type ProDrawerFormInstance = InstanceType<typeof DrawerForm>;

export const ProDrawerForm = withInstall(DrawerForm);
