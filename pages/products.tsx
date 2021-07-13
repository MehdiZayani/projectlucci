import React, { useState } from "react";

import { ProductsList } from "../types/ProductsList";

import { Categories } from "../types/Categories";
import { Product } from "../models/Product";
import { ProductComponent } from "../components/ProductComponent";

export default function Products() {
	const [products, setProducts] = useState(ProductsList);
	const [category, setCategory] = useState("");

	const addToCart = (product: Product) => {
		/** state management */
	};

	const getProductsInCategory = () => {
		return products.filter((product) => product.category === category);
	};

	return (
		<>
			<h1>Products</h1>
			Select a category
			<select onChange={(e) => setCategory(e.target.value)}>
				<option value={Categories.HOME_GARDEN}>{Categories.HOME_GARDEN}</option>
				<option value={Categories.UTILITY}>{Categories.UTILITY}</option>
			</select>
			<div className="products">
				<section>
					<div>
						{getProductsInCategory().map((product) => (
							<ProductComponent
								key={product.id}
								cost={product.cost}
								image={product.image}
								name={product.name}
								description={product.description}
							/>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
