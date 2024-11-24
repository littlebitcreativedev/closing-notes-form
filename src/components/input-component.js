import React from "react"

export default function InputContainer({inputName, placeholderText, labelString, helperText, inputType, value, handle}) {
    return (
        <div className="container">
            <div className="delivered-container mb-5">
                <label class="block mb-2 text-md font-medium text-gray-900" for={inputName}>
                {labelString}:
                </label>
                <input 
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    id={inputName}
                    name={inputName}
                    type={inputType} 
                    value={value}
                    onChange={handle}
                    placeholder={placeholderText} 
                    required
                />
                <p id="helper-text" className="mt-2 text-xs text-gray-500">{helperText}</p>
            </div>
        </div>
        
    )
}