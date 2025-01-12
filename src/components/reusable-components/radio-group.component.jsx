import React, { useState } from "react"

import MultipleInputFields from "./multiple-input-fields.component"

const RadioGroup = ({initialData="", question, labelText, inputName, type, placeholderText, onChange}) => {
    const [showTextArea, setShowTextArea] = useState(false) 

    const radioGroupName = `radio-${inputName}` // creates a unique name fo the radio group using the inputName prop

    const handleRadioChange = (event) => {
        const isYes = event.target.value === 'yes'

        setShowTextArea(isYes)
    } 

return (
            <div className="radio-group-container mb-5">
              <label className="block mb-2 text-sm font-medium text-white" htmlFor={radioGroupName}> 
                {question}
              </label>
              <div className="flex items-center mb-4">
                <input 
                id={`yes-${inputName}`}
                type="radio" 
                name={radioGroupName}
                value="yes"
                onChange={handleRadioChange}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                <label htmlFor={`yes-${inputName}`} className="block ms-2 text-sm font-medium text-white">Yes</label>
              </div>
              <div className="flex items-center mb-4">
                <input 
                id={`no-${inputName}`}
                type="radio" 
                name={radioGroupName}
                value="no"
                onChange={handleRadioChange}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                <label htmlFor={`no-${inputName}`} className="block ms-2 text-sm font-medium text-white">No</label>
              </div>
              {showTextArea && (
                <MultipleInputFields 
                initialData = {initialData} 
                onChange={onChange}
                type="text"
                labelText={labelText}
                inputName={inputName}
                placeholderText={placeholderText}
                />
              )}
            </div>
    )
}

export default RadioGroup;