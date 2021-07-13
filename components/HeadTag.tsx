import React from "react";
import Head from "next/head";
export interface PageTitleProps {
	title?: string;
}

const HeadTag: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<Head>
			{/* PWA tags 
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="theme mt3 taswira" />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <link href='/images/icons/maskable_icon_x48.png' rel='icon' type='image/png' sizes='48x48' />
                <link href='/images/icons/maskable_icon_x72.png' rel='icon' type='image/png' sizes='72x72' />
                <link href='/images/icons/maskable_icon_x96.png' rel='icon' type='image/png' sizes='96x96' />
                <link href='/images/icons/maskable_icon_x128.png' rel='icon' type='image/png' sizes='128x128' />
                <link href='/images/icons/maskable_icon_x192.png' rel='icon' type='image/png' sizes='192x192' />
                <link href='/images/icons/maskable_icon_x384.png' rel='icon' type='image/png' sizes='384x384' />
                <link href='/images/icons/maskable_icon_x512.png' rel='icon' type='image/png' sizes='512x512' />
                <link href='/images/icons/maskable_icon_x1200.png' rel='icon' type='image/png' sizes='1200x1200' />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png"></link>
            */}
			{/* Normal tags */}
			<link rel="icon" href="/images/favicon.png" />
			<link rel="canonical" href="https://www.example.com" />
			{/* put your domain name for production */}
			<meta name="description" content="description" />
			<meta name="keywords" content="keywords here" />
			<meta name="robots" content="index,follow" />
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<title>your title here{` - ${title}`}</title>
			<meta
				name="google-site-verification"
				content="google verification token"
			/>
			{/* Twitter tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@twitterHandle" />
			<meta name="twitter:title" content="title" />
			<meta name="twitter:creator" content="@twitterHandle" />
			<meta name="twitter:image" content="link mt3 taswira mt3 twitter" />
			<meta name="twitter:domain" content="domaine name mt3 site" />
			{/* OpenGraph tags */}
			<meta property="og:title" content="title mt3 site" />
			<meta
				property="og:url"
				content={`https://linkmt3site${title != "Home" ? "/" + title : ""}`}
			/>
			<meta property="og:type" content="website" />
			<meta property="og:description" content="description mt3 site" />
			<meta property="og:site_name" content="esm site" />
			<meta
				property="og:image"
				content="avatar mt3 site wala taswira tjiv fil preview mt3 site yebda http link"
			/>
			<meta property="og:image:secure" content="nafs link ama yebda https" />
			<meta property="og:image:alt" content="alt text ken famech taswira" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1042" />
			<meta property="og:image:height" content="1058" />
			{/* Pinterest tag */}
			<meta
				name="p:domain_verify"
				content="token mt3 pinterest ki t3ml verification"
			/>
		</Head>
	);
};

export default HeadTag;
