import { MarkShape, StatusColorEnum, ValueOption } from "@element-plus-ui/pro-types";
import { ElTag, ElText } from "element-plus";
import { Fragment, computed } from "vue-demi";
import "./style.scss";

/*
 * @Description: 阅读模式下选项值展示的形式
 * @Author: wangbowen936926
 * @Date: 2024-06-01 14:12:33
 * @LastEditTime: 2024-07-09 17:03:26
 * @FilePath: \element-plus-pro\packages\field\src\components\widgets\ReadOptions\index.tsx
 */
interface ReadOptionsProps {
  value: ValueOption[];
  markShape?: "tag" | MarkShape;
  split?: string;
}

export const ReadOptions = (props: ReadOptionsProps) => {
  const getColor = ({ color, status }: ValueOption) => {
    return status && StatusColorEnum[status] ? StatusColorEnum[status] : (color ?? "default");
  };

  type ModeComponentProps = { option: ValueOption; split: string };

  const isShowMark = computed(() => {
    return ["tag", "disc", "circle", "square", "disclosure-open", "disclosure-closed"].some(mark => mark === props.markShape);
  });

  const components = {
    text: ({ option, split }: ModeComponentProps) => (
      <ElText style={{ color: !isShowMark.value ? getColor(option) : "default" }}>
        {option.label}
        <i style={{ color: "#606266" }}>{split}</i>
      </ElText>
    ),
    tag: ({ option, split }: ModeComponentProps) => {
      const color = getColor(option);
      return (
        <>
          <ElTag
            style={{
              color,
              border: `1px solid ${color}`,
              background: `color-mix(in oklch, ${color}, transparent 90%)`
            }}
          >
            {option.label}
          </ElTag>
          <i style={{ color: "#606266" }}>{split}</i>
        </>
      );
    }
  };

  const Render = computed(() => {
    return props.markShape === "tag" ? components[props.markShape] : components.text;
  });

  const getSplit = (i: number) => (i + 1 < props.value.length ? props.split || "、" : "");

  return (
    <div class="read-options">
      {isShowMark.value && props.markShape != "tag" ? (
        <ul>
          {props.value.map((option, i) => {
            const color = getColor(option);
            return (
              <li
                key={option.label}
                class={`${option.status ?? ""}`}
                style={{
                  "--dot-color": color || "default",
                  listStyleType: color ? props.markShape : "none"
                }}
              >
                <Render.value option={option} split={getSplit(i)} />
              </li>
            );
          })}
        </ul>
      ) : (
        props.value.map((option, i) => (
          <Fragment key={option.label}>
            <Render.value option={option} split={getSplit(i)} />
          </Fragment>
        ))
      )}
    </div>
  );
};
