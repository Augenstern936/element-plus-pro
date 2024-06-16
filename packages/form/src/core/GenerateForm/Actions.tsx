/*
 * @Description:表单操作器
 * @Author: wangbowen936926
 * @Date: 2024-06-16 20:02:37
 * @LastEditTime: 2024-06-16 20:25:41
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\Actions.tsx
 */
import { ButtonProps } from 'element-plus';
import { CSSProperties, SetupContext } from 'vue';

export interface ActionsProps {
	submitButtonProps?: ButtonProps & { style?: CSSProperties };
	resetButtonProps?: ButtonProps & { style?: CSSProperties };
	submitButtonText?: String;
	resetButtonText?: String;
	render?: (props: ActionsProps, dom: JSX.Element[]) => void;
	onSubmit?: (entity: Record<string, any>) => void;
	onReset?: (entity: Record<string, any>) => void;
}

const Actions = (props: ActionsProps, ctx: SetupContext) => {
	return <div>11</div>;
};

export default Actions;
