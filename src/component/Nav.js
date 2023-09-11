import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <header id='header'>
                <ul>
                    <h1 className='my-auto'>UBI GENERAL MERCHANDISE</h1>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/pages"><li> Products</li></Link>
                    <Link to="/addtocart"><li>Cart</li></Link>
                    <Link to="/admin"> <li>Log in</li></Link>
                    {/* <li>Services</li> */}
                </ul>
            </header>
        </div>
    )
}
