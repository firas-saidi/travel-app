import React from 'react'
import { Link } from 'react-router-dom'
function HomePackages() {
  return (
    <section className="home-packages">

   <h1 className="heading-title"> our packages </h1>

   <div className="box-container">

      <div className="box">
         <div className="image">
            <img src="images/img-1.jpg" alt=""/>
         </div>
         <div className="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
            <Link to="book.php" className="btn">book now</Link>
         </div>
      </div>

      <div className="box">
         <div className="image">
            <img src="images/img-2.jpg" alt=""/>
         </div>
         <div className="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
            <Link to={"/book"} className="btn">book now</Link>
         </div>
      </div>
      
      <div className="box">
         <div className="image">
            <img src="images/img-3.jpg" alt=""/>
         </div>
         <div className="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
            <Link to={"/book"} className="btn">book now</Link>
         </div>
      </div>

   </div>

   <div className="load-more"> <Link to={"/package"} className="btn">load more</Link> </div>

</section>
  )
}

export default HomePackages