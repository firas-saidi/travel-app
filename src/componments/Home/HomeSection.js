import React from 'react'
import { Link } from 'react-router-dom'

function HomeSection() {
  return (

  
 <section className="home">
<div  id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <img className='img' src="images/home-slide-1.jpg" class="d-block " alt=""/>
      <div className="content  carousel-caption d-none d-md-block">
                <span>explore, discover, travel</span>
                <h3>travel arround the world</h3>
                <Link to={"/package"} className="btn btn-secondary btn-lg">discover more</Link>
             </div>
    </div>
    <div class="carousel-item">
      <img className='img'  src="images/home-slide-2.jpg" class="d-block " alt=""/>
      <div className="content  carousel-caption d-none d-md-block">
                <span>explore, discover, travel</span>
                <h3>travel arround the world</h3>
                <Link to={"/package"} className="btn btn-secondary btn-lg">discover more</Link>
             </div>
    </div>
    <div class="carousel-item">
      <img  src="images/home-slide-3.jpg" class="d-block" alt=""/>
      <div className="content  carousel-caption d-none d-md-block">
                <span>explore, discover, travel</span>
                <h3>travel arround the world</h3>
                <Link to={"/package"} className="btn btn-secondary btn-lg">discover more</Link>
             </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section> 

)
}

 

export default HomeSection