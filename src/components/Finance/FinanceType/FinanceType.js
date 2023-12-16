import React, { useRef, useState } from 'react'
import CardFinanceType from '../CardFinanceType/CardFinanceType';
// import { useSpring, animated } from 'react-spring';
import { animated, useSpring } from '@react-spring/web'

function FinanceType({ cards, onUnmount }) {
    const cardRef = useRef();

    function handleClickCard() {
        cardRef.current.classList.add('slide-up-animation');
        onUnmount()
    }
    const [isVisible, setIsVisible] = useState(true);
    const [shouldUnmount, setShouldUnmount] = useState(false);

    const slideUpAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        onRest: () => {
            // Trigger unmounting after the animation completes
            if (!isVisible) {
                setShouldUnmount(true);
                setTimeout(() => {
                    onUnmount();
                }, 500); // Adjust the delay as needed
            }
        },
    });


    if (shouldUnmount) {
        return null;
      }
    
    
    return (
        <animated.div style={slideUpAnimation} className="col-12 mb-5 pb-5 cars_scroll" ref={cardRef}>
            <div className="col-8 mb-4 mx-auto">
                <h3 className="">Choose the financing option</h3>
            </div>
            <div className="col-8 mx-auto">
                {cards && Array.from(cards).map(card => <CardFinanceType {...card} click={() => setIsVisible(prev => false)} />)}
            </div>
        </animated.div>
    )
}

export default FinanceType
