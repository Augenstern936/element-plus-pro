import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent } from 'vue';
import { ElButton, ElMessageBox } from 'element-plus';
import { ProButtonProps } from './typing';
import type { FunctionalComponent } from 'vue';

const ProButton = defineComponent(
	(props: ProButtonProps, ctx: any) => {
		const onClick = (evt: any) => {
			if (props.tip) {
				return ElMessageBox.confirm(props.tip, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						ctx.emit('clickEvent', evt);
					})
					.catch(() => {});
			} else {
				ctx.emit('clickEvent', evt);
			}
		};

		return () => (
			<ElButton {...props} onClick={onClick}>
				{ctx.slots.default?.()}
			</ElButton>
		);
	},
	{
		name: 'ProButton',
	}
) as unknown as FunctionalComponent;

ProButton.props = props;

export default withInstall(ProButton);
