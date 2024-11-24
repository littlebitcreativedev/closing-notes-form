import React, { useState } from "react"
import { navigate } from "gatsby"

import DeliveryMetrics from "./DeliveryMetrics"
import Rescues from "./Rescues"
import IncidentInjuries from "./IncidentsInjuries"
import ClosingMetrics from "./ClosingMetrics"
import EquipmentCounts from "./EquipmentCounts"
import Extra from "./Extra"

import './layout.css'



export default function Form() {
    const [formData, setFormData] = useState({
        delivery: {
            date: "",
            delivered: "",
            routes: "",
            returned: ""
        },
        rescues: {
            numberOfRescuers: "",
            rescuerList: "",
            flexList: "",
            splitList: "",
            supportList: ""
        },
        incidents: {
            incidents: "",
        },
        closing: {
            lasDriver: "",
            rescued: "",
        },
        equipment: {
            phones: "",
            powerbanks: "",
            edvFobs: "",
            aptFobs: "",
            gasCards: "",
            rentalKeys: "",
        },
        extra: {
            extra: "",
        }
    })

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = event => {
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "closing-notes", ...formData})
        })
        .then(() => navigate('/success/'))
        .catch(error => alert(error))
        event.preventDefault()
    }
    return(
        <div className="max-w-sm mx-auto">
        <h1 className="text-4xl font-semibold">Closing Notes</h1>
        <form onSubmit={handleSubmit} action="/" method="post" name="closing-notes" netlify data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="closing-notes"/>
            <div className="mb-8">
                <DeliveryMetrics initialState={formData.delivery} />
                <Rescues initialState={formData.rescues} />
                <IncidentInjuries initialState={formData.incidents} />
                <ClosingMetrics initialState={formData.closing} />
                <EquipmentCounts initialState={formData.equipment} />
                <Extra initialState={formData.extra} />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </div>
        </form>
        </div>
        
    
    )
}
