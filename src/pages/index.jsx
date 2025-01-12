import React, { useState } from "react"

import Layout from "../components/layout.component.jsx"
import DeliveryMetrics from "../components/delivery-metrics.component.jsx"
import RescueMetrics from "../components/rescue-metrics.component.jsx"
import IncidentReports from "../components/incident-reports.component.jsx"
import ClosingMetrics from "../components/closing-metrics.component.jsx"
import EquipmentCounts from "../components/equipment-counts.component.jsx"
import ExtraNotes from "../components/extra-notes.component.jsx"

import '../styles/global.css'
import '../components/layout.css'

const INITIAL_FORM_STATE = {
    deliveryMetrics: {
      date: "",
      delivered: "",
      routes: "",
      returned: "",
    },
    rescueMetrics: {
      'rescuer-count': "",
      'rescuer-list': "",
      'support-list': "",
      'flex-list': "",
      'split-list': "",
    },  
    incidentInjuries: {
      'incident-injuries': "",
    },  
    closingMetrics: {
      'rescued-drivers': "",
      'last-driver': "",
    },        
    equipmentCounts: {
      phones: "",
      powerbanks: "",
      'edv-fobs': "",
      'apartment-fobs': "",
      'gas-cards': "",
      'rental-keys': "",
    },  
    extraNotes: {
      'extra-notes': "",
      'submitted-by': "",
    } 
}


const IndexPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

    const handleDeliveryMetricsChange = (event) => {
      setFormData(prevState => ({
        ...prevState,
        deliveryMetrics: event
      }))
    }

    const handleRescueMetricsChange = (event) => {
      setFormData(prevState => ({
        ...prevState,
        rescueMetrics: event
      }))
    }

    const handleIncidentsChange = (event) => {
      setFormData(prevState => ({
        ...prevState,
        incidentInjuries: event
      }))
    }

  const handleClosingMetricsChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      closingMetrics: event
    }))
  }

  const handleEquipmentCountsChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      equipmentCounts: event
    }))
  }

  const handleExtraNotesChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      extraNotes: event
    }))
  }
  
  const formatEquipmentCounts = (equipmentCounts) => {
    return `
    Phones: ${equipmentCounts.phones}
    Powerbanks: ${equipmentCounts.powerbanks}
    EDV Fobs: ${equipmentCounts['edv-fobs']}
    Apt. Fobs ${equipmentCounts['apartment-fobs']}
    Gas Cards: ${equipmentCounts['gas-cards']}
    Rental Keys: ${equipmentCounts['rental-keys']}`
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formattedData = [
        [
            // Date
            formData.deliveryMetrics.date,
            // Delivery Metrics
            formData.deliveryMetrics.delivered,
            formData.deliveryMetrics.routes,
            formData.deliveryMetrics.returned,
            // Rescue Metrics
            formData.rescueMetrics['rescuer-count'],
            formData.rescueMetrics['rescuer-list'],
            formData.rescueMetrics['support-list'],
            formData.rescueMetrics['flex-list'],
            formData.rescueMetrics['split-list'],
            // Incident Reports
            formData.incidentInjuries['incident-injuries'],
            // Closing Metrics
            formData.closingMetrics['rescued-drivers'],
            formData.closingMetrics['last-driver'],
            // Equipment Counts
            formatEquipmentCounts(formData.equipmentCounts),
            /***formData.equipmentCounts.phones,
            formData.equipmentCounts.powerbanks,
            formData.equipmentCounts['edv-fobs'],
            formData.equipmentCounts['apartment-fobs'],
            formData.equipmentCounts['gas-cards'],
            formData.equipmentCounts['rental-keys'], */
            // Extra Notes
            formData.extraNotes['extra-notes'],
            formData.extraNotes['submitted-by']
        ]
    ]

      const response = await fetch('https://v1.nocodeapi.com/littlebitcreativedev/google_sheets/FLurkYLqpWXrslDP?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()

      // store form data in localStorage before redirect
      localStorage.setItem('submittedFormData', JSON.stringify(formData))

      // redirect to success page 
      window.location.href = '/success'

      if (response.ok) {
        setFormData(INITIAL_FORM_STATE)
        console.log('Form submitted successfully!')
      } else {
        throw new Error("Submission failed." + JSON.stringify(result))
      }

    } catch (err) {
      console.error('Submission error:', err)
      alert('Failed to submit form, Please try again.')
    } finally {
      setIsSubmitting(false)
    }
    console.log('Form Submited', formData)
  }

  return (
    <Layout>
      <form 
      onSubmit={handleSubmit}
      className="mb-8" 
      name="closing-notes-form" 
      method="POST"
      >
        <DeliveryMetrics metrics={formData.deliveryMetrics} onChange={handleDeliveryMetricsChange} />
        <RescueMetrics metrics={formData.rescueMetrics} onChange={handleRescueMetricsChange} />
        <IncidentReports metrics={formData.incidentInjuries} onChange={handleIncidentsChange} />
        <ClosingMetrics metrics={formData.closingMetrics} onChange={handleClosingMetricsChange} />
        <EquipmentCounts metrics={formData.equipmentCounts} onChange={handleEquipmentCountsChange} />
        <ExtraNotes metrics={formData.extraNotes} onChange={handleExtraNotesChange} />
        <button type="submit" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        disabled={isSubmitting}
        >
        {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Closing Notes</title>
