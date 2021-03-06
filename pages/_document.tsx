/** @format */

import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<link rel='shortcut icon' href='/favicon.svg' type='image/svg' />
					<meta property='og:title' content='' />
					<meta property='og:image' content='' />
					<meta property='og:description' content='' />
					<meta property='og:url' content='//' />
					<meta name='description' content='' />
					<meta name='keywords' content='' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap'
						rel='preload'
						as='style'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://use.typekit.net/yzp8rky.css'></link>
					<link
						href='//db.onlinewebfonts.com/c/58603d3e778335b9af86b752e6a34f95?family=AvantGardeGothicITCW02DmObl'
						rel='stylesheet'
						type='text/css'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
