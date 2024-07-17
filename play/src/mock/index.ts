/*
 * @Description:
 * @Date: 2024-07-17 09:47:00
 * @LastEditTime: 2024-07-17 12:36:26
 */
import fetchMock from "fetch-mock";
import Mock from "mockjs";

fetchMock.get(
	"/api/pro-table/data",
	() => {
		return {
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
			// data: [
			// 	{
			// 		id: 1,
			// 		name: "张三",
			// 		age: 0,
			// 		sex: "男",
			// 		rate: 0,
			// 		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
			// 	},
			// 	{
			// 		id: 2,
			// 		name: "李斯",
			// 		age: 30,
			// 		sex: "女",
			// 		avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
			// 		rate: 5,
			// 	},
			// 	{
			// 		id: 3,
			// 		name: "王五",
			// 		age: 15,
			// 		sex: "男",
			// 		rate: 3,
			// 	},
			// ],
		};
	},
	{
		delay: 1000,
	}
);

// const getData = async () => {
// 	try {
// 		const res = await fetch("/api/pro-table/data");
// 		console.log(res, "res");
// 		const data = await res.json();
// 		console.log(data, "数据");
// 	} catch (err) {
// 		console.log(err, "异常");
// 	}
// };

// getData();

// fetchMock.restore();
