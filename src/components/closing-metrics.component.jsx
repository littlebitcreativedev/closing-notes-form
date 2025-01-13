import React from "react"

import MultipleInputFields from "./reusable-components/multiple-input-fields.component.jsx"
import InputField from "./reusable-components/input-field.component.jsx"

const  ClosingMetrics = ({metrics, onChange}) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value || ''
        })
    }

    return (
        <div className="closing-metrics-container mb-8 md:mb-14 
                        bg-zinc-800 rounded-lg p-4 md:py-10 
                        md:px-8 lg:px-20 transition-all duration-300">
            <div className="metrics-sections space-y-6 md:space-y-8">
                <div className="rescued-drivers-section">
                  <MultipleInputFields
                      initialData={metrics["rescued-drivers"] || ''}
                      onChange={handleInputChange}
                      inputName="rescued-drivers"
                      labelText="Rescued drivers"
                      type="text"
                      
                  />
                </div>{/** closes rescued drivers container */}
                <div className="last-driver-section">
                    <InputField
                    labelText="Last driver"
                    inputName="last-driver"
                    type="text"
                    placeholderText="e.g. John at 8:25pm"
                    value={metrics["last-driver"] || ''}
                    onChange={handleInputChange}
                    />
                </div>{/** closes last driver container */}
            </div>
        </div>
    )
}

export default ClosingMetrics