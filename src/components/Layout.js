import React from "react"

import Form from './Form'

import "./layout.css"

export default function Layout({children}) {
    return (
        <div className="">
            <div className="">
                <Form  />
                {/*form content will go here */}
            </div>
            <footer>
                <p>@ 2024 Littlebit Creative Dev</p>
            </footer>
        </div>
    )
}