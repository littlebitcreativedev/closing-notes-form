import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { getStorageItem, removeStorageItem } from "../utils/browserStorage"
import Layout from "../components/layout.component"

const SuccessPage = () => {
    const [pageState, setPageState] = useState({
        isLoading: true,
        submittedData: null
    })

    useEffect(() => {
        // Wrap in setTimeout to ensure it runs after initial render
        setTimeout(() => {
            const data = getStorageItem('submittedFormData')
            if (data) {
                removeStorageItem('submittedFormData')
            }
            setPageState({
                isLoading: false,
                submittedData: data
            })
        }, 0)
    }, [])

    const renderListItems = (items) => {
        if (!items) return null
        return items
            .split('\n')
            .filter(item => item.trim() !== '')
            .map((item, index) => (
                <p key={index}>{item}</p>
            ))
    }

    if (pageState.isLoading) {
        return (
            <Layout>
                <div className="text-center py-10">
                    <p>Loading...</p>
                </div>
            </Layout>
        )
    }

    if (!pageState.submittedData) {
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
                    <p>{pageState?.submittedData?.deliveryMetrics?.date || ''} - CLOSING NOTES</p>
                    <br />
                    <p>Delivered: {pageState?.submittedData?.deliveryMetrics?.delivered || ''}</p>
                    <p>Routes: {pageState?.submittedData?.deliveryMetrics?.routes || ''}</p>
                    <p>Returned: {pageState?.submittedData?.deliveryMetrics?.returned || ''}</p>
                </div>
                <div className="rescue-metrics mb-4">
                    <p>Number of rescuers: {pageState?.submittedData?.rescueMetrics?.["rescuer-count"] || ''}</p>
                    <p>List rescuers:</p>
                    <div className="mb-4">
                        {renderListItems(pageState?.submittedData?.rescueMetrics?.['rescuer-list'])}
                    </div>
                    
                    <p>Rescues for OT support:</p>
                    <div className="mb-4">
                        {renderListItems(pageState?.submittedData?.rescueMetrics?.['support-list'])}
                    </div>
                   
                    <p>Flex + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(pageState?.submittedData?.rescueMetrics?.['flex-list'])}
                    </div>
                    
                    <p>Split + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(pageState?.submittedData?.rescueMetrics?.['split-list'])}
                    </div>
                </div>
                <div className="incident-injuries mb-4">
                    <p>Incidents/Injuries:</p>
                    <p>{pageState?.submittedData?.incidentInjuries?.["incident-injuries"] || ''}</p>
                </div>
                <div className="closing-metrics mb-4">
                    <p>Rescued:</p>
                    <div className="mb-4">
                        {renderListItems(pageState?.submittedData?.rescueMetrics?.['rescued-list'])}
                    </div>
                    <p>Last driver: {pageState?.submittedData?.closingMetrics?.["last-driver"] || ''}</p>
                </div>
                <div className="equipment-counts mb-4">
                    <p>Equipment counts:</p>
                    <p>Phones: {pageState?.submittedData?.equipmentCounts?.phones || ''}</p>
                    <p>Powerbanks: {pageState?.submittedData?.equipmentCounts?.powerbanks || ''}</p>
                    <p>EDV Fobs: {pageState?.submittedData?.equipmentCounts?.["edv-fobs"] || ''}</p>
                    <p>Apt. Fobs: {pageState?.submittedData?.equipmentCounts?.["apartment-fobs"] || ''}</p>
                    <p>Gas Cards: {pageState?.submittedData?.equipmentCounts?.["gas-cards"] || ''}</p>
                    <p>Rental Keys: {pageState?.submittedData?.equipmentCounts?.["rental-keys"] || ''}</p>
                </div>
                <div className="extra-notes mb-4">
                    <p>Extra:</p>
                    <p className="mb-4">{pageState?.submittedData?.extraNotes?.["extra-notes"] || ''}</p>
                   
                    <p>Submitted by: {pageState?.submittedData?.extraNotes?.["submitted-by"] || ''}</p>
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
        <title>Submission Successful</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
)