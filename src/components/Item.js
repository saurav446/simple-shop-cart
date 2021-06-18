import React from 'react';

export default function Basket(props) {
   const {cart,addCarts,remove} = props;
   const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
       <p>cart Item:{cart.length}</p> 
         {
           cart.map((pd) => 
           <div>
             <p>{pd.price}</p> 
             <p>{pd.qty}</p>
             <p>{pd.price * pd.qty}</p>
             <button onClick={() => addCarts(pd)}>+</button>
             <button onClick={() => remove(pd)}>-</button>
           </div>
           )
         }
           {/* <div   className="row">
            <div className="col-2">{ }</div>
            <div className="col-2">
              <button   className="remove">
                -
              </button>{' '}
              <button   className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
               
            </div>
          </div> */}
        
 
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice }</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice }</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${ shippingPrice}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice }</strong>
              </div>
            </div>
            <hr /> 
          </>  
      </div>
    </aside>
  );
}
