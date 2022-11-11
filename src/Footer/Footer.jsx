import React from 'react'
import Whyhydro from '../Components/Whyhydro'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <>
    {/* <Whyhydro/> */}
      <div>
      <div className={styles.footcont}>
        <div className={styles.footcontainer}>
            <div className={styles.footOne}>
            
            <div className={styles.imgfirst}>
              <img src="https://nowafarms.in/assets/img/nowafarmwhite.png"/>
            </div>
            <div className={styles.footTwo}>
            <p> NOWA Farms is India's leading end-to end <br></br>
            <br></br>
               Hydroponec Solution Provider. From setting up <br></br>
               <br></br>

            of Turnkey Prjects,to Undertaking O&M, and<br></br>
            <br></br>

            Marketing Hydroponic Prduce throught our<br></br>
            <br></br>

            vast network,we support our clients from Seed 
            <br></br>

            <br></br> to Fruit.</p>
            </div>

             </div>
             <div className={styles.verticle}></div>
            <div className={styles.footThree}>
           <div>
           <h2>Explore</h2>
           </div>
             <p>About us</p>

             <p>Hydroponic Farm </p>
             <p>Services</p>
             <p>Project Gallery</p>
             <p>Contact Us</p>
             </div>

             <div className={styles.footFoure}>
           <div>
           <h2>Business Hours</h2>
           </div>
             <p>MONDAY-SATURDAY</p>

             <p>10:00 am : 06:30 pm</p>
             <p>SUNDAY</p>
             <p>Closed</p>
             <hr></hr>
             <p><b>FARM VIST CALL!</b></p>
             <p>+91 6362073425</p>
             </div>

             <div className={styles.footFive}>
           <div>
           <h2>Contact Info</h2>
           </div>
           

             <p>  <b>ADDRESS: </b> 304, B block ROSE GARDEN NEHRU NAGAR YLAHANKA BANGALORE</p>
            
             <p> <b>EMAIL: </b> nowafarms@gmail.com</p>
             <p>ruban@nowafarms.in</p>
             
             <p><b>PHONE: </b> +91 6362073425</p>
             <div className={styles.containericon}>
             <div className={styles.facebook}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtnM97NXv1_QEx-UTAi8hWydHWTpjXNTGDw&usqp=CAU"/>

             </div>

             <div className={styles.facebook}>
             <img src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"/>

             </div>
             <div className={styles.facebook}>
             <img src="https://vectorseek.com/wp-content/uploads/2022/02/Youtube-Icon-Logo-Vector.jpg"/>

             </div>
             </div>
             </div>
             <div>
             </div>
             </div>
             <hr></hr>
             <div className={styles.main}>Copyright © 2022 Nowa Farms.</div>

        </div>
        </div>
    </>
  )
}

export default Footer
