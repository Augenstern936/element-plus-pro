/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-21 23:03:44
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { ProButtonProps } from '@element-plus/pro-button';
import { withInstall } from '@element-plus/pro-utils';
import { useVModel } from '@vueuse/core';
import { DefineComponent, defineComponent } from 'vue-demi';
import { GenerateForm } from '../../core';
import { proSearchBarProps, ProSearchBarProps } from './typing';
import Options from './Options';
import Actions from './Actions';

const SearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);
		const onSubmitter = (name: 'submit' | 'reset', buttonProps: ProButtonProps & { onClick?: Function }) => {
			if (typeof buttonProps.onClick === 'function') {
				return buttonProps.onClick(model.value);
			}
			ctx.emit(name, model.value);
		};
		return () => (
			<div>
				<GenerateForm
					colProps={{ span: props.colSpan ?? 8 }}
					rowProps={{ gutter: 24 }}
					{...props}
					grid={true}
					labelPosition={props.layout === 'vertical' ? 'top' : 'right'}
					v-model={model.value}
					v-slots={{
						submitter: () => {
							return (
								<Actions
									{...props}
									onSubmit={(config) => onSubmitter('submit', config)}
									onReset={(config) => onSubmitter('reset', config)}
								>
									{{ submitter: () => ctx.slots?.submitter?.(model.value) }}
								</Actions>
							);
						},
					}}
				/>
				<Options buttons={props.extraTools ?? []} v-slots={{ default: () => ctx.slots?.extraTools?.() }} />
			</div>
		);
	},
	{
		name: 'ProSearchBar',
	}
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from './typing';

export const ProSearchBar = withInstall(SearchBar);
