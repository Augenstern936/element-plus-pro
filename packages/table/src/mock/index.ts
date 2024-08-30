/*
 * @Description:
 * @Date: 2024-07-17 09:47:00
 * @LastEditTime: 2024-08-30 09:45:57
 */

import { setupWorker } from "msw/browser";
import { service } from "./service";

export const server = setupWorker(...service);

server.start();
server.use(...service);
