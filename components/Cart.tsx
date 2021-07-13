import React, { useState } from "react";
import { Product } from "../models/Product";

export const Cart: React.FC = () => {
	const [cart, setCart] = useState<Product[]>([]);

	const getTotalSum = () => {
		let sum = 0;
		cart.forEach((p) => {
			sum += p.cost;
		});
		return sum;
	};

	const clearCart = () => setCart([]);

	const setQuantity = (product: Product, value: number) => {
		/** lezmk state management lehnee.. */
	};

	const removeFromCart = (product: Product) => {
		setCart(
			cart.filter((p) => {
				p.id != product.id;
			})
		);
	};

	return (
		<>
			<h1>Cart</h1>
			{cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
			<div>
				{cart.map((product) => (
					<div key={product.id}>
						<h3>{product.name}</h3>
						<h4>Dt{product.cost}</h4>
						<input
							type="number"
							value={quantity}
							onChange={(e) => setQuantity(product, quantity)}
						/>
						<img src={product.image} alt={product.name} />
						<button onClick={() => removeFromCart(product)}>Remove</button>
					</div>
				))}
			</div>

			<div>Total Cost: DT{getTotalSum()}</div>
		</>
	);
};
