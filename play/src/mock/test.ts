/*
 * @Description:
 * @Date: 2024-07-17 15:30:00
 * @LastEditTime: 2024-07-17 16:31:47
 */
import { setupWorker } from "msw/browser";
import { service } from "./service";

export const server = setupWorker(...service);

// async function app() {
// 	try {
// 		const res = await fetch("https://example.com/api/pro-table/list");
// 		const data = await res.json();
// 		console.log(data, "数据");
// 	} catch (err) {
// 		console.log(err, "异常");
// 	} finally {
// 	}
// }

// app();
