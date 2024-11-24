import React, { useState } from "react"

import TextareaContainer from './textarea-component'

export default function Extra({initialState}) {

    const [text, setTextState] = useState(initialState || {
        extra: "",
    })

    const handleChange = event => {

        setTextState(event.target.value)
    }

    return (
        <div className="extra-container mb-14">
            <TextareaContainer 
                id={"extra"}
                name={"extra"}
                value={text.extra}
                handleChange={handleChange}
                labelString={"Extra"}
                placeholderText={"e.g., EDV01 - Fob is with maintenance."}
                helperText={"Leave blank if there is nothing extra to add"}
                rows={6}
            />
        </div>
    )
}