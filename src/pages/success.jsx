import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout.component"

const SuccessPage = () => {
    const [submittedData, setSubmittedData] = useState(null)

    useEffect(() => {
        // retrieve data from localStorage
        const saveData = localStorage.getItem('submittedFormData')
        if (saveData) {
            setSubmittedData(JSON.parse(saveData))
            // clear data fom localStorage
            localStorage.removeItem('submittedFormData')
        }
    }, [])

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

    return (
        <Layout>
            <div className="success-container py-10">
                <p className="font-bold mb-4">Submission Successful!</p>
                <div className="deliver-metrics mb-4">
                    <p>{submittedData.deliveryMetrics.date} - CLOSING NOTES</p>
                    <br></br>
                    <p>Delivered: {submittedData.deliveryMetrics.delivered}</p>
                    <p>Routes: {submittedData.deliveryMetrics.routes}</p>
                    <p>Returned: {submittedData.deliveryMetrics.returned}</p>
                </div>
                <div className="rescue-metrics mb-4">
                    <p>Number of rescuers: {submittedData.rescueMetrics["rescuer-count"]}</p>
                    <p>List rescuers:</p>
                    <div className="mb-4">
                    {submittedData.rescueMetrics["rescuer-list"]
                        .split('\n')
                        .filter(rescuer => rescuer.trim() !== '')
                        .map((rescuer, index) => (
                            <p key={index}>{rescuer}</p>
                        ))
                    }
                    </div>
                    
                    <p>Rescues for OT support:</p>
                    <div className="mb-4">
                    {submittedData.rescueMetrics["support-list"]
                        .split('\n')
                        .filter(rescuer => rescuer.trim() !== '')
                        .map((rescuer, index) => (
                            <p key={index}>{rescuer}</p>
                        ))
                    }
                    </div>
                   
                    <p>Flex + rescue:</p>
                    <div className="mb-4">
                    {submittedData.rescueMetrics["flex-list"]
                        .split('\n')
                        .filter(rescuer => rescuer.trim() !== '')
                        .map((rescuer, index) => (
                            <p key={index}>{rescuer}</p>
                        ))
                    }
                    </div>
                    
                    <p>Split + rescue:</p>
                    <div className="mb-4">
                    {submittedData.rescueMetrics["split-list"]
                        .split('\n')
                        .filter(rescuer => rescuer.trim() !== '')
                        .map((rescuer, index) => (
                            <p key={index}>{rescuer}</p>
                        ))
                    }
                    </div>
                </div>
                <div className="incident-injuries mb-4">
                    <p>Incidents/Injuries:</p>
                    <p>{submittedData.incidentInjuries["incidents-injuries"]}</p>
                </div>
                <div className="closing-metrics mb-4">
                    <p>Rescued:</p>
                    <div className="mb-4">
                    {submittedData.closingMetrics["rescued-drivers"]
                        .split('\n')
                        .filter(driver => driver.trim() !== '')
                        .map((driver, index) => (
                            <p key={index}>{driver}</p>
                        ))
                    }
                    </div>
                    <p>Last driver: {submittedData.closingMetrics["last-driver"]}</p>
                </div>
                <div className="equipment-counts mb-4">
                    <p>Equipment counts:</p>
                    <p>Phones: {submittedData.equipmentCounts.phones}</p>
                    <p>Powerbanks: {submittedData.equipmentCounts.powerbanks}</p>
                    <p>EDV Fobs: {submittedData.equipmentCounts["edv-fobs"]}</p>
                    <p>Apt. Fobs: {submittedData.equipmentCounts["apartment-fobs"]}</p>
                    <p>Gas Cards: {submittedData.equipmentCounts["gas-cards"]}</p>
                    <p>Rental Keys: {submittedData.equipmentCounts["rental-keys"]}</p>
                </div>
                <div className="extra-notes mb-4">
                    <p>Extra:</p>
                    <p className="mb-4">{submittedData.extraNotes["extra-notes"]}</p>
                   
                    <p>Submitted by: {submittedData.extraNotes["submitted-by"]}</p>
                </div>
                <Link to="/" className="text-lime-500 hover:text-lime-600 mt-4">
                    Return to form
                </Link>
            </div>
        </Layout>
    )
} 

export default SuccessPage