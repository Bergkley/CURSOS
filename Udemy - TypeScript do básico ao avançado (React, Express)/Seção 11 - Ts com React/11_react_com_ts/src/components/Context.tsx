import React, { useContext }	 from 'react'

import { AppContext } from '../App'


const Context = () => {
    const details = useContext(AppContext);
  return (
    <div>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h2>Framework:{details.framework}</h2>
                <h2>QTD:{details.projects}</h2>
            </div>
        )}
    </div>
  )
}

export default Context