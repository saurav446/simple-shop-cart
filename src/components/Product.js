import React from 'react';

export default function Product(props) { 
    const {product,addCarts} = props;
  return (
    <div >
      
    <div className="mr-4">
      <img className="small" src={product.img} alt='' />
      <h3>{product.name}</h3>
      <div>${product.price}</div> 
      <div>
        <button onClick={() => addCarts(product)} >Add To Cart</button> 
      </div>
      </div>
    </div>
  );
}



