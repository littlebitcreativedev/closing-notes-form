import { schemaRefOrVal } from "ajv/dist/compile/util";
import React from "react"


const TextareaField = ({labelText, inputName, type, numberRows, placeholderText, helperText, value, onChange}) => {

return (
        <div className="rescuer-list-container mb-10">
              <label className="block mb-2 text-sm font-medium text-white" htmlFor={inputName}>
              {labelText}:
              </label>
              <textarea
                  wrap="true"
                  id={inputName}
                  name={inputName}
                  type={type}
                  rows={numberRows}
                  placeholder={placeholderText}
                  value={value}
                  onChange={onChange}
                  className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              />
              <p id="helper-text" className="mt-2 text-xs text-gray-500">{helperText}</p>
            </div>
    )
}

export default TextareaField;