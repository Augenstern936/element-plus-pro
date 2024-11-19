/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-10-05 22:47:22
 * @LastEditTime: 2024-10-10 10:44:48
 *
 */
import { ElIcon } from "element-plus";
import * as Icons from "@element-plus/icons-vue";
import { computed, defineComponent } from "vue-demi";
import { ProIconName, proIconProps, ProIconProps } from "./typing";
import type { DefineComponent, FunctionalComponent } from "vue-demi";

type ProIconSuperProps<T> = DefineComponent<T> & Record<ProIconName, FunctionalComponent<Omit<T, "name">>>;

const ProIcon = defineComponent<ProIconProps>(
  (props, ctx) => {
    const IconEelement = computed(() => Icons[(props.name as ProIconName) ?? "none"]);

    return () => <ElIcon {...props}>{ctx.slots?.default?.() || (IconEelement.value && <IconEelement.value />)}</ElIcon>;
  },
  {
    name: "ProIcon"
  }
) as ProIconSuperProps<ProIconProps>;

ProIcon.props = proIconProps;

for (const key in Icons) {
  ProIcon[key] = (props: Omit<ProIconProps, "name">) => {
    return <ProIcon {...props} name={key as ProIconName} />;
  };
}

export default ProIcon;
