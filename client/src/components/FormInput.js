import React from 'react';
export default function FormInput({ handleChange, label, ...Props }) {
    return (
        <div className="group">
            <label>{label}</label>
            <input className="form-input" onChange={handleChange} {...Props} />
        </div>
    );
}

