/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-07-09 17:08:38
 */
import { DocumentCopy } from "@element-plus/icons-vue";
import { ElIcon, ElText } from "element-plus";
import { FunctionalComponent, defineComponent } from "vue-demi";
import "./style.scss";
import { ProTextProps, proTextProps } from "./typing";

const ProText = defineComponent<ProTextProps>(
	(props, ctx) => {
		return () => (
			<ElText class={"pro-text"}>
				{ctx.slots.default?.()}
				<ElIcon style={{ cursor: "pointer", color: "var(--el-color-primary)" }}>
					<DocumentCopy />
				</ElIcon>
			</ElText>
		);
	},
	{
		name: "ProText",
	}
) as unknown as FunctionalComponent<ProTextProps>;

ProText.props = proTextProps;

export * from "./typing";

export default ProText;
