import styled from "../../../node_modules/.pnpm/vue3-styled-components@1.2.1/node_modules/vue3-styled-components/dist/vue-styled-components.es.mjs";
const Card = styled("div", { ghost: Boolean })`
	border-radius: 3px;
	padding: ${(props) => props.ghost ? 0 : "20px"};
	background: ${(props) => props.ghost ? "none" : "white"};
`;
const Card$1 = Card;
export {
  Card$1 as default
};
