/** @format */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

export default function Mobilebar() {
	return (
		<>
			<ResponsiveNavbar
				logo={
					<Logo>
						<Link href={"/"} passHref={true}>
							<LogoImage src={"/logo.svg"} />
						</Link>
						<Link href={"/"} passHref={true}>
							<Title>Regic</Title>
						</Link>
					</Logo>
				}
				styles={{
					iconColor: "#fff",
					navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
					navigationBarSmall: {
						backgroundColor: "#222",
					},
					navigationCardSmall: {
						backgroundColor: "#222",
					},
				}}>
				<Text>
					<ul>
						<Link href={"/"} passHref={true}>
							<li>Home</li>
						</Link>
						<Link href={"/about"} passHref={true}>
							<li>About</li>
						</Link>
						<Link href={"/about"} passHref={true}>
							<li>Download</li>
						</Link>
					</ul>
				</Text>
			</ResponsiveNavbar>
		</>
	);
}
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
	font-family: acumin-pro, -apple-system;
	font-weight: 900;
	font-size: 1.631rem;
	font-style: bold;
	letter-spacing: 0.048rem;
	color: white;
`;
const Text = styled.div`
	color: white;
`;
