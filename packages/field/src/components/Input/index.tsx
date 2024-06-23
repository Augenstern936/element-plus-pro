/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-22 19:29:39
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\index.tsx
 */
import { ProFieldTextProps, ProFieldTextareaProps } from './props';
import BaseInput from './BaseInput';
import './style.scss';

export * from './props';

export * from './ProFieldNumber';

export * from './ProFieldPassword';

export const ProFieldText = (props: ProFieldTextProps) => <BaseInput {...props} type='text' />;

export const ProFieldTextarea = (props: ProFieldTextareaProps) => <BaseInput {...props} type='textarea' />;
