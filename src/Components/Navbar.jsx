import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"
import {AiOutlineUser} from "react-icons/ai"
import Whyhydro from './Whyhydro';
const Navbar = () => {
  return (
    <>
    <div>
    <div className={styles.maincontainer}>
    <div className={styles.imge}>
      <img src="https://nowafarms.in/assets/img/nowafarmwhite.png"/>
    </div>
    <div className={styles.container}>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/ourtstory">OUR STORY</Link>
      </div>
      <div>
        <Link to="/hydrophanicfar">HYDROPONIC FARM</Link>
      </div>
      <div>
      <Link to="/modern">MODERN TECHNIQUES </Link>

      </div>

      <div>
      <Link to="/about">COMMERCIAL PROJECT GALLERY</Link>

      </div>

      <div>
      <Link to="/about">CONTACT US</Link>

      </div>
      <div className={styles.enquiry}>
        <div>
        <AiOutlineUser className={styles.icon}/>
        </div>
        <div className={styles.enq}>
          <p>ENQUIRY</p>
        </div>
       
        
      </div>
      
      </div>
      <div className={styles.navbar}>
      <img style={{height:"80vh",width:"100%",objectFit:"cover"}}  alt="photo" 
      src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?cs=srgb&dl=pexels-oleksandr-tiupa-192136.jpg&fm=jpg" />
      <div className={styles.text}>
        <h1>HYDROPONIC FARM</h1>
    </div>
    </div>
    </div>

    </>
  )
}

export default Navbar
