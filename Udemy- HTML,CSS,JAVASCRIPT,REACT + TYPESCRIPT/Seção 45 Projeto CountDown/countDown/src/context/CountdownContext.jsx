import React, {useState} from 'react'

const CountdownContext = React.createContext(null)

const CountdownProvider = ({children})=>{
    const [event,setEvent] = useState(null)

    return <CountdownContext value={{event,setEvent}}>
        {children}
    </CountdownContext>
}

export {CountdownContext, CountdownProvider}