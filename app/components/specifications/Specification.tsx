import React from 'react'
import styles from '../../specification.module.css'
import SpecificationCard from './SpecificationCard'

const Specification = () => {
  return (
    <div className={styles.specification} id='specs'>
       <div className={styles.specs_top}>
        <h2>Xiaomi Redmi Note 14 Pro+ 5G Specifications</h2>
        <div className={styles.box_btn}>
            <div className={styles.box_btn_div}>
                <span className={styles.btn_box}>
                Performance
                </span>
                <span className={styles.btn_box}>
                Design
                </span>
                <span className={styles.btn_box}>
                Display
                </span>
                <span className={styles.btn_box}>
                Camera
                </span>
                <span className={styles.btn_box}>
                Battery
                </span>
                <span className={styles.btn_box}>
                Storage
                </span>
                <span className={styles.btn_box}>
                Software
                </span>
                <span className={styles.btn_box}>
                Connectivity
                </span>
                <span className={styles.btn_box}>
                Sound
                </span>
                <span className={styles.btn_box}>
                Sensors
                </span>
            </div>


        </div>
       </div>
       <div className={styles.specification_bottom}>
         <SpecificationCard />

       </div>
    </div>
  )
}

export default Specification