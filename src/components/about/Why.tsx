/** @format */
import React from "react";
import styled from "styled-components";

export default function Why() {
	return (
		<Wrapper>
			<Title>Why this project is important?</Title>
			<Contents>
				<Image src='/about/why.svg' />
				<Text>
					<Content>
						<Bar1 />
						<SubTitle>
							Necessity of Modular Tool for Distributed Operation
						</SubTitle>
						<Desc>
							Discord has become de facto tool for governance deliberation
						</Desc>
						<Desc>
							The real decision-making is happening off-chain in conversations
							and then voting on-chain as the final step of governance. Need to
							lower cognitive overhead getting involved with governance so
							\\anyone can get involved, vet, or whistleblow if something's not
							going right.
						</Desc>
						<Desc>
							Difficult to standardize fixed set of terms how should governance
							in an archetype will be
						</Desc>
						<Desc>
							DAO processes have matured enough to be used and trusted but they
							are always evolving and always changing. Instead of building
							direct DAO tooling.
						</Desc>
					</Content>
					<Content>
						<Bar2 />
						<SubTitle>Possibility of DAO</SubTitle>
						<Desc>Monetization, Membership, Scalability, Engagement, Data</Desc>
						<Desc>
							Clearly, many of the advantages of DAOs stem from the promise of
							ownership, which blockchain enables. This is why many have called
							DAOs the next evolution in online communities.
						</Desc>
					</Content>
					<Content>
						<Bar3 />
						<SubTitle>Mobile Application Type</SubTitle>
						<Desc>An important role in improving user experience</Desc>
						<Desc>
							mobile-first approach to user-first DAO means everyone has equal
							access to decision making process and became real owner of service
							and protocol.
						</Desc>
						<Desc>
							The low voter turnout mentioned as a problem can be solved by
							improving accessibility through alert services and mobile
							services, and tools can be provided to facilitate independent
							application creation, addressing the current DAO structural
							problems centered on discord.
						</Desc>
					</Content>
				</Text>
			</Contents>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 25rem 0;
	@media only screen and (max-width: 600px) {
		margin: 10rem 0;
	}
	background-color: #111;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const Title = styled.p`
	font-family: ITCAvantGardeGothicStd;
	font-size: 4.5rem;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.18rem;
	text-align: center;
	color: #fafafa;
	margin: 0;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
	}
	margin-bottom: 3.75rem;
`;
const Contents = styled.div`
	padding: 10rem 22.5rem 0 22.5rem;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 600px) {
		flex-wrap: wrap;
		padding: 4rem;
	}
	align-items: center;
`;
const Image = styled.img`
	max-width: 28.875rem;
`;
const Text = styled.div`
	@media only screen and (max-width: 600px) {
		padding-top: 6rem;
	}
`;
const Content = styled.div`
	max-width: 28.312rem;
	margin-bottom: 3.5rem;
`;
const SubTitle = styled.p`
	font-family: ITCAvantGardeGothicStd-Demi;
	font-size: 2rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-bottom: 1.5rem;
`;
const Desc = styled.p`
	font-family: ITCAvantGardeGothicStd;
	font-size: 0.875rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.71;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-bottom: 1rem;
`;
const Bar1 = styled.div`
	width: 2.5rem;
	height: 0.5rem;
	background-color: #5332b2;
	margin-bottom: 1.5rem;
`;
const Bar2 = styled.div`
	width: 2.5rem;
	height: 0.5rem;
	background-color: #3f6ac8;
	margin-bottom: 1.5rem;
`;
const Bar3 = styled.div`
	width: 2.5rem;
	height: 0.5rem;
	background-color: #2ea7e1;
	margin-bottom: 1.5rem;
`;
