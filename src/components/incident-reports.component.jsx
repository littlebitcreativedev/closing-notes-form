import React from "react"

import TextareaField from "./reusable-components/textarea-field.component.jsx"

const IncidentReports = ({metrics, onChange}) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

    return (
        <div className="incident-report-container mb-8 md:mb-14 bg-zinc-800 rounded-lg p-4 md:py-10 md:px-8 lg:px-20 transition-all duration-300">
            <div className="incident-content">
                <TextareaField
                labelText="Incident/Injuries"
                inputName="incident-injuries"
                type="text"
                numberRows={8}
                placeholderText="none"
                helperText="If there were no incidents or injuries to report please type 'none.'"
                value={metrics["incident-injuries"]}
                onChange={handleInputChange}
                required
                />
            </div>
        </div>
    )
}

export default IncidentReports