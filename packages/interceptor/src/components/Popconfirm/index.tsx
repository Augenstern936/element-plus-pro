/*
 * @Description: 消息拦截器
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 20:50:58
 * @LastEditTime: 2024-12-15 17:48:18
 */
import { DefineComponent, defineComponent } from "vue-demi";
import { proInterceptorCommomProps, ProInterceptorProps } from "../../typing";
import { ElPopconfirm, popconfirmProps, PopconfirmProps } from "element-plus";
import { useSlotsDefault } from "../useSlotsDefault";

export interface ProPopconfirmInterceptorProps extends Partial<PopconfirmProps>, Omit<ProInterceptorProps, "response"> {}

export const ProPopconfirmInterceptor = defineComponent<ProPopconfirmInterceptorProps>(
  (props, ctx) => {
    const { Element } = useSlotsDefault(props, ctx.slots, () => {
      console.log("ProPopconfirmInterceptor-拦截器");
    });
    return () => (
      <ElPopconfirm {...props} title={props.title || "确定要执行此操作吗?"} v-slots={{ reference: () => Element.value }} />
    );
  },
  {
    name: "ProPopconfirmInterceptor"
  }
) as DefineComponent<ProPopconfirmInterceptorProps>;

ProPopconfirmInterceptor.props = {
  ...proInterceptorCommomProps,
  ...popconfirmProps
};
