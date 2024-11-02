/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-11-01 17:48:22
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\index.tsx
 */
import "./drawer-form.scss";
import { withInstall } from "@element-plus-ui/pro-utils";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import { proDrawerFormProps, ProDrawerFormProps } from "./typing";
import { ElDrawer } from "element-plus";
import { ProButton } from "@element-plus-ui/pro-button";
import { GenerateForm, Submitter } from "../../core";
import { isObject, useVModel } from "@vueuse/core";
import { SubmitterProps } from "../../core/GenerateForm/Submitter";
import { getFormRefExpose } from "../../core/utils";

const DrawerForm = defineComponent<ProDrawerFormProps>(
  (props, ctx) => {
    const formRef = ref();

    const open = props.open != void 0 ? useVModel(props, "open", ctx.emit) : ref(false);

    const model = props.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

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
    name: "ProDrawerForm"
  }
) as DefineComponent<ProDrawerFormProps>;

DrawerForm.props = proDrawerFormProps;

export * from "./typing";

export type ProDrawerFormInstance = InstanceType<typeof DrawerForm>;

export const ProDrawerForm = withInstall(DrawerForm);
