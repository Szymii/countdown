import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 100%;

	@media (min-width: 620px) {
		font-size: 1.2rem;
	}
`;

const InnerWrapper = styled.div`
	color: hsl(346, 93%, 67%);
	box-shadow: 0 0.3em 0em hsl(240, 16%, 12%);
	border-radius: 0.3em;
`;

const Label = styled.span`
	display: block;
	width: 100%;
	color: hsl(234, 20%, 60%);
	font-size: 0.45rem;
	text-align: center;
	margin-top: 2em;
	text-transform: uppercase;
	letter-spacing: 0.5em;
`;

const Rectangle = styled.div`
	background-color: hsl(236, 21%, 26%);
	text-align: center;
	${({ top }) => (top ? 'filter: brightness(75%);' : null)}
	height: 2em;
	width: 4.2em;
	overflow: hidden;
	position: relative;
	border-radius: ${({ top }) => (top ? '0.3em 0.3em 0 0' : '0 0 0.3em 0.3em')};

	span {
		font-size: 2.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		height: 100%;
		width: 100%;
		top: ${({ top }) => (top ? '50%' : '-50%')};
		left: 50%;
		transform: ${({ top }) =>
			top ? 'translate(-50%, 0)' : ' translate(-50%, 0)'};
	}
`;

const Display = ({ label, value }) => {
	// console.log(label, value);

	return (
		<Wrapper>
			<InnerWrapper>
				<Rectangle top>
					<span>{value}</span>
				</Rectangle>
				<Rectangle>
					<span>{value}</span>
				</Rectangle>
			</InnerWrapper>
			<Label>{label}</Label>
		</Wrapper>
	);
};

export default Display;

/* background-color: hsl(240, 16%, 12%); */
