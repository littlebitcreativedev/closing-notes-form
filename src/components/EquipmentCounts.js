import React, { useState } from "react"

import InlineInputContainer from "./inline-input-component"

export default function EquipmentCounts({initialState}) {
    const [formState, setFormState] = useState(initialState || {
        phones: "",
        powerbanks: "",
        edvFobs: "",
        aptFobs: "",
        gasCards: "",
        rentalKeys: "",
    })

    const handleChange = event => {
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div className="equipment-container mb-14">
        <div className="block mb-4 text-md font-medium text-gray-900">Equipment counts:</div>
        <form className="w-full max-w-sm">
            <InlineInputContainer 
                inputName={"phones"}
                labelString={"Phones"}
                inputType={"number"}
                value={formState.phones}
                handleChange={handleChange}
            />
            <InlineInputContainer 
                inputName={"powerbanks"}
                labelString={"Powerbanks"}
                inputType={"number"}
                value={formState.powerbanks}
                handleChange={handleChange}
            />
            <InlineInputContainer 
                inputName={"edvFobs"}
                labelString={"EDV Fobs"}
                inputType={"number"}
                value={formState.edvFobs}
                handleChange={handleChange}
            />
            <InlineInputContainer 
                inputName={"aptFobs"}
                labelString={"Apt. Fobs"}
                inputType={"number"}
                value={formState.aptFobs}
                handleChange={handleChange}
            />
            <InlineInputContainer 
                inputName={"gasCards"}
                labelString={"Gas Cards"}
                inputType={"number"}
                value={formState.gasCards}
                handleChange={handleChange}
            />
            <InlineInputContainer 
                inputName={"rentalKeys"}
                labelString={"Rental Keys"}
                inputType={"number"}
                value={formState.rentalKeys}
                handleChange={handleChange}
            />
        </form>
        </div>
    )
}