/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 23:08:33
 * @LastEditTime: 2024-04-11 22:57:39
 * @FilePath: \element-plus-pro\packages\form\src\index.ts
 */

import ProForm from './layouts/Form';
import ProStepForm from './layouts/StepForm';
import ProLoginForm from './layouts/LoginForm';
import ProDialogForm from './layouts/DialogForm';
import ProDrawerForm from './layouts/DrawerForm';
import ProSearchBar from './layouts/SearchBar';

export * from './components';

/**
 * 导出类型
 */
export * from './layouts/Form';
export * from './layouts/StepForm';
export * from './layouts/LoginForm';
export * from './layouts/DialogForm';
export * from './layouts/DrawerForm';
export * from './layouts/SearchBar';

export { ProForm, ProStepForm, ProLoginForm, ProDialogForm, ProDrawerForm, ProSearchBar };

export default ProForm;
