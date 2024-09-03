import React, { useState } from 'react';

export const FormDemo6 = () => {
    const [conditions, setConditions] = useState({
        hasUpperCase: false,
        hasLowerCase: false,
        hasSpecialChar: false,
        hasNumber: false,
    });

    const checkPassword = (event) => {
        const password = event.target.value;
        
        const updatedConditions = {
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            hasNumber: /\d/.test(password),
        };

        setConditions(updatedConditions);
    };

    return (
        <div>
            <h1>Form Demo 6</h1>
            <div>
                <input 
                    type='text' 
                    placeholder='Enter password' 
                    onChange={checkPassword}
                />
            </div>
            <div>
                <p style={{ color: conditions.hasUpperCase ? 'green' : 'black' }}>
                    Password should contain 1 upper case
                </p>
                <p style={{ color: conditions.hasLowerCase ? 'green' : 'black' }}>
                    Password should contain 1 lower case
                </p>
                <p style={{ color: conditions.hasSpecialChar ? 'green' : 'black' }}>
                    Password should contain 1 special character
                </p>
                <p style={{ color: conditions.hasNumber ? 'green' : 'black' }}>
                    Password should contain 1 number
                </p>
            </div>
        </div>
    );
}
