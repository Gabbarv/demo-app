import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Spec from "./components/specification/Spec";
import Flipkart from "./components/flipkart/Flipkart";
import NewsD from "./components/news/NewsD";
import Specification from "./components/specifications/Specification";
import Others from "./components/phonediv/Others";
import ImageCor from "./components/imagecarousel/ImageCor";
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.mobile_desc}>
        <ImageCor/>
        <Spec/>
      </div>
      
      <Flipkart/>
      <div className={styles.news}>
        <h2>Latest News</h2>
      <NewsD/>
      </div>
      
      <Specification/>
      <Others/>
      
    
    </div>
  );
}
