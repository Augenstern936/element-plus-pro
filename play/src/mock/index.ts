/*
 * @Description:
 * @Date: 2024-07-17 09:47:00
 * @LastEditTime: 2024-07-17 22:20:46
 */

import { setupWorker } from "msw/browser";
import { service } from "./service";

export const server = setupWorker(...service);

server.start();
server.use(...service);

// import fetchMock from "fetch-mock";
// import Mock from "mockjs";

// fetchMock.get(
// 	"/api/pro-table/data",
// 	() => {
// 		return {
// 			code: 0,
// 			msg: "操作成功",
// 			data: Mock.mock({
// 				total: 100,
// 				current: 1,
// 				pageSize: 10,
// 				"list|10": [
// 					{
// 						"id|+1": 1,
// 						email: "@EMAIL",
// 						name: "@NAME",
// 						"age|18-30": 1,
// 						city: "@CITY",
// 					},
// 				],
// 			})
// 		};
// 	},
// 	{
// 		delay: 1000,
// 	}
// );
