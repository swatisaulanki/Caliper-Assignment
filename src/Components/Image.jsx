import React from 'react'
import styles from "./Image.module.css"
const Image = () => {
  return (
    <>
    <div className={styles.imgback}>
      <div className={styles.imgess}>
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
      </div>
      </div>
    </>
  )
}

export default Image
