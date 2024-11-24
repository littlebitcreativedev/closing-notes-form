import React, { useState } from "react"

import InputContainer from "./input-component"
import TextareaContainer from "./textarea-component"

export default function ClosingMetrics({initialState}) {
    const [inputState, setInputState] = useState(initialState || {
        lastDriver: "",
    })

    const [textState, setTextState] = useState(initialState || {
        rescued: "",
    })
    
    const handleTextChange = event => {

        setTextState(event.target.value)
    }

    const handleInputChange = event => {
        setInputState({
            ...inputState, 
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div className="closing-metrics-container mb-14">
            <div className="rescued-container mb-5">
                <TextareaContainer
                    textareaName={"rescued"}
                    inputType={"text"}
                    value={textState.rescued}
                    handleChange={handleTextChange}
                    labelString={"Rescued"}
                    rows={1}
                />
            </div>
            <div className="last-driver-container mb-8">
                <InputContainer
                    inputName={"lastDriver"}
                    inputType={"text"}
                    value={inputState.lastDriver}
                    handle={handleInputChange}
                    labelString={"Last driver"}
                    placeholderText={"e.g., John at 8:25pm"}
                />
            </div>
        </div>
    )
}