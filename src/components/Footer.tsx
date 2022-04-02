/** @format */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
	return (
		<Wrapper>
			<Text>@2022 REGIC | All rights reserved</Text>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	display: flex;
	align-items: left;
	justify-content: space-between;
	padding: 1.188rem 2.331rem;
	height: 3.744rem;
	position: fixed;
	margin: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background-color: #222;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;
const Text = styled.div`
	margin: 0 0px 0 0;
	font-family: Poppins;
	font-size: 1rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.48px;
	text-align: left;
	color: #bdbebe;
`;
