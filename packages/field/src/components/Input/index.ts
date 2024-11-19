/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-13 21:36:51
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import "./input.scss";

import FieldText from "./ProFieldText";

import FieldTextarea from "./ProFieldTextarea";

import FieldNumber from "./ProFieldNumber";

import FieldPassword from "./ProFieldPassword";

export * from "./props";

export const ProFieldText = withInstall(FieldText);

export const ProFieldTextarea = withInstall(FieldTextarea);

export const ProFieldNumber = withInstall(FieldNumber);

export const ProFieldPassword = withInstall(FieldPassword);
