/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 17:50:01
 * @FilePath: \element-plus-pro\packages\form\src\components\Image\index.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { ImageProps } from 'element-plus';

export type ProFormImageProps = FormFieldProps<ImageProps>;

const FormImage = defineComponent<ProFormImageProps>(
	(props) => {
		return () => <ProFormField {...props} type={'image'} />;
	},
	{
		name: 'ProFormImage',
	}
) as DefineComponent<ProFormImageProps>;

export const ProFormImage = withInstall(FormImage);
