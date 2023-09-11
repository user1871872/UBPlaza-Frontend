import React, { useState } from 'react'
import { GlobalState } from '../context/globalContext'
import axios from 'axios';

export default function Cart() {
  const AddUrl = 'http://localhost:4000/addReservation'

 const {cart, setCart} = GlobalState();
//  const [ReserveList, getReservelist] = useState([]);
 const [Name, setName] = useState("");
  const [IdNumber, setIdnumber] = useState(0);
  const[PhoneNumber, setPhonenumber] = useState(0)
  const [date, setDate] = useState("");
  const itemsArray = [];

 async function handleaddReservation (){

  cart.map((item) => itemsArray.push(item._id));

  const config = {
    Headers: {'Content-type': 'application/json'}
  }

  axios.post(AddUrl, {
    Name,
    IdNumber,
    PhoneNumber,
    date,
    item: JSON.stringify(itemsArray)
  },config)
  setCart([])
 }

  return (
    
    <div>
      <input type='text' placeholder='Enter your name'onChange={(event) => { setName(event.target.value) }}/>
      <input type='number' placeholder='enter your id number'onChange={(event) => { setIdnumber(event.target.value) }}/>
      <input type='number' placeholder='enter your phone number'onChange={(event) => { setPhonenumber(event.target.value) }}/>
      <input type="date"onChange={(event) => { setDate(event.target.value) }}/>
       <div className='flex flex-wrap w-full justify-center'>
    {cart.map((e) => (
        <div key={cart._id} className='w-72'>
            <div className='flex flex-wrap justify-between p-4'>
            <img src={e.image} style={{width:"100%", height:"20ch", objectFit:"contain", objectPosition:"center"}} alt='img'/>
              <p>{e.title}</p>
              <p>{e.price}</p>
              {/* <p>{e.stock}</p> */}
            </div>
        </div>
    ))}
</div>
<button className='bg-blue-600 rounded-md h-7' onClick={handleaddReservation}>Reserve</button>
</div>
   
  )
}
