import React from "react"



import "./layout.css"

export default function SuccessPage() {
   // Access the submitted data from the URL query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const submittedData = Object.fromEntries(queryParams);

  // Extract the relevant data from the submittedData object
  const deliveryData = submittedData.delivery ? JSON.parse(submittedData.delivery) : {};
  const rescuesData = submittedData.rescues ? JSON.parse(submittedData.rescues) : {};
  // ... extract other data sections similarly

  return (
    <div>
      <h1>Success! Your data has been submitted.</h1>
      <h2>Delivery Metrics</h2>
      <ul>
        <li>Date: {deliveryData.date}</li>
        <li>Delivered: {deliveryData.delivered}</li>
        {/* ... display other delivery data */}
      </ul>
      <h2>Rescues</h2>
      <ul>
        <li>Number of Rescuers: {rescuesData.numberOfRescuers}</li>
        <li>Rescuer List: {rescuesData.rescuerList}</li>
        {/* ... display other rescues data */}
      </ul>
      {/* ... display other data sections similarly */}
    </div>
  );
};
