import React from 'react'; 
import Product from './Product';


export default function Main(props) { 
    const {product,addCarts,remove} = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
         {
           product.map((pd) => <Product remove={remove} addCarts={addCarts} key={pd.id} product={pd}></Product>)
         }
      </div>
    </main>
  );
}
