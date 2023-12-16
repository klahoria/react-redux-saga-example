import React, { useEffect, useRef } from 'react';
import './Input.css';
import clsx from 'clsx';

export default function Input({ className, name, label, type, required = 1, id, currency }) {
    const inputRef = useRef();
    const inputBoxRef = useRef();

    function handleFocus() {
        if (inputRef.current && inputRef.current) {
            inputRef.current.setAttribute("style", "border: 1px solid #1581E5;box-shadow: 0px 4px 10px rgba(21, 129, 229, 0.2);")
            if (currency) {
                inputRef.current.querySelector('.currency').classList.remove('d-none');
            }
        }
    }
    function handleBlur() {
        if (inputRef.current && inputRef.current) {
            inputRef.current.removeAttribute("style", "border: 1px solid #1581E5")
            if (currency && !inputBoxRef.current.value) {
                inputRef.current.querySelector('.currency').classList.add('d-none');
            }
        }
    }

    function getCurrencySymbol(currencyCode) {
        try {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).formatToParts()[0].value;
        } catch (error) {
            console.error(`Error getting currency symbol for ${currencyCode}: ${error.message}`);
            return null;
        }
    }
    useEffect(() => {
        if (currency) {
            inputBoxRef.current.style.paddingLeft = '20px'
        }

        return () => {

        }
    }, [currency])

    function handleInput(e) {
        // Allow Backspace, Tab, and Enter

        if(e.key == '.' && e.target.value.length > 0 && e.target.value.includes('.') || e.target.value == '.') {
            console.log('on here')
            return false;
        }
        
        if (e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Enter'|| e.key == '.') {
          return true;
        }
      
        // Prevent input of alphabets
        if (!e.key.match(/[0-9]/)) {
          e.preventDefault();
          return false;
        }
      
        return true;
      }

    return (
        <>
            <div className={clsx("group position-relative " + className)} ref={inputRef}>
                <input type={type} required={required} name={name} className={className} ref={inputBoxRef} id={id} onFocus={() => handleFocus()} onBlur={() => handleBlur()} onKeyDown={(e) => handleInput(e)} />
                {currency && <span className='fw-bold position-absolute currency d-none'>
                    {getCurrencySymbol(currency.toUpperCase() || "USD")}
                </span>}
                <label>{label}</label>
            </div>
        </>
    )
}
