import React from 'react';

const PredictionInput = ({ label, placeholder, type, year, required }) => {
    const commonProps = {
        className: "shadow appearance-none border rounded w-full py-2 px-3 bg-main-400 border-main-600 placeholder-gray-400 text-white remove-arrow leading-tight focus:outline-none focus:shadow-outline",
        id: label.toLowerCase(),
        name: label.toLowerCase(),
        type: type || 'text',
        placeholder: placeholder,
    };

    const yearProps = year ? {
        min: "1910",
        max: "2024",
        step: "1",
    } : {};

    return (
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor={label.toLowerCase()}>
                {label}
            </label>
            <input required={required ? required : false} autocomplete="one-time-code" {...commonProps} {...yearProps} />
        </div>
    );
};


export default PredictionInput;