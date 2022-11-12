import React from 'react'
import { Link } from 'react-router-dom'

function Package() {
  return (
   <>
      <div className="heading " style={{ background: 'url(images/header-bg-2.png) no-repeat' }}>
        <h1>packages</h1>
        </div>
    <section className="packages">
     

    <h1 className="heading-title">top destinations</h1>
 
    <div className="box-container">
 
       <div className="box">
          <div className="image">
             <img src="images/img-1.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-2.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-3.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-4.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-5.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-6.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-7.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-8.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-9.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-10.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-11.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
       <div className="box">
          <div className="image">
             <img src="images/img-12.jpg" alt=""/>
          </div>
          <div className="content">
             <h3>adventure & tour</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
             <Link to={"/book"} className="btn">book now</Link>
          </div>
       </div>
 
    </div>
 
    <div className="load-more"><span className="btn">load more</span></div>
 
 </section>
 </>
  )
}

export default Package