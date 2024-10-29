import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dataslider from '../../components/Circle/Circle';
import React from 'react';
import './Slider.scss'

export default function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  
  return (
    <div className="sliders ">
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {dataslider.map((item) => (
          <div key={item.id}>  
            <div className="second">
              {item.component}
            </div>
          </div>
        ))}
      </Carousel>    
    </div>
  );
}
