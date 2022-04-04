/** @format */
import React from "react";
import styled from "styled-components";

export default function Development() {
	return (
		<Wrapper>
			<Sub>Development</Sub>
			<InnerWrapper>
				<DescWrapper>
					<Subject>Server</Subject>
					<Image src='/about/4.svg' />
					<Desc>
						API, Hosting Discord Bot Server Using Google Cloud (Temporarily
						using NodeJS to run the local server)
					</Desc>
				</DescWrapper>
				<DescWrapper>
					<Subject>Database</Subject>
					<Image src='/about/5.svg' />
					<Desc>
						Use MySQL <br />
						Mapping Discord id - Wallet Address
						<br /> Tracking Token data Using Google Cloud
					</Desc>
				</DescWrapper>
				<DescWrapper>
					<Subject>Onchain Data</Subject>
					<Image src='/about/6.svg' />
					<Desc>
						Wallet Authorization with Using Solbot
						<br /> Tracking/Saving Data with Solscan
					</Desc>
				</DescWrapper>
			</InnerWrapper>
			<Info>
				Various information such as DAO information, token owner information,
				and discord information is included in the DB. These data which are
				delivered to Discordbot through API is provided to users. In addition,
				we use Solscan and Solbot to make solana wallet authentication and track
				on-chain data.
			</Info>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 0;
	padding: 0 22.5rem;
	background-color: #111;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 14.375rem;
	flex-direction: column;
	@media only screen and (max-width: 600px) {
		padding: 4rem;
	}
`;
const Info = styled.p`
  font-family: OpenSans;
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #fafafa;
}
`;
const InnerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5rem;
	flex-wrap: wrap;
`;
const Sub = styled.p`
	font-family: ITCAvantGardeGothicStd;
	font-size: 2.25rem;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
	margin-bottom: 4.438rem;
`;
const DescWrapper = styled.div`
	max-width: 23.25rem;
	@media only screen and (max-width: 600px) {
		margin-bottom: 3rem;
	}
`;
const Subject = styled.p`
	font-family: ITCAvantGardeGothicStd;
	font-size: 2rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.75;
	letter-spacing: normal;
	text-align: center;
	color: #fafafa;
	margin-bottom: 3.813rem;
`;
const Image = styled.img`
	margin-bottom: 4rem;
	width: 23.25rem;
`;
const Desc = styled.div`
	font-family: OpenSans;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.63;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
`;