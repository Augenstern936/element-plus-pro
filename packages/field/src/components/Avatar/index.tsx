/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-08 16:49:45
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar\index.tsx
 */
import "./style.scss";
import { UserFilled } from "@element-plus/icons-vue";
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
      "on-line": <div class={"mark-on-line"}></div>,
      "off-line": <div class={"mark-off-line"}></div>
    };

    if (props.mark && avatar.value.url) {
      const mark = typeof props.mark === "function" ? props.mark() : icon[props?.mark];
      return (
        <div class={"badge"} style={{ "--icon-size": iconSize }}>
          {mark && (
            <ElIcon class={`mark-icon ${props.mark}`} size={iconSize}>
              {mark}
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
      {...props.uploadProps}
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
