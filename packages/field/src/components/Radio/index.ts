/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-26 21:22:42
 * @LastEditTime: 2024-10-10 22:30:46
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import Radio from "./Radio";
import RadioButton from "./RadioButton";

export * from "./typing";

export const ProFieldRadio = withInstall(Radio);

export const ProFieldRadioButton = withInstall(RadioButton);
