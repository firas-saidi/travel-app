import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className="footer">

   <div className="box-container">

      <div className="box">
         <h3>quick links</h3>
         <Link to={"/home"}> <i className="fas fa-angle-right"></i> home</Link>
         <Link to={"/about"}> <i className="fas fa-angle-right"></i> about</Link>
         <Link to={"/package"}> <i className="fas fa-angle-right"></i> package</Link>
         <Link to={"/book"}> <i className="fas fa-angle-right"></i> book</Link>
      </div>

      <div className="box">
         <h3>extra links</h3>
         <Link to="#/"> <i className="fas fa-angle-right"></i> ask questions</Link>
         <Link to="#/"> <i className="fas fa-angle-right"></i> about us</Link>
         <Link to="#/"> <i className="fas fa-angle-right"></i> privacy policy</Link>
         <Link to="#/"> <i className="fas fa-angle-right"></i> terms of use</Link>
      </div>

      <div className="box">
         <h3>contact info</h3>
         <Link to="#/"> <i className="fas fa-phone"></i> +123-456-7890 </Link>
         <Link to="#/"> <i className="fas fa-phone"></i> +111-222-3333 </Link>
         <Link to="#/"> <i className="fas fa-envelope"></i> firas@gmail.com </Link>
         <Link to="#/"> <i className="fas fa-map"></i> Tunis, Tunis - 400104 </Link>
      </div>

      <div className="box">
         <h3>follow us</h3>
         <Link to="#/"> <i className="fab fa-facebook-f"></i> facebook </Link>
         <Link to="#/"> <i className="fab fa-twitter"></i> twitter </Link>
         <Link to="#/"> <i className="fab fa-instagram"></i> instagram </Link>
         <Link to="#/"> <i className="fab fa-linkedin"></i> linkedin </Link>
      </div>

   </div>

   <div className="credit"> created by <span>mr.Saidi Firas</span> | all rights reserved! </div>

</section>
  )
}

export default Footer