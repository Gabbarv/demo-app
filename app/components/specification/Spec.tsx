import React from 'react'
import { GiProcessor } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineCameraFront } from "react-icons/md";
import { LiaMicrochipSolid } from "react-icons/lia";
import { CiBatteryCharging } from "react-icons/ci";
import { FaSimCard } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import styles from '../../specs.module.css'
import Link from 'next/link';
const Spec = () => {
  return (
    <div style={{width: '100%'}}>
      <div className={styles.specs}>
        <div>
        <GiProcessor size={24} />
        </div>
        <div>
        Processor
        <span>
        Snapdragon 7s Gen 3 Octa core 
        </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <CiMobile3 size={24} />
        </div>
        <div>
        Display
        <span>
        6.67″ (16.94 cm) 120Hz AMOLED         </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <IoCameraOutline size={24} />
        </div>
        <div>
        Rear Camera
        <span>
        50+8+50 MP        </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <MdOutlineCameraFront size={24} />
        </div>
        <div>
        Front Camera
        <span>
        20 MP        </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <LiaMicrochipSolid size={24} />
        </div>
        <div>
        RAM | Storage
        <span>
        8 GB | 128 GB         </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <CiBatteryCharging size={24} />
        </div>
        <div>
        Battery
        <span>
        6200 mAh | 90W Fast Charging         </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <FaSimCard size={24} />
        </div>
        <div>
        Network
        <span>
        Dual SIM: 5G & 5G        </span>
        </div>
    </div>
    <div className={styles.specs}>
        <div>
        <TbRobot size={24} />
        </div>
        <div>
        OS
        <span>
        Android v14         </span>
        </div>
    </div>
    <div className={styles.view_specs_btn}>
      <Link href='#specs'>
      <button>
        View Full Specs
      </button>
      </Link>
     
    </div>
    
    </div>
  
  )
}

export default Spec