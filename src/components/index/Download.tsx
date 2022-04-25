/** @format */
import React from "react";
import styled from "styled-components";

export default function Dowload() {
	return (
		<Wrapper>
			<Title>
				INVITE REGIC
				<br />
				TO YOUR DISCORD
			</Title>
			<Desc>Click the button below.</Desc>
			<InnerWrapper>
				<Button>Button</Button>
			</InnerWrapper>
			<InnerWrapper>
				<Graphic />
			</InnerWrapper>
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
`;
const Title = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 3.5rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.18rem;
	text-align: center;
	color: #fff;
	margin: 2.313rem 0;
`;
const Desc = styled.p`
	font-family: OpenSans, -apple-system;
	font-size: 1.25rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #fff;
	margin-bottom: 5.063rem;
`;
const InnerWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const Graphic = styled.div`
	width: 100.5rem;
	height: 15.5rem;
	margin-top: 3rem;
	-webkit-filter: blur(6.25rem);
	filter: blur(6.25rem);
	background-color: rgba(91, 21, 182, 0.2);
	botton: 0;
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`;
const Button = styled.a`
	width: 16.875rem;
	height: 4.5rem;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 4.5rem;
	border-radius: 2.406rem;
	background-color: #6c6bf6;
	font-family: ITCAvantGardeGothicStd-Demi, -apple-system;
	font-size: 1.5rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #fff;
`;
