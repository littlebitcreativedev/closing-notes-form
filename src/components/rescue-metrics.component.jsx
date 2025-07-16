import React from "react"

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
    <div className="rescue-metrics-container mb-8 md:mb-14 bg-zinc-800 rounded-lg p-4 md:py-10 md:px-8 lg:px-20 transition-all duration-300">
          <div className="metrics-sections space-y-6 md:space-y-8">
            <div className="rescuers-container metric-item">
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
            <div className="support-container">
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
        </div> 
    )
}

export default RescueMetrics