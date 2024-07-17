/*
 * @Description:
 * @Date: 2024-07-17 14:58:11
 * @LastEditTime: 2024-07-17 15:47:53
 */
import Mock from "mockjs";
import { http, HttpResponse } from "msw";

export default [
	http.get("/api/pro-table/data", () => {
		return HttpResponse.json({
			code: 0,
			msg: "操作成功",
			data: Mock.mock({
				total: 100,
				current: 1,
				pageSize: 10,
				"list|10": [
					{
						"id|+1": 1,
						email: "@EMAIL",
						name: "@NAME",
						"age|18-30": 1,
						city: "@CITY",
					},
				],
			}),
		});
	}),
];
