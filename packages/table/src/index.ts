/*
 * @Description:
 * @Date: 2024-08-20 15:26:02
 * @LastEditTime: 2024-11-22 17:31:37
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import ProTable from "./Table";

import "./style/index.scss";

export * from "./typing";

export * from "./enum";

export { ProTable };

export default withInstall(ProTable);
