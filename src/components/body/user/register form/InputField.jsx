import React from "react";


 export default function InputField({label, name, value, onChange, error, type = "text"}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="font-medium mb-1">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                    error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-yellow-300'
                }`}
            />
            {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
        </div>
    );

}