import React, { useEffect, useState } from "react"
import { navigate } from 'gatsby'

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

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const [isSubmitting, setIsSubmitting] = useState(false)

  

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
    return [
      `Phones: ${equipmentCounts.phones || '0'}`,
      `Powerbanks: ${equipmentCounts.powerbanks || '0'}`,
      `EDV Fobs: ${equipmentCounts['edv-fobs'] || '0'}`,
      `Apt. Fobs: ${equipmentCounts['apartment-fobs'] || '0'}`,
      `Gas Cards: ${equipmentCounts['gas-cards'] || '0'}`,
      `Rental Keys: ${equipmentCounts['rental-keys'] || '0'}`
    ].join('\n');
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
  
  try {

    const formattedData = [
      [
        String(formData.deliveryMetrics.date || ''),
        String(formData.deliveryMetrics.delivered || ''),
        String(formData.deliveryMetrics.routes || ''),
        String(formData.deliveryMetrics.returned || ''),
        String(formData.rescueMetrics['rescuer-count'] || ''),
        String(formData.rescueMetrics['rescuer-list'] || ''),
        String(formData.rescueMetrics['support-list'] || ''),
        String(formData.rescueMetrics['flex-list'] || ''),
        String(formData.rescueMetrics['split-list'] || ''),
        String(formData.incidentInjuries['incident-injuries'] || ''),
        String(formData.closingMetrics['rescued-drivers'] || ''),
        String(formData.closingMetrics['last-driver'] || ''),
        formatEquipmentCounts(formData.equipmentCounts),
        String(formData.extraNotes['extra-notes'] || ''),
        String(formData.extraNotes['submitted-by'] || '')
      ]
    ]

    console.log('sending data:', formattedData)

      const response = await fetch('https://v1.nocodeapi.com/littlebitcreativedev/google_sheets/NnksMyGKwBJpzcJR?tabId=FormResponses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      })

      const result = await response.json()

      if (!response.ok) {
        console.log('Error response:', result)
        throw new Error(`submission failed: ${JSON.stringify(result)}`)
      }
     
      if (isBrowser) {
         // store form data in localStorage before redirect
        localStorage.setItem('submittedFormData', JSON.stringify(formData))
        setFormData(INITIAL_FORM_STATE)
        // redirect to success page 
        navigate('/success')
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
      className="mb-8 space-y-6" 
      name="closing-notes-form" 
      method="POST"
      >
        <DeliveryMetrics metrics={formData.deliveryMetrics} onChange={handleDeliveryMetricsChange} />
        <RescueMetrics metrics={formData.rescueMetrics} onChange={handleRescueMetricsChange} />
        <IncidentReports metrics={formData.incidentInjuries} onChange={handleIncidentsChange} />
        <ClosingMetrics metrics={formData.closingMetrics} onChange={handleClosingMetricsChange} />
        <EquipmentCounts metrics={formData.equipmentCounts} onChange={handleEquipmentCountsChange} />
        <ExtraNotes metrics={formData.extraNotes} onChange={handleExtraNotesChange} />
        <button 
        type="submit" 
        className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full md:w-auto px-4 py-2.5 text-center mt-6"
        disabled={isSubmitting}
        >
        {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <title>Closing Notes</title>
  </>
)