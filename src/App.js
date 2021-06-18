import Header from './components/Header';
import Shop from './components/Shop';
import Item from './components/Item';  
import { useState } from 'react';
import fakeDate from './fakeData'
function App() {

  const allProduct = fakeDate.slice(0,3)
   const [product,setProduct] = useState(allProduct)
   const [cart,setCart] = useState([])

   const addCarts = (product) =>{
      const jodithake = cart.find((pd) => pd.key === product.key)
      if(jodithake){
        const abrjodi = cart.map((pd) => pd.key === product.key ? {...jodithake, qty: jodithake.qty + 1} : pd)
         
        setCart(abrjodi)
      }else{ 
        setCart([...cart,{...product,qty:1}])
      }
   }
   const remove = (product) =>{
    const jodithake = cart.find((pd) => pd.key === product.key)
    if(jodithake.qty === 1){
      const abrjodi = cart.filter((pd) => pd.key !== product.key)
      setCart(abrjodi)
    }else{ 
      const abrjodi = cart.map((pd) => pd.key === product.key ?
       {...jodithake, qty: jodithake.qty - 1} : pd)
      setCart(abrjodi)
    }
 }
   
  return (
    <div className="App">
      <Header countCartItems={cart.length} ></Header>
      <div className="row">
        <Shop addCarts={addCarts} product={product} ></Shop>
        <Item addCarts={addCarts} remove={remove} cart={cart} ></Item>
      </div>
    </div>
  );
}

export default App;
