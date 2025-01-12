import React, { useState } from "react"

import InputField from "./reusable-components/input-field.component.jsx"
import RadioGroup from "./reusable-components/radio-group.component.jsx"
import MultipleInputFields from "./reusable-components/multiple-input-fields.component.jsx"


const RescueMetrics = ({metrics, onChange}) => {
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

return (
    <div className="rescue-metrics-container mb-14 bg-zinc-800 rounded-lg py-10 px-20">
          <div className="rescuers-container mb-5">
            <InputField 
            labelText="Number of rescuers"
            inputName="rescuer-count"
            type="number"
            placeholderText="e.g 10"
            helperText="How many rescuers did we have today?"
            value={metrics["rescuer-count"] || ''}
            onChange={handleInputChange}
            />
            <MultipleInputFields 
            initialData = {metrics["rescuer-list"] || ''} 
            onChange={handleInputChange}
            type="text"
            labelText="List rescuers"
            inputName="rescuer-list"
            placeholderText="e.g John (20 stops, 200 packages)"
            />
          </div> {/** closes rescuers container */}
          <div className="support-container mb-5">
            <RadioGroup
            question="Did we have any rescues for OT support"
            labelText="Rescues for OT support"
            inputName="support-list"
            type="text"
            numberRows={6}
            placeholderText="e.g John (20 stops, 200 packages)"
            value={metrics["support-list"] || ''}
            onChange={handleInputChange}
            />
          </div> {/** closes support container */}
          <div className="flex-container">
            <RadioGroup
            question="Did we have any Flex routes + rescue"
            labelText="Flex + rescue"
            inputName="flex-list"
            type="text"
            numberRows={6}
            placeholderText="e.g John (20 stops, 200 packages)"
            value={metrics["flex-list"] || ''}
            onChange={handleInputChange}
            />
          </div> {/** closes flex container */}
          <div className="split-container">
          <RadioGroup
            question="Did we have any Split routes + rescue"
            labelText="Split + rescue"
            inputName="split-list"
            type="text"
            numberRows={6}
            placeholderText="e.g John (20 stops, 200 packages)"
            value={metrics["split-list"] || ''}
            onChange={handleInputChange}
            />
          </div> {/** closes split container */}
        </div> 
    )
}

export default RescueMetrics