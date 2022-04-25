/** @format */
import React from "react";
import styled from "styled-components";

export default function Feature() {
	return (
		<Wrapper>
			<InnerWrapper>
				<Title>FEATURE</Title>
			</InnerWrapper>
			<ImageWrapper>
				<Image1 src='/index/1.svg' />
				<TextBox>
					<Sub>
						Enrollment
						<br />
						Automation
					</Sub>
					<Desc>
						Through the wallet connection in the discord app, Da0 provide the
						automated authorization in convenient way. When the wallet
						connection steps, we check the user has the token of the DAO in
						wallet. <br />
						Therefore, the manager of the DAO discord don’t have to check if the
						joined user has the DAO token or DAO’s NFT. Through the Da0
						enrollment automation, DAO manager doesn’t have to use the Google
						form or check if the user hold the token of DAO one by one because
						Da0 check the authority and store the information and provide it as
						the API.
					</Desc>
				</TextBox>
			</ImageWrapper>
			<ImageWrapper>
				<TextBox>
					<Sub>
						DAO Information
						<br />
						Aggregator
					</Sub>
					<Desc>
						Many DAO’s struggle is providing DAO’s information to anonymous user
						to join their DAO, but it is hard to provide information and
						aggregate it in the discord. <br />
						To solve this problem, by using our application, by typing simple
						slash command, user can view DAO’s information such as number of
						DAO’s token holder, DAO treasury balance and overall information of
						the DAO.
					</Desc>
				</TextBox>
				<Image2 src='/index/2.svg' />
			</ImageWrapper>
			<TextBox2>
				<Sub2>New Proposal Alert</Sub2>
				<Desc2>
					As the on-chain information is separated from the off-chain, the vote
					rate of the DAO is the one of the biggest problem. Therefore, the Da0
					provide the on-going proposal alert for the members, and proposal
					information such as voting status, voting period and snapshot.
				</Desc2>
			</TextBox2>
			<ImageWrapper>
				<Image3 src='/index/3.svg' />
			</ImageWrapper>
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
	font-family: ITCAvantGardeGothicStd-Demi, -apple-system;
	font-size: 4.5rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.11;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
	margin: 9.125rem 0 13.688rem 24.688rem;
	@media only screen and (max-width: 600px) {
		margin: 8rem 3rem;
	}
`;
const InnerWrapper = styled.div`
	display: flex;
	justify-content: left;
`;
const Image1 = styled.img`
	width: 37.938rem;
	hight: auto;
	@media only screen and (max-width: 600px) {
		width: 20rem;
		margin-bottom: 5rem;
	}
`;
const ImageWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-bottom: 22.563rem;
	@media only screen and (max-width: 600px) {
		margin-bottom: 12.563rem;
	}
`;
const TextBox = styled.div`
	width: 33.625rem;
	@media only screen and (max-width: 600px) {
		margin: 0rem 3rem;
	}
`;
const Sub = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 4rem;
	font-weight: 700;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
	margin-bottom: 3rem;
`;
const Desc = styled.p`
	font-family: OpenSans, -apple-system;
	font-size: 1.2rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
`;
const Image2 = styled.img`
	width: 29.338rem;
	hight: auto;
	@media only screen and (max-width: 600px) {
		width: 20rem;
		margin: 5rem 0;
	}
`;
const TextBox2 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media only screen and (max-width: 600px) {
		margin: 0rem 3rem;
	}
`;
const Sub2 = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 4rem;
	font-weight: 700;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: center;
	color: #fafafa;
	margin-bottom: 3rem;
`;
const Desc2 = styled.p`
	font-family: OpenSans, -apple-system;
	font-size: 1.2rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: normal;
	text-align: center;
	color: #fafafa;
	width: 46.875rem;
	margin: auto;
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`;
const Image3 = styled.img`
	width: 71.375rem;
	margin-top: 15.5rem;
	@media only screen and (max-width: 600px) {
		width: 20rem;
		margin: 5rem 0;
	}
`;
