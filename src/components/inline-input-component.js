import React from "react"

export default function InlineInputContainer({inputName, placeholderText, labelString, helperText, inputType, value, handleChange}) {
    return (
        <div className="container flex items-center mb-5">
            <div className="md:w-1/3">
                <label class="block mb-2 text-md font-medium text-gray-900 md:text-left md:mb-0 pr-4" for={inputName}>
                {labelString}:
                </label>
            </div>
            <div className="md:w-2/3">
                <input 
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    id={inputName}
                    name={inputName}
                    type={inputType}
                    value={value}
                    onChange={handleChange} 
                    placeholder={placeholderText} 
                    required
                />
            </div>
            <p id="helper-text" className="mt-2 text-xs text-gray-500">{helperText}</p>
            
        </div>
        
    )
}