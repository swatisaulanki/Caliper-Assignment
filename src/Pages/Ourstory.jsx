import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import styles from "./Ourstory.module.css"
const Ourstory = () => {
  return (
    <>
      <div>
        <Navbar/>

        <div className={styles.Ourstory}>
        <div className={styles.parastory}>
          
          <div className={styles.parasec}>
          <h3>WHO WE ARE</h3>
<h2>About Nowafarms</h2>
<p>NOWA Farms is India's leading end-to- end Hydroponic Solutions Provider. 
<br></br>
<br></br>

From setting up of Turnkey Projects, to Undertaking O&M, and Marketing
<br></br>
 Hydroponic Produce through our vast network, we support our clients
 <br></br>

  from Seed to Fruit.</p>
  <br></br>
  <br></br>

<p>We use Hydroponics, Aquaponics and Vertical Growing Solutions to grow 
<br></br>

fresh high value and high yield vegetables, herbs, leafy greens and fruits
<br></br>

 in limited spaces.</p>
 <br></br>
 <br></br>

<p>We are focused on developing and setting up modern, state-of-the art 
<br></br>

urban farms that use modern farming solutions to grow various exotic 
<br></br>

vegetables that are clean, fresh and Healty, with minimum to no 
<br></br>

presticide residue levels (MRL)
          </p>
        </div>
</div>
        <div className={styles.paraimg}>
          <img src="https://nowafarms.in/assets/img/about/nowaabout.jpg"/>
        </div>

      
        </div>
        <div className={styles.divhi}>
     <div className={styles.ourpara}>
    <div className={styles.ourparatwo}>
    <div className={styles.hour}>
    <h1>  OUR STORY</h1>

    </div>
      <p>
We started out to solve the logistics problem involved in the exotic produce market which was being supplied to both HORECA and retail customers from
<br></br> 
farmers in the hills. The traders used to get it to Bangalore on pre order with a good margin. For the end customer the source was not known and the traders
<br></br> 
 were not aware of the method of growing and if any pesticides were applied on the produce which was being consumed RAW in the form of salads, wraps and 
 <br></br> 
 garnishing. In addition to that, getting fresh produce from source to consumers was also challenging due to supply chain constraints.
 <br></br> 
 <br></br> 

Since most of the produce is grown in traditional soil method, the produce would get soiled and repeated washing and processing them yielded only 60-70% of 
<br></br> 

the edible/usable produce. Add the shipping cost to it and packaging to keep the produce fresh, it would only make it a costly and challenging affair by the time 
<br></br> 

the produce was ready for consumption.
<br></br> 
<br></br> 

NOWA farms identified the most modern method of precision farming using HYDROPONICs technique to grow exotic produce, specifically the salad vegetables,
<br></br> 

 to be consumed in RAW, for the URBAN consumers.
 <br></br> 
 <br></br> 

We setup our first farm in 2017 on a leased half acre plot in the city to grow leafy greensand salad vegetables. 
We used the NFT method to grow leafy greens,
<br></br> 
 and coco peat based method to grow bell peppers, cucumbers, cherry tomatoes and other herbs.
 <br></br> 
 <br></br> 

Over the last 5 years in this domain, we have established around 12 acres of soilless farms around 3 cities and offer turnkey solutions to setup and operate
<br></br> 
 Hydroponics, Aquaponics and Aeroponics farms with good return on investment.
      </p>
    </div>
</div>
</div>
        <Footer/>
      </div>
    </>
  )
}

export default Ourstory
