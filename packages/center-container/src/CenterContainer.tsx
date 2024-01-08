import './styles/index.scss';
import props from './props';
import { defineComponent, computed } from 'vue';
import { withInstall, toCssUnitValue } from '@element-plus/pro-utils';
import type { FunctionalComponent } from 'vue';
import type { ProCenterContainerProps } from './typing';

const ProCenterContainer = defineComponent(
	(props: ProCenterContainerProps, ctx) => {
		const whStyle = computed(() => {
			return {
				width: toCssUnitValue(props.width || '100%'),
				height: toCssUnitValue(props.height || '100%'),
			};
		});

		return () => (
			<div class='pro-center-container' style={whStyle.value}>
				{ctx.slots.default?.()}
			</div>
		);
	},
	{
		name: 'ProCenterContainer',
	}
) as unknown as FunctionalComponent;

ProCenterContainer.props = props;

export default withInstall(ProCenterContainer);
