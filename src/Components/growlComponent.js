import React from 'react'
import '../Style/growl.css'

const GrowlComponent = ({ active, message, onDismissed }) => {

    return (
        <div className={`growl${active ? " active" : ""}`}>
            {message}
            <div onClick={onDismissed} className="growl-close" />
        </div>
    )
}

export default GrowlComponent