/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 15:48:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import { ElImage } from "element-plus";
import "element-plus/theme-chalk/src/image.scss";
import { FunctionalComponent, defineComponent } from "vue";
import { ProFieldImageProps, proFieldImageProps } from "./typing";

const ProFieldImage = defineComponent<ProFieldImageProps>(
	(props) => {
		return () => <ElImage {...props} />;
	},
	{
		name: "ProFieldImage",
	}
) as unknown as FunctionalComponent<ProFieldImageProps>;

ProFieldImage.props = proFieldImageProps;

export * from "./typing";

export { ProFieldImage };

export default ProFieldImage;
