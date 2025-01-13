import React from "react"


import InputField from "./reusable-components/input-field.component.jsx"

const DeliveryMetrics = ({metrics, onChange}) => {  
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

    // convert MM/dd/yyyy to yyyy-MM-dd
    const formatDateForInput = (dateString) => {
        if (!dateString) return ''

        try {
            const [month, day, year] = dateString.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        } catch (error) {
            return ''
        }
    }

    // convert yyyy-MM-dd to MM/dd/yyyy
    const formatDateForStorage = (dateString) => {
        if (!dateString) return ''
         try {
            const [year, month, day] = dateString.split('-')
            return `${month}/${day}/${year}`
         } catch (error) {
            return ''
         }
    }

    return (
        <div className="deliver-metrics-container mb-8 md:mb-14 
        bg-zinc-800 rounded-lg p-4 md:py-10 md:px-8 lg:px-20 
        transition-all duration-300">
            <div className="metrics-sections space-y-6 md:space-y-8">
                <div className="metric-item">
                    <InputField 
                        labelText="Date"
                        inputName="date"
                        type="date"
                        helperText="Today's date."
                        value={formatDateForInput(metrics.date)}
                        onChange={(e) => {
                            const formatedDate = formatDateForStorage(e.target.value)
                            handleInputChange({
                                target: {
                                    name: 'date',
                                    value: formatedDate
                                }
                            })
                        }}
                    />
                </div>
                <div className="metric-item">
                    <InputField 
                        labelText="Delivered"
                        inputName="delivered"
                        type="number"
                        placeholderText="e.g 10,000"
                        helperText="How many packages were delivered today?"
                        value={metrics.delivered}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="metric-item">
                    <InputField 
                        labelText="Routes"
                        inputName="routes"
                        type="number"
                        placeholderText="e.g 10"
                        helperText="How many many routes did we have today?"
                        value={metrics.routes}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="metric-item">
                    <InputField 
                        labelText="Returned"
                        inputName="returned"
                        type="number"
                        placeholderText="e.g 10"
                        helperText="How many packages were returned today?"
                        value={metrics.returned}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        
          
          
          
        </div> 
    )
}

export default DeliveryMetrics