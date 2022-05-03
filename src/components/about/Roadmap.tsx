/** @format */
import React from "react";
import styled from "styled-components";

export default function Roadmap() {
	return (
		<Wrapper>
			<Title>Project Roadmap</Title>
			<Box>
				<Image src='/about/roadmap.svg' />
				<Textbox>
					<Contents>
						<Date1>2022 Feb</Date1>
						<Subtitle>Planning</Subtitle>
						<Subtitle>Market Research</Subtitle>
						<Desc></Desc>
					</Contents>
					<Contents>
						<Date>2022 Mar</Date>
						<Subtitle>DB structure</Subtitle>
						<Subtitle>Simple bot implementation</Subtitle>
						<Desc>
							Connect with Solscan <br />
							Application Form bot
						</Desc>
					</Contents>
					<Contents>
						<Date>2022 Apr</Date>
						<Subtitle>Bot implementation</Subtitle>
						<Desc>
							Connect Wallet / Wallet Authorization
							<br /> Add various form options
							<br /> (integrate with another dao plaforms) <br />
							DAO Information Aggregator
							<br /> New Proposal Alert <br />
							Support Ethereum Network
						</Desc>
					</Contents>
				</Textbox>
			</Box>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	padding: 0;
	margin: 0;
	background-color: #111;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 14.375rem;
`;
const Title = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 4.5rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.18rem;
	text-align: left;
	color: #fafafa;
	margin: 20rem 0rem 10rem 22.5rem;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
		margin: 3rem;
	}
	margin-bottom: 3.75rem;
`;
const Image = styled.img`
	max-width: 5000rem;
	width: 100%;
	@media only screen and (max-width: 600px) {
		visibility: collapse;
	}
`;
const Textbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6.5rem 1.5rem 0 1.5rem; 
	@media only screen and (max-width: 600px) {
		flex-wrap: wrap;
		padding: 0;
		margin: 0;
	}
}`;
const Box = styled.div`
	margin: 0 22.5rem;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
		margin: 3rem;
	}
`;
const Contents = styled.div`
	@media only screen and (max-width: 600px) {
		width: 27rem;
	}
`;
const Date1 = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 3rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.5;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-bottom: 6.2rem;
	@media only screen and (max-width: 600px) {
		margin-top: 0rem;
		margin-bottom: 5rem;
	}
`;
const Date = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 3rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.5;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-bottom: 6.2rem;
	@media only screen and (max-width: 600px) {
		margin-top: 8rem;
		margin-bottom: 5rem;
	}
`;
const Subtitle = styled.p`
	font-family: OpenSans, -apple-system;
	font-size: 1.3rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.11;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-bottom: 1.3rem;
	@media only screen and (max-width: 600px) {
		font-size: 1.6rem;
	}
`;
const Desc = styled.div`
	font-family: OpenSans, -apple-system;
	font-size: 1rem;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.71;
	letter-spacing: normal;
	text-align: left;
	color: white;
	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
