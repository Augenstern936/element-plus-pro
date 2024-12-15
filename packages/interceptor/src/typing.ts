/*
 * @Description:
 * @Date: 2024-12-13 10:59:05
 * @LastEditTime: 2024-12-15 15:07:36
 */
import type { ElMessageBoxOptions, MessageBoxType, MessageProps, NotificationProps, PopconfirmProps } from "element-plus";
import { DefineComponent, ExtractPropTypes, PropType } from "vue-demi";
import {
  ProMessageInterceptorProps,
  ProMessageBoxInterceptorProps,
  ProPopconfirmInterceptorProps,
  ProNotificationInterceptorProps
} from "./components";

export const proInterceptorCommomProps = {
  trigger: {
    type: String as PropType<"click" | "change" | "input">,
    default: "click"
  },
  condition: {
    type: Function as PropType<() => boolean>
  }
};

export const proInterceptorProps = {
  ...proInterceptorCommomProps,
  response: {
    type: Object as PropType<ResponseMessage | ResponseNotification | ResponsePopconfirm | ResponseMessageBox>,
    default: {}
  }
} as const;

export type ProInterceptorProps = ExtractPropTypes<typeof proInterceptorProps>;

export type InterceptorSuperProps = DefineComponent<ProInterceptorProps> & {
  Message: DefineComponent<ProMessageInterceptorProps>;
  MessageBox: DefineComponent<ProMessageBoxInterceptorProps>;
  Popconfirm: DefineComponent<ProPopconfirmInterceptorProps>;
  Notification: DefineComponent<ProNotificationInterceptorProps>;
};

interface ResponseMessage {
  type: "Message";
  props?: MessageProps;
}

interface ResponseNotification {
  type: "Notification";
  props?: NotificationProps;
}

interface ResponsePopconfirm {
  type: "Popconfirm";
  props?: PopconfirmProps;
}

interface ResponseMessageBox {
  type: "MessageBox";
  props?: ElMessageBoxOptions & {
    title?: string;
    content?: string;
    component?: MessageBoxType;
  };
}
