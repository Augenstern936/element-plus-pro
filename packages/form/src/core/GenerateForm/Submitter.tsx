/*
 * @Description:表单操作器
 * @Author: wangbowen936926
 * @Date: 2024-06-16 20:02:37
 * @LastEditTime: 2024-07-24 13:08:14
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\Submitter.tsx
 */
import { ButtonProps, ElButton } from 'element-plus';
import { CSSProperties, FunctionalComponent } from 'vue-demi';
import type { JSX } from 'vue/jsx-runtime';

export interface ActionsProps {
	submitButtonProps?: ButtonProps & { style?: CSSProperties };
	resetButtonProps?: ButtonProps & { style?: CSSProperties };
	submitButtonText?: string;
	resetButtonText?: string;
	hideResetButton?: boolean;
	buttonFillMode?: 'aequilate' | 'full' | 'auto';
	render?: (props: ActionsProps, doms: JSX.Element[]) => JSX.Element | JSX.Element[];
	onSubmit?: (entity: Record<string, any>) => void;
	onReset?: (entity: Record<string, any>) => void;
}

const Actions: FunctionalComponent<ActionsProps> = (props: ActionsProps) => {
	const getGridTemplateColumns = () => {
		const width = {
			auto: 'repeat(2, 0fr)',
			full: 'repeat(1, 1fr)',
			aequilate: 'repeat(2, 1fr)',
		};
		return width[props.buttonFillMode || 'auto'];
	};

	return (
		<div
			class={'actions-box'}
			style={{
				gridTemplateColumns: getGridTemplateColumns(),
			}}
		>
			<ElButton type='primary' {...props.submitButtonProps} onClick={props.onSubmit}>
				{props.submitButtonText || '提交'}
			</ElButton>
			{props.hideResetButton !== true && (
				<ElButton type='default' {...props.resetButtonProps} onClick={props.onReset}>
					{props.resetButtonText || '重置'}
				</ElButton>
			)}
		</div>
	);
};

export default Actions;
