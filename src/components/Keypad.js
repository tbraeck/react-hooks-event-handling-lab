
import React from "react"


function Keypad() {

    function enterPass() {
        console.log("Entering password...")
    }

    return (
        <>
            <input type="password" onChange={enterPass} />
        </>
    )
}

export default Keypad










// function Keypad() {
//     function enterPass(event) {
//         console.log("Entering password...")
//     }

//     return (
//         <div>
//             <input onChange={enterPass} type="password" />
//         </div>
//     )
// }

