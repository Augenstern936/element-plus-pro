import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent } from 'vue';
import { ElButton, ElMessageBox } from 'element-plus';
import { ProButtonProps } from './typing';
import type { FunctionalComponent } from 'vue';

const ProButton = defineComponent<ProButtonProps>(
	(props, ctx) => {
		const onClick = (e: unknown) => {
			console.log(props, e, 'props');
			if (props.tip) {
				return ElMessageBox.confirm(props.tip, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						ctx.emit('clickEvent', e);
					})
					.catch(() => {});
			} else {
				ctx.emit('clickEvent', e);
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
) as FunctionalComponent<ProButtonProps>;

// ProButton.props = props as any;

export default withInstall(ProButton);
