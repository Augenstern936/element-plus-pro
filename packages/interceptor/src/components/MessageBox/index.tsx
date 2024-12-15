/*
 * @Description: 消息拦截器
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 20:50:58
 * @LastEditTime: 2024-12-15 15:31:10
 */
import { defineComponent } from "vue-demi";
import { ElMessageBoxOptions, MessageBoxType } from "element-plus";
import { ProInterceptorProps } from "../../typing";
import { useSlotsDefault } from "../useSlotsDefault";

export interface ProMessageBoxInterceptorProps extends ElMessageBoxOptions, Omit<ProInterceptorProps, "response"> {
  title?: string;
  content?: string;
  component?: MessageBoxType;
}

export const ProMessageBoxInterceptor = defineComponent<ProMessageBoxInterceptorProps>(
  (props, ctx) => {
    const { Element } = useSlotsDefault(props, ctx.slots, () => {
      console.log("ProMessageBoxInterceptor-拦截器");
    });
    return () => Element.value;
  },
  {
    name: "ProMessageBoxInterceptor"
  }
);
