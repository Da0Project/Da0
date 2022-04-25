/** @format */
import React from "react";
import styled from "styled-components";

export default function Main() {
	return (
		<Wrapper>
			<ContentsWrapper>
				<Title>MANAGE YOUR DAO</Title>
				<Sub>without obstacles</Sub>
				<Desc>Anyone can build a web3 community more easily and quickly.</Desc>
				<Desc>We are making discord bot, toolkit packges for DAO</Desc>
				<Desc>Making from Zero Base, Da0</Desc>
			</ContentsWrapper>
			<Grapic />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 0;
	background-color: #111;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const ContentsWrapper = styled.div`
	margin: 20rem 0 18.063rem 22.5rem;
	@media only screen and (max-width: 600px) {
		margin: 8rem 3rem;
	}
`;
const Grapic = styled.div`
	width: 8.75rem;
	height: 57.438rem;
	margin: 2.125rem 0 4.188rem 1.063rem;
	-webkit-filter: blur(100px);
	filter: blur(6.25rem);
	background-color: rgba(91, 21, 182, 0.5);
`;
const Title = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 6rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.18rem;
	text-align: left;
	color: #fafafa;
`;
const Sub = styled.p`
	-webkit-text-stroke: 0.063rem #fafafa;
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 5rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.15rem;
	text-align: left;
	margin-bottom: 4rem;
`;
const Desc = styled.p`
	font-family: Roboto, -apple-system;
	font-size: 1.25rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 2;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
`;
