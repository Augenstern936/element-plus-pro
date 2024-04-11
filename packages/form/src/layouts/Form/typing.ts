/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 23:05:53
 * @LastEditTime: 2024-04-11 22:56:05
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\typing.ts
 */
import type { FormProps, FormItemProps, FormItemRule } from 'element-plus';
import components from '../../components';

export interface ProFormProps extends FormProps {
	// 绑定的数据
	modelValue?: Record<string, unknown>;
	// 全局设置是否必填
	require?: boolean;
	// 是否为描述表单
	readonly?: boolean;
	// 提交按钮文本
	submitText?: string;
	// 重置安全文本
	resetText?: string;
	// 项配置
	items: ProFormItem[];
	// 空文本
	emptyText?: string;
	// 是否显示底部操作按钮及自定义操作配置
	actions?: boolean | [];
	// 监听重置按钮事件
	onReset?: () => void;
	// 提交表单且数据验证成功后回调事件
	onFinish?: (entity: Record<string, unknown>) => void;
}

export interface ProFormItem extends Omit<FormItemProps, 'prop' | 'label' | 'rules' | 'required'> {
	// 表单项类型，决定着渲染的内容
	type?: Type | ProFormItemFunction<Type>;
	// 绑定的字段
	dataField?: string | ProFormItemFunction<string>;
	// 标签
	label?: string | ProFormItemFunction<boolean>;
	// 是否以描述文本的方式展示
	readonly?: boolean | ProFormItemFunction<boolean>;
	// 初始值
	initialValue?: string | number | boolean | ProFormItemFunction<boolean>;
	// 是否必填
	required?: boolean | ProFormItemFunction<boolean>;
	// 验证规则
	rules?: ProFormItemRule | ProFormItemRule[] | ProFormItemFunction<ProFormItemRule | ProFormItemRule[]>;
	// 表单输入框组件所需要的参数
	fieldProps?: {};
	// 表单项参数，会与ProFormItem参数进行覆盖合并
	props?: ProFormItemFunction<ProFormItem>;
	// 自定义渲染表单项默认内容
	render?: ProFormItemFunction<JSX.Element>;
}

export type Type = keyof typeof components;

export type ProFormItemRule = Omit<FormItemRule, 'required'>;

type ProFormItemFunction<T> = (entity: Record<string, unknown>) => T;
