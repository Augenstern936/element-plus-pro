/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2023-11-10 00:34:23
 * @LastEditTime: 2024-12-18 15:47:54
 */
import type { ButtonProps, MessageOptions, PopconfirmProps } from "element-plus";
import { Component } from "vue-demi";
import * as Icon from "@element-plus/icons-vue";

export type ProButtonProps = Partial<ButtonProps> & {
  icon?: Component | keyof typeof Icon;
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
