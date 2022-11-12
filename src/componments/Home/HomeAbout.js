import React from 'react'
import {Link} from'react-router-dom'

function HomeAbout() {
  return (
    <section className="home-about">

    <div className="image">
       <img src="images/about-img.jpg" alt=""/>
    </div>
 
    <div className="content">
       <h3>about us</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita et, recusandae nobis fugit modi quibusdam ea assumenda, nulla quisquam repellat rem aliquid sequi maxime sapiente autem ipsum? Nobis, provident voluptate?</p>
       <Link to={"/about"} className="btn">read more</Link>
    </div>
 
 </section>
  )
}

export default HomeAbout