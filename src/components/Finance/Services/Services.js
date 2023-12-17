import React, { useEffect } from 'react'
import Input from '../../commons/Input/Input'
import { CiCircleRemove } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';
import clsx from 'clsx';


function Services() {

    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
        defaultValues: {}
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "services", // unique name for your Field Array
    });


    const methods = useForm();

    useEffect(() => {
        append({ serviceName: '', price: '' });
    }, [append]);

    const onSubmit = (data) => {
        console.log(data.services);
    };
    return (
        <div className='h-100'>
            <div className="mx-auto" style={{ maxWidth: '615px' }}>
                <div className="titleText mt-5">
                    <h1 className='mx-auto pe-5 fw-bolder' >
                        What is the estimated
                        <span className='fs-2 align-middle mb-3 d-inline-block ms-2' role="button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                            <IoIosInformationCircleOutline />
                        </span>
                        <br />
                        service cost?
                    </h1>
                </div>

                <form onSubmit={handleSubmit(data=>console.log(data))}>
                    {fields.map((field, index) => (
                        <ServiceBlock extra={clsx("mt-3", { "mt-5": index == 0 || fields.length == 1 })} key={field.id} // important to include key with field's id
                            price={{ ...register(`services.${index}.price`) }} serviceName={`services.${index}.serviceName`} priceName={`services.${index}.price`} service={{ ...register(`services.${index}.serviceName`) }} showAdd={(fields.length - 1) == index}
                            remove={() => remove(index)} add={() => append({ serviceName: '', price: "" })}
                            showRemove={fields.length > 0}
                        />

                    ))}

                    <div className='mx-auto mt-5'>
                        <label htmlFor="termsCheck" className="checkbox mx-auto" >
                            <span className=''>
                                <input type="checkbox" id="termsCheck" className='fs-4 form-check-input' /> <span className="align-bottom fs-6 ms-2" role='button'>Add your terms & conditions (optional)</span>
                            </span>
                        </label>
                    </div>

                    <div className="py-3 mt-5">
                        <input className="btn btn-primary py-2 mh-56 px-4 fw-medium" type='submit' calue="Countinue" />
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Services


function ServiceBlock({ extra, showAdd, price, service, remove, add, showRemove, key, serviceName, priceName }) {
    return <>
        <div key={key} className={"align-items-top d-flex flex-md-noWrapmt-5 flex-md-nowrap flex-wrap justify-content-md-center justify-content-md-start " + (extra || "mt-3")}>
            {/* Services */}
            <div className='mw-366'>
                <Input name={serviceName} controller={service} type={'text'} label={'Service Name'} className={'w-100 mw-366'} />
                {showAdd && <div className="py-2 w-100 flex-grow-1 text-left p-0">
                    <span className="text-primary fs-6 fw-medium" role='button' onClick={add}>+ Add New Service</span>
                </div>}
            </div>
            <div className='ms-md-3 ms-0 my-md-0 my-3' style={{ maxWidth: "200px" }}>
                <Input name={priceName} className={"mw-200"} controller={price} type={'text'} label={'Price'} currency={"USD"} />
            </div>
            {showRemove && <div className={"deleteItems"}>
                <CiCircleRemove onClick={remove} className='fs-1 ms-3 text-danger' title='Delete Service' style={{ minHeight: "50px", minWidth: "50px" }} role="button" />
            </div>}
            <div className="clearfix"></div>
        </div></>
}




// import { useForm, useFieldArray } from "react-hook-form";

// export default function Services() {
//     const { register, control, handleSubmit, reset, trigger, setError } = useForm({
//         // defaultValues: {}; you can populate the fields by this attribute
//     });
//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "test"
//     });

//     return (
//         <form onSubmit={handleSubmit(data => console.log(data))}>
//             <ul>
//                 {fields.map((item, index) => (
//                     <li key={item.id}>
//                         <input {...register(`test.${index}.firstName`)} />
//                         {/* <Controller
//               render={({ field }) => <input {...field} />}
//               name={`test.${index}.lastName`}
//               control={control}
//             /> */}







//                         <button type="button" onClick={() => remove(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             <button
//                 type="button"
//                 onClick={() => append({ firstName: "bill", lastName: "luo" })}
//             >
//                 append
//             </button>
//             <input type="submit" />
//         </form>
//     );
// }