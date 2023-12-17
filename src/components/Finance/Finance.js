import React, { useRef, useState } from 'react'
import './Finance.css'
import FinanceNav from './Nav/FinanecNav'
import FinanceType from './FinanceType/FinanceType'
import Services from './Services/Services';

function Finance() {

    const [viewMode, setViewMode] = useState('choosePlan');
    // const [cards, setFinanceCard] = useState([]);
    const [cards, setFinanceCard] = useState([
        {
            type: 2,
            title: 'No Fee Payment Plan',
            subText: 'Protected Payment',
            img: '/cards/Finance/NFF.svg',
            desc: "Instantly provide financing to your customers without any credit checks. If a payment is missed, Denefits will take on the debt and protect your payments.",
            bold: [],
            height: 165
        }, {
            type: 6,
            title: 'EZ Payment Plan',
            subText: 'Protected Payments with no Reserve and Deferred Interest Benefits',
            img: '/cards/Finance/EZD.svg',
            desc: `Allows you to finance customers with deferred interest for the first 12 months. Customers can pay off the entire amount within the deferred duration(initial 12 months) to enjoy no interest fees on their contracts.
            Any remaining balanc after 12 months will incur the standard EZ Financing interest rates on the Payment Plan Amount and will be converted into monthly installments like any contract under this payment plan.`,
            bold: ['after 12 months', 'first 12 months', 'no interest fees'],
            height: 240,
            offer: {
                title: 'LIMITED TIME DEAL!',
                plantype: "EZ with Deferred Interest",
                color: ["#DB7600", "#545454"]
            }
        },
        {
            type: 3,
            title: 'In House Payment Plan',
            subText: 'You keep the interest',
            img: '/cards/Finance/INHF.svg',
            desc: `Create flexible payment plans with In House Financing. There’s no prepayment penalty; you can decide the interest rate and enjoy the profit.`,
            bold: [],
            height: 165
        }
    ])

    function handleunMount() {
        setViewMode(prev => 'services')
    }


    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">

                <div className="col-12 h-100 ">
                    <div className="row h-100 flex-wrap">
                        {/* Finance Block */}
                        <div className="col-md-7 col-12 h-100 p-3">
                            {/* finance block nav */}
                            <FinanceNav />
                            {/* block choose finance */}
                            <div className="card_block select_finance_type h-100 row card_finance_options_block justify-content-center align-items-center align-content-center">

                                {viewMode == 'choosePlan' && <FinanceType cards={cards} onUnmount={handleunMount} />}
                                {viewMode == 'services' && <Services cards={cards} onUnmount={handleunMount} />}

                            </div>
                        </div>
                        <div className="col-md-5 col-12"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Finance
