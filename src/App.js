import React from 'react';
import styled from 'styled-components';
import stars from './assets/images/bg-stars.svg';
import hills from './assets/images/pattern-hills.svg';
import Countdown from './components/Countdown';
import SocialIcons from './components/SocialIcons';
import { TimeProvider } from './TimeContext';

const ViewWrapper = styled.div`
	min-height: 100vh;
	background-color: hsl(257, 19%, 14%);
	background-image: url(${hills}), url(${stars});
	background-repeat: no-repeat, repeat;
	background-position: bottom right, top;
	background-size: 300%, contain;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		background-size: 100%, contain;
	}
`;

const StyledTitle = styled.h1`
	text-align: center;
	color: hsl(0, 0%, 100%);
	font-size: 1.2rem;
	letter-spacing: 0.2em;
	margin: 4em 0;
	padding: 0 1.3em;
`;

const App = () => {
	return (
		<TimeProvider>
			<ViewWrapper>
				<StyledTitle>WE'RE LAUNCHING SOON</StyledTitle>
				<Countdown />
				<SocialIcons />
			</ViewWrapper>
		</TimeProvider>
	);
};

export default App;
