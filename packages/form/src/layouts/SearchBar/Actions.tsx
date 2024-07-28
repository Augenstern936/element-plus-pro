/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-19 10:34:28
 * @LastEditTime: 2024-07-28 13:37:06
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\Actions.tsx
 */
import { ElButton, ElIcon, ElSpace } from 'element-plus';
import { ProSearchBarProps } from './typing';
import { isObject } from '@vueuse/core';
import { SetupContext } from 'vue-demi';
import { ArrowDown, ArrowUp, Delete, Search } from '@element-plus/icons-vue';
import ProButton, { ProButtonProps } from '@element-plus/pro-button';

type ActionsProps = ProSearchBarProps & {
	onSubmit: (buttonProps: ProButtonProps) => void;
	onReset: (buttonProps: ProButtonProps) => void;
	onCollapse: (collapse: boolean) => void;
};

const Actions = (props: ActionsProps, ctx: SetupContext) => {
	const searchButtonProps = isObject(props.searchButton) ? props.searchButton : {};
	const resetButtonProps = isObject(props.resetButton) ? props.resetButton : {};
	const submitter = ctx.slots?.submitter?.() as Record<string, any>[];
	const isSubmitterUndefined = String(submitter[0].type) === 'Symbol(v-cmt)';
	return (
		<ElSpace>
			{props.searchButton !== false && isSubmitterUndefined && (
				<ProButton
					type={'primary'}
					icon={Search}
					{...searchButtonProps}
					onClick={() => props.onSubmit(searchButtonProps)}
				>
					{props.searchButtonTitle || '查询'}
				</ProButton>
			)}
			{props.resetButton != false && isSubmitterUndefined && (
				<ProButton icon={Delete} {...resetButtonProps} onClick={() => props.onReset(resetButtonProps)}>
					{props.resetButtonTitle || '重置'}
				</ProButton>
			)}
			{submitter}
			<ElButton type='primary' link onClick={() => props.onCollapse(!props.collapsed)}>
				<ElSpace>
					<span>{props.collapsed ? '收起' : '展开'}</span>
					<ElIcon>{props.collapsed ? <ArrowUp /> : <ArrowDown />}</ElIcon>
				</ElSpace>
			</ElButton>
		</ElSpace>
	);
};

export default Actions;
