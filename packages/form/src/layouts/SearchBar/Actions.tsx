/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-19 10:34:28
 * @LastEditTime: 2024-10-31 10:57:50
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\Actions.tsx
 */
import ProButton, { ProButtonProps } from "@element-plus-ui/pro-button";
import { ArrowDown, ArrowUp, Delete, Search } from "@element-plus/icons-vue";
import { isObject } from "@vueuse/core";
import { ElButton, ElIcon, ElSpace } from "element-plus";
import { SetupContext } from "vue-demi";
import { ProSearchBarProps } from "./typing";
import { SubmitterProps } from "../../core/GenerateForm/Submitter";

type ActionsProps = ProSearchBarProps & {
  onSubmit: (buttonProps: ProButtonProps) => void;
  onReset: (buttonProps: ProButtonProps) => void;
  onCollapse: (collapse: boolean) => void;
};

const Actions = (props: ActionsProps, ctx: SetupContext) => {
  // const searchButtonProps = isObject(props.searchButton) ? props.searchButton : {};
  // const resetButtonProps = isObject(props.resetButton) ? props.resetButton : {};
  const submitter = ctx.slots?.submitter?.() as Record<string, any>[];
  const isSubmitterUndefined = submitter?.length < 1 || String(submitter[0]?.type) === "Symbol(v-cmt)";

  const renderButton = () => {
    if (!isSubmitterUndefined) {
      return submitter;
    }

    if (props.submitter === false || (Array.isArray(props.submitter) && !props.submitter.length)) {
      return <></>;
    }

    if (Array.isArray(props.submitter) && props.submitter.length) {
      return (
        <>
          {props.submitter.map((config, i) => {
            return isObject(config) ? <ProButton key={i} {...config} /> : <></>;
          })}
        </>
      );
    }

    const config = isObject(props.submitter) ? (props.submitter as SubmitterProps) : {};

    return (
      <>
        {isSubmitterUndefined && (
          <ProButton
            type={"primary"}
            icon={Search}
            onClick={() => props.onSubmit(config?.submitButtonProps ?? {})}
            {...config?.submitButtonProps}
          >
            {config.submitButtonTitle || "查询"}
          </ProButton>
        )}
        {config.hideResetButton != true && isSubmitterUndefined && (
          <ProButton icon={Delete} onClick={() => props.onReset(config?.resetButtonProps ?? {})} {...config?.resetButtonProps}>
            {config.resetButtonTitle || "重置"}
          </ProButton>
        )}
      </>
    );
  };

  return (
    <ElSpace>
      {renderButton()}
      <ElButton type="primary" link onClick={() => props.onCollapse(!props.collapsed)}>
        <ElSpace>
          <span>{props.collapsed ? "收起" : "展开"}</span>
          <ElIcon>{props.collapsed ? <ArrowUp /> : <ArrowDown />}</ElIcon>
        </ElSpace>
      </ElButton>
    </ElSpace>
  );
};

export default Actions;
