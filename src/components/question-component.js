import React, { useState } from "react"
import TextareaContainer from "./textarea-component"

/*
Explanation:

1. State Management: We introduce a state variable showTextarea using useState(false) to control the visibility of the 
TextareaContainer. Initially, it's set to false, hiding the textarea.

2. Radio Button Change Handler: The handleRadioChange function is triggered when a radio button is selected. It updates 
the showTextarea state based on the selected value:

 - If the "Yes" option is selected (event.target.value === "yes"), showTextarea is set to true, showing the textarea.

 - If the "No" option is selected, showTextarea remains false, keeping the textarea hidden.
   
3. Conditional Rendering: We use a conditional statement {showTextarea && ...} to render the TextareaContainer only 
when showTextarea is true. This ensures the textarea is displayed only after the "Yes" option is selected.

Key Points:

1. Radio Button Value: The value attribute of the radio buttons is crucial for determining the state change.

2. onChange Event: The onChange event handler is attached to the radio buttons to trigger the state update.

3. Conditional Rendering: The && operator provides a concise way to conditionally render components based on a boolean condition.
Now, the TextareaContainer will only be visible when the "Yes" radio button is selected.
*/

export default function QuestionComponent({question, id, name, string, placeholder, helper, value, handleChange}) {

    const [showTextarea, setShowTextarea] = useState(false)

    const handleRadioChange = (event) => {
        setShowTextarea(event.target.value === "yes")
    }
    
    return (
        <div className="container">
            <fieldset>
                <p id="question-text" className="mt-3 mb-3 text-md font-medium text-gray-900">{question}</p>
                <div className="flex items-center mb-4">
                    <input 
                    id="yes-option"
                    type="radio"
                    name="answer"
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    onChange={handleRadioChange}
                    />
                    <label for="yes-option" className="block ms-2 text-sm font-medium text-gray-900">Yes</label>
                </div>
                <div className="flex items-center mb-4">
                    <input 
                    id="no-option"
                    type="radio"
                    name="answer"
                    value="no"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    onChange={handleRadioChange}
                    />
                    <label for="no-option" className="block ms-2 text-sm font-medium text-gray-900">No</label>
                </div>
            </fieldset>
            {showTextarea && (
                <TextareaContainer
                inputType={"text"}
                inputName={name}
                labelString={string}
                value={value}
                handleChange={handleChange}
                placeholderText={placeholder}
                helperText={helper}
                rows={6}
            />
            )}
        </div>
        
    )
    
}

