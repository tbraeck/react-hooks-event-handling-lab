import React from "react"
function EyesOnMe() {

    const onFocus = () => {
        console.log("Good!")
    }

    const onBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    return (
        <div>
            <button onFocus={onFocus} onBlur={onBlur}>Eyes on me</button>
        </div>
    )
}



export default EyesOnMe