/*
 * @Description:
 * @Date: 2024-06-17 10:01:38
 * @LastEditTime: 2024-07-09 17:09:44
 */
import ProCenterContainer from "@element-plus-pro/center-container";
import { checkValueIsComponent, withInstall } from "@element-plus-pro/utils";
import { ElEmpty, ElTabPane, ElTabs } from "element-plus";
import type { FunctionalComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import props from "./props";
import "./style/index.scss";
import type { ProTabsProps, TabsPane } from "./typing";

const ProTabs = defineComponent(
  (props: ProTabsProps, ctx) => {
    const activeTab = computed({
      get: () => props.modelValue,
      set: v => ctx.emit("update:modelValue", v)
    });

    const onTabChange = (name: string | number) => {
      ctx.emit("change", name);
      ctx.emit("update:modelValue", name);
    };

    /**
     * 渲染tab标签
     * @param param0
     * @returns
     */
    const RenderTabLabel = ({ label, badge }: TabsPane) => {
      if (typeof badge === "string" && Number.isNaN(Number(badge))) {
        badge = 0;
        console.warn("Badge field value incorrect!");
      } else {
        badge = Number(badge);
      }

      return (
        <>
          {label} {badge ? <span class="badge">{badge > 99 ? "99+" : badge}</span> : ""}
        </>
      );
    };

    /**
     * 渲染面板内容
     * @param render
     * @param name
     * @returns
     */
    const RenderPaneConetnt = (pane: Record<string, any>) => {
      const { value, empty, props: renderContentProps = {}, render } = pane;
      if (ctx.slots[value]) {
        return ctx.slots[value]?.();
      }
      if (render) {
        if (typeof render !== "function") {
          throw new TypeError("render not a function");
        }
        const RenderContent = render(renderContentProps);
        const EmptyContent =
          empty && empty != true ? (
            <ProCenterContainer>{empty}</ProCenterContainer>
          ) : props.empty && props.empty != true ? (
            <ProCenterContainer>{props.empty}</ProCenterContainer>
          ) : (
            <ElEmpty image-size={100} />
          );
        return checkValueIsComponent(RenderContent) ? <RenderContent {...renderContentProps} /> : RenderContent || EmptyContent;
      }
      if (ctx.slots.default) {
        return ctx.slots.default?.();
      }

      if (empty === false) {
        return;
      }

      if (empty && empty != true) {
        return <ProCenterContainer>{checkValueIsComponent(empty) ? <empty /> : empty}</ProCenterContainer>;
      }

      const globalEmpty = props.empty;

      if (globalEmpty === false) {
        return;
      }

      if (globalEmpty && globalEmpty !== true) {
        return <ProCenterContainer>{checkValueIsComponent(globalEmpty) ? <globalEmpty /> : globalEmpty}</ProCenterContainer>;
      }

      return <ElEmpty image-size={100} />;
    };

    return () => (
      <ElTabs
        class="pro-tabs"
        v-model={activeTab.value}
        {...props.tabsProps}
        before-leave={props.beforeChange}
        onTabChange={onTabChange}
      >
        {props.panes?.map((item: TabsPane) => (
          <ElTabPane name={item.value} key={item.value}>
            {{
              label: () => <RenderTabLabel {...item} />,
              default: () => RenderPaneConetnt(item)
            }}
          </ElTabPane>
        ))}
      </ElTabs>
    );
  },
  {
    name: "ProTabs"
  }
) as unknown as FunctionalComponent;

ProTabs.props = props;

export default withInstall(ProTabs);
