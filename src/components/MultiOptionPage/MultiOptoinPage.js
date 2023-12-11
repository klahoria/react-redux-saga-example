import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiBellOn } from "react-icons/ci";
import './MultiOption.css'
import { useNavigate } from 'react-router-dom';
import { Finance } from '../../store/Actions/Finance';

function MultiOptoinPage() {

    const userInfo = useSelector(data => data.Login)

    const [card, setCard] = useState([
        {
            title: "No Fee Payment Processing",
            img: 'http://localhost:3000/cards/pp_card.svg',
            img_gif: 'http://localhost:3000/cards/ppgif.svg',
            subtitle: "Choose this option to securely accept payments* in one go.",
            learn_more: "http://localhost:3000/",
            show_learn_more: true,
            color: '#1BDD79',
            url: '/app/process-payment/payment'
        },
        {
            title: "Finance a Customer",
            img: 'http://localhost:3000/cards/finance.svg',
            img_gif: 'http://localhost:3000/cards/financegif.svg',
            subtitle: "Create a new finance contract for a customer who cannot pay in full today.",
            learn_more: "http://localhost:3000/",
            show_learn_more: true,
            color: '#1581E5',
            url: '/app/finance'
        },
        {
            title: "Account Receivable",
            img: 'http://localhost:3000/cards/AR.svg',
            img_gif: 'http://localhost:3000/cards/ARgif.svg',
            subtitle: "Choose this if you want to run your debt recovery on autopilot.",
            learn_more: "http://localhost:3000/",
            show_learn_more: true,
            color: '#FBBC04',
            url: '/app/accounts-receivable/send-invoice'
        }
    ]);

    const navigate = useNavigate();
    function handleClick(url) {

        navigate(url, { replace: false })
    }

    const dispatch = useDispatch()
    const doctorId = useSelector(data => data.Login)

    useEffect(() => {
        try {
            let doctor_id = doctorId.profile[0].doctor_id
            dispatch(Finance({ payload: { doctor_id } }))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='container-fluid h-100' style={{backgroundColor: '#fafafa'}}>
            <div className="row border-bottom">
                <div className="col-12 px-4">
                    <div className="row py-4  justify-content-between">
                        <div className="fs-4 fw-bold col flex-grow-1">Welcome, {userInfo.profile[0].doctor_first_name + " " + userInfo.profile[0].doctor_last_name}</div>
                        <div className="col text-end">
                            <div className="px-4">
                                <span className="notification-bell" role='button'>
                                    {/* <button type="button" className="btn btn-primary"> */}
                                    <CiBellOn className='fs-2' role='' />
                                    {/* </button> */}
                                    <span className="badge badge-danger notification-badge">3</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center py-5">
                <div className="col-10">
                    <h2 className='fw-bold pb-4'>Choose what you would like to do?</h2>
                    <div className="d-flex w-100 justify-content-lg-between justify-content-center flex-wrap mt-5" >
                        {card.map(item => (
                            <div key={item.url} className="card position-relative mx-3 mb-3 justify-content-between overflow-hidden" role='button' style={{ maxWidth: "380px", width: "100%", minHeight: '430px' }} onClick={() => handleClick(item.url)}>
                                <div className='p-3' >
                                    <img src={item.img} alt={item.img} className='mt-4' style={{ maxWidth: "120px" }} />
                                    <h2 className="fw_bolder mt-4 pt-2" style={{ minHeight: "85px" }}>{item.title}</h2>
                                    <h4 className="fs-6 text-secondary">{item.subtitle}</h4>
                                </div>
                                <div className="box_learnMore px-3">
                                    <a href='http://google.com' onClick={(e) => e.stopPropagation()} target='_blank' className="text-primary">Learn More</a>
                                </div>
                                <div className="grow_animation" style={{
                                    background: item.color
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultiOptoinPage
