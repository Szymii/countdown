import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Display from './Display';
import { getTimeLeft } from '../utils';

const Wrapper = styled.div`
	display: flex;
	gap: 1em;
`;

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft());

	useEffect(() => {
		const timeout = setTimeout(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => clearTimeout(timeout);
	}, [timeLeft]);

	return (
		<Wrapper>
			{Object.keys(timeLeft).map((key) => (
				<Display key={key} label={key} value={timeLeft[key]} />
			))}
		</Wrapper>
	);
};

export default Countdown;
