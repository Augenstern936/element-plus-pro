/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-27 17:30:28
 * @FilePath: \element-plus-pro\packages\field\src\components\UploadImage\UploadImage.tsx
 */
import { ProIcon } from "@element-plus-ui/pro-icon";
import { ElImage, ElSpace, ElUpload, imageProps, uploadProps, UploadRawFile } from "element-plus";
import { omitObjectProperty, isUrl } from "@element-plus-ui/pro-utils";
import { DefineComponent, computed, defineComponent, reactive, ref, watch, watchEffect } from "vue-demi";
import { ProFieldUploadImageProps, proFieldUploadImageProps } from "./props";
import "./upload-image.scss";
import { isObject } from "@vueuse/core";
import { SizeEnum } from "../../typing";

const ProFieldUploadImage = defineComponent<ProFieldUploadImageProps>(
  (props, ctx) => {
    const model = ref<{ name?: string; url: string }[]>([]);

    const isError = reactive<Record<string, boolean>>({});

    const isUpdateModelValue = ref(false);

    const limit = computed(() => {
      const { limit: limitProps } = props?.fieldProps || {};
      return typeof props.modelValue === "string" ? 1 : (limitProps ?? model.value.length);
    });

    const proImageProps = computed(() => {
      return omitObjectProperty(props.fieldProps ?? {}, Object.keys(uploadProps) as keyof typeof props.fieldProps);
    });

    const imageSize = computed((): number => {
      const size = (props?.fieldProps || {}).size ?? props.size;
      if (size && typeof size === "string" && SizeEnum[size]) {
        return SizeEnum[size];
      }
      return Number(size ?? 40);
    });

    const proUploadProps = computed(() => {
      return omitObjectProperty(props.fieldProps ?? {}, [
        "list-type",
        "file-list",
        "model:file-list",
        ...Object.keys(imageProps)
      ] as (keyof typeof props.fieldProps)[]);
    });

    const getPreviewSrcList = () => {
      return Array.isArray(model.value) ? model.value.filter((_, i) => !isError[i]).map(v => v.url) : [];
    };

    const onRemove = (index: number) => {
      model.value = model.value.filter((_, i) => index != i);
      isUpdateModelValue.value = true;
    };

    const RenderImagesElement = (files: any[], i?: number) => {
      const render = files.map((file, index) => {
        index = i ?? index;
        return (
          <div class={"pro-field-image__box"} key={index}>
            <ElImage
              {...proImageProps.value}
              src={file.url || "#"}
              preview-teleported={true}
              initial-index={index}
              preview-src-list={getPreviewSrcList()}
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
                      <svg class="loading-icon" viewBox="0 0 1088 1024" width="212.5" height="200">
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
                ...ctx.slots
              }}
            />
            {props.mode === "edit" && (
              <div
                class={"pro-field-image__del-mark"}
                style={{
                  width: `${(imageSize.value || 40) / 3}px`,
                  height: `${(imageSize.value || 40) / 3}px`
                }}
                onClick={() => onRemove(index)}
              >
                <ProIcon.CloseBold size={(imageSize.value || 40) / 5} color="#fff" />
              </div>
            )}
            {!isError[index] && (
              <div class="pro-field-image__hover-mask">
                <ProIcon.View color="#fff" size={(imageSize.value || 40) / 2} />
              </div>
            )}
          </div>
        );
      });

      return (
        <>
          {props.mode === "read" && <ElSpace>{render}</ElSpace>}
          {props.mode === "edit" && <>{render}</>}
        </>
      );
    };

    watchEffect(() => {
      if (typeof props.modelValue === "string") {
        model.value = [{ url: props.modelValue }];
      }
      if (isObject(props.modelValue)) {
        model.value = [props.modelValue as any];
      }
      if (Array.isArray(props.modelValue) && props.modelValue.length) {
        model.value = props.modelValue?.map(item => {
          if (typeof item === "string") {
            return {
              url: item,
              originType: "string"
            };
          }
          return item;
        });
      }
      isUpdateModelValue.value = false;
    });

    watch(
      () => model.value,
      () => {
        if (isUpdateModelValue.value) {
          const returnData = model.value.map((item: any) => {
            return item.originType === "string" ? item.url : item;
          });
          ctx.emit("update:modelValue", returnData);
          isUpdateModelValue.value = false;
        }
      },
      {
        deep: true
      }
    );

    return () => (
      <div
        class={"pro-upload-image"}
        style={{
          "--size": `${imageSize.value}px`,
          "--is-show-plus-box": model.value.length === 0 || model.value.length < limit.value ? "block" : "none"
        }}
      >
        {props.mode === "read" && RenderImagesElement(model.value)}
        {props.mode === "edit" && (
          <ElUpload
            action="#"
            {...proUploadProps.value}
            v-model:file-list={model.value}
            list-type="picture-card"
            auto-upload={false}
            limit={limit.value}
            before-upload={(rawFile: UploadRawFile) => {
              isUpdateModelValue.value = true;
              proUploadProps.value?.["before-upload"]?.(rawFile);
            }}
            v-slots={{
              default: () => <ProIcon.Plus size={imageSize.value ? imageSize.value / 2 : 20} />,
              file: ({ file, index }: any) => {
                if (!isUrl(props?.fieldProps?.action ?? "")) {
                  if (typeof props.modelValue === "string" && props.modelValue != file.url) {
                    ctx.emit("update:modelValue", file.url);
                    proUploadProps.value["on-success"]?.(file);
                  }
                  if (isObject(props.modelValue) && props.modelValue.url != file.url) {
                    ctx.emit("update:modelValue", file);
                    proUploadProps.value["on-success"]?.(file);
                  }
                  if (Array.isArray(props.modelValue) && !props.modelValue[index]) {
                    ctx.emit("update:modelValue", [...props.modelValue, file]);
                    proUploadProps.value["on-success"]?.(file);
                  }
                }
                return RenderImagesElement([file], index);
              }
            }}
          />
        )}
      </div>
    );
  },
  {
    name: "ProFieldUploadImage"
  }
) as DefineComponent<ProFieldUploadImageProps>;

ProFieldUploadImage.props = proFieldUploadImageProps;

export default ProFieldUploadImage;
