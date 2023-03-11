import React from 'react'

export default function Alert(prop) {
    const mystyle = {
        position: "absolute",
        width: "100%",
        zIndex: "1"

    }
    return (
        prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert" style={mystyle}>
            <strong>{prop.alert.type}</strong> {prop.alert.message}
        </div>
    )
}
