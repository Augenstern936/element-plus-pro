/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:38:39
 *
 */
import { ElProgress, ElText } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { ProFieldProgressProps, proFieldProgressProps } from "./props";
import "./progress.scss";

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
  props => {
    const model = computed(() => {
      const { percentage } = props.fieldProps || {};
      return percentage || props.modelValue;
    });

    const textColor = computed(() => {
      enum Color {
        "success" = "var(--el-color-success)",
        "warning" = "var(--el-color-warning)",
        "exception" = "var(--el-color-danger)"
      }
      return props?.fieldProps?.status
        ? (Color[props.fieldProps.status] ?? "var(--el-color-primary)")
        : "var(--el-color-primary)";
    });

    const render = () => {
      if (props.mode === "read") {
        const { color, percentage } = props?.fieldProps || {};
        return <ElText style={{ color: color || textColor.value }}>{percentage || props.modelValue || 0}%</ElText>;
      }
      if (props.mode === "edit") {
        return <ElProgress type="line" percentage={model.value} {...props?.fieldProps} class={"field-progress"} />;
      }
      return <></>;
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldProgress"
  }
) as DefineComponent<ProFieldProgressProps>;

ProFieldProgress.props = proFieldProgressProps;

export default ProFieldProgress;
