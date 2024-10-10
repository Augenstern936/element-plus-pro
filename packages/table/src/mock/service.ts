/*
 * @Description:
 * @Date: 2024-07-17 14:58:11
 * @LastEditTime: 2024-10-09 14:26:46
 */
import Mock from "mockjs";
import { http, HttpResponse } from "msw";

export const service = [
  http.get("https://example.com/api/pro-table/list", () => {
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
            "sex|1": ["男", "女"],
            city: "@CITY",
            "status|1": [0, 1, 2],
            avatar: Mock.Random.dataImage("200x100", "唐时明月"),
            date: "@date('yyyy-MM-dd')"
          }
        ]
      })
    });
  }),
  http.post("https://example.com/api/pro-table/add", () => {
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
            "sex|1": ["男", "女"],
            city: "@CITY",
            avatar: Mock.Random.dataImage("200x100", "唐时明月"),
            date: "@date('yyyy-MM-dd')"
          }
        ]
      })
    });
  }),
  http.put("https://example.com/api/pro-table/update", () => {
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
            "sex|1": ["男", "女"],
            city: "@CITY",
            avatar: "https://picsum.photos/200/300",
            date: "@date('yyyy-MM-dd')"
          }
        ]
      })
    });
  }),
  http.delete("https://example.com/api/pro-table/delete", () => {
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
            "sex|1": ["男", "女"],
            city: "@CITY",
            avatar: Mock.Random.dataImage("200x100", "唐时明月"),
            date: "@date('yyyy-MM-dd')"
          }
        ]
      })
    });
  }),
  http.get("https://example.com/api/pro-table/view", () => {
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
            "sex|1": ["男", "女"],
            city: "@CITY",
            avatar: Mock.Random.dataImage("200x100", "唐时明月"),
            date: "@date('yyyy-MM-dd')"
          }
        ]
      })
    });
  })
];
