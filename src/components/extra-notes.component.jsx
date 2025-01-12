import React, { useState } from "react"

import TextareaField from "./reusable-components/textarea-field.component.jsx"
import InputField from "./reusable-components/input-field.component.jsx"

const ExtraNotes = ({metrics, onChange}) => {
   
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

return (
        <div className="extra-container mb-14 bg-zinc-800 rounded-lg p-10">
            <div className="notes-container">
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
            <div className="submitted-container">
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
        </div>

    )
}

export default ExtraNotes