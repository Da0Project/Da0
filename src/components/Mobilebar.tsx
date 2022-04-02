/** @format */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function Mobilebar() {
	const data = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Download", link: "/" },
	];

	const [open, setOpen] = useState(false);

	const getList = () => (
		<div style={{ width: 250 }} onClick={() => setOpen(false)}>
			{data.map((item, index) => (
				<ListItem button key={index}>
					<Link href={item.link} passHref={true}>
						<Text>{item.name}</Text>
					</Link>
				</ListItem>
			))}
		</div>
	);

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
			<Toolbar>
				<Button onClick={() => setOpen(true)}>
					<MenuIcon sx={{ color: "#fff" }} fontSize='large' />
				</Button>
				<Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
					<DrawerWrapper>
						<Link href={"/"} passHref={true}>
							<LogoImage src={"/logo.svg"} />
						</Link>
						<Link href={"/"} passHref={true}>
							<Title>Regic</Title>
						</Link>
					</DrawerWrapper>
					<Divider />
					{getList()}
				</Drawer>
			</Toolbar>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.188rem 0 1.188rem 2rem;
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
const DrawerWrapper = styled.div`
	display: flex;
	margin: 2.3rem;
	background-color: #222;
`;
const Text = styled.div`
	color: #fff;
	font-family: OpenSans;
	font-size: 1.631rem;
	margin: 1.5rem 1rem 1.5rem 1rem;
`;
const Divider = styled.div`
	border-top: 0.01rem solid #bbb;
	width: 100%;
	align-items: center;
`;
