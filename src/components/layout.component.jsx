import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


import "./layout.css"

export default function Layout({children}) {


    return (
        <div className="bg-zinc-900 text-zinc-300 layout-component">
            <div className="container w-1/2">
                <header className="py-10">
                <div className="flex items-center gap-4">
                        <StaticImage
                            src="../images/myriadfleet logo_transparent.png" // Update with your image path
                            alt="Logo"
                            placeholder="blurred"
                            width={50} // Adjust size as needed
                            height={50} // Adjust size as needed
                            className="rounded-full" // Optional: if you want rounded corners
                        />
                        <h1 className='text-3xl'>Closing Notes</h1>
                    </div>
                </header>
                <body className="bg-zinc-900">{children}</body>
                <footer className="py-10 text-center text-sm">© {new Date().getFullYear()} Built by
                    {` `} LittleBit Creative Dev.
                </footer>
            </div>
        </div>
    )
}

