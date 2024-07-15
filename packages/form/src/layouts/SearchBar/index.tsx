/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-15 21:44:25
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { withInstall } from '@element-plus/pro-utils';
import { useVModel } from '@vueuse/core';
import { DefineComponent, defineComponent } from 'vue-demi';
import { GenerateForm } from '../../core';
import { proSearchBarProps, ProSearchBarProps } from './typing';
import { ElButton, ElSpace } from 'element-plus';
import ProButton from '@element-plus/pro-button';
import { Search } from '@element-plus/icons-vue';

const SearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);
		return () => (
			<GenerateForm
				{...props}
				labelPosition={props.layout === 'vertical' ? 'top' : 'right'}
				inline={true}
				v-model={model.value}
				v-slots={{
					submitter: (entity: Record<string, any>) => {
						return (
							<ElSpace>
								<ElButton type={'primary'} icon={Search}>
									查询
								</ElButton>
								<ElButton>重置</ElButton>
							</ElSpace>
						);
					},
				}}
			/>
		);
	},
	{
		name: 'ProSearchBar',
	}
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from './typing';

export const ProSearchBar = withInstall(SearchBar);
