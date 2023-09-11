import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalState } from '../context/globalContext'
const Productdetails = () => {
const {productId} = useParams();
const GetUrl = `http://localhost:4000/singleProduct/${productId}`

const [productList, getProductList] = useState();
const {setCart, cart}=GlobalState()

useEffect(() => {

  axios.get(GetUrl).then((response) => {
    if(productId){    
      getProductList(response.data);
      console.log(productList)}
  })
}, [productId]);

useEffect(() => {
console.log("cart", cart)
}, [cart])


  return (
    <div>
    {productList && <div className='ml-44 p-5'>
    <img src={productList.image} style={{width:"100%", height:"70ch", objectFit:"contain", objectPosition:"left"}} alt='img'/>
                 
                  <div className=''>
                  <p>Title:{productList.title}</p>
                  <p>Price:{productList.price}</p>
                  <p>Stock:{productList.stock}</p>
                  <button onClick={()=>setCart([  productList,...cart])} className='bg-blue-500 rounded-md'>Add to cart</button>
                  </div>
                  {/* <button onClick={''}>Reserve</button> */}
    </div>
    }
    </div>
  )
}

export default Productdetails

// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import Product from './Product'
// const Productdetails = () => {
// const {productId} = useParams()
// const products = Product.find((products) => products.id === productId);

// const {image,title} = products;
//   return (
//     <div>
//         <img src={image} alt={title}/>
//         <h5>{title}</h5>
//         <Link to='pages'>back</Link>
//     </div>
    
//   )
// }

// export default Productdetails
