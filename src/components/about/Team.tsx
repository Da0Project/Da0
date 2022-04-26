/** @format */
import React from "react";
import styled from "styled-components";

export default function Team() {
	return (
		<Wrapper>
			<Title>Team</Title>
			<InnerWrapper>
				<Profile>
					<Image2 src='/about/cl.svg' />
					<Info>
						<Name>Chaerin Kim</Name>
						<Desc>
							President of EWHA W. Univ Blockchain Academic Club
							<br /> DM application bot of Da0 / Database
							<br />
							<Row>
								<a href='https://www.linkedin.com/in/chaerin-kim-a270101b8/'>
									<Linkedin src='/about/linkedin.svg' />
								</a>
							</Row>
						</Desc>
					</Info>
				</Profile>
				<Profile>
					<Image src='/about/sw.svg' />
					<Info>
						<Name>Seungwon Choi</Name>
						<Desc>
							Alumni of EWHA W. Univ Blockchain Academic Club <br />
							Authorization system of Da0 / Server / Front-end
							<br />
							<Row>
								<a href='https://www.linkedin.com/in/seungwon-choi-8a74a6210/'>
									<Linkedin src='/about/linkedin.svg' />
								</a>
							</Row>
						</Desc>
					</Info>
				</Profile>
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
	flex-direction: column;
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
	margin-bottom: 7.5rem;
	padding: 0 24rem;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
	}
	margin-bottom: 3.75rem;
`;
const Desc = styled.p`
  font-family: OpenSans, -apple-system;
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
}
}
`;
const Profile = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 35rem;
	margin-right: 5rem;
`;
const Image = styled.img`
	max-width: 32.125rem;
	margin-bottom: 4.863rem;
`;
const Image2 = styled.img`
	max-width: 25.938rem;
	margin-bottom: 2.438rem;
`;
const Info = styled.div`
	color: white;
`;
const Name = styled.p`
	font-family: ITCAvantGardeGothicStd-Demi, -apple-system;
	font-size: 2rem;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.88;
	letter-spacing: normal;
	text-align: left;
	color: var(--white);
	margin-bottom: 1.5rem;
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: space-between;
	padding: 0 22.5rem;
`;
const Linkedin = styled.img`
	width: 2rem;
`;
const Row = styled.div`
	display: flex;
	margin-top: 1rem;
	justify-content: left;
`;
