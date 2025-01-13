import React, { useState, useEffect } from 'react'

const MultipleInputFields = ({initialData = "", onChange, type, labelText, inputName, placeholderText, helperText}) => {
    const [inputs, setInputs] = useState([{
        id: 0,
        value: ''
    }])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const inputId = parseInt(name.split('-')[2]);
        
        const updatedInputs = inputs.map(input => {
            if (input.id === inputId) {
                return { ...input, value: value };
            }
            return input;
        });
        
        setInputs(updatedInputs);
        
        // Combine all values
        const combinedValues = updatedInputs
            .map(input => input.value)
            .filter(value => value !== '')
            .join('\n');
            
        onChange({
            target: {
                name: inputName,
                value: combinedValues || ''
            }
        });
    }

    const addInput = () => {
        setInputs([
            ...inputs,
            { id: inputs.length, value: '' }
        ]);
    }

    const removeInput = (idToRemove) => {
        if (inputs.length > 1) {
            const updatedInputs = inputs.filter(input => input.id !== idToRemove);
            setInputs(updatedInputs);
            
            const combinedValues = updatedInputs
                .map(input => input.value)
                .filter(value => value !== '')
                .join('\n');
                
            onChange({
                target: {
                    name: inputName,
                    value: combinedValues || ''
                }
            });
        }
    }

    // Initialize from existing data
    useEffect(() => {
        if (initialData) {
            const existingValues = initialData.split('\n');
            const initializedInputs = existingValues.map((value, index) => ({
                id: index,
                value: value
            }));
            setInputs(initializedInputs);
        } else {
            setInputs([{
                id: 0,
                value: ''
            }])
        }
    }, [initialData]);

    return (
        <div className="multiple-inputs-container mb-3 md:mb-5">
            <label className="block mb-1 md:mb-2 text-xs md:text-sm font-medium text-white" htmlFor={inputName}>
            {labelText}:
            </label>
            {inputs.map((input) => (
                <div key={input.id} className='flex flex-col sm:flex-row items-start md:items-center gap-2 sm:gap-4 mb-3 md:mb-5'>
                    <input 
                    className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                    placeholder-zinc-400 text-white focus:ring-lime-500 
                    focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base" 
                    name={`${inputName}-${input.id}`}
                    type={type}
                    placeholder={placeholderText}
                    value={input.value || ''}
                    onChange={handleInputChange}
                    required
                    />
                    {inputs.length > 1 && (
                        <button 
                        type="button"
                        onClick={() => removeInput(input.id)}
                        className="w-full sm:w-auto text-white bg-red-800 
                        hover:bg-red-900 focus:ring-4 focus:outline-none 
                        focus:ring-red-300 font-medium rounded-lg 
                        text-xs md:text-sm px-2 py-2 md:px-3 md:py-2.5 text-center"
                        >
                        Remove
                        </button>
                    )}
                </div>
            ))}
            <button 
            type="button"
            onClick={addInput} 
            className="w-full sm:w-auto text-white bg-lime-700 
            hover:bg-lime-800 focus:ring-4 focus:outline-none 
            focus:ring-lime-300 font-medium rounded-lg 
            text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center"
            >Add Driver</button>   
        </div> 
    )
}

export default MultipleInputFields