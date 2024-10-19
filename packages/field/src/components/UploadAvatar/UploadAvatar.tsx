/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-19 23:20:11
 * @FilePath: \element-plus-pro\packages\field\src\components\UploadAvatar\UploadAvatar.tsx
 */
import "./upload-avatar.scss";
import { ProIcon } from "@element-plus-ui/pro-icon";
import { ElAvatar, ElUpload, uploadProps, avatarProps, UploadRawFile, UploadFile, UploadFiles } from "element-plus";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import { AvatarSizeEnum, excludeUplaodPropsKeys, proFieldUploadAvatar, ProFieldUploadAvatarProps } from "./props";
import { isUrl, excludeObjectProperty } from "@element-plus-ui/pro-utils";
import { isObject } from "@vueuse/core";

const ProFieldUploadAvatar = defineComponent<ProFieldUploadAvatarProps>(
  (props, ctx) => {
    const uploading = ref(false);

    const avatarUrl = computed(() => {
      if (typeof props.modelValue === "string") {
        return props.modelValue;
      }
      if (isObject(props.modelValue)) {
        return props.modelValue?.url ?? "#";
      }
      return "#";
    });

    const avatarSize = computed(() => {
      const size = (props?.fieldProps || {}).size ?? props.size;
      return size && AvatarSizeEnum[size] ? AvatarSizeEnum[size] : size;
    });

    const iconSize = computed(() => {
      return avatarSize.value && !Number.isNaN(avatarSize.value) ? +avatarSize.value / 2 : void 0;
    });

    const dotSize = computed(() => (iconSize.value ?? 40) / 3);

    const dotSizeStyle = computed(() => {
      return { height: `${dotSize.value}px`, minWidth: `${dotSize.value}px` };
    });

    const proAvatarProps = computed(() => {
      return excludeObjectProperty(props.fieldProps ?? {}, Object.keys(uploadProps) as keyof typeof props.fieldProps);
    });

    const proUploadProps = computed(() => {
      return excludeObjectProperty(props.fieldProps ?? {}, [
        ...excludeUplaodPropsKeys,
        ...Object.keys(avatarProps)
      ] as (keyof typeof props.fieldProps)[]);
    });

    const AvatarElement = () => {
      const icon = {
        female: (
          <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200">
            <path
              d="M361.094737 754.526316l129.347368 129.347368c26.947368 26.947368 26.947368 64.673684 0 91.621053s-64.673684 26.947368-91.621052 0L269.473684 846.147368l-129.347368 129.347369c-26.947368 26.947368-64.673684 26.947368-91.621053 0s-26.947368-64.673684 0-91.621053L177.852632 754.526316 48.505263 625.178947c-26.947368-26.947368-26.947368-64.673684 0-91.621052s64.673684-26.947368 91.621053 0L269.473684 662.905263l86.231579-86.231579c-91.621053-134.736842-80.842105-323.368421 43.11579-441.936842C533.557895 0 754.526316 0 894.652632 134.736842s134.736842 355.705263 0 495.831579c-118.568421 118.568421-307.2 134.736842-441.936843 43.11579L361.094737 754.526316z m436.547368-528.168421c-86.231579-86.231579-226.357895-86.231579-307.2 0-86.231579 86.231579-86.231579 226.357895 0 307.2 86.231579 86.231579 226.357895 86.231579 307.2 0 86.231579-86.231579 86.231579-226.357895 0-307.2z"
              fill="#d81e06"
            />
          </svg>
        ),
        male: (
          <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200">
            <path
              d="M249.856 861.291789A269.473684 269.473684 0 1 1 589.069474 442.475789a269.473684 269.473684 0 0 1-339.213474 418.816z m67.853474-83.752421a161.684211 161.684211 0 1 0 203.506526-251.311157 161.684211 161.684211 0 0 0-203.506526 251.311157z"
              fill="#1afa29"
            />
            <path d="M537.492211 420.486737l237.406315-293.187369 83.752421 67.853474-237.406315 293.187369z" fill="#1afa29" />
            <path
              d="M549.025684 203.991579a53.894737 53.894737 0 0 1 41.768421-58.206316l6.197895-1.077895 214.393263-22.474105a53.894737 53.894737 0 0 1 58.206316 41.714526l1.077895 6.25179 22.474105 214.393263a53.894737 53.894737 0 0 1-106.172632 17.461895l-1.024-6.197895-16.922947-160.821895-160.768 16.922948a53.894737 53.894737 0 0 1-58.206316-41.768421l-1.024-6.197895z"
              fill="#1afa29"
            />
          </svg>
        ),
        "on-line": <span class={"mark-on-line"} style={dotSizeStyle.value} />,
        "off-line": <span class={"mark-off-line"} style={dotSizeStyle.value} />
      };

      const mark = computed(() => (props?.marker ? icon[props?.marker] : ""));

      return (
        <div
          class={`avatar-box ${uploading.value ? "uploading" : ""}`}
          style={{
            width: `${avatarSize.value}px`,
            height: `${avatarSize.value}px`
          }}
        >
          {props.mode === "edit" && (
            <div class={"hover-mask"}>
              <ProIcon.Camera color="#fff" size={iconSize.value} />
            </div>
          )}
          {mark.value && !uploading.value && (
            <ProIcon
              class={`marker ${props.marker}`}
              size={iconSize.value}
              style={{
                position: "absolute",
                top: `-${dotSize.value / 2}px`,
                right: `-${dotSize.value / 2}px`
              }}
            >
              {mark.value}
            </ProIcon>
          )}
          <ElAvatar
            {...proAvatarProps.value}
            shape={"circle"}
            src={avatarUrl.value}
            v-slots={{ default: () => <ProIcon.UserFilled size={iconSize.value} />, ...ctx.slots }}
          />
        </div>
      );
    };

    return () => (
      <div class={"pro-avatar"}>
        {props.mode === "read" && AvatarElement()}
        {props.mode === "edit" && (
          <ElUpload
            {...proUploadProps.value}
            file-list={[{ url: avatarUrl.value }]}
            list-type="picture"
            auto-upload={false}
            before-upload={(rawFile: UploadRawFile) => {
              uploading.value = true;
              proUploadProps.value["before-upload"]?.(rawFile);
            }}
            on-success={(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
              uploading.value = false;
              ctx.emit("update:modelValue", uploadFile);
              proUploadProps.value["on-success"]?.(response, uploadFile, uploadFiles);
            }}
            v-slots={{
              default: AvatarElement,
              file: (info: Record<string, any>) => {
                if (!isUrl(props?.fieldProps?.action ?? "")) {
                  if (typeof props.modelValue === "string" && info.file.url != props.modelValue) {
                    ctx.emit("update:modelValue", info.file.url);
                    proUploadProps.value["on-success"]?.(info.file);
                  }
                  if (isObject(props.modelValue) && info.file.url != props.modelValue.url) {
                    ctx.emit("update:modelValue", info.file);
                    proUploadProps.value["on-success"]?.(info.file);
                  }
                }
                return "";
              }
            }}
          />
        )}
      </div>
    );
  },
  {
    name: "ProFieldUploadAvatar"
  }
) as DefineComponent<ProFieldUploadAvatarProps>;

ProFieldUploadAvatar.props = proFieldUploadAvatar;

export default ProFieldUploadAvatar;
