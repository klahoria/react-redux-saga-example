import React, { useRef } from 'react'
import CardFinanceType from '../CardFinanceType/CardFinanceType';

function FinanceType({ cards }) {
    const cardRef = useRef();

    function handleClickCard() {
        cardRef.current.classList.add('slide-up-animation');
    }

    return (
        <div className="col-12 mb-5 pb-5 cars_scroll" ref={cardRef}>
            <div className="col-8 mb-4 mx-auto">
                <h3 className="">Choose the financing option</h3>
            </div>
            <div className="col-8 mx-auto">
                {cards && Array.from(cards).map(card => <CardFinanceType {...card} click={handleClickCard} />)}
            </div>
        </div>
    )
}

export default FinanceType
