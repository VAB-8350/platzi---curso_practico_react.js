import React, { useContext, useEffect, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addCart from '@icons/bt_add_to_cart.svg';
import iconBtAddedCart from "@icons/bt_added_to_cart.svg"

const ProductItem = ({ product }) => {
	const { state, addToCart, removeFromCart} = useContext(AppContext);

	const handleClick = item => {
		beCart() ? removeFromCart(item) : addToCart(item);
	}

	const beCart = () => {
		return !!state.cart?.find(item => item.id === product.id)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{
						beCart()
							? <img src={iconBtAddedCart} alt='remove to cart' />
							: <img src={addCart} alt='add to cart' />
					}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;