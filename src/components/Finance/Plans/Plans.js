import React, { useEffect, useState } from 'react'
import Input from '../../commons/Input/Input'
import CustomRadio from '../../commons/Radio/CustomRadio'
import { CiCircleRemove } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';


function Plans({ onUnmount }) {

  const { register, control, handleSubmit, reset, trigger, setError, setFocus } = useForm({
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

  useEffect(() => {
    setFocus(`services.${fields.length - 1}.serviceName`)
    return () => {
    }
  }, [setFocus])


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
          onUnmount('plans');
        }, 500); // Adjust the delay as needed
      }
    },
  });


  if (shouldUnmount) {
    return null;
  }


  return (
    <animated.div style={slideUpAnimation} className='h-100'>
      <div className="mx-auto" style={{ maxWidth: "615px" }}>
        <div className='header mt-5 pt-5 mb-5'>
          <h2 className='fw-bolder'>Select a financing option</h2>
        </div>
        <div className="plan_cards">
          <GetPlanCards />
          <GetPlanCards />
          <GetPlanCards />
          <GetPlanCards />
          <GetPlanCards />
        </div>
      </div>
    </animated.div>
  )
}

export default Plans;


function GetPlanCards() {
  return <label className="border rounded-1 py-3 px-3 my-3 d-flex align-items-center justify-content-between" role="button">
    <div className='fs-5 fw-bold'>
      <CustomRadio checked={true} value={12} tenure={"Months"} label={"12 Months"} />
    </div>
    {/* price block */}
    <div className="fs-18">
      <span className='text-black fw-bold'>$162
        <span className="fw-normal fs-16">
          /month</span>
      </span>
    </div>
    <div>
      <span className="fs-16 fw-medium">Total Payable Today: <span className="text-primary fw-bold">${258.00}</span></span>
    </div>
  </label>
}