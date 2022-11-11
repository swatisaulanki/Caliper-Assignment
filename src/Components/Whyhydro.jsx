import React from 'react'
import styles from "./Whyhydro.module.css"
import {AiOutlineRight} from "react-icons/ai"
import Nowaabout from './Nowaabout'
import Image from './Image'
const Whyhydro = () => {
  return (
    <>
      <div className={styles.firsth}>
        <div className={styles.secondh}>
        <div className={styles.paraone}>
        <div>
            <p><b>WHAT WE DO</b></p>
        </div>
        <div className={styles.hydropara}>
            <h2>WHY HYDROPONICS</h2>
        </div>
</div>
         <div className={styles.paratwo}>
            <p>
            Plants grown in soil need a more space to spread out as the roots reach out as 
            <br></br><br></br>
            far as possible into the soil to capture as much water and nutrients as possible. 
            <br></br><br></br>
            Soil holds water and nutrients for only few minutes before it is filtered down the
             <br></br><br></br>
            water table, or gets soaked up by other plants nearby.That makes it nearly 
            <br></br><br></br>
            
            impossible to control exactly how much water each of your plants receive, or
            <br></br>
            <br></br>
            witch nutrients they benefit from in the process.
            </p>

            <div className={styles.btn}>
            <button>View All </button>
            <AiOutlineRight className={styles.arrow}/>
        </div>
         </div>

        </div>

       
      </div>
    </>
  )
}

export default Whyhydro
