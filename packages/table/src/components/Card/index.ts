/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-11-22 13:59:43
 */
import styled from "vue3-styled-components";

export const Card = styled("div", { ghost: Boolean })`
  border-radius: 3px;
  padding: ${(props: any) => (props.ghost ? 0 : "20px")};
  background: ${(props: any) => (props.ghost ? "none" : "white")};
`;
