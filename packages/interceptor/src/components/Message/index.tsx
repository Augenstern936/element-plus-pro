/*
 * @Description: 消息拦截器
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 20:50:58
 * @LastEditTime: 2024-12-15 17:40:24
 */
import { DefineComponent, defineComponent } from "vue-demi";
import { proInterceptorCommomProps, ProInterceptorProps } from "../../typing";
import { ElMessage, MessageProps, messageProps } from "element-plus";
import { useSlotsDefault } from "../useSlotsDefault";

export interface ProMessageInterceptorProps extends Partial<MessageProps>, Omit<ProInterceptorProps, "response"> {}

export const ProMessageInterceptor = defineComponent<ProMessageInterceptorProps>(
  (props, ctx) => {
    const { Element } = useSlotsDefault(props, ctx.slots, () => {
      ElMessage({
        type: "warning",
        message: "暂无操作权限",
        ...props
      });
    });

    return () => Element.value;
  },
  {
    name: "ProMessageInterceptor"
  }
) as DefineComponent<ProMessageInterceptorProps>;

ProMessageInterceptor.props = {
  ...proInterceptorCommomProps,
  ...messageProps
};
