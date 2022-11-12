import React from 'react'
import { Link } from 'react-router-dom'

function Offer() {
  return (
    <section className="home-offer">
   <div className="content">
      <h3>upto 50% off</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempora assumenda, debitis aliquid nesciunt maiores quas! Magni cumque quaerat saepe!</p>
      <Link to={"/book"} className="btn">book now</Link>
   </div>
</section>
  )
}

export default Offer