import Link from 'next/link'
import React from 'react'
import styles from '../../news.module.css'

const NewsCard = () => {
  return (
    <div className={styles.news_div}>
        <Link className={styles.news_link} href='https://www.mysmartprice.com/gear/mobiles/mobiles-reviews/redmi-note-14-pro-plus-review/'>
        <div className={styles.news_img}>
           <img src='https://assets.mspimages.in/gear/wp-content/uploads/2024/12/7-5.jpg' width='154' height='83' />
        </div>
        <div className={styles.news_time}>
            <span className={styles.month}>December</span>
            <span className={styles.date}>19, 2024</span>
        </div>
        <div className={styles.news_title} >
        Redmi Note 14 Pro Plus Review: Almost an All-Rounder
        </div>

        </Link>
        <Link className={styles.news_link} href='https://www.mysmartprice.com/gear/mobiles/mobiles-features/upcoming-smartphone-launches-october-2024/'>
        <div className={styles.news_img}>
           <img src='https://assets.mspimages.in/gear/wp-content/uploads/2024/09/Upcoming-Smartphone-Launches-in-October-2024.png' width='154' height='83' />
        </div>
        <div className={styles.news_time}>
            <span className={styles.month}>October</span>
            <span className={styles.date}>19, 2024</span>
        </div>
        <div className={styles.news_title} >
        Upcoming Smartphone Launches in October 2024 in India: Lava Agni 3, Moto G75 5G, Infinix ZERO Flip and More
        </div>

        </Link>
    </div>
  )
}

export default NewsCard