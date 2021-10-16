import React from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Wrapper = styled.div`
	display: flex;
	font-size: 1.5rem;
	gap: 1em;
	color: hsl(234, 20%, 59%);
	margin: auto 0 8vh;

	svg:hover {
		color: hsl(346, 91%, 67%);
		cursor: pointer;
	}
`;

const SocialIcons = () => {
	return (
		<Wrapper>
			<BsFacebook />
			<BsPinterest />
			<BsInstagram />
		</Wrapper>
	);
};

export default SocialIcons;
