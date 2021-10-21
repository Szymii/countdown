import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Display from './Display';
import { getTimeLeft } from '../utils';
import { TimeContext } from '../TimeContext';

const Wrapper = styled.div`
	display: flex;
	gap: 1em;
`;

const Countdown = () => {
	const { date } = useContext(TimeContext);
	const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

	useEffect(() => {
		const timeout = setTimeout(() => {
			setTimeLeft(getTimeLeft(date));
		}, 1000);

		return () => clearTimeout(timeout);
	}, [timeLeft, date]);

	return (
		<Wrapper>
			{Object.keys(timeLeft).map((key) => (
				<Display key={key} label={key} timeLeft={timeLeft} />
			))}
		</Wrapper>
	);
};

export default Countdown;
