import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Cart from "./Cart"

import Landing from './Landing';
import "./product.css"


function Product() {
  const cart=[]
  
  const [cookies] = useCookies('jwt');
  const data = useRef([]);
  const [products, setProducts] = useState([]);
  function addtocart(e){
    alert("product added")
    cart.push(e)
    
    localStorage.setItem("cart",[cart])
    // localStorage.setItem('cart', JSON.stringify(cart));
    
  }

  useEffect(() => {
    async function productDetail() {
      try {
        const response = await axios.get('http://localhost:4200/auth/api/v1/product', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
          },
        });

        data.current = response.data.data;
        setProducts(data.current); // Set products state after fetching data
      } catch (error) {
        console.error('Error:', error);
      }
    }
    

    productDetail();
  }, []);
   
    
  return (
    <>
   
    
 <Landing/>

 <div className="bg-white">
 <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
   <h2 className="sr-only">Products</h2>

   <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {console.log(products,"this is render")}
     {products.map((product) => (
      
    //  {products.length!==0}
       <a key={product.id} href={product.href} className="group">
         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
           <img
             src={product.imageSrc}
             alt={product.imageAlt}
             className="h-full w-full object-cover object-center group-hover:opacity-75"
           />
         </div>
         <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
         <div className='flex justify-between'>
         <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
         <button onClick={()=>addtocart(product.name)}className="text-black-700 bg-orange-300 hover:bg-orange-700 hover:text-orange
                        rounded-md px-3 py-2 text-sm font-medium">Add to Cart</button>
         </div>
       </a>
       
       
      ))} 
   </div>
 </div>

</div>

</>
  )
}

export default Product 
// products