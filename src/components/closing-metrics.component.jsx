import React, { useState } from "react"

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
        <div className="closing-metrics-container mb-14 bg-zinc-800 rounded-lg py-10 px-20">
          <div className="rescued-drivers-container mb-10">
            <MultipleInputFields
                initialData={metrics["rescued-drivers"] || ''}
                onChange={handleInputChange}
                inputName="rescued-drivers"
                labelText="Rescued drivers"
                type="text"
                
            />
          </div>{/** closes rescued drivers container */}
          <div className="last-driver-container mb-5">
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
    )
}

export default ClosingMetrics