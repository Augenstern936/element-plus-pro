import { isObject } from "@vueuse/core";
import { TableColumn } from "../typing";
import { server } from "../mock";

/**
 * 格式化筛选栏组件配置项数据，对全局配置和单项配置进行合并
 * @param column
 * @param search
 * @returns
 */
export function formatSearchColumnConfig(column: TableColumn, search: any) {
  const { prop = "", label, valueType, valueEnum } = column;
  const globalSearchConfig = isObject(search) ? search : {};
  const columnSearchConfig = isObject(column.search) ? column.search : {};
  return {
    label: label,
    prop,
    valueType,
    valueEnum,
    ...globalSearchConfig,
    ...columnSearchConfig
  };
}

/**
 * 合并多个分页参数对象
 * @param defaultPage
 * @param pages
 * @returns
 */
export function mergePaginationParams(
  defaultPage: Record<"current" | "pageSize", number>,
  ...pages: any[]
): Record<"current" | "pageSize", number> {
  let params = { ...defaultPage };
  if (pages.length) {
    pages.forEach((item: any) => {
      if (isObject(item) && ((item as any).current || (item as any).pageSize)) {
        params = { ...params, ...item };
      }
    });
  }
  return {
    current: params.current,
    pageSize: params.pageSize
  };
}

/**
 * 判断对象是否为空
 * @param entity
 * @returns
 */
export function isEmptyObj(entity: Record<string, any> = {}): boolean {
  const keys = Object.keys(entity);
  if (!keys.length) return true;
  let count = 0;
  keys.forEach(key => {
    if (!entity[key]) ++count;
  });
  return keys.length === count;
}

/**
 * 模拟请求
 * @returns
 */
export async function mockRequest() {
  server.start();
  try {
    const res = await fetch("https://example.com/api/pro-table/list");
    const test = (await res.json()) as Record<string, any>;
    console.log(test.data.list, "数据");
    return {
      list: test.data.list,
      total: test.data.total
    };
  } catch (err) {
    console.log(err, "异常");
  } finally {
    //fetchMock.restore()
  }
}
