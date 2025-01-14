import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout.component"

const SuccessPage = () => {
    const [submittedData, setSubmittedData] = useState(null)
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
        if (typeof window !== 'undefined') {
            // retrieve data from localStorage
            const saveData = localStorage.getItem('submittedFormData')
            if (saveData) {
                setSubmittedData(JSON.parse(saveData))
                // clear data fom localStorage
                window.localStorage.removeItem('submittedFormData')
            }
        }
       
    }, [])

    if (!isBrowser) {
        return (
            <Layout>
                <div className="text-center py-10">
                    <p>Loading...</p>
                </div>
            </Layout>
        )
    }

    if (!submittedData) {
        return (
            <Layout>
                <div className="text-center py-10">
                    <h1 className="text-2xl font-bold mb-4">No submission data found</h1>
                    <Link to="/" className="text-lime-500 hover:text-lime-600">
                        Return to form
                    </Link>
                </div>
            </Layout>
        )
    }

    const renderListItems = (items) => {
        if (!items) return null;
        return items
            .split('\n')
            .filter(item => item.trim() !== '')
            .map((item, index) => (
                <p key={index}>{item}</p>
            ))
    }

    return (
        <Layout>
            <div className="success-container py-10">
                <p className="font-bold mb-4">Submission Successful!</p>
                <div className="deliver-metrics mb-4">
                    <p>{submittedData?.deliveryMetrics?.date || ''} - CLOSING NOTES</p>
                    <br />
                    <p>Delivered: {submittedData?.deliveryMetrics?.delivered || ''}</p>
                    <p>Routes: {submittedData?.deliveryMetrics?.routes || ''}</p>
                    <p>Returned: {submittedData?.deliveryMetrics?.returned || ''}</p>
                </div>
                <div className="rescue-metrics mb-4">
                    <p>Number of rescuers: {submittedData?.rescueMetrics?.["rescuer-count"] || ''}</p>
                    <p>List rescuers:</p>
                    <div className="mb-4">
                        {renderListItems(submittedData?.rescueMetrics?.['rescuer-list'])}
                    {/**{submittedData.rescueMetrics["rescuer-list"]
                        .split('\n')
                        .filter(rescuer => rescuer.trim() !== '')
                        .map((rescuer, index) => (
                            <p key={index}>{rescuer}</p>
                        ))
                    }*/}
                    </div>
                    
                    <p>Rescues for OT support:</p>
                    <div className="mb-4">
                        {renderListItems(submittedData?.rescueMetrics?.['support-list'])}
                    </div>
                   
                    <p>Flex + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(submittedData?.rescueMetrics?.['flex-list'])}
                    </div>
                    
                    <p>Split + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(submittedData?.rescueMetrics?.['split-list'])}
                    </div>
                </div>
                <div className="incident-injuries mb-4">
                    <p>Incidents/Injuries:</p>
                    <p>{submittedData?.incidentInjuries?.["incident-injuries"] || ''}</p>
                </div>
                <div className="closing-metrics mb-4">
                    <p>Rescued:</p>
                    <div className="mb-4">
                        {renderListItems(submittedData?.rescueMetrics?.['rescued-list'])}
                    </div>
                    <p>Last driver: {submittedData?.closingMetrics?.["last-driver"] || ''}</p>
                </div>
                <div className="equipment-counts mb-4">
                    <p>Equipment counts:</p>
                    <p>Phones: {submittedData?.equipmentCounts?.phones || ''}</p>
                    <p>Powerbanks: {submittedData?.equipmentCounts?.powerbanks || ''}</p>
                    <p>EDV Fobs: {submittedData?.equipmentCounts?.["edv-fobs"] || ''}</p>
                    <p>Apt. Fobs: {submittedData?.equipmentCounts?.["apartment-fobs"] || ''}</p>
                    <p>Gas Cards: {submittedData?.equipmentCounts?.["gas-cards"] || ''}</p>
                    <p>Rental Keys: {submittedData?.equipmentCounts?.["rental-keys"] || ''}</p>
                </div>
                <div className="extra-notes mb-4">
                    <p>Extra:</p>
                    <p className="mb-4">{submittedData?.extraNotes?.["extra-notes"] || ''}</p>
                   
                    <p>Submitted by: {submittedData?.extraNotes?.["submitted-by"] || ''}</p>
                </div>
                <Link to="/" className="text-lime-500 hover:text-lime-600 mt-4">
                    Return to form
                </Link>
            </div>
        </Layout>
    )
} 

export default SuccessPage

export const Head = () => (
    <>
        <html lang="en" />
        <title>Submission Successful</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
)