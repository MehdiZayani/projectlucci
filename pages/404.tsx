import React from "react";

import Link from "next/link";

import HeadTag from "../components/HeadTag";

export default function FourOhFour() {
	return (
		<>
			<HeadTag title="Page Not Found" />
			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</>
	);
}
