import React, { useState } from "react"

//import RescuerList from "../RescuerList"
import InputContainer from "./input-component"
import QuestionComponent from "./question-component"
import TextareaContainer from "./textarea-component"

export default function Rescues({initialState}) {
    const [inputState, setInputState] = useState(initialState || {
        numberOfRescuers: "",
    })

    const [textState, setTextState] = useState(initialState || {
        rescuerList: "",
        flexList: "",
        splitList: "",
        supportList: ""
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
        <div className="container mb-14">
            <div className="number-of-rescuers-container mb-5">
                <InputContainer
                    inputName={"numberOfRescuers"}
                    inputType={"number"}
                    value={inputState.numberOfRescuers}
                    handle={handleInputChange}
                    placeholderText={"e.g., 1"}
                    labelString={"Number of rescuers"}
                    helperText={"How many rescuers did we have today?"}
                />
            </div>
            <div className="list-rescuers-container mb-5">
                <TextareaContainer
                    inputName={"rescuerList"}
                    inputType={"text"}
                    value={textState.rescuerList}
                    handleChange={handleTextChange}
                    labelString={"List rescuers"}
                    placeholderText={"e.g., John (00 stops, 00 packages)"}
                    rows={6}
                />
            </div>
            <div className="flex-container mb-8">
                <QuestionComponent
                    question={"Did we have any Flex + rescue?"}
                    id={"flex-routes"}
                    name={"flexList"}
                    value={textState.flexList}
                    handleChange={handleTextChange}
                    string={"Flex + rescue"}
                    placeholderText={"e.g., John (00 stops, 00 packages)"}
                />
            </div>
            <div className="split-container mb-8">
                <QuestionComponent
                    question={"Did anyone split a route and do a rescues?"}
                    id={"split-routes"}
                    name={"splitList"}
                    value={textState.splitList}
                    handleChange={handleTextChange}
                    string={"Split + rescue"}
                    placeholderText={"e.g., John (00 stops, 00 packages)"}
                />
            </div>
            <div className="ot-support-container mb-8">
                <QuestionComponent
                    question={"Did anyone do rescues for OT support?"}
                    id={"ot-support"}
                    name={"supportList"}
                    value={textState.supportList}
                    handleChange={handleTextChange}
                    string={"Rescues for OT support"}
                    placeholderText={"e.g., John (00 stops, 00 packages)"}
                />
            </div>
        </div>
    )
}