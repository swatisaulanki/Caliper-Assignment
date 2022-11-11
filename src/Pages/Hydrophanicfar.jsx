import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import styles from "./Hydroponic.module.css"
const Hydrophanicfar = () => {
  return (
    <>
      <div>
       <Navbar/>
      <div>
        <div>
            <h2>Hydroponic Farm</h2>
        </div>
        <div>
            Home | Hydroponic Farm
        </div>

        <div className={styles.hydrofarm}>
            <img src="https://nowafarms.in/assets/img/blog/blog11.jpg"/>
        </div>

        <div className={styles.parafive}>
            <div className={styles.pagespara}>
                <div>
                    <h2></h2>
                </div>
                <div><h1></h1></div>
                <div>
                    <p>
                    Plants grown in soil need more space for its roots to spread out as the roots reach out as far as possible into the soil to capture
                    <br></br> 
                    as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water
                    <br></br> 
                     table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your
                     <br></br> 
                      plants receive, or which nutrients they benefit from in the process.
                      <br></br>  <br></br> 

Hydroponics addresses this problem by eliminating soil and providing nutrient rich water directly to plant roots through efficient
<br></br> 
 and modern systems. This helps save up to 90% of water and nutrients. Moreover, since the roots are not as spread out, 
 <br></br> 
 plants can be grown closer to each other, thus increasing the productivity of the land.
 <br></br> 
                    </p>
                </div>
            </div>

            <div className={styles.imgflex}>
                <div>
                  <img src="https://nowafarms.in/assets/img/gallery/02.jpg"/>
                </div>
                <div>
                 <img src="https://nowafarms.in/assets/img/gallery/100.jpg"/>
                </div>
                <div>
                    <img src="https://nowafarms.in/assets/img/gallery/15.jpg"/>
                </div>
                <div>
                    <img src="https://nowafarms.in/assets/img/gallery/19.jpg"/>
                </div>
            </div>
        </div>
      </div>
        <Footer/>
      </div>
    </>
  )
}

export default Hydrophanicfar
