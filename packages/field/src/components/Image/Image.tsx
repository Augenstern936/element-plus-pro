/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:26:26
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import type { ImageProps } from "element-plus";
import { ElImage, imageProps } from "element-plus";
import "element-plus/theme-chalk/src/image.scss";
import { CSSProperties, FunctionalComponent, defineComponent } from "vue";

export interface ProFieldImageProps extends ImageProps {
	style?: CSSProperties;
}

const ProFieldImage = defineComponent<ProFieldImageProps>(
	(props) => {
		return () => <ElImage {...props} />;
	},
	{
		name: "ProFieldImage",
	}
) as unknown as FunctionalComponent<ProFieldImageProps>;

ProFieldImage.props = imageProps;

export default ProFieldImage;
