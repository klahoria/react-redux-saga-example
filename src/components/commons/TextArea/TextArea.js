import React from 'react';
import './TextArea.css';

export default function TextArea({ className, name, label, type, id }) {
    return (
        <>
            <div class="group">
                <textarea type="textarea" rows="5" required="required"></textarea><span class="highlight"></span><span class="bar"></span>
                <label>Message</label>
            </div>
        </>
    )
}
