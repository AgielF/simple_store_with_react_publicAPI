import Label from './Label';
import Input from './Input';

import React, { forwardRef } from 'react';

const InputForm = forwardRef(({ label, placeholder, type, name }, ref) => (
    <div>
        <Label text={label} htmlFor={name} />
        <Input 
            type={type} 
            name={name} 
            placeholder={placeholder}  
            ref={ref} 
        />
    </div>
));

export default InputForm;
