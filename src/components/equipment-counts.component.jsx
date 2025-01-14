import React from "react"

const EquipmentCounts = ({metrics, onChange}) => {
  
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

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
                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-phones">
                        Phones:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-phones"
                        name="phones"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics.phones || ''}
                        onChange={handleInputChange}
                        aria-label="Phones count"
                        required
                    />
                </div>

                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-powerbanks">
                        Powerbanks:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-powerbanks"
                        name="powerbanks"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics.powerbanks || ''}
                        onChange={handleInputChange}
                        aria-label="Powerbanks count"
                        required
                    />
                </div>

                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-edv-fobs">
                        EDV Fobs:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-edv-fobs"
                        name="edv-fobs"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics['edv-fobs'] || ''}
                        onChange={handleInputChange}
                        aria-label="EDV Fobs count"
                        required
                    />
                </div>

                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-apartment-fobs">
                        Apt. Fobs:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-apartment-fobs"
                        name="apartment-fobs"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics['apartment-fobs'] || ''}
                        onChange={handleInputChange}
                        aria-label="Apartment Fobs count"
                        required
                    />
                </div>

                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-gas-cards">
                        Gas Cards:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-gas-cards"
                        name="gas-cards"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics['gas-cards'] || ''}
                        onChange={handleInputChange}
                        aria-label="Gas Cards count"
                        required
                    />
                </div>

                <div className="equipment-input-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label 
                        className="text-xs md:text-sm font-medium text-white sm:nowrap sm:w-32" 
                        htmlFor="equipment-rental-keys">
                        Rental Keys:
                    </label>
                    <input 
                        className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 
                        placeholder-zinc-400 text-white focus:ring-lime-500 
                        focus:border-lime-500 block w-full p-2 md:p-2.5 text-sm md:text-base
                        transition-all duration-200" 
                        id="equipment-rental-keys"
                        name="rental-keys"
                        type="text"
                        placeholder="e.g 23"
                        value={metrics['rental-keys'] || ''}
                        onChange={handleInputChange}
                        aria-label="Rental Keys count"
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default EquipmentCounts