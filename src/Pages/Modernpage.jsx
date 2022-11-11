import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import styles from "./Modern.module.css"
const Modernpage = () => {
  return (
    <>
      <div>
        <Navbar/>

        <div className={styles.imgbacks}>
      <div className={styles.imgesss}>
        <div>
            <img src="https://nowafarms.in/assets/img/gallery/01.jpg"/>
        </div>

        <div>
            <img src="https://nowafarms.in/assets/img/gallery/aa1.jpg"/>
        </div>

        <div>
            <img src="https://nowafarms.in/assets/img/gallery/aa2.jpg"/>
        </div>

        <div>
            <img src="https://nowafarms.in/assets/img/gallery/aa3.jpg"/>
        </div>

        <div>
            <img src="https://nowafarms.in/assets/img/gallery/g2.jpg"/>
        </div>
        <div>
            <img src="https://nowafarms.in/assets/img/gallery/gg4.jpg"/>
        </div>
        <div>
            <img src="https://nowafarms.in/assets/img/gallery/17.jpg"/>
        </div>
        <div>
            <img src="https://nowafarms.in/assets/img/gallery/gg8.jpg"/>
        </div>

      </div>
      </div>
        <Footer/>
      </div>
    </>
  )
}

export default Modernpage
