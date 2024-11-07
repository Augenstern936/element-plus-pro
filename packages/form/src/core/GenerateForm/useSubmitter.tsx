/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-11-03 20:20:00
 * @LastEditTime: 2024-11-04 22:42:46
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\useSubmitter.tsx
 */
import { ProFormSubmitter, SubmitterConfigProps } from "./typing";
import { ElButton } from "element-plus";
import ProButton from "@element-plus-ui/pro-button";
import { computed, DefineComponent, FunctionalComponent } from "vue-demi";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject } from "@vueuse/core";

export const useSubmitter = (submitter?: ProFormSubmitter) => {
  const Render = computed(() => {
    if (typeof submitter === "function") {
      return (props: SubmitterConfigProps) => submitter();
    }
    if (Array.isArray(submitter) && submitter.length) {
      return (props: SubmitterConfigProps) => (
        <>
          {submitter.map((config, index) => (
            <ProButton key={index} {...config} />
          ))}
        </>
      );
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
  const isRenderSubmitter = computed(() => {
    return props?.render?.(props)?.type?.name === "Submitter";
  });

  const getGridTemplateColumns = () => {
    const total = props.hideResetButton === true ? 1 : 2;
    const width = {
      auto: "repeat(2, 0fr)",
      full: "repeat(1, 1fr)",
      aequilate: `repeat(${total}, 1fr)`
    };
    return width[props.fillMode || "auto"];
  };

  const actions = computed(() => [
    <ElButton type="primary" {...props?.submitButtonProps} onClick={props.onSubmit}>
      {props?.submitButtonProps?.title || props.submitButtonTitle || "提交"}
    </ElButton>,
    <ElButton type="default" {...props?.resetButtonProps} onClick={props.onReset}>
      {props?.resetButtonProps?.title || props.resetButtonTitle || "重置"}
    </ElButton>
  ]);

  const renderButton = () => {
    if (typeof props.render === "function") {
      return props.render(omitObjectProperty(props, ["render"]));
    }
    return (
      <>
        {actions.value[props.reversal === true ? 1 : 0]}
        {props.hideResetButton !== true && actions.value[props.reversal === true ? 0 : 1]}
      </>
    );
  };

  if (isRenderSubmitter.value) {
    return renderButton();
  }

  return (
    <div
      class={"submitter-box"}
      style={{
        width: "100%",
        justifyContent: ["left", "right", "center"].includes(props.align ?? "left") ? props.align : "left",
        gridTemplateColumns: getGridTemplateColumns()
      }}
    >
      {renderButton()}
    </div>
  );
};
