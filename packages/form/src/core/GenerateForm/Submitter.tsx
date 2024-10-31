/*
 * @Description:表单操作器
 * @Author: wangbowen936926
 * @Date: 2024-06-16 20:02:37
 * @LastEditTime: 2024-10-29 21:27:14
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\Submitter.tsx
 */
import { ElButton } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { computed, CSSProperties, FunctionalComponent } from "vue-demi";
import type { JSX } from "vue/jsx-runtime";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";

interface ButtonProps extends ProButtonProps {
  style?: CSSProperties;
  onClick?: (e?: Record<string, any>) => void;
}

export interface SubmitterProps {
  submitButtonTitle?: string;
  resetButtonTitle?: string;
  hideResetButton?: boolean;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  fillMode?: "aequilate" | "full" | "auto";
  align?: "left" | "right" | "center";
  reversal?: boolean;
  render?: (props: SubmitterProps, doms?: JSX.Element[]) => JSX.Element | JSX.Element[];
  onSubmit?: (entity: Record<string, any>) => void;
  onReset?: (entity: Record<string, any>) => void;
}

const Submitter: FunctionalComponent<SubmitterProps> = props => {
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
    <ElButton type="primary" onClick={props.onSubmit} {...props?.submitButtonProps}>
      {props?.submitButtonProps?.title || props.submitButtonTitle || "提交"}
    </ElButton>,
    <ElButton type="default" onClick={props.onReset} {...props?.resetButtonProps}>
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

export default Submitter;
