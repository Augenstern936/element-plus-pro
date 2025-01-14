/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-19 14:20:57
 * @LastEditTime: 2025-01-03 10:38:08
 */
import { ElRadio, ElRadioButton, ElRadioGroup, ElSegmented, ElTabPane, ElTabs } from "element-plus";
import { DefineComponent, PropType, VNode, computed, defineComponent, ref, watch, ExtractPropTypes } from "vue-demi";

const menuProps = {
  variant: {
    type: String as PropType<"tab" | "radio" | "radio-button" | "segmented">,
    default: "tab"
  },
  defaultActive: [String, Number, Boolean],
  items: {
    type: Array as PropType<{ label: string; value: string | number }[]>,
    default: []
  },
  onChange: Function
};

export type MenuProps = ExtractPropTypes<typeof menuProps>;

const Menu = defineComponent<MenuProps>((props, ctx) => {
  const active = ref(props.defaultActive);
  const Options = computed(() => {
    if (props?.variant === "segmented") {
      return <ElSegmented v-model={active.value} options={props.items} onChange={v => props?.onChange?.(v)} />;
    }
    let items = [] as VNode[];
    if (Array.isArray(props.items) && props.items.length) {
      items = props.items?.map(item => {
        if (props?.variant === "radio") {
          return (
            <ElRadio key={item.value} value={item.value}>
              {item.label}
            </ElRadio>
          );
        }
        if (props?.variant === "radio-button") {
          return (
            <ElRadioButton key={item.value} value={item.value}>
              {item.label}
            </ElRadioButton>
          );
        }
        return <ElTabPane key={item.value} name={item.value} label={item.label} />;
      });
    }
    if (!items.length) return null;
    if (props?.variant === void 0 || props?.variant === "tab") {
      return (
        <ElTabs v-model={active.value} onTabChange={v => props?.onChange?.(v)}>
          {items}
        </ElTabs>
      );
    }
    return (
      <ElRadioGroup v-model={active.value} onChange={v => props?.onChange?.(v)}>
        {items}
      </ElRadioGroup>
    );
  });

  watch(
    () => props.defaultActive,
    v => {
      active.value = v;
    }
  );

  return () => Options.value;
}) as DefineComponent<MenuProps>;

Menu.props = menuProps;

export default Menu;
