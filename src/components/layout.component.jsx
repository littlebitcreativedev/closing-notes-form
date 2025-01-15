import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'


import "./layout.css"


export default function Layout({children}) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Move the touch check inside useEffect
        if (typeof document !== 'undefined' && 'ontouchstart' in document.documentElement) {
            document.body.style.cursor = 'pointer'
        }
    }, [])


    if (!isMounted) {
        return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
            {children}
            </div>
        </div>
        )
    }

    return (
        <div className="bg-zinc-900 text-zinc-300 layout-component min-h-screen">
            <div className="container mx-auto px-4 w-full md:w-1/2">
                <Helmet>
                    <html lang="en" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Your Site Title</title>
                </Helmet>
                <header className="py-5 md:py-10">
                <div className="flex items-center gap-2 md:gap-4">
                        <StaticImage
                            src="../images/myriadfleet logo_transparent.png" // Update with your image path
                            alt="Logo"
                            placeholder="blurred"
                            width={40} // Adjust size as needed
                            height={40} // Adjust size as needed
                            className="rounded-full md:w-[50px] md:h-[50px]" // Optional: if you want rounded corners
                        />
                        <h1 className='text-3xl'>Closing Notes</h1>
                        {isMounted}
                    </div>
                </header>
                <main className="px-2 md:px-0">
                    {children}
                </main>
                <footer className="py-5 md:py-10 text-center text-xs md:text-sm">© {new Date().getFullYear()} Built by
                    {` `} LittleBit Creative Dev.
                </footer>
            </div>
        </div>
    )
}

