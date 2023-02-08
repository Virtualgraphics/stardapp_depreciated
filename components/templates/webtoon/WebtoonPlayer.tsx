import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const WebtoonPlayer = () => {
    const images = [
        "/assets/0.jpg",
        "/assets/1.jpg",
        "/assets/2.jpg",
      
       
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  </div>
            </div>
          

        </Slide>
    );
};

export default WebtoonPlayer;