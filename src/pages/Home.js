import React from 'react'
import { GlobalState } from '../context/globalContext'

export default function Home() {
  const { cart } = GlobalState()
  console.log("HOme cart",cart)
  return (
    <div>Home</div>
  )
}
