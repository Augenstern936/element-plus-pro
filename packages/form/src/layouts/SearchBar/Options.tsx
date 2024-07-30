/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-18 21:25:23
 * @LastEditTime: 2024-07-27 16:47:22
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\Options.tsx
 */
import ProButton, { ProButtonProps } from "@element-plus-pro/button";
import { isObject } from "@vueuse/core";
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus";
import { computed, SetupContext } from "vue";
interface OptionsProps {
  trigger: any;
  buttons?: ProButtonProps[] | (() => JSX.Element);
  onClick?: (index: number) => void;
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

    return typeof buttons === "function" ? buttons() : buttons || "";
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
        <ProButton {...btnConfig} text={btnConfig.text ?? isText} key={index || "tool"} onClick={() => props.onClick?.(index)} />
      );
    }
    return null;
  };

  return <div class={"options"}>{slots.value.length ? renderSlots() : renderButtons()}</div>;
};

export default Options;
