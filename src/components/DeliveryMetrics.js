import React, { useState } from "react"

import InputContainer from "./input-component"

export default function DeliveryMetrics({initialState}) {
    const [inputState, setInputState] = useState(initialState || {
        date: "",
        delivered: "",
        routes: "",
        returned: ""
    })

    const handleChange = event => {
        
        const { name, value } = event.target;
        setInputState((prevState) => ({
            ...prevState,
            [name]: value,
    }));
    }
    return (
        <div className="container mb-14">
        <div className="date-container mb-5 mt-14">
        <InputContainer 
            inputName={"date"}
            inputType={"date"}
            value={inputState.date}
            handle={handleChange}
            labelString={"Date"}
            helperText={"Today's date"}
        />
    </div>
    <div className="delivered-container mb-5">
        <InputContainer 
        inputName={"delivered"}
        inputType={"number"}
        value={inputState.delivered}
        handle={handleChange}
        placeholderText={"e.g., 1000"}
        labelString={"Delivered"}
        helperText={"How many packages were delivered today?"}
        />
    </div>
    <div className="routes-container mb-5">
        <InputContainer 
        inputName={"routes"}
        inputType={"number"}
        value={inputState.routes}
        handle={handleChange}
        placeholderText={"e.g., 10"}
        labelString={"Routes"}
        helperText={"How many routes did we have today?"}
        />
    </div>
    <div className="returned-container mb-5">
        <InputContainer 
        inputName={"returned"}
        inputType={"number"}
        value={inputState.returned}
        handle={handleChange}
        placeholderText={"e.g., 10"}
        labelString={"Returned"}
        helperText={"How many packages were returned to the station today?"}
        />
    </div>
        </div>
        
    )
}
