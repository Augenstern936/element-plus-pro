/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-06-16 13:06:06
 */
import { FunctionalComponent, defineComponent } from 'vue';
import './style.scss';
import { ProTextProps, proTextProps } from './typing';
import { ElIcon, ElText } from 'element-plus';
import { DocumentCopy } from '@element-plus/icons-vue';

const ProText = defineComponent<ProTextProps>(
	(props, ctx) => {
		return () => (
			<ElText class={'pro-text'}>
				{ctx.slots.default?.()}
				<ElIcon style={{ cursor: 'pointer', color: 'var(--el-color-primary)' }}>
					<DocumentCopy />
				</ElIcon>
			</ElText>
		);
	},
	{
		name: 'ProText',
	}
) as unknown as FunctionalComponent<ProTextProps>;

ProText.props = proTextProps;

export * from './typing';

export default ProText;
