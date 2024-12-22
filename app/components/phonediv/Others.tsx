import React from 'react'
import styles from '../../other.module.css'

const Others = () => {
  return (
    <div className={styles.other_box}>

        <h2>Xiaomi Redmi Note 14 Pro+ 5G Price in India</h2>
        <p>Xiaomi Redmi Note 14 Pro+ 5G price in India starts from  Rs. 30,999. The lowest price of Xiaomi Redmi Note 14 Pro+ 5G is Rs. 30,999 at Flipkart.</p>

        <div className={styles.other_mobile_info}>
            <div className={styles.other_mobile_top}>
                <h3>Store</h3>
                <h3>Product</h3>
                <h3>Price In India</h3>
            </div>
            <div className={styles.other_mobile_bottom}>
            <h3>Flipkart</h3>
                <h3>Xiaomi Redmi Note 14 Pro+ 5G</h3>
                <h3>₹ 30,999</h3>
            </div>

        </div>
    </div>
  )
}

export default Others