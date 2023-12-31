import React, { useEffect, useRef, useState } from 'react'
import CardFinanceType from '../CardFinanceType/CardFinanceType';
// import { useSpring, animated } from 'react-spring';
import { animated, useSpring } from '@react-spring/web'
import { useDispatch } from 'react-redux';
import { chooseFinanceType } from '../../../store/Actions/FinanceActions';

function FinanceType({ cards, onUnmount, dispatch }) {
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
                    onUnmount('services');
                }, 500); // Adjust the delay as needed
            }
        },
    });

    if (shouldUnmount) {
        return null;
    }

    function savePlanType(data) {
        dispatch(chooseFinanceType({ payload: { planType: data } }))
        setIsVisible(prev => false)
    }

    return (
        <animated.div style={slideUpAnimation} className="col-12 mb-md-5 pb-5 cars_scroll" ref={cardRef}>
            <div className="col-md-8 col-12 mb-4 mx-auto">
                <h3 className="">Choose the financing option</h3>
            </div>
            <div className="col-md-8 col-12 mx-auto">
                {cards && Array.from(cards).map((card, index) => <CardFinanceType {...card} key={Math.random() * index} click={(data) => savePlanType(data)} />)}
            </div>
        </animated.div>
    )
}

export default FinanceType
