import React from 'react'

const Message = ({msgh2, msgh5, className, value=""}) => {
        const myclass = `${className} text-center`;
    return (<div>
        <h2 className={myclass}>{msgh2}</h2>
        <h5 className={myclass}>{msgh5}{value}</h5>
        </div>
    )
}

export default Message