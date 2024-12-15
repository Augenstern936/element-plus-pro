/*
 * @Description: 消息拦截器
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 20:50:58
 * @LastEditTime: 2024-12-15 17:40:16
 */
import { DefineComponent, defineComponent } from "vue-demi";
import { proInterceptorCommomProps, ProInterceptorProps } from "../../typing";
import { ElNotification, notificationProps, NotificationProps } from "element-plus";
import { useSlotsDefault } from "../useSlotsDefault";

export interface ProNotificationInterceptorProps extends Partial<NotificationProps>, Omit<ProInterceptorProps, "response"> {}

export const ProNotificationInterceptor = defineComponent<ProNotificationInterceptorProps>(
  (props, ctx) => {
    const { Element } = useSlotsDefault(props, ctx.slots, () => {
      ElNotification({
        ...props,
        type: props.type || "warning",
        title: props.title || "温馨提示",
        message: props.message || "暂无操作权限"
      });
    });
    return () => Element.value;
  },
  {
    name: "ProNotificationInterceptor"
  }
) as DefineComponent<ProNotificationInterceptorProps>;

ProNotificationInterceptor.props = {
  ...proInterceptorCommomProps,
  ...notificationProps
};
