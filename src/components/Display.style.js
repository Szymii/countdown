import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 100%;

	@media (min-width: 620px) {
		font-size: 1.2rem;
	}
`;

export const InnerWrapper = styled.div`
	box-shadow: 0 0.3em 0em hsl(240, 16%, 12%);
	border-radius: 0.3em;
	position: relative;
`;

export const FlipWrapper = styled.div`
	position: absolute;
	inset: 0;
	z-index: 1;
`;

export const Label = styled.span`
	display: block;
	width: 100%;
	color: hsl(234, 20%, 60%);
	font-size: 0.45rem;
	text-align: center;
	margin-top: 2em;
	text-transform: uppercase;
	letter-spacing: 0.5em;
`;

export const Rectangle = styled.div`
	background-color: ${({ top }) =>
		top ? 'hsl(236, 21%, 20%);' : 'hsl(236, 21%, 26%);'};
	color: ${({ top }) => (top ? 'hsl(346, 61%, 57%);' : 'hsl(346, 93%, 67%);')};
	text-align: center;
	height: 2em;
	width: 4.2em;
	overflow: hidden;
	position: relative;
	border-radius: ${({ top }) => (top ? '0.3em 0.3em 0 0' : '0 0 0.3em 0.3em')};
	transform-origin: ${({ top }) => (top ? 'bottom' : 'top')};

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

		&::after,
		&::before {
			content: '';
			position: absolute;
			height: 7px;
			width: 7px;
			background-color: hsl(240, 16%, 12%);
			border-radius: 50%;
		}

		&::before {
			left: 0;
			transform: translate(-50%);
		}
		&::after {
			right: 0;
			transform: translate(50%);
		}
	}
`;
