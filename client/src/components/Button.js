import React from 'react';
export default function CustomButton( { value }) {
    return (
        <div className="form-group">
            <input type="submit" value={ value } className="btn btn-primary" />
        </div>
    );
}

 
