import styled from 'vue3-styled-components';

const Card = styled('div', { ghost: Boolean })`
	border-radius: 3px;
	padding: ${(props: any) => (props.ghost ? 0 : '20px')};
	background: ${(props: any) => (props.ghost ? 'none' : 'white')};
`;

export default Card;
