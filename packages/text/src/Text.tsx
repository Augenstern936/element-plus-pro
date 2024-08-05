/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-08-05 23:14:04
 */
import { DocumentCopy, EditPen, Select, CloseBold } from "@element-plus/icons-vue";
import { ElIcon, ElMessage, ElText, ElTooltip, ElInput } from "element-plus";
import { FunctionalComponent, computed, defineComponent, ref, watch } from "vue-demi";
import copy from "copy-to-clipboard";
import "./style.scss";
import { ProTextProps, proTextProps } from "./typing";
import { isObject } from "@vueuse/core";

const ProText = defineComponent<ProTextProps>(
  (props, ctx) => {
    const isCopySuccess = ref<"default" | "success" | "error">("default");

    const isEditing = ref(false);

    const currentEditText = ref("");

    const copyIcons = {
      default: {
        color: "var(--el-color-primary)",
        icon: <DocumentCopy />
      },
      success: {
        color: "var(--el-color-success)",
        icon: <Select />
      },
      error: {
        color: "var(--el-color-danger)",
        icon: <CloseBold />
      }
    };

    const currentCopyIcon = computed(() => copyIcons[isCopySuccess.value]);

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
      ElMessage[type](`复制${isSuccess ? "成功" : "失败"}`);
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
      () => props.editable,
      editable => {
        if (isObject(editable)) {
          currentEditText.value = editable.text ?? content.value;
          isEditing.value = editable.editing ?? false;
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
            type={editable.autoSize ? "textarea" : "text"}
            autosize={editable.autoSize}
            maxlength={editable.maxLength}
            show-word-limit={editable.maxLength ? true : false}
            onInput={v => editable?.onInput?.(v)}
            onChange={v => {
              isEditing.value = false;
              editable?.onChange?.(false, v);
            }}
          />
        );
      }
      return (
        <div class={"pro-text"}>
          <ElText class={"text"} {...props} {...ctx.attrs}>
            {(currentEditText.value || ctx.slots.default?.()) ?? props.content}
          </ElText>
          {(props.copyable === true || isObject(props.copyable)) && (
            <ElTooltip content={copyable.tooltip ?? "复制"} placement="top">
              <ElIcon class={"icon"} {...ctx.attrs} color={currentCopyIcon.value.color} onClick={() => onCopy(copyable.text)}>
                {currentCopyIcon.value.icon}
              </ElIcon>
            </ElTooltip>
          )}
          {(props.editable === true || isObject(props.editable)) && (
            <ElTooltip content={editable.tooltip ?? "编辑"} placement="top">
              <ElIcon
                class={"icon"}
                {...ctx.attrs}
                color="var(--el-color-primary)"
                onClick={() => {
                  onOpenEdit(editable.text);
                  editable?.onChange?.(true, editable.text ?? content.value);
                }}
              >
                <EditPen />
              </ElIcon>
            </ElTooltip>
          )}
        </div>
      );
    };
  },
  {
    name: "ProText"
  }
) as unknown as FunctionalComponent<ProTextProps>;

ProText.props = proTextProps;

export * from "./typing";

export default ProText;
