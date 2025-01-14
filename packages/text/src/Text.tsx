/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2025-01-06 16:07:06
 */
import { ElText, ElTooltip, ElInput } from "element-plus";
import { ProIcon } from "@element-plus-ui/pro-icon";
import { DefineComponent, computed, defineComponent, ref, watch } from "vue-demi";
import copy from "copy-to-clipboard";
import "./text.scss";
import { ProTextProps, proTextProps } from "./typing";
import { isObject } from "@vueuse/core";

const ProText = defineComponent<ProTextProps>(
  (props, ctx) => {
    const isCopySuccess = ref<"default" | "success" | "error">("default");

    const isEditing = ref(false);

    const currentEditText = ref("");

    const copyIcons = computed(() => {
      const copyable = isObject(props.copyable) ? props.copyable : {};
      return {
        default: {
          icon: () => (
            <ProIcon
              {...ctx.attrs}
              class={"icon"}
              name={Array.isArray(copyable.icon) ? copyable.icon[0] : "DocumentCopy"}
              color="var(--el-color-primary)"
            />
          ),
          tooltips: copyable?.tooltip ? copyable.tooltip : "复制"
        },
        success: {
          icon: () => (
            <ProIcon
              {...ctx.attrs}
              class={"icon"}
              name={Array.isArray(copyable.icon) ? copyable.icon[1] : "Select"}
              color="var(--el-color-success)"
            />
          ),
          tooltips: "复制成功"
        },
        error: {
          icon: () => (
            <ProIcon
              {...ctx.attrs}
              class={"icon"}
              name={Array.isArray(copyable.icon) ? copyable.icon[1] : "CloseBold"}
              color="var(--el-color-danger)"
            />
          ),
          tooltips: "复制失败"
        }
      };
    });

    const currentCopyIcon = computed(() => copyIcons.value[isCopySuccess.value]);

    const content = computed(() => {
      const slots = ctx.slots.default?.();
      if (slots?.length) {
        return slots.map(slot => slot.children).join("");
      }
      return props.content ?? "";
    });

    const onCopy = async (text: string | undefined) => {
      const copyText = text || currentEditText.value || content.value;
      if (copyText) {
        try {
          await copy(copyText);
          copyResult("success", copyText);
        } catch {
          copyResult("error");
        }
      }
    };

    const copyResult = (type: "success" | "error", copyText: string = "") => {
      const isSuccess = type === "success";
      if (isObject(props.copyable) && typeof props.copyable.onCopy === "function") {
        props.copyable.onCopy(isSuccess, copyText);
      } else {
        ctx.emit("copy", isSuccess, copyText);
      }
      isCopySuccess.value = type;
      setTimeout(() => {
        isCopySuccess.value = "default";
      }, 2200);
    };

    const onOpenEdit = (text: string | undefined) => {
      currentEditText.value = (currentEditText.value || text) ?? content.value;
      isEditing.value = true;
    };

    watch(
      () => [props.editable, content.value],
      () => {
        const editable = props.editable;
        if (isObject(editable)) {
          currentEditText.value = editable.text ?? content.value;
          isEditing.value = editable.editing ?? false;
        } else {
          currentEditText.value = content.value || currentEditText.value;
        }
      },
      {
        deep: true,
        immediate: true
      }
    );

    return () => {
      const copyable = isObject(props.copyable) ? props.copyable : {};
      const editable = isObject(props.editable) ? props.editable : {};
      if (isEditing.value === true) {
        return (
          <ElInput
            v-model={currentEditText.value}
            type={"textarea"}
            autofocus={isEditing.value}
            autosize={editable.autoSize ?? { minRows: 1 }}
            maxlength={editable.maxLength}
            show-word-limit={editable.maxLength ? true : false}
            onBlur={() => {
              isEditing.value = false;
              editable?.onChange?.(false, currentEditText.value);
            }}
            onInput={v => editable?.onInput?.(v)}
            onChange={v => {
              isEditing.value = false;
              editable?.onChange?.(false, v);
            }}
          />
        );
      }
      return (
        <div class={"pro-text"} style={{ display: "flex", alignItems: "center" }}>
          <ElText class={"text"} {...props} {...ctx.attrs}>
            {editable.text ? (ctx.slots.default?.() ?? props.content) : currentEditText.value}
          </ElText>
          {(props.editable === true || isObject(props.editable)) && (
            <ElTooltip content={editable.tooltip ?? "编辑"} placement="top">
              <ProIcon
                {...ctx.attrs}
                class={"icon"}
                name={isObject(props.editable) ? props.editable.icon || "EditPen" : "EditPen"}
                color="var(--el-color-primary)"
                onClick={() => {
                  onOpenEdit(editable.text);
                  editable?.onChange?.(true, editable.text ?? content.value);
                }}
              />
            </ElTooltip>
          )}
          {(props.copyable === true || isObject(props.copyable)) && (
            <ElTooltip content={currentCopyIcon.value.tooltips} placement="top">
              <currentCopyIcon.value.icon onClick={() => onCopy(copyable.text)} />
            </ElTooltip>
          )}
        </div>
      );
    };
  },
  {
    name: "ProText"
  }
) as DefineComponent<ProTextProps>;

ProText.props = proTextProps;

export default ProText;
