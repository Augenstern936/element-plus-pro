/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-11-01 15:19:12
 * @FilePath: \element-plus-pro\packages\form\src\layouts\StepsForm\index.tsx
 */
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { computed, defineComponent, ref, watch } from "vue-demi";
import {
  ProStepsFormColumn,
  ProStepsFormProps,
  proStepsFormProps,
  ProStepsFormSuperProps,
  StepConfig,
  StepsIndexEnum
} from "./typing";
import { ElStep, ElSteps, vLoading } from "element-plus";
import { ProFormColumn } from "../Form";
import { ProContextProvider } from "@element-plus-ui/pro-context-provider";
import { isObject } from "@vueuse/core";
import { GenerateForm, Submitter } from "../../core";
import StepForm, { emitter } from "./StepForm";
import { useVModel } from "@vueuse/core";

const StepsForm = defineComponent<ProStepsFormProps>(
  (props, ctx) => {
    const active = ref(0);

    const model = props.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

    emitter.on("next", () => onAction("next"));

    emitter.on("prev", () => onAction("prev"));

    const steps = computed(() => {
      const slots = ctx.slots?.default?.();
      const slotConfigs = slots?.filter(({ __v_isVNode, type }: any) => __v_isVNode && type?.name === "ProStepForm");

      if (slotConfigs?.length) {
        return slotConfigs;
      }
      if (Array.isArray(props.steps) && props.steps.length) {
        return props.steps
          .filter(item => typeof item == "string" || isObject(item))
          .map((item: string | StepConfig, index) => {
            const columns = globalColumns.value[index] ?? [];
            if (typeof item === "string") {
              return {
                title: item,
                columns
              };
            }
            return { ...item, columns: Array.isArray(item.columns) ? item.columns : columns };
          });
      }
      return globalColumns.value?.map((columns, i) => ({
        title: `第${StepsIndexEnum[i]}步`,
        columns
      }));
    });

    /**
     * 处理全局columns属性数据，进行数据结构处理
     */
    const globalColumns = computed(() => {
      let columns: ProFormColumn[][] = [];
      let startIndex: null | number = null;
      if (Array.isArray(props.columns) && props.columns.length) {
        props.columns.forEach((item: ProStepsFormColumn, index) => {
          if (Array.isArray(item)) {
            columns.push(item as ProFormColumn[]);
          }
          if (isObject(item)) {
            startIndex = startIndex ?? index;
            columns[startIndex] = columns[startIndex] ? [...columns[startIndex], item as ProFormColumn] : [item as ProFormColumn];
          }
        });
      }
      return columns;
    });

    const onAction = (type: "next" | "prev" | "submit") => {
      if (type !== "submit") {
        active.value = type === "next" ? active.value + 1 : active.value - 1;
        return ctx.emit("activeChange", active.value);
      }
      ctx.emit("finish", {});
    };

    watch(
      () => props.active,
      v => {
        if (vLoading != void 0 && v !== active.value) {
          active.value = v as number;
        }
      },
      {
        immediate: true
      }
    );

    return () => (
      <div class={"pro-steps-form"}>
        {props.hideStepsBar !== true && steps.value.length > 1 && (
          <ElSteps simple finish-status="success" {...props.stepsProps} active={active.value}>
            {steps.value.map((step: Record<string, any>, i) => {
              if (step.__v_isVNode) {
                return <ElStep key={i} title={step?.props?.title} {...step?.props?.stepProps} />;
              }
              return <ElStep key={i} {...step} />;
            })}
          </ElSteps>
        )}
        {steps.value.map((config: StepConfig & { [x: string]: any }, i) => {
          return (
            <div
              key={i}
              style={{
                display: active.value === i ? "block" : "none",
                marginTop: "32px"
              }}
            >
              {config.__v_isVNode ? (
                <ProContextProvider
                  value={{
                    current: i,
                    total: steps.value.length,
                    submitter: isObject(props?.submitter) ? props.submitter : {}
                  }}
                >
                  {config}
                </ProContextProvider>
              ) : (
                <GenerateForm
                  {...omitObjectProperty(props, ["active", "stepsProps", "onFinish", "onActiveChange"])}
                  v-model={model.value}
                  columns={config.columns}
                  style={{ width: "50%", margin: "auto" }}
                  submitter={() => (
                    <Submitter
                      {...(isObject(props?.submitter) ? props.submitter : {})}
                      reversal={i !== 0}
                      hideResetButton={i === 0}
                      resetButtonTitle={"上一步"}
                      submitButtonProps={{
                        title: i + 1 === steps.value.length ? "提交" : "下一步",
                        onClick: () => {
                          if (i + 1 < steps.value.length) {
                            return onAction("next");
                          }
                          onAction("submit");
                        }
                      }}
                      onReset={() => onAction("prev")}
                    />
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
  {
    name: "ProStepForm"
  }
) as ProStepsFormSuperProps;

StepsForm.props = proStepsFormProps;

StepsForm["StepForm"] = StepForm;

export * from "./typing";

export type ProStepFormInstance = InstanceType<typeof StepForm>;

export type ProStepsFormInstance = InstanceType<typeof StepsForm>;

export const ProStepForm = withInstall(StepForm);

export const ProStepsForm = withInstall(StepsForm);
