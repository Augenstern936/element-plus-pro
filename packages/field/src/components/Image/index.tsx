/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-06 23:06:58
 * @FilePath: \element-plus-pro\packages\field\src\components\Image\index.tsx
 */
import './style.scss';
import { ElIcon, ElImage, ElSpace } from 'element-plus';
import { FunctionalComponent, computed, defineComponent, reactive } from 'vue';
import { ProFieldImageProps, proFieldImageProps } from './props';
import { Picture, View } from '@element-plus/icons-vue';

const ProFieldImage = defineComponent<ProFieldImageProps>(
	(props) => {
		const isError = reactive<Record<string, boolean>>({});

		const src = computed(() => {
			if (typeof props.src === 'string') {
				return [props.src];
			}
			return Array.isArray(props.src) ? props.src : [''];
		});

		return () => (
			<ElSpace class='pro-field-image'>
				{src.value.map((url, index) => (
					<div class={'pro-field-image__box'} key={url}>
						<ElImage
							src={url}
							preview-src-list={props.mode === 'edit' ? src.value : []}
							preview-teleported={true}
							initial-index={index}
							fit='cover'
							style='height: 100%; display: flex; align-items: center; justify-content: center;'
							onError={() => (isError[index] = true)}
							onLoad={() => (isError[index] = false)}
							v-slots={{
								error: () => (
									<ElIcon size={26} color='var(--el-color-success-light-3)'>
										<Picture />
									</ElIcon>
								),
							}}
						/>
						{props.mode === 'edit' && !isError[index] && (
							<div class='pro-field-image__hover-mask'>
								<ElIcon color='#fff'>
									<View />
								</ElIcon>
							</div>
						)}
					</div>
				))}
			</ElSpace>
		);
	},
	{
		name: 'ProFieldImage',
	}
) as unknown as FunctionalComponent<ProFieldImageProps>;

ProFieldImage.props = proFieldImageProps as any;

export * from './props';

export { ProFieldImage };

export default ProFieldImage;
