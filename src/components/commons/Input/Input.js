import React, { useEffect, useRef } from 'react';
import './Input.css';
import clsx from 'clsx';

export default function Input({ className, name, label, type, required = 1, id, currency, controller,autofocus,readOnly }) {
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
        if (currency && inputRef.current.querySelector('input').value) {
            let value_arr = inputRef.current.querySelector('input').value.split('.');
            if (value_arr.length > 0 && value_arr[0] == '') {
                value_arr[0] = String('0');
            }
            if ((value_arr.length > 0 && value_arr[1] == '') || value_arr.length == 1) {
                value_arr[1] = String('00');
            }
            inputRef.current.querySelector('input').value = value_arr.join('.')
        }

        if (inputRef.current && inputRef.current) {
            inputRef.current.removeAttribute("style", "border: 1px solid #1581E5")
            if (currency && inputRef.current.querySelector('input').value == '') {
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
        console.log(controller)
        if (currency) {
            inputRef.current.querySelector('input').style.paddingLeft = '20px'
        }

        return () => {

        }
    }, [currency])

    function handleInput(e) {
        // Allow Backspace, Tab, and Enter
        if (e.ctrlKey && (e.key == 'a' || e.key == 'A')) {
            return true;
        }

        if (!currency) return true;

        if (e.target.value.length > 1 && e.target.value.split('.')[1] && e.target.value.split('.')[1].length == 2 && !(e.ctrlKey && (e.key == 'a' || e.key == 'A'))
            && !(e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Enter' || e.key == '.')
        ) {
            e.preventDefault();
            return false;
        }

        if (e.key == '.' && e.target.value.includes('.')) {
            e.preventDefault();
            return false;
        }

        if (e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Enter' || e.key == '.') {
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
        <div className={clsx("group position-relative " + className)} ref={inputRef}>
            <input type={type} required={required} className={'border-0 outline-0 ' + className} id={id} {...controller} onFocus={() => handleFocus()} onBlur={() => handleBlur()} onKeyDown={(e) => handleInput(e)}  autoFocus={autofocus} />
            {currency && <span className='fw-bold position-absolute currency d-none'>
                {getCurrencySymbol(currency.toUpperCase() || "USD")}
            </span>}
            <label className='input_label'>{label}</label>
        </div>
    )
}
