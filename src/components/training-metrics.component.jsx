import React from "react"

import InputField from "./reusable-components/input-field.component.jsx"
import RadioGroup from "./reusable-components/radio-group.component.jsx"
import MultipleInputFields from "./reusable-components/multiple-input-fields.component.jsx"


const TrainingMetrics = ({metrics, onChange}) => {
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

return (
    <div className="training-metrics-container mb-8 md:mb-14 bg-zinc-800 rounded-lg p-4 md:py-10 md:px-8 lg:px-20 transition-all duration-300">
          <div className="metrics-sections space-y-6 md:space-y-8">
            <div className="ride-along-container">
              <RadioGroup
              question="Were there any ride-alongs today?"
              labelText="Ride-alongs"
              inputName="ride-along"
              type="text"
              numberRows={6}
              placeholderText="e.g Coach: John, Trainee: Jane"
              value={metrics["ride-along"] || ''}
              onChange={handleInputChange}
              />
            </div> {/** closes training container */}
            
          </div>  
    </div> 
    )
}

export default TrainingMetrics;