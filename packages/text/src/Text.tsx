/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-08-04 22:33:09
 */
import { DocumentCopy, EditPen, Select, CloseBold } from "@element-plus/icons-vue";
import { ElIcon, ElMessage, ElText, ElTooltip, ElInput } from "element-plus";
import { FunctionalComponent, computed, defineComponent, ref } from "vue-demi";
import copy from "copy-to-clipboard";
import "./style.scss";
import { ProTextProps, proTextProps } from "./typing";

const ProText = defineComponent<ProTextProps>(
  (props, ctx) => {
    const isCopySuccess = ref<"default" | "success" | "error">("default");

    const isOpenEdit = ref(false);

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

    const copyText = computed(() => {
      const slots = ctx.slots.default?.();
      if (slots?.length) {
        return slots.map(slot => slot.children).join("");
      }
      return "";
    });

    const onCopy = async () => {
      if (copyText.value) {
        try {
          await copy(copyText.value);
          copyResult("success");
        } catch {
          copyResult("error");
        }
      }
    };

    const copyResult = (type: "success" | "error") => {
      const isSuccess = type === "success";
      ElMessage[type](`复制${isSuccess ? "成功" : "失败"}`);
      ctx.emit("copy", isSuccess);
      isCopySuccess.value = type;
      setTimeout(() => {
        isCopySuccess.value = "default";
      }, 2200);
    };

    const onOpenEdit = () => {
      currentEditText.value = copyText.value;
      isOpenEdit.value = true;
    };

    return () => {
      if (isOpenEdit.value) {
        return <ElInput v-model={currentEditText.value} type={"textarea"} />;
      }
      return (
        <div class={"pro-text"}>
          <ElText class={"text"} {...props}>
            {ctx.slots.default?.()}
          </ElText>
          <ElTooltip content="复制" placement="top">
            <ElIcon class={"icon"} color={currentCopyIcon.value.color} onClick={onCopy}>
              {currentCopyIcon.value.icon}
            </ElIcon>
          </ElTooltip>
          <ElTooltip content="编辑" placement="top">
            <ElIcon class={"icon"} color="var(--el-color-primary)" onClick={onOpenEdit}>
              <EditPen />
            </ElIcon>
          </ElTooltip>
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
