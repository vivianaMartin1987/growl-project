import React, { useEffect } from "react";

const GrowlActions = () => {
    const [growlActive, setGrowlActive] = React.useState(false)

    useEffect(() => {
        setTimeout(() => {
            setGrowlActive(false)
        }, 3000);
    }, [growlActive])

    return [
        // the first arg is the state
        growlActive,

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}
export default GrowlActions