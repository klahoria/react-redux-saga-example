import React, { useEffect, useRef } from 'react'
import './cardFinance.css'
import clsx from 'clsx';

function CardFinanceType({ type, title, subText, img, desc, bold, height, click, offer }) {

    const ref = useRef()
    const cref = useRef()

    const addBoldTags = (text, boldArray) => {
        let replacedText = text;

        boldArray.forEach(boldPhrase => {
            const boldedPhrase = `<b>${boldPhrase}</b>`;
            replacedText = replacedText.replace(new RegExp(boldPhrase, 'gi'), boldedPhrase);
        });

        return replacedText;
    };

    // const descWithBoldTags = addBoldTags(descText, boldArray);
    useEffect(() => {
        // if (bold && bold.length > 0) {
        let descChange = addBoldTags(desc, bold)
        ref.current.innerHTML = descChange
        // }
    }, [bold])

    function mouseOver(height) {
        console.log('fkjdbflajsdfb')
        cref.current.setAttribute("style", `height: ${height}px`);
    }

    function handleMouseLeave() {
        cref.current.removeAttribute('style')
    }

    return (
        <div ref={cref} className="border rounded-3 px-4 py-4 mb-4 card_finance position-relative" role='button' key={type} onMouseOver={() => mouseOver(height)} onMouseLeave={handleMouseLeave} onClick={click}>
            {offer && <div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 w-100 px-4" style={{ backgroundColor: (offer.bgColor || "#fbbc0436") }}>
                <span className='fs-12 fw-bold p-1' style={{ color: offer.color[0] }}>{offer.title.toUpperCase()}</span>
                <span className='fs-12 fw-bold p-1' style={{ color: offer.color[1] }}>{offer.plantype}</span>
            </div>}
            <div className={clsx("d-flex align-items-center", { 'mt-2': offer })}>
                <img src={img} alt="" />
                <div className='px-3'>
                    <p className="fs-4 fw-semibold mb-0">{title}</p>
                    <p className="fs-6 mb-0 fw-normal text-secondary">{subText}s</p>
                </div>
            </div>
            <div className='pt-3'>
                <h5 className="text-secondary mb-0 px-3 fs-6 fw-normal desc" ref={ref}></h5>
            </div>
        </div>
    )
}

export default CardFinanceType
