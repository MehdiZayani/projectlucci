import React, { useState } from 'react';
import productscss from './products.module.css';
import Image from 'next/image';
const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([
    {
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      category: HOME_GARDEN,
      name: 'BESTÅ',
      cost: 1900,
      description:'',
      image:
        'https://www.ikea.com/fr/fr/images/products/fjaellbo-banc-tv-noir__0473390_pe614545_s5.jpg?f=s',
    },{
      category: HOME_GARDEN,
      name: 'BESTÅ',
      cost: 3000,
      description:'cc cv',
      image:
        'https://www.ikea.com/fr/fr/images/products/besta-banc-tv-avec-portes-blanc-lappviken-blanc__0719188_pe731908_s5.jpg?f=s',
    },{
      category: HOME_GARDEN,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },{
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },{
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },{
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },{
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },{
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      description:'',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        <section className={productscss.main}>
        <div>
        {getProductsInCategory().map((product, idx) => (
          <div className={productscss.cards}>
          <div className={productscss.card}>
            <img src={product.image} alt={product.name} />
            <div className={productscss.cardheader}>
              <h4>{product.name}</h4>
              <h4 className={productscss.price}>{product.cost}DT</h4>
            </div>
            <div className={productscss.cardbody}>
              <p>{product.description}</p>
            </div>
            
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
           </div>
          </div>
        ))}</div>
      </section>
      </div>
    </>
  );
}
