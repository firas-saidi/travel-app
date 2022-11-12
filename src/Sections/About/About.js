import React from 'react'

function About() {
  return (
    <>
<section className="about">

<div className="image">
   <img src="images/about-img.jpg" alt=""/>
</div>

<div className="content">
   <h3>why choose us?</h3>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure numquam nulla iusto corporis dolor commodi libero, vitae obcaecati optio rerum ab culpa nesciunt, earum mollitia quasi ipsam non. Aliquid, iure.</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum, delectus voluptate aliquam quaerat iusto repellendus error nulla ab atque.</p>
   <div className="icons-container">
      <div className="icons">
         <i className="fas fa-map"></i>
         <span>top destinations</span>
      </div>
      <div className="icons">
         <i className="fas fa-hand-holding-usd"></i>
         <span>affordable price</span>
      </div>
      <div className="icons">
         <i className="fas fa-headset"></i>
         <span>24/7 guide service</span>
      </div>
   </div>
</div>

</section>



<section className="reviews">

<h1 className="heading-title"> clients reviews </h1>

<div className="swiper reviews-slider">

   <div className="swiper-wrapper">

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis laudantium magnam saepe magni ullam possimus laborum voluptas, veniam ipsum officiis quae doloribus minima ut quis. Molestiae qui distinctio possimus?</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-1.png" alt=""/>
      </div>

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus et suscipit optio similique totam aut laborum ullam sequi! In!</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-2.png" alt=""/>
      </div>

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim deserunt, ab at ea iste odio placeat doloribus eum dolores tempore obcaecati, dolore esse aperiam. Excepturi ad quo distinctio, dignissimos voluptate, dolores, saepe animi eum atque sint esse ab exercitationem!</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-3.png" alt=""/>
      </div>

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae cum quibusdam odio dignissimos nemo?</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-4.png" alt=""/>
      </div>

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis laudantium magnam saepe magni ullam possimus laborum voluptas, veniam ipsum officiis quae doloribus minima ut quis. Molestiae qui distinctio possimus?</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-5.png" alt=""/>
      </div>

      <div className="swiper-slide slide">
         <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis laudantium magnam saepe magni ullam possimus laborum voluptas, veniam ipsum officiis quae doloribus minima ut quis. Molestiae qui distinctio possimus?</p>
         <h3>john deo</h3>
         <span>traveler</span>
         <img src="images/pic-6.png" alt=""/>
      </div>

   </div>

</div>

</section>
    </>
  )
}

export default About