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
            <div className="radio-group-container mb-3 md:mb-5">
              <legend className="block mb-1 md:mb-2 text-xs md:text-sm font-medium text-white"> 
                {question}
              </legend>
              <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center">
                    <input 
                    id={`${radioGroupName}-yes`}
                    type="radio" 
                    name={radioGroupName}
                    value="yes"
                    onChange={handleRadioChange}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-label={`Yes - ${question}`}
                    />
                    <label 
                      htmlFor={`${radioGroupName}-yes`} 
                      className="block ms-2 text-xs md:text-sm font-medium text-white">Yes</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      id={`${radioGroupName}-no`}
                      type="radio" 
                      name={radioGroupName}
                      value="no"
                      onChange={handleRadioChange}
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
                      aria-label={`No - ${question}`}
                    />
                    <label 
                      htmlFor={`${radioGroupName}-no`} 
                      className="block ms-2 text-xs md:text-sm font-medium text-white">No</label>
                  </div>
              </div>
              
              {showTextArea && (
                <div className="mt-3 md:mt-4">
                  <MultipleInputFields 
                  initialData = {initialData} 
                  onChange={onChange}
                  type="text"
                  labelText={labelText}
                  inputName={inputName}
                  placeholderText={placeholderText}
                  />
                </div>
               
              )}
            </div>
    )
}

export default RadioGroup;