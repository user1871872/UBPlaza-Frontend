import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Reservations() {
    const AddUrl = 'http://localhost:4000/getReservation'

    const [ReserveList, getReservelist] = useState([]);

    useEffect((response) => {
           axios.get(AddUrl)
           .then(() =>{
            getReservelist(response.data)
           })
    },[])
    
    return (
        <div className='form'>
            <p>sample</p>
        <div className='container'>
            {ReserveList.map((reservations) => {
              return(
                <div className='bg-black' key={reservations}>
                    {reservations.item}
                    {reservations.Name}
                    {reservations.IdNumber}
                    {reservations.PhoneNumber}
                    {reservations.data}

                </div>
              )
            })}
        </div>
        </div>
    )
}
