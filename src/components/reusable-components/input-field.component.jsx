import React from "react"


const InputField = ({labelText, inputName, type, helperText, placeholderText, value, onChange}) => {

return (
        <div className="input-field-container mb-5">
            <label className="block mb-2 text-sm font-medium text=white" htmlFor={inputName}>
            {labelText}:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id={inputName}
                name={inputName}
                type={type}
                placeholder={placeholderText}
                value={value}
                onChange={onChange}
                required
            />
            {helperText && (
                <p className="mt-2 text-xs text-gray-500">{helperText}</p>
            )}   
          </div> 
    )
}

export default InputField;