import React from 'react'
import { SiFlipkart } from "react-icons/si";
import styles from '../../flipkart.module.css'

const Flipkart = () => {
  return (
    <div className={styles.flipkart_w}>
        <h2>Xiaomi Redmi Note 14 Pro+ 5G Prices</h2>
        <div className={styles.flipkart_price}>
            <div className={styles.flipkart_logo}>
              <div>
              <SiFlipkart size={18}/>
              </div>
              <div>
                Flipkart

              </div>
            </div>
            <div>
            ₹30,999
            </div>
            <div>
                <button>Go To Store</button>
            </div>
        </div>
    </div>
  )
}

export default Flipkart