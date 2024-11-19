/*
 * @Description: 分布表单;
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-11-19 11:27:40
 *
 */
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { computed, defineComponent, ref, watch } from "vue-demi";
import { ProStepsFormProps, proStepsFormProps, ProStepsFormSuperProps, StepConfig, StepsIndexEnum } from "./typing";
import { ElStep, ElSteps, vLoading } from "element-plus";
import { ProFormColumn } from "../Form";
import { ProProvider } from "@element-plus-ui/pro-provider";
import { CreateForm, useSubmitter } from "../../core";
import StepForm, { emitter } from "./StepForm";
import { useVModel, isObject } from "@vueuse/core";

const StepsForm = defineComponent<ProStepsFormProps>(
  (props, ctx) => {
    const active = ref(0);

    const model = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

    emitter.on("next", () => onAction("next"));

    emitter.on("prev", () => onAction("prev"));

    emitter.on("submit", () => onAction("submit"));

    emitter.on("failed", () => onAction("failed"));

    const { config: submitterConfig } = useSubmitter(props.submitter);

    /**
     * 数据归并，统一处理
     */
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
        props.columns.forEach((item, index) => {
          if (Array.isArray(item)) {
            columns.push(item as ProFormColumn[]);
          }
          if (isObject(item)) {
            startIndex = startIndex ?? index;
            columns[startIndex] = (columns[startIndex] ? [...columns[startIndex], item] : [item]) as ProFormColumn[];
          }
        });
      }
      return columns;
    });

    const onAction = async (type: "next" | "prev" | "submit" | "failed") => {
      if (type !== "submit") {
        active.value = type === "next" ? active.value + 1 : active.value - 1;
        return ctx.emit("activeChange", active.value);
      }
      if (type === "submit") {
        const result = await props?.onFinish?.(model.value ?? {});
        if (result === true) {
          active.value = steps.value.length + 1;
          setTimeout(() => {
            active.value = 0;
          }, 500);
        }
        return;
      }
      ctx.emit("failed", model.value);
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
          const length = steps.value.length;
          return (
            <div
              key={i}
              style={{
                display: active.value === i || (i + 1 === length && active.value > length) ? "block" : "none",
                marginTop: "32px"
              }}
            >
              {config.__v_isVNode ? (
                <ProProvider
                  value={{
                    current: i,
                    total: steps.value.length,
                    submitter: isObject(props?.submitter) ? props.submitter : {}
                  }}
                >
                  {config}
                </ProProvider>
              ) : (
                <CreateForm
                  {...omitObjectProperty(props, ["active", "stepsProps", "onFinish", "onActiveChange"])}
                  v-model={model.value}
                  columns={config.columns}
                  style={{ width: "50%", margin: "auto" }}
                  submitter={{
                    ...submitterConfig.value,
                    reverse: i !== 0,
                    hideResetButton: i === 0,
                    resetButtonTitle: "上一步",
                    submitButtonProps: {
                      title: i + 1 === steps.value.length ? "提交" : "下一步",
                      onClick: () => {
                        if (i + 1 < steps.value.length) {
                          return onAction("next");
                        }
                        onAction("submit");
                      }
                    },
                    onReset: () => onAction("prev")
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
  {
    name: "ProStepsForm"
  }
) as ProStepsFormSuperProps;

StepsForm.props = proStepsFormProps;

StepsForm["StepForm"] = StepForm;

export * from "./typing";

export type ProStepFormInstance = InstanceType<typeof StepForm>;

export type ProStepsFormInstance = InstanceType<typeof StepsForm>;

export const ProStepForm = withInstall(StepForm);

export const ProStepsForm = withInstall(StepsForm);
