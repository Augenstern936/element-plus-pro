/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-11-25 11:06:31
 *
 */
import { StatusColorEnum, VModelOptionValue, ValueOption } from "@element-plus-ui/pro-types";

/**
 * 获取Option选项设置的颜色
 * @param param
 * @returns
 */
export function getOptionStatusColor({ color, status }: ValueOption) {
  return status && StatusColorEnum[status] ? StatusColorEnum[status] : (color ?? StatusColorEnum.processing);
}

/**
 * 获取选中项
 * @param model
 * @param datas
 * @returns
 */
export function getVModelSelectedOptions(model: VModelOptionValue, datas: ValueOption[]) {
  let options: ValueOption[] = [];
  const search = (terget: string | number | boolean, values: ValueOption[]) => {
    if (Array.isArray(values) && values.length) {
      values?.forEach(item => {
        const children = item.children ?? [];
        if (item.value == terget) {
          return options.push(item);
        }
        search(terget, children);
      });
    }
    return options;
  };
  if (Array.isArray(model)) {
    model.forEach(v => search(v, datas));
    return options;
  }
  return search(model, datas);
}
