/*
 * @Description:
 * @Date: 2024-06-17 10:01:37
 * @LastEditTime: 2024-12-17 14:31:03
 */
import { toCssUnitValue, withInstall } from "@element-plus-ui/pro-utils";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import props from "./props";
import "./styles/index.scss";
import type { ProCenterContainerProps } from "./typing";

const ProCenterContainer = defineComponent(
  (props: ProCenterContainerProps, ctx) => {
    const whStyle = computed(() => {
      return {
        width: toCssUnitValue(props.width || "100%"),
        height: toCssUnitValue(props.height || "100%")
      };
    });

    return () => (
      <div class="pro-center-container" style={whStyle.value}>
        {ctx.slots.default?.()}
      </div>
    );
  },
  {
    name: "ProCenterContainer"
  }
) as DefineComponent<ProCenterContainerProps>;

ProCenterContainer.props = props;

export default withInstall(ProCenterContainer);
