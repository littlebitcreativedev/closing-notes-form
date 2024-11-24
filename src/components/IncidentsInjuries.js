import React, { useState } from "react"

import TextareaContainer from "./textarea-component"

export default function IncidentInjuries({initialState}) {

    const [inputState, setInputState] = useState(initialState || {
        incidents: "",
    })

    const handleChange = event => {

        setInputState(event.target.value)
    }

    return (
        <div className="incident-injuries-container mb-14">
            <TextareaContainer 
                textareaName={"incidents"}
                inputType={"text"}
                value={inputState.incidents}
                handleChange={handleChange}
                labelString={"Incident/Injuries"}
                placeholderText={"none"}
                helperText={"If there were no incident or injuries to report please type none"}
                rows={6}
            />
        </div>
    )
}