/*
 * @Description:
 * @Date: 2024-07-17 09:47:00
 * @LastEditTime: 2024-10-08 21:22:14
 */

import fetchMock from "fetch-mock";
import Mock from "mockjs";

fetchMock.config.fallbackToNetwork = true;

fetchMock
  .get(
    "https://example.com/api/pro-table/list",
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
              "sex|1": ["男", "女"],
              city: "@CITY",
              status: 1,
              avatar: Mock.Random.dataImage("200x100", "唐时明月"),
              date: "@date('yyyy-MM-dd')"
            }
          ]
        })
      };
    },
    {
      delay: 1000
    }
  )
  .spy();
