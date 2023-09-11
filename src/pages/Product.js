import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// const AddUrl = 'http://localhost:4000/addProduct'
const GetUrl = 'http://localhost:4000/getProduct'

export default function Product() {
    const [productList, getProductList] = useState();

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const { data } = await axios.get(GetUrl)

        getProductList(data)
        console.log(data)
    }
    return (
     
      <div class="productContainer">
      {productList && productList.map((product) => {
          return (

          
              <div className='product p-4' key={product._id}>
                  {/* <td>{product.image}</td> */}
                  {/* <p>title:{product._id}</p> */}
                  <Link to={`${product._id}`}>
                  <img src={product.image} style={{width:"100%", height:"20ch", objectFit:"contain", objectPosition:"center"}} alt='img'/>
                  </Link>
                  <p>Title:{product.title}</p>
                  <p>Price:{product.price}</p>
                  <p>Stock:{product.stock}</p>
                  {/* <button id='btn' onClick={""}>update</button>
        <button id='btn' onClick={""}>delete</button> */}
              </div>


          );
      })}
  </div>
    )
}
