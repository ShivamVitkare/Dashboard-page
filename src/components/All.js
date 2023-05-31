import React from 'react'
import Sidebar from './Sidebar'
import Dashbord from './Dashbord'

function All() {
  return (
    <div>
        <div className="flex">
        <div className="basis-[20%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[80%] border">
          <Dashbord />
        </div>
      </div>
    </div>
  )
}

export default All