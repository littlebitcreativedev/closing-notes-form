import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { isBrowser, storage, isStorageAvailable } from "../utils/browserStorage"
import Layout from "../components/layout.component"

const SuccessPage = () => {
    // default state structure
    const defaultState ={
        isLoading: false,
        submittedData: {
            deliveryMetrics: {
                date: '',
                delivered: '',
                routes: '',
                returned: ''
            },
            rescueMetrics: {
                'rescuer-count': '',
                'rescuer-list': '',
                'support-list': '',
                'flex-list': '',
                'split-list': ''
            },
            equipmentCounts: {
                phones: '',
                powerbanks: '',
                'edv-fobs': '',
                'apartment-fobs': '',
                'gas-cards': '',
                'rental-keys': ''
            },
            extraNotes: {
                'extra-notes': '',
                'submitted-by': ''
            }
        }
    }
    const [pageState, setPageState] = useState(defaultState)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {

        setIsClient(true)


        // Wrap in setTimeout to ensure it runs after initial render
        if (isBrowser && isStorageAvailable('localStorage')) {

            try {
                const data = storage.local.getItem('submittedFormData')
                if (data)   {
                    const parsedData = JSON.parse(data)
                    setPageState({
                        isLoading: false,
                        submittedData: parsedData
                    })
                    // clean up storage after retrieving data
                    storage.local.removeItem('submittedData')
                }
            } catch (error) {
                console.error('Error retrieving stored data:', error)
                setPageState({
                    ...defaultState,
                    error: 'Failed to load submission data'
                })
            }   
        }
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

    // Add loading state component
    const LoadingState = () => (
        <Layout>
            <div className="text-center py-10">
                <div className="animate-pulse">
                    <p>Loading...</p>
                </div>
            </div>
        </Layout>
    )

   // Add error state component
   const ErrorState = () => (
        <Layout>
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold mb-4">No submission data found</h1>
                <Link to="/" className="text-lime-500 hover:text-lime-600">
                    Return to form
                </Link>
            </div>
        </Layout>
    )

    // Handle build time rendering
    if (typeof window === 'undefined') {
        return <LoadingState />
    }

    // Handle client-side initialization
    if (!isClient) {
        return <LoadingState />
    }

    // Handle no data state
    if (!pageState.submittedData && isClient) {
        return <ErrorState />
    }

    // Safe access function to prevent undefined errors
    const safeGet = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj) ?? ''
    }

    // renders success
    return (
        <Layout>
            <div className="success-container py-10">
                <p className="font-bold mb-4">Submission Successful!</p>
                
                <div className="deliver-metrics mb-4">
                    <p>{safeGet(pageState, 'submittedData.deliveryMetrics.date')} - CLOSING NOTES</p>
                    <br />
                    <p>Delivered: {safeGet(pageState, 'submittedData.deliveryMetrics.delivered')}</p>
                    <p>Routes: {safeGet(pageState, 'submittedData.deliveryMetrics.routes')}</p>
                    <p>Returned: {safeGet(pageState, 'submittedData.deliveryMetrics.returned')}</p>
                </div>

                <div className="rescue-metrics mb-4">
                    <p>Number of rescuers: {safeGet(pageState, 'submittedData.rescueMetrics.rescuer-count')}</p>
                    <p>List rescuers:</p>
                    <div className="mb-4">
                        {renderListItems(safeGet(pageState, 'submittedData.rescueMetrics.rescuer-list'))}
                    </div>
                    
                    <p>Rescues for OT support:</p>
                    <div className="mb-4">
                        {renderListItems(safeGet(pageState, 'submittedData.rescueMetrics.support-list'))}
                    </div>
                   
                    <p>Flex + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(safeGet(pageState, 'submittedData.rescueMetrics.flex-list'))}
                    </div>
                    
                    <p>Split + rescue:</p>
                    <div className="mb-4">
                        {renderListItems(safeGet(pageState, 'submittedData.rescueMetrics.split-list'))}
                    </div>
                </div>

                {/* ... Rest of the components using safeGet ... */}

                <div className="equipment-counts mb-4">
                    <p>Equipment counts:</p>
                    <p>Phones: {safeGet(pageState, 'submittedData.equipmentCounts.phones')}</p>
                    <p>Powerbanks: {safeGet(pageState, 'submittedData.equipmentCounts.powerbanks')}</p>
                    <p>EDV Fobs: {safeGet(pageState, 'submittedData.equipmentCounts.edv-fobs')}</p>
                    <p>Apt. Fobs: {safeGet(pageState, 'submittedData.equipmentCounts.apartment-fobs')}</p>
                    <p>Gas Cards: {safeGet(pageState, 'submittedData.equipmentCounts.gas-cards')}</p>
                    <p>Rental Keys: {safeGet(pageState, 'submittedData.equipmentCounts.rental-keys')}</p>
                </div>

                <div className="extra-notes mb-4">
                    <p>Extra:</p>
                    <p className="mb-4">{safeGet(pageState, 'submittedData.extraNotes.extra-notes')}</p>
                    <p>Submitted by: {safeGet(pageState, 'submittedData.extraNotes.submitted-by')}</p>
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