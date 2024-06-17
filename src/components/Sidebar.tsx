import React from 'react'
import SidebarLinks from './SidebarLinks'

const Sidebar = () => {
  return (
    <aside className='flex flex-col col-span-2 text-sm rounded-lg bg-paper-700'>
       <div className="flex flex-col items-center p-4 rounded-lg bg-red">
          <SidebarLinks />
        </div>
        User Library
    </aside>
  )
}

export default Sidebar