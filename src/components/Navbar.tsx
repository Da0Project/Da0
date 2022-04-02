/** @format */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
	return (
		<Wrapper>
			<Logo>
				<Link href={"/"} passHref={true}>
					<LogoImage src={"/logo.svg"} />
				</Link>
				<Link href={"/"} passHref={true}>
					<Title>Regic</Title>
				</Link>
			</Logo>

			<ButtonWrapper>
				<Link href={"/"} passHref={true}>
					<Button>Home</Button>
				</Link>
				<Link href={"/about"} passHref={true}>
					<Button>About</Button>
				</Link>
				<Link href={"/about"} passHref={true}>
					<DownloadButton>Download</DownloadButton>
				</Link>
			</ButtonWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.188rem 25.625rem;
	height: 5rem;
	position: fixed;
	margin: 0 0 2.15rem;
	top: 0;
	left: 0;
	transition: all 0.5s;
	width: 100%;
	z-index: 100;
	background-color: #222;
	color: #fafafa;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const LogoImage = styled.img`
	height: 2.063rem;
	margin-right: 1.313rem;
`;
const Title = styled.div`
	font-family: acumin-pro;
	font-weight: 900;
	font-size: 1.631rem;
	font-style: bold;
	letter-spacing: 0.048rem;
`;
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Button = styled.a`
	font-family: OpenSans;
	font-size: 1.25rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.038rem;
	text-align: center;
	color: #fafafa;
	margin-right: 4.5rem;
`;
const DownloadButton = styled.a`
	font-family: OpenSans;
	font-size: 1rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.03rem;
	text-align: center;
	color: #fafafa;
	padding: 0.625rem 2.25rem;
	border-radius: 1.25rem;
	border: solid 0.063rem #fafafa;
`;
