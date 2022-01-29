import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Carousel.css';

function Carousel() {

    const images = require('../../data/CarouselImages.json');

    const [imgIndex, setImgIndex] = useState(0);
    const [imgSlide, setImgSlide] = useState(images[0]);

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

    return(
        <div className='carousel-container'>
            <div className="number">{imgIndex+1} / {images.length}</div>

            <SwitchTransition>
                <CSSTransition key={imgSlide.id} timeout={500} classNames="item">
                    <img className="image" src={imgSlide.imageUrl} alt="" />
                </CSSTransition>
            </SwitchTransition>


            <div className="text">{imgSlide.text}</div>

            <button className="prev" onClick={previousImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
    );

}

export default Carousel;