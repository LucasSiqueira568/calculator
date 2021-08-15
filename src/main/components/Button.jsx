import React from "react"
import "./Button.css"

export default function Button(props) {
    return (
        <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.doble ? 'doble' : ''}
        ${props.triple ? 'triple' : ''}

        
    `}
            onClick={e => props.click && props.click(e.target.innerHTML)}>

            {props.label}



        </button>

    )

}