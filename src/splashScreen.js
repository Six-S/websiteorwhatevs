import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import ReactSVG from 'react-svg'

const SplashScreen = () => {
    return (
        <div className="content" style={{textAlign: 'center'}}>
            <ReactSVG src="./svg.svg" 
            afterInjection={(error, svg) => {
                if (error) {
                  console.error(error)
                  return
                }
                console.log(svg)
              }}/>
            <label className="label">
                Enter
            </label>
        </div>
    )
}

let path = anime.path('path');

anime({
    targets: '.lineOne .lineTwo .lineThree',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

export default SplashScreen;