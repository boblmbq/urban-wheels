import styled from 'styled-components';



export const Button = styled.button`
	font-family: var(--font-family);
	font-size: 16px;
	text-decoration: underline;
	background: transparent;
	border: 0px transparent;
	color: #3470ff;
	cursor: pointer;

	transition: color 0.3s ease-out;

	&:hover {
		color: #0b44cd;
		background: transparent;
	}
`;
