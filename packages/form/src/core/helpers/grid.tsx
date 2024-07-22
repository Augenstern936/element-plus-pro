/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-02 23:10:25
 * @LastEditTime: 2024-07-21 23:07:42
 * @FilePath: \element-plus-pro\packages\form\src\core\helpers\grid.tsx
 */

import { computed, FunctionalComponent } from 'vue';
import { ProFormGridConfig } from '../GenerateForm';
import { ElCol, ElRow, RowProps, ColProps } from 'element-plus';
import { isObject } from '@vueuse/core';

interface GridHelpers {
	grid: boolean;
	RowWrapper: FunctionalComponent<RowProps>;
	ColWrapper: FunctionalComponent<ColProps>;
}

export const getGridHelpers = ({ grid, rowProps, colProps }: ProFormGridConfig): GridHelpers => {
	return {
		grid: grid ?? true,
		RowWrapper: (props, ctx) => {
			return grid === true || grid === void 0 ? (
				<ElRow {...rowProps} {...props}>
					{ctx.slots?.default?.()}
				</ElRow>
			) : (
				<>{ctx.slots?.default?.()}</>
			);
		},
		ColWrapper: (props, ctx) => {
			const elColProps = computed(() => {
				const mergeProps = { ...colProps, ...props };
				return {
					...mergeProps,
					span: mergeProps.span === void 0 ? 24 : mergeProps.span > 24 ? 24 : mergeProps.span,
				};
			});

			return grid === true || grid === void 0 ? (
				<ElCol {...elColProps.value}>{ctx.slots?.default?.()}</ElCol>
			) : (
				<>{ctx.slots?.default?.()}</>
			);
		},
	};
};

export const useGridHelpers = (props: ProFormGridConfig | boolean) => {
	const config = computed(() => {
		return isObject(props) ? props : { grid: props };
	});

	const layout = computed(() => getGridHelpers(config.value));

	return layout.value;
};
