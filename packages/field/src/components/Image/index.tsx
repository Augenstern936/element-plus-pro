/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 22:49:03
 * @FilePath: \element-plus-pro\packages\field\src\components\Image\index.tsx
 */
import { CloseBold, View } from "@element-plus/icons-vue";
import { ElIcon, ElImage, ElSpace } from "element-plus";
import { DefineComponent, computed, defineComponent, reactive } from "vue-demi";
import { ProFieldImageProps, proFieldImageProps } from "./props";
import "./style.scss";

const ProFieldImage = defineComponent<ProFieldImageProps>(
	(props, ctx) => {
		const isError = reactive<Record<string, boolean>>({});

		const src = computed(() => {
			if (typeof props.src === "string") {
				return [props.src];
			}
			return Array.isArray(props.src) ? props.src : [""];
		});

		return () => (
			<ElSpace class="pro-field-image">
				{src.value.map((url, index) => (
					<div class={"pro-field-image__box"} key={url}>
						<ElImage
							src={url || "#"}
							preview-src-list={src.value.filter((_, i) => !isError[i])}
							preview-teleported={true}
							initial-index={index}
							fit="cover"
							style="height: 100%; display: flex; align-items: center; justify-content: center;"
							onError={() => (isError[index] = true)}
							onLoad={() => (isError[index] = false)}
							v-slots={{
								placeholder: () => (
									<>
										{ctx.slots.loading ? (
											ctx.slots.loading()
										) : (
											<svg
												class="loading-icon"
												viewBox="0 0 1088 1024"
												width="212.5"
												height="200"
											>
												<path
													d="M560 928a432 432 0 1 0 0-864 432 432 0 0 0 0 864z m0-96a336 336 0 1 1 0-672 336 336 0 0 1 0 672z"
													fill="var(--el-color-primary)"
													fill-opacity=".08"
												/>
												<path
													d="M992 496A432 432 0 0 0 560 64a48 48 0 0 0 0 96c185.6 0 336 150.4 336 336a48 48 0 1 0 96 0z"
													fill="var(--el-color-primary)"
												/>
											</svg>
										)}
									</>
								),
								error: () => (
									<>
										{ctx.slots.error ? (
											ctx.slots.error()
										) : (
											<svg viewBox="0 0 1024 1024" width="200" height="200">
												<path
													d="M672.124 450.878H357.398c-8.805 0-16.508 7.093-16.508 16.359v199.02c16.508-21.262 41.264-50.164 59.426-53.981 45.117-5.45 84.734 26.717 113.894 28.355 37.965 0 68.777-79.066 102.896-79.066 23.655 0 54.468 19.63 70.425 32.173V466.69c0.55-8.719-6.602-15.812-15.407-15.812zM469.643 565.382c-11.003 8.726-23.66 14.18-36.317 14.18-14.304 0-26.961-5.454-36.311-14.18-8.805-8.721-14.309-23.441-14.309-35.984 0-12.543 5.504-26.717 14.309-35.989 8.8-8.721 21.457-14.176 36.311-14.176 12.657 0 25.314 5.455 36.317 14.176 8.8 8.725 14.305 23.447 14.305 35.989 0 12.543-5.505 26.718-14.305 35.984z"
													fill="var(--el-color-primary)"
													fill-opacity=".8"
												/>
												<path
													d="M701.289 290.571c-12.657 0-26.41-4.904-36.317-15.268-10.454-9.267-15.407-22.901-15.407-35.984V1.039H134.007c-12.657 0-26.415 4.908-36.317 15.266-8.805 9.266-14.305 20.718-15.407 32.167v927.495c1.102 11.45 6.05 23.447 15.407 32.173 10.452 10.358 23.109 15.268 36.317 15.268h756.559c12.657 0 26.41-4.909 36.311-15.268 10.459-10.358 15.407-22.901 15.407-35.989v-681.58H701.289z m-22.559 491.83H345.842c-18.16 0-32.465-14.176-32.465-32.173V456.332c0-17.991 14.305-32.173 32.465-32.173h332.337c18.155 0 32.46 14.181 32.46 32.173v293.896h0.551c0 17.997-14.305 32.173-32.46 32.173z"
													fill="var(--el-color-primary)"
													fill-opacity=".8"
												/>
												<path
													d="M647.445 241.263c0 12.537 4.91 26.172 15.268 35.984 9.272 10.363 22.901 15.268 35.989 15.268h238.822L647.445 2.435v238.828z m0 0"
													fill="var(--el-color-primary)"
													fill-opacity=".4"
												/>
											</svg>
										)}
									</>
								),
							}}
						/>
						{props.mode === "edit" && !isError[index] && (
							<span class={"pro-field-image__del-mark"}>
								<ElIcon size={12} color="#fff">
									<CloseBold />
								</ElIcon>
							</span>
						)}
						{!isError[index] && (
							<div class="pro-field-image__hover-mask">
								<ElIcon color="#fff">
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
		name: "ProFieldImage",
	}
) as DefineComponent<ProFieldImageProps>;

ProFieldImage.props = proFieldImageProps as any;

export * from "./props";

export { ProFieldImage };

export default ProFieldImage;
