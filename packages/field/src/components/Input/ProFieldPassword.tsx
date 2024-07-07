/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-22 19:11:22
 * @LastEditTime: 2024-07-06 15:57:51
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldPassword.tsx
 */
import { FunctionalComponent, ref } from 'vue';
import { ElIcon, ElSpace, ElText } from 'element-plus';
import { ProFieldPasswordProps } from './props';
import { View, Hide } from '@element-plus/icons-vue';
import BaseInput from './BaseInput';

export const ProFieldPassword: FunctionalComponent<ProFieldPasswordProps> = (props: ProFieldPasswordProps) => {
	const isView = ref(false);

	return props.mode === 'read' && props.modelValue ? (
		<ElSpace>
			<ElText class='pro-field-password__read-status-text' style={{ height: isView.value ? 'unset' : '1px' }}>
				{isView.value ? props.modelValue : '********'}
			</ElText>
			<ElText
				class='pro-field-password__view-hide-switch'
				type='primary'
				style={{ height: isView.value ? 'unset' : '1px' }}
				onClick={() => (isView.value = !isView.value)}
			>
				<ElIcon>{isView.value ? <View /> : <Hide />}</ElIcon>
			</ElText>
		</ElSpace>
	) : (
		<BaseInput {...props} type='password' />
	);
};
