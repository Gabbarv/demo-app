import React from 'react'
import { FiAlignLeft } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import styles from '../../navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar_div}>
        <div>
        <FiAlignLeft />

        </div>
        <div>
            <img src='https://assets.mspimages.in/msp-ui/camp/homepage/msite-msp-logo.png'
            alt=''
            width={100}
            height={100}
            />
            
            </div>
            <div>
            <CiSearch />
            </div>
    </div>
  )
}

export default Navbar