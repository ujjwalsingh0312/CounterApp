import React from 'react'

import "./Button.css";
const Button = ({text, classname,fn}) => {
    const clicked = () =>{fn(text);}
    return (
        <button  onClick={clicked} className={classname}>{text}</button>
    )
}

export default Button