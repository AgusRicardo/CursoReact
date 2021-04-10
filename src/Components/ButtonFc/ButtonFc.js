import React from 'react'

// Componente funcional 
const ButtonFc = ({text, color, padding}) => {
    return(
        <React.Fragment>
            <button style={{backgroundColor: color, padding: padding}}>Button Fc</button>
        </React.Fragment>
    )
}

export default ButtonFc