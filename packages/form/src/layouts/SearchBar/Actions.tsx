/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-19 10:34:28
 * @LastEditTime: 2024-07-19 14:38:32
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\Actions.tsx
 */
import { ElButton, ElIcon, ElSpace } from 'element-plus';
import { ProSearchBarProps } from './typing';
import { isObject } from '@vueuse/core';
import { ref, SetupContext } from 'vue';
import { ArrowDown, ArrowUp, Search } from '@element-plus/icons-vue';
import ProButton, { ProButtonProps } from '@element-plus/pro-button';

type ActionsProps = ProSearchBarProps & {
	onSubmit: (buttonProps: ProButtonProps) => void;
	onReset: (buttonProps: ProButtonProps) => void;
};

const Actions = (props: ActionsProps, ctx: SetupContext) => {
	const searchButtonProps = isObject(props.searchButton) ? props.searchButton : {};
	const resetButtonProps = isObject(props.resetButton) ? props.resetButton : {};
	const submitter = ctx.slots?.submitter?.() as Record<string, any>[];
	const isSubmitterUndefined = String(submitter[0].type) === 'Symbol(v-cmt)';
	const isFilterBarExpand = ref(false);
	return (
		<ElSpace>
			{props.searchButton !== false && isSubmitterUndefined && (
				<ProButton
					type={'primary'}
					icon={Search}
					{...searchButtonProps}
					onClick={() => props.onSubmit(searchButtonProps)}
				>
					{props.searchButtonTitle || '搜索'}
				</ProButton>
			)}
			{props.resetButton != false && isSubmitterUndefined && (
				<ProButton {...resetButtonProps} onClick={() => props.onSubmit(resetButtonProps)}>
					{props.resetButtonTitle || '重置'}
				</ProButton>
			)}
			{submitter}
			<ElButton type='primary' link onClick={() => (isFilterBarExpand.value = !isFilterBarExpand.value)}>
				<ElIcon>{!isFilterBarExpand.value ? <ArrowDown /> : <ArrowUp />}</ElIcon>
				<span>{!isFilterBarExpand.value ? '展开' : '收起'}</span>
			</ElButton>
		</ElSpace>
	);
};

export default Actions;
