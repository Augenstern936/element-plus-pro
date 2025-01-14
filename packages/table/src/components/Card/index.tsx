/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-12-27 15:59:13
 */
import { ElCard } from "element-plus";
import { CSSProperties, SetupContext } from "vue-demi";
import styled from "vue3-styled-components";

export const Card = styled("div", { ghost: Boolean })`
  border-radius: 3px;
  padding: ${(props: any) => (props.ghost ? 0 : "20px")};
  background: ${(props: any) => (props.ghost ? "none" : "white")};
`;

export const Wrapper = (props: { ghost: Boolean; style?: CSSProperties }, ctx: SetupContext) => {
  return (
    <ElCard class={"warpper"} style={{ "--warpper-padding": props.ghost ? 0 : "20px" }}>
      {ctx.slots?.default?.()}
    </ElCard>
  );
};
