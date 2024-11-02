/*
 * @Description: 阅读模式下选项值展示的形式
 * @Author: wangbowen936926
 * @Date: 2024-06-01 14:12:33
 * @LastEditTime: 2024-11-02 14:35:28
 * @FilePath: \element-plus-pro\packages\field\src\components\widgets\ReadOptions\index.tsx
 */
import { Marker, ValueOption } from "@element-plus-ui/pro-types";
import { getOptionStatusColor } from "@element-plus-ui/pro-utils";
import { ElTag, ElText } from "element-plus";
import { computed } from "vue-demi";
import "./read-options.scss";
import { isObject } from "@vueuse/core";
export interface ReadOptionsProps {
  value: (string | number | boolean | Date)[] | ValueOption[];
  marker?: "tag" | Marker;
  textColor?: string;
  separator?: string;
}

export const marker = ["tag", "disc", "circle", "square", "disclosure-open", "disclosure-closed"];

export const ReadOptions = (props: ReadOptionsProps) => {
  type ModeComponentProps = { option: ValueOption; separator: string };

  const isShowMark = computed(() => {
    return marker.some(mark => mark === props.marker);
  });

  const components = {
    text: ({ option, separator }: ModeComponentProps) => (
      <ElText style={{ color: props.textColor || (!isShowMark.value ? getOptionStatusColor(option) : "default") }}>
        {option.label}
        <i style={{ color: "#606266" }}>{separator}</i>
      </ElText>
    ),
    tag: ({ option, separator }: ModeComponentProps) => {
      const color = getOptionStatusColor(option);
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
          <i style={{ color: "#606266" }}>{separator}</i>
        </>
      );
    }
  };

  const Render = computed(() => {
    return props.marker === "tag" ? components[props.marker] : components.text;
  });

  const getSeparator = (i: number) => (i + 1 < props.value.length ? props.separator || "、" : "");

  return (
    <div class="read-options">
      {isShowMark.value && props.marker != "tag" ? (
        <ul>
          {props.value.map((option, i) => {
            if (!isObject(option)) {
              return <Render.value key={i} option={{ label: option }} separator={getSeparator(i)} />;
            }
            const color = getOptionStatusColor(option);
            return (
              <li
                key={i}
                class={`${(option as ValueOption).status ?? ""}`}
                style={{
                  "--dot-color": color || "default",
                  listStyleType: color ? props.marker : "none"
                }}
              >
                <Render.value option={option} separator={getSeparator(i)} />
              </li>
            );
          })}
        </ul>
      ) : (
        props.value.map((option, i) => (
          <Render.value key={i} option={isObject(option) ? option : { label: option }} separator={getSeparator(i)} />
        ))
      )}
    </div>
  );
};
