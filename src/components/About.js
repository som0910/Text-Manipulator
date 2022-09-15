import { useState } from "react"
import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    let myStyle = {
        color : props.mode === 'dark'? 'white' : 'black',
        backgroundColor : props.mode === 'dark'? 'black' : 'white'
    }
    // const [btnText, setBtnText] = useState("Disable Dark Mode")

    // function handleClick() {
    //     if (myStyle.backgroundColor == 'white') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Disable Dark Mode")
    //     }

    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    return (
        <div className="container my-4" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. You can analyze word count and character count, convert your text to uppercase and lowercase, copy your text to clipboard, preview your text, etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            {/* <button type="button" className="btn btn-dark my-3" onClick={handleClick}>{btnText}</button> */}
        </div>
    )
}
