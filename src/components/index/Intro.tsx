/** @format */
import React from "react";
import styled from "styled-components";

export default function Intro() {
	return (
		<Wrapper>
			<InnerWrapper>
				<Circle>What we will do</Circle>
			</InnerWrapper>
			<Title>
				Discord bot for
				<br />
				DAO management
			</Title>
			<Desc>Da0 is building tools for managing DAO on discord.</Desc>
			<Desc>
				Through Da0’s discord bot ”Da0”, you can manage DAO tasks, members more
				efficiently.
			</Desc>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 0;
	flex-direction: column;
	background-color: #111;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 19.188rem;
`;
const Circle = styled.div`
	width: 15.438rem;
	height: 3.125rem;
	flex-grow: 0;
	text-align: center;
	padding: 0.7rem;
	border: solid 1px #fafafa;
	color: #fafafa;
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 1.5rem;
	border-radius: 50%;
`;
const Title = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 6rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.18rem;
	text-align: center;
	color: #fafafa;
	margin: 5rem 0;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
	}
`;
const Desc = styled.p`
	font-family: Roboto, -apple-system;
	font-size: 1.3rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 2;
	letter-spacing: normal;
	text-align: center;
	color: #fafafa;
	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const InnerWrapper = styled.div`
	margin-top: 16.875rem;
	display: flex;
	justify-content: center;
`;
