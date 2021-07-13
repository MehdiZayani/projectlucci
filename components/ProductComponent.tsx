import React from "react";

import Image from "next/image";

interface ProductProps {
	name: string;
	cost: number;
	description: string;
	image: string;
}

export const ProductComponent: React.FC<ProductProps> = ({
	name,
	cost,
	description,
	image,
}) => {
	return (
		<div className="card">
			<Image width={840} height={840} src={image} alt={name} />
			<div className="cardheader">
				<h4>{name}</h4>
				<h4>{cost + " "}DT</h4>
			</div>
			<div className="cardbody">
				<p>{description}</p>
			</div>

			{/*<button onClick={() => addToCart(Product)}>Add to Cart</button> lezmk redux lenna !*/}
		</div>
	);
};
