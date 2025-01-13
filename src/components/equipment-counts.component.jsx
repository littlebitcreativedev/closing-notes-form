import React from "react"

const EquipmentCounts = ({metrics, onChange}) => {
  
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

    const EquipmentInput = ({ label, id, name, value }) => (
      <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label 
          className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
          htmlFor={`equipment-${id}`}>
            {label}
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                placeholder-zinc-400 text-white focus:ring-lime-500 
                focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                transition-all duration-200" 
                id={`equipment-${id}`}
                name={name}
                type="text"
                placeholder="e.g 23"
                value={value}
                onChange={handleInputChange}
                aria-label={`${label} count`}
                required
            />
      </div>
    )

return (
        <div className="equipment-counts-container mb-8 md:mb-14 
        bg-zinc-800 rounded-lg p-4 md:py-10 md:px-8 lg:px-20
        transition-all duration-300">
          <div className="label-container mb-4">
            <legend className="block text-xs md:text-sm font-medium text-white">
              Equipment counts:
              </legend>
          </div>
          <div className="equipment-inputs-grid space-y-6 md:space-y-8">
            <EquipmentInput 
              label="Phones:"
              id="phones"
              name="phones"
              value={metrics.phones}
            />
            <EquipmentInput 
              label="Powerbanks:"
              id="powerbanks"
              name="powerbanks"
              value={metrics.powerbanks}
            />
            <EquipmentInput 
              label="EDV Fobs:"
              id="edv-fobs"
              name="edv-fobs"
              value={metrics['edv-fobs']}
            />
            <EquipmentInput 
              label="Apt. Fobs:"
              id="apartment-fobs"
              name="apartment-fobs"
              value={metrics['apartment-fobs']}
            />
            <EquipmentInput 
              label="Gas Cards:"
              id="gas-cards"
              name="gas-cards"
              value={metrics['gas-cards']}
            />
            <EquipmentInput 
              label="Rental Keys:"
              id="rental-keys"
              name="rental-keys"
              value={metrics['rental-keys']}
            />
          </div>
        </div>
    )
}

export default EquipmentCounts