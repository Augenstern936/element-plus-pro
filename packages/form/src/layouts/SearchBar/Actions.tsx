/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-19 10:34:28
 * @LastEditTime: 2024-11-17 21:33:41
 *
 */
import ProButton, { ProButtonProps } from "@element-plus-ui/pro-button";
import { Delete, ProIcon, Search } from "@element-plus-ui/pro-icon";
import { isObject } from "@vueuse/core";
import { ElButton, ElSpace } from "element-plus";
import { SetupContext } from "vue-demi";
import { ProSearchBarProps } from "./typing";
import { SubmitterConfigProps } from "../Form";
import mitt from "mitt";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";

type ActionsProps = ProSearchBarProps & {
  onSubmit: (buttonProps: ProButtonProps) => void;
  onReset: (buttonProps: ProButtonProps) => void;
  onCollapse: (collapse: boolean) => void;
};

export const emitter = mitt();

export const Actions = (props: ActionsProps, ctx: SetupContext) => {
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
            return isObject(config) ? (
              <ProButton
                key={i}
                {...omitObjectProperty(config, ["onClick"])}
                onClick={() => {
                  if (typeof config.onClick !== "function") return;
                  emitter.emit("submitter-config-click", config);
                }}
              />
            ) : (
              ""
            );
          })}
        </>
      );
    }

    const config = isObject(props.submitter) ? (props.submitter as SubmitterConfigProps) : {};

    return (
      <>
        {isSubmitterUndefined && (
          <ProButton
            type={"primary"}
            icon={Search}
            {...config?.submitButtonProps}
            onClick={() => props.onSubmit(config?.submitButtonProps ?? {})}
          >
            {config.submitButtonTitle || "查询"}
          </ProButton>
        )}
        {config.hideResetButton != true && isSubmitterUndefined && (
          <ProButton icon={Delete} {...config?.resetButtonProps} onClick={() => props.onReset(config?.resetButtonProps ?? {})}>
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
          <ProIcon name={props.collapsed ? "ArrowUp" : "ArrowDown"} />
        </ElSpace>
      </ElButton>
    </ElSpace>
  );
};
