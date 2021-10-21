import React, { useRef, useEffect } from 'react';
import {
	Wrapper,
	InnerWrapper,
	Rectangle,
	Label,
	FlipWrapper,
} from './Display.style';
import gsap from 'gsap';

const Display = ({ label, timeLeft }) => {
	// const value =
	// 	timeLeft[label] / 10 >= 1 ? timeLeft[label] : `0${timeLeft[label]}`;
	const value = timeLeft[label];

	const wrapper = useRef(null);
	const topRect = useRef(null);
	const bottomRect = useRef(null);

	const setText = (value, node, label) => {
		if (label === 'hours' && value === 24) return (node.innerText = '00');
		if (label !== 'day' && value === 60) return (node.innerText = '00');
		if (value < 10) return (node.innerText = `0${value}`);
		return (node.innerText = value);
	};

	useEffect(() => {
		const element = wrapper.current;
		const bottom = wrapper.current.children[1];
		const top = wrapper.current.children[0];
		const nextTop = topRect.current.children[0];
		const prevBtm = bottomRect.current.children[0];

		gsap.set(element, { transformStyle: 'preserve-3d' });

		const tl = gsap.timeline();
		tl.call(setText, [value, nextTop, label]);
		tl.call(setText, [value, bottom.children[0], label]);
		tl.call(setText, [value + 1, top.children[0], label]);
		tl.call(setText, [value + 1, prevBtm, label]);
		tl.set(bottom, {
			rotationX: 180,
			backfaceVisibility: 'hidden',
		});
		tl.fromTo(element, { rotationX: 0 }, { rotationX: -180, duration: 0.4 });
		tl.call(setText, [value, top.children[0]]);
		tl.call(setText, [value, prevBtm]);
	}, [label, value]);

	return (
		<Wrapper>
			<InnerWrapper>
				<Rectangle top ref={topRect}>
					<span />
				</Rectangle>
				<FlipWrapper ref={wrapper}>
					<Rectangle top>
						<span />
					</Rectangle>
					<Rectangle>
						<span />
					</Rectangle>
				</FlipWrapper>
				<Rectangle ref={bottomRect}>
					<span />
				</Rectangle>
			</InnerWrapper>
			<Label>{label}</Label>
		</Wrapper>
	);
};

export default Display;
