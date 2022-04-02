/** @format */

import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Da0</title>
			</Head>
			<>
				<Component {...pageProps} />
			</>
		</>
	);
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
