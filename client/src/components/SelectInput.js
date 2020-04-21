import React from 'react';
export default function SelectInput({ handleChange, label, ...Props }) {
    return (
        <div className="group">
            <select>
                <option onClick={handeleClick}>{value}</option>
                <option onClick={handeleClick} >{value}</option>
                <option onClick={handeleClick}>{value}</option>
                <option onClick={handeleClick} >{value}</option>
            </select>
            <label>{label}</label>
            <input className="form-input" onChange={handleChange} {...Props} />
        </div>
    );
}

