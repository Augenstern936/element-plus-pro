/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-17 15:21:16
 * @LastEditTime: 2024-12-17 17:52:25
 */
import "./style.scss";
import { computed, DefineComponent, defineComponent, isVNode, ref } from "vue-demi";
import { proDrawerProps, ProDrawerProps } from "./typing";
import { ElDrawer, buttonProps } from "element-plus";
import { useVModel } from "@vueuse/core";
import ProButton, { ProButtonProps } from "@element-plus-ui/pro-button";
import { isObject } from "@vue/shared";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";

const ProDrawer = defineComponent<ProDrawerProps>((props, ctx) => {
  const model = props.modelValue !== void 0 ? useVModel(props, "modelValue") : ref(false);

  /**
   * 处理通过插槽指定的触发器
   */
  const slotsTrigger = computed(() => {
    const node = ctx.slots.trigger?.({ open })[0] as any;
    const onClick = node.props.onClick;
    node.props.onClick = (...args: any[]) => {
      return typeof onClick !== "function" ? open() : onClick(...args);
    };
    return node;
  });

  /**
   * 处理通过props指定的触发器
   */
  const propsTrigger = computed(() => {
    if (isVNode(props.trigger)) {
      props.trigger.props = isObject(props.trigger.props) ? props.trigger.props : {};
      const onClick = props.trigger.props?.onClick;
      props.trigger.props.onClick = (...args: any[]) => {
        return typeof onClick !== "function" ? open() : onClick(...args);
      };
    }
    if (isObject(props.trigger)) {
      const config = pickObjectProperty(props.trigger, [...Object.keys(buttonProps), "title"] as any) as ProButtonProps;
      return Object.keys(config).length ? <ProButton {...config} onClick={() => open()} /> : null;
    }
    if (typeof props.trigger === "function") {
      const nodeOrBtnProps = (props.trigger as Function)({ open });
      return isVNode(nodeOrBtnProps) ? nodeOrBtnProps : isObject(nodeOrBtnProps) ? <ProButton {...nodeOrBtnProps} /> : null;
    }
    return null;
  });

  const open = () => {
    model.value = true;
  };

  const close = () => {
    model.value = false;
  };

  return () => (
    <>
      {ctx.slots["trigger"] ? slotsTrigger.value : propsTrigger.value}
      <ElDrawer
        {...props}
        {...ctx.attrs}
        class={"pro-drawer"}
        style={{
          "--title-size": !Number.isNaN(props.titleSize) ? `${props.titleSize}px` : props.titleSize,
          "--title-color": props.titleColor,
          "--title-weight": props.titleWeight || 600
        }}
        v-model={model.value}
        v-slots={{
          ...ctx.slots,
          footer: () => (ctx.slots["footer"] ? ctx.slots.footer({ close }) : "")
        }}
      />
    </>
  );
}) as DefineComponent<ProDrawerProps>;

ProDrawer.props = proDrawerProps;

export default ProDrawer;
