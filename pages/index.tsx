/** @format */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import Mobilebar from "../src/components/Mobilebar";
import Footer from "../src/components/Footer";
import Main from "../src/components/index/Main";
import Intro from "../src/components/index/Intro";

const Home: NextPage = () => {
	const [mobile, setState] = useState(false);
	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900 ? setState(true) : setState(false);
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
		console.log(mobile);
	}, []);
	return (
		<Wrapper>
			{mobile ? <Mobilebar /> : <Navbar />}
			<Main />
			<Intro />
			<Divider />
			<Footer />
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div`
	margin: 0;
	background-color: #111;
	width: 100% !important;
	display: flex;
	flex-direction: column;
`;
const Divider = styled.div`
	border-bottom: 1px solid #fff;
	border-top: 1px solid #fff;
	width: 100%;
	height: 1px;
	display: inline-block;
	vertical-align: middle;
`;
