import React from 'react'
import Fetching from './Fetching';
import styles from "./Nowaabout.module.css";
const Nowaabout = () => {
  return (
    <>
      <div>
        <div className={styles.nowapara}>
         <div  className={styles.imgnowa}>
            <img src="https://nowafarms.in/assets/img/about/nowafarm.jpg"/>
         </div>
         <div className={styles.parafloat}>
         <div className={styles.paraimag}>
            
           <p><b>WHY CHOOSE US</b></p> 
 <h1>About Nowafarm</h1>
<p> NOWA Farms is India's leading end-to- end Hydroponic Solutions Provider.
<br></br>
<br></br>

 From setting up of Turnkey Projects, to Undertaking O&M, and Marketing 
 <br></br>

 Hydroponic Produce through our vast network, we support our clients from
 <br></br>

  Seed to Fruit.
  <br></br>
  <br></br>
  <br></br>

We use Hydroponics, Aquaponics and Vertical Growing Solutions to grow 
fresh high value and high yield vegetables, herbs, leafy greens and fruits in a 
limited space.


            </p>

         </div>
          <div className={styles.flaticone}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/517/517491.png"/>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3228/3228952.png"/>
            </div>
          </div>

          <div className={styles.quali}>
          <div className={styles.staf}>
          <p><b>Qualified Staf</b></p>
           <p>Plumbing.</p>

           <p>Electrical Works.</p>
           <p>Polyhouse Fabrication.</p>
           <p>Fertigation Units.</p>
           <p>Farm automation.</p>
          </div>
          <div className={styles.services}>
          <p><b>Excellent Services</b></p>
           <p>Quick installation.</p>
           <p>On-site trainig.</p>
           <p>Access to produce buyers.</p>
           <p>Agronomy services.</p>
          </div>

          </div>
         </div>
        </div>
        </div>
    </>
  )
}

export default Nowaabout
