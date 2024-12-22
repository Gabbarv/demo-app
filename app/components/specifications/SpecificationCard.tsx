"use client"; // This is a client component 
import React, { useState } from 'react'
import { MdOutlineMemory } from "react-icons/md";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import styles from '../../specification.module.css'

const SpecificationCard = () => {
  const [open,setOpen] = useState(true)
  return (
    <div className={styles.specification_card}>
      <div className={styles.specification_card_top} onClick={() => setOpen(!open)}>
        <div className={styles.specification_card_top_left}>
          <div className={styles.specification_card_top_left_logo}>
          <MdOutlineMemory size={18} />
          </div>
          <div className={styles.specification_card_top_left_text}>
           Performance 
          </div>
          <div className={styles.specification_card_top_left_rating}>
           <span>
           7.0/
            <small>
              10
            </small>
           </span>
          </div>

        </div>
        <div className={styles.specification_card_top_right}>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown/>}
        
        

        </div>

      </div>
      { open && <div className={styles.specification_card_bottom}>
        <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            Chipset
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          Qualcomm Snapdragon 7s Gen 3
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            No Of Cores
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          8 (Octa Core)
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            CPU
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          2.5GHz, Single core, Cortex A720 
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            Architecture
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          64-bit          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            Fabrication
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          4 nm
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            RAM
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          8 GB
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            RAM Type
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          LPDDR4X
          </div>
        </div>
        
         
      </div>
      <div className={styles.specification_card_bottom_div}>
          <div className={styles.specification_card_bottom_div_left}>
            <div className={styles.specification_card_bottom_div_left_text}>
            Graphics
            </div>
            <div>
              :
          </div>
          <div className={styles.specification_card_bottom_div_right}>
          Adreno 740
          </div>
        </div>
        
         
      </div>
    </div>}
    </div>
  )
}

export default SpecificationCard