/*
 * @Description: 提交器
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-11-03 20:20:00
 * @LastEditTime: 2024-11-19 10:58:05
 */
import { ProFormSubmitter, SubmitterConfigProps } from "./typing";
import { ElButton } from "element-plus";
import ProButton from "@element-plus-ui/pro-button";
import { computed, DefineComponent, FunctionalComponent, inject, SetupContext, VNode } from "vue-demi";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject } from "@vueuse/core";

export const useSubmitter = (submitter?: ProFormSubmitter, ctx?: SetupContext) => {
  const Render = computed(() => {
    if (ctx?.slots.submitter || typeof submitter === "function" || Array.isArray(submitter)) {
      return (props: SubmitterConfigProps) => {
        return (
          <Submitter
            {...props}
            render={(_, doms) => {
              console.log(_, "_");
              if (ctx?.slots.submitter) {
                return ctx.slots.submitter?.({ props: _, doms });
              }
              if (typeof submitter === "function") {
                return submitter(_, doms);
              }
              return (submitter as any[])?.map((config, index) => (
                <ProButton key={index} {...omitObjectProperty(config, ["onClick"])} onClick={e => config?.onClick?.(_)} />
              ));
            }}
          />
        );
      };
    }
    return Submitter;
  });

  return {
    Submitter: Render.value as DefineComponent<SubmitterConfigProps> | FunctionalComponent<SubmitterConfigProps>,
    config: computed(() => {
      return (isObject(submitter) ? submitter : {}) as SubmitterConfigProps;
    })
  };
};

const Submitter: FunctionalComponent<SubmitterConfigProps> = props => {
  const submitterNotColWrapper = inject("submitterNotColWrapper", false) as boolean;

  const getGridTemplateColumns = (total: number) => {
    const width = {
      auto: `repeat(${total}, 0fr)`,
      full: `repeat(1, 1fr)`,
      aequilate: `repeat(${total}, 1fr)`
    };
    return width[props.fillMode || "auto"];
  };

  /**
   * 操作器
   */
  const actions = computed(() => {
    const submitElement = (
      <ElButton type="primary" {...props?.submitButtonProps} onClick={props?.submitButtonProps?.onClick ?? props.onSubmit}>
        {props?.submitButtonProps?.title || props.submitButtonTitle || "提交"}
      </ElButton>
    );
    const resetElement = (
      <ElButton type="default" {...props?.resetButtonProps} onClick={props?.resetButtonProps?.onClick ?? props.onReset}>
        {props?.resetButtonProps?.title || props.resetButtonTitle || "重置"}
      </ElButton>
    );

    const elements = props.hideResetButton === true ? [submitElement] : [submitElement, resetElement];

    return props.reverse === true ? elements.reverse() : elements;
  });

  const renderButton = () => {
    let dom: VNode | Array<VNode> = <>{...actions.value}</>;
    if (typeof props.render === "function") {
      dom = props.render(omitObjectProperty(props, ["render"]), props.reverse === true ? actions.value.reverse() : actions.value);
    }
    if (submitterNotColWrapper === true) {
      return <>{Array.isArray(dom) ? props.reverse === true ? <>{...dom.reverse()}</> : <>{...dom}</> : dom}</>;
    }
    return (
      <div
        class={"submitter-box"}
        style={{
          width: "100%",
          justifyContent: ["left", "right", "center"].includes(props.align ?? "left") ? props.align : "left",
          gridTemplateColumns: getGridTemplateColumns(Array.isArray(dom) ? dom.length : actions.value.length)
        }}
      >
        {Array.isArray(dom) ? props.reverse === true ? <>{...dom.reverse()}</> : <>{...dom}</> : dom}
      </div>
    );
  };

  return renderButton();
};
