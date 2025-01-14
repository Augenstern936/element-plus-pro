/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-18 21:25:23
 * @LastEditTime: 2024-12-20 14:03:57
 *
 */
import ProButton, { ProButtonProps } from "@element-plus-ui/pro-button";
import { isObject } from "@vueuse/core";
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { computed, SetupContext, VNode } from "vue-demi";
interface OptionsProps {
  model: Record<string, any>;
  trigger: any;
  buttons?: ProButtonProps[] | ((entity: Record<string, any>) => string | number | VNode);
}

const Options = (props: OptionsProps, ctx: SetupContext) => {
  const slots = computed(() => {
    const contents = ctx.slots?.default?.() || [];
    return contents.filter(({ type }) => String(type) != "Symbol(Comment)" && String(type) != "Symbol(v-cmt)");
  });

  const renderButtons = () => {
    const buttons = props.buttons;
    if (Array.isArray(buttons) && buttons.length > 1) {
      return (
        <ElDropdown
          v-slots={{
            dropdown: () => (
              <ElDropdownMenu>
                {buttons.map((btn: ProButtonProps, index: number) => (
                  <ElDropdownItem key={index}>{generateButtonElement(btn, true) || btn}</ElDropdownItem>
                ))}
              </ElDropdownMenu>
            )
          }}
        >
          {props.trigger}
        </ElDropdown>
      );
    }

    if (Array.isArray(buttons) && buttons.length === 1) {
      return generateButtonElement(buttons[0], false);
    }

    if (isObject(buttons) && Reflect.ownKeys(buttons).length) {
      return generateButtonElement(buttons, false);
    }

    return typeof buttons === "function" ? buttons(props.model) : buttons || "";
  };

  const renderSlots = () => {
    if (slots.value.length > 1) {
      return (
        <ElDropdown
          v-slots={{
            dropdown: () => (
              <ElDropdownMenu>
                {slots.value.map((el, index) => (
                  <ElDropdownItem key={index}>{[el]}</ElDropdownItem>
                ))}
              </ElDropdownMenu>
            )
          }}
        >
          {props.trigger}
        </ElDropdown>
      );
    }
    return [slots.value[0]];
  };

  const generateButtonElement = (btnConfig: ProButtonProps & { [x: string]: any }, isText: boolean, index: number = 0) => {
    if (!btnConfig.__v_isVNode && Object.keys(btnConfig)?.length) {
      return (
        <ProButton
          {...omitObjectProperty(btnConfig, ["onClick"])}
          text={btnConfig.text ?? isText}
          key={index || "tool"}
          onClick={() => btnConfig?.onClick?.(props.model)}
        />
      );
    }
    return null;
  };

  return <div class={"options"}>{slots.value.length ? renderSlots() : renderButtons()}</div>;
};

export default Options;
