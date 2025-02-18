import React from 'react'

const DashBoardLayout = ({children}) => {
  return (
    <div>
        <nav>Links das dashboard</nav>
        <div>{children}</div>
    </div>
  )
}

export default DashBoardLayout