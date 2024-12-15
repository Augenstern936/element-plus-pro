/*
 * @Description: 事件拦截器
 * @Date: 2024-12-13 10:58:54
 * @LastEditTime: 2024-12-15 14:30:45
 */
import { computed, defineComponent } from "vue-demi";
import { InterceptorSuperProps, ProInterceptorProps } from "./typing";
import components from "./components";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";

export const Interceptor = defineComponent<ProInterceptorProps>(
  (props, ctx) => {
    const Response = computed(() => {
      if (props?.response?.type) {
        return components[props?.response.type] ?? components.Message;
      }
      return components.Message;
    });

    return () => (
      <Response.value {...props?.response?.props} {...pickObjectProperty(props, ["trigger", "condition"])} v-slots={ctx.slots} />
    );
  },
  {
    name: "ProInterceptor"
  }
) as InterceptorSuperProps;

for (const key in components) {
  Interceptor[key] = components[key as keyof typeof components];
}
