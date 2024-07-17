/*
 * @Description:
 * @Date: 2024-07-17 15:30:00
 * @LastEditTime: 2024-07-17 15:52:25
 */
import { setupServer } from "msw/node";
import service from "./service";

export const server = setupServer(...service);

server.listen();

async function app() {
	const response = await fetch("/api/pro-table/data");
	const user = await response.json();
	console.log(user);
}

app();
