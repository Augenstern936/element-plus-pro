/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 21:50:48
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import 'element-plus/theme-chalk/src/image.scss';
import { imageProps, ElImage } from 'element-plus';
import type { ImageProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, defineComponent } from 'vue';

export interface ProFieldImageProps extends ImageProps {
	style?: CSSProperties;
}

const ProFieldImage = defineComponent<ProFieldImageProps>(
	(props, ctx) => {
		return () => <ElImage {...props} />;
	},
	{
		name: 'ProFieldImage',
	}
) as FunctionalComponent<ProFieldImageProps>;

ProFieldImage.props = imageProps;

export default ProFieldImage;
