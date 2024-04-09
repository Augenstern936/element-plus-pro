/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-04-10 00:11:50
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\typing.ts
 */
import type { InputProps } from 'element-plus';
import type { CSSProperties } from 'vue';

export interface ProFieldInputProps extends InputProps {
	type: 'text' | 'password' | 'textarea';
	style?: CSSProperties;
}

export type ProFieldTextProps = Omit<ProFieldInputProps, 'type'>;

export type ProFieldPasswordProps = Omit<ProFieldInputProps, 'type'>;

export type ProFieldTextareaProps = Omit<ProFieldInputProps, 'type'>;
