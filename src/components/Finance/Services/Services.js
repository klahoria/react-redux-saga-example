import React from 'react'
import Input from '../../commons/Input/Input'
import { CiCircleRemove } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Tooltip } from 'react-bootstrap';


function Services() {
    return (
        <div className='h-100'>
            <div className="titleText mt-5 px-5 mx-5">
                <h1 className='mx-4 px-5 fw-bolder'>
                    What is the estimated
                    <span className='fs-2 align-middle mb-3 d-inline-block ms-2' role="button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                        <IoIosInformationCircleOutline />
                    </span>
                    <br />
                    service cost?
                </h1>
            </div>
            <ServiceBlock extra={"mt-5"} />
            <ServiceBlock />
            <ServiceBlock />
            <ServiceBlock showAdd={true} />
        </div >
    )
}

export default Services


function ServiceBlock({ extra, showAdd }) {
    return <>
        <div className={"d-flex align-items-top justify-content-center " + (extra || "mt-3")}>
            {/* Services */}
            <div className='mw-366'>
                <Input name={"Service Name"} type={'text'} label={'Service Name'} className={'w-100 mw-366'} />
                {showAdd && <div className="py-2 w-100 flex-grow-1 text-left p-0">
                    <span className="text-primary fs-6 fw-medium" role='button'>+ Add New Service</span>
                </div>}
            </div>
            <div className='ms-3' style={{ maxWidth: "200px" }}>
                <Input name={"Price"} className={"mw-200"} type={'text'} label={'Price'} currency={"USD"} />
            </div>
            <div className="deleteItems">
                <CiCircleRemove className='fs-1 mt-2 ms-3 text-danger' role="button" />
            </div>
            <div className="clearfix"></div>
        </div></>
}