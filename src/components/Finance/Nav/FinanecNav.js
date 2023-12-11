import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

export default function FinanecNav() {
    return (
        <div className="col-12 finance_header_nav">
            <span className="d-flex align-items-center">
                <i role="button" className='rounded-pill border  p-2 mw-50 mh-50 w-100 h-100 d-flex align-items-center justify-content-center'>
                    <FaArrowLeft className='fs-4 text-primary' />
                </i> <span className='ms-3 fs-4 fw-bold'>
                    Finance Customer
                </span>
            </span>
        </div>
    )
}
