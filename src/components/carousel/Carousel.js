import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ProgressBar from './ProgressBar';
import './Carousel.css';

function Carousel() {

    const images = require('../../data/CarouselImages.json');
    const imageShowTime = 7;


    const [imgIndex, setImgIndex] = useState(0);
    const [imgSlide, setImgSlide] = useState(images[0]);

    const [seconds, setSeconds] = useState(0);
    const [timePercent, setTimePercent] = useState(0);

    function updateSlide(index){
        setImgSlide(images[index]);
    }

    function nextImage(){
        if(imgIndex >= images.length - 1){
            setImgIndex(0);
            updateSlide(0);
        }
        else {
            setImgIndex(prevIndex => prevIndex+1);
            updateSlide(imgIndex+1);
        }        
    }

    function previousImage(){
        if(imgIndex === 0){
            setImgIndex(images.length - 1);
            updateSlide(images.length - 1);
        }
        else {
            setImgIndex(prevIndex => prevIndex-1);
            updateSlide(imgIndex-1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((seconds) => seconds + 1);

          setTimePercent((seconds / imageShowTime) * 100 + (100 / imageShowTime));

          if(seconds >= imageShowTime){
            setSeconds(0);
            setTimePercent(0);
            nextImage();
          }

        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [seconds, nextImage]);

    return(
        <div className='carousel-container'>
            <div className="number">{imgIndex+1} / {images.length}</div>

            <div className="imgContainer">
                <SwitchTransition>
                    <CSSTransition key={imgSlide.id} timeout={500} classNames="item">
                        <img className="image" src={imgSlide.imageUrl} alt="" />
                    </CSSTransition>
                </SwitchTransition>

                <button className="prev" onClick={previousImage}>&#10094;</button>
                <button className="next" onClick={nextImage}>&#10095;</button>

                <ProgressBar completed={timePercent} />
            </div>

            <div className="text">{imgSlide.text}</div>
        </div>
    );

}

export default Carousel;