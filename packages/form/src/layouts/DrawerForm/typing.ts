/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-04-11 22:34:27
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\typing.ts
 */
import { drawerProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';

export const proDrawerFormProps = {
	...drawerProps,
};

export type ProDrawerFormProps = Partial<ExtractPropTypes<typeof proDrawerFormProps>>;
