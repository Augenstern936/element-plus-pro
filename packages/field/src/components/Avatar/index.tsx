/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-08-04 15:28:04
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar\index.tsx
 */
import "./style.scss";
import { UserFilled, Female, Male } from "@element-plus/icons-vue";
import { ElAvatar, ElIcon, ElUpload } from "element-plus";
import { FunctionalComponent, ref, watch } from "vue-demi";
import { ProFieldAvatarProps } from "./props";

const ProFieldAvatar: FunctionalComponent<ProFieldAvatarProps> = (props: ProFieldAvatarProps) => {
  const iconSize = props.size && !Number.isNaN(props.size) ? +props.size / 2 : void 0;
  const avatar = ref({ url: props.src ?? "" });

  watch(
    () => props.src,
    src => {
      avatar.value.url = src ?? "";
    }
  );

  const AvatarElement = () => {
    const icon = {
      female: {
        element: <Female />,
        color: "var(--el-color-danger)"
      },
      male: {
        element: <Male />,
        color: "var(--el-color-success)"
      }
    };

    if (props.gender && icon[props.gender] && avatar.value.url) {
      return (
        <div class={"badge"} style={{ "--icon-size": iconSize }}>
          {icon[props.gender] && (
            <ElIcon
              class={`gender-icon ${props.gender}`}
              size={iconSize}
              color={icon[props?.gender].color}
              style={{ fontWeight: 600 }}
            >
              {icon[props?.gender].element}
            </ElIcon>
          )}
          <ElAvatar {...props} src={avatar.value.url}>
            <ElIcon size={iconSize}>
              <UserFilled />
            </ElIcon>
          </ElAvatar>
        </div>
      );
    }

    return (
      <ElAvatar {...props} src={avatar.value.url}>
        <ElIcon size={iconSize}>
          <UserFilled />
        </ElIcon>
      </ElAvatar>
    );
  };

  if (props.mode === "read") {
    return AvatarElement();
  }

  return (
    <ElUpload
      list-type="picture"
      auto-upload={false}
      onChange={e => console.log(e, "change")}
      onProgress={e => console.log(e, "1")}
      onSuccess={e => console.log(e)}
    >
      {{
        default: AvatarElement,
        file: ({ file }: any) => {
          avatar.value = file;
          return "";
        }
      }}
    </ElUpload>
  );
};

export * from "./props";

export { ProFieldAvatar };

export default ProFieldAvatar;
