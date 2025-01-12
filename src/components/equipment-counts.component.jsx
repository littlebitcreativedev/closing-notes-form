import React, { useState } from "react"

const EquipmentCounts = ({metrics, onChange}) => {
  
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange({
            ...metrics,
            [name]: value
        })
    }

return (
        <div className="equipment-counts-container mb-14 bg-zinc-800 rounded-lg py-10 px-20">
          <div className="label-container mb-4">
            <label className="block mb-2 text-sm font-medium text-white" htmlFor="equipment-counts">Equipment counts:</label>
          </div>
          <div className="phones-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="phones">
            Phones:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="phones"
                name="phones"
                type="text"
                placeholder="e.g 23"
                value={metrics.phones}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="powerbanks-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="powerbanks">
            Powerbanks:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="powerbanks"
                name="powerbanks"
                type="text"
                placeholder="e.g 23"
                value={metrics.powerbanks}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="edv-fobs-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="edv-fobs">
            EDV Fobs:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="edv-fobs"
                name="edv-fobs"
                type="text"
                placeholder="e.g 23"
                value={metrics["edv-fobs"]}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="apartment-fobs-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="apartment-fobs">
            Apt. Fobs:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="apartment-fobs"
                name="apartment-fobs"
                type="text"
                placeholder="e.g 23"
                value={metrics["apartment-fobs"]}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="gas-cards-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="gas-cards">
            Gas Cards:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="gas-cards"
                name="gas-cards"
                type="text"
                placeholder="e.g 23"
                value={metrics["gas-cards"]}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="rental-keys-container flex items-center gap-4 mb-5">
            <label className="block mb-2 text-sm font-medium text-white nowrap w-32" htmlFor="rental-keys">
            Rental Keys:
            </label>
            <input 
                className="shadow-sm rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
                id="rental-keys"
                name="rental-keys"
                type="text"
                placeholder="e.g 23"
                value={metrics["rental-keys"]}
                onChange={handleInputChange}
                required
            />
          </div>
        </div>
    )
}

export default EquipmentCounts