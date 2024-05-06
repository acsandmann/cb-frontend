import React from 'react';

const Dropdown = ({ label, options }) => {
    return (
        <div className="mb-4">
            <label className={`block text-white text-sm font-bold mb-2`} htmlFor="dropdownHoverButton">
                {label}
            </label>
            <select name={label.toLowerCase()} id="dropdownHoverButton" className={`w-32 text-white bg-card-300 hover:bg-card-200 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center focus:ring-0 focus:outline-none`}>
                {options.map(o => (<option value={o}>{o}</option>))}
            </select>
        </div>
    );
};

export default Dropdown;