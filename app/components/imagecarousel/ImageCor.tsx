import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import '../../imagecar.css'

const ImageCor = () => {
  return (
    <div style={{width: '100%'}}>
         <Carousel className="w-full max-w-xs">
      <CarouselContent>
        
          <CarouselItem >
            <div className='carousal'>
              
         
                    <img src='https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-1.jpg'/>
               
               
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className='carousal'>
              
         
                    <img src='https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-2.jpg'/>
               
               
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className='carousal'>
              
         
                    <img src='https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-3.jpg'/>
               
               
            </div>
          </CarouselItem>
    
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default ImageCor