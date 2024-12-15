/*
 * @Description:响应器集合
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 20:57:27
 * @LastEditTime: 2024-12-15 13:38:13
 */

import { ProMessageInterceptor } from "./Message";
import { ProMessageBoxInterceptor } from "./MessageBox";
import { ProNotificationInterceptor } from "./Notification";
import { ProPopconfirmInterceptor } from "./Popconfirm";

export * from "./Message";
export * from "./MessageBox";
export * from "./Popconfirm";
export * from "./Notification";

export default {
  Message: ProMessageInterceptor,
  MessageBox: ProMessageBoxInterceptor,
  Popconfirm: ProPopconfirmInterceptor,
  Notification: ProNotificationInterceptor
};
