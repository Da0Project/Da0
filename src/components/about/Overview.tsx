/** @format */
import React from "react";
import styled from "styled-components";

export default function Overview() {
	return (
		<Wrapper>
			<GraphicWrapper>
				<Graphic2 />
				<Graphic />
			</GraphicWrapper>
			<InnerWrapper>
				<Title>About</Title>
				<Sub>Overview</Sub>
				<Desc>
					DAO is a great solution for important community problems, including
					contribution compensation, decision-making of the project, and
					measuring community value in web3 ecosystem. However, the proper
					managing tool for DAO is still few especially, discord bot for DAO
					provides only very basic functions.
				</Desc>
				<Desc>
					Therefore, Da0 is building ultimate tools for managing DAO on discord.
					Through the Da0’s discord bot ”Da0”, you can manage DAO tasks, DAO
					members more efficiently. Da0 provides the enrollment automation, DAO
					information aggregator, and proposal alert system in the discord. For
					these features, Da0 uses the own web server to pull updated states of
					blockchain.
				</Desc>
			</InnerWrapper>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 0;
	background-color: #111;
	width: 100%;
	display: flex;
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
	margin: 0;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
	}
	margin-bottom: 3.75rem;
`;
const Desc = styled.p`
  font-family: OpenSans, -apple-system;
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
	margin-top: 7.938rem;
	display: flex;
	justify-content: left;
	flex-direction: column;
	max-width: 76.5rem;
	padding-right: 14rem;
	@media only screen and (max-width: 600px) {
		max-width: 23rem;
	}
`;
const Graphic = styled.div`
	width: 22.313rem;
	height: 35.438rem;
	margin-top: 3.75rem;
	-webkit-filter: blur(100px);
	filter: blur(100px);
	background-color: rgba(91, 21, 182, 0.1);
	left: 0;
	z-index: 1;
`;
const Sub = styled.p`
	font-family: ITCAvantGardeGothicStd, -apple-system;
	font-size: 2.25rem;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	color: #fafafa;
	margin-bottom: 2.563rem;
`;
const Graphic2 = styled.div`
	width: 9.688rem;
	height: 20.563rem;
	margin-top: 3rem;
	-webkit-filter: blur(100px);
	filter: blur(100px);
	background-color: rgba(25, 162, 127, 0.1);
`;
const GraphicWrapper = styled.div`
	padding: 0;
	@media only screen and (max-width: 600px) {
		max-width: 4rem;
	}
`;
