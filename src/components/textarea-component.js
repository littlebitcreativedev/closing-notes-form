import React from "react"

export default function TextareaContainer({textareaName, inputType, labelString, placeholderText, helperText, rows, value, handleChange}) {
    
    return (
        <div className="container mb-5">
            <label class="block mb-2 text-md font-medium text-gray-900" htmlFor={textareaName}>{labelString}:</label>
            <textarea
                wrap
                id={textareaName}
                name={textareaName}
                type={inputType}
                rows={rows}
                value={value}
                onChange={handleChange}
                placeholder={placeholderText}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
             />
            <p id="helper-text" className="mt-2 text-xs text-gray-500">{helperText}</p>
        </div>
    )
}