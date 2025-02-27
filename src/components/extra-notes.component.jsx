import React from "react"

import TextareaField from "./reusable-components/textarea-field.component.jsx"
import InputField from "./reusable-components/input-field.component.jsx"
import RadioGroup from "./reusable-components/radio-group.component.jsx"

const ExtraNotes = ({metrics, onChange}) => {
   
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

return (
        <div className="extra-notes-container mb-8 md:mb-14 
                        bg-zinc-800 rounded-lg p-4 md:py-10 
                        md:px-8 lg:px-20 transition-all duration-300">
            <div className="metrics-sections space-y-6 md:space-y-8">
                <div className="notes-section">
                    <TextareaField
                    labelText="Extra"
                    inputName="extra-notes"
                    type="text"
                    numberRows={8}
                    placeholderText="e.g EDV01 - Fob is with maintenance."
                    helperText="Anything of note to report for openers or fleet. Leave blank if there is nothing extra to add."
                    value={metrics["extra-notes"]}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="vsa-container">
                    <RadioGroup 
                    question="Were any vans VSA'd tonight"
                    labelText="VSA'd tonight"
                    inputName="vsa-vans"
                    type="text"
                    numberRows={6}
                    placeholderText="EDV00"
                    value={metrics["vsa-vans"] || ''}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="grounded-container">
                    <RadioGroup 
                    question="Were any vans grounded"
                    labelText="Grounded"
                    inputName="grounded-vans"
                    type="text"
                    numberRows={6}
                    placeholderText="EDV00"
                    value={metrics["grounded-vans"] || ''}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="submitted-section">
                    <InputField
                    labelText="Submitted by"
                    inputName="submitted-by"
                    type="text"
                    helperText="Please type your name."
                    placeholderText="John"
                    value={metrics["submitted-by"]}
                    onChange={handleInputChange}
                    />
                </div>
               {/** 
                <div className="trigger-section">
                    <InputField
                    labelText="Send"
                    inputName="trigger-word"
                    type="text"
                    helperText="Please type the word 'Send' to trigger our homie Hooker T Washington. (It's case-sensitive)."
                    placeholderText="Send"
                    value={metrics["trigger-word"]}
                    onChange={handleInputChange}
                    />
                </div> 
                */}  
            </div>
        </div>

    )
}

export default ExtraNotes