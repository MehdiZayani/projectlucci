import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeadTag from "../components/HeadTag";
import Link from "next/link";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export default function Salon() {
	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);

	const getCartTotal = () => {
		return cart.reduce((sum, { quantity }) => sum + quantity, 0);
	};

	return (
		<div className="Salon">
			<HeadTag title="Salon" />
			<Navbar></Navbar>
			<header>
				<Link href="/cart">
					<a>Go to Cart</a>
				</Link>
				<Link href="/products">
					<a>View Products</a>
				</Link>
			</header>
		</div>
	);
}

/**
 *
 * zid 5amem feha !
 */
