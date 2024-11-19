/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2023-11-10 00:34:23
 * @LastEditTime: 2024-10-31 15:17:17
 */
import type { ButtonProps, MessageOptions, PopconfirmProps } from "element-plus";

export type ProButtonProps = Partial<ButtonProps> & {
  // 二次确认提示语
  tip?: string | TipConfig;
  title?: string;
};

export type TipConfig = MessageBoxConfig | PopconfirmConfig;

export type MessageBoxConfig = Partial<MessageOptions> & {
  mode: "message-box";
  title?: string;
  before?: () => boolean;
};

export type PopconfirmConfig = Partial<PopconfirmProps> & {
  mode: "popconfirm";
  before?: () => boolean;
};
