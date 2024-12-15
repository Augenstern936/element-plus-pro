/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 19:08:12
 * @LastEditTime: 2024-12-14 20:59:13
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { Interceptor } from "./Interceptor";

export * from "./typing";

export * from "./components";

export const ProInterceptor = Interceptor;

export default withInstall(Interceptor);
