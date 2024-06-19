import React from 'react'
import SidebarLinks from './SidebarLinks'
import UserLibrary from './UserLibrary'
import { getAuthSession } from '@/lib/serverUtils';

const Sidebar = async () => {
  const session = await getAuthSession();

  if (!session) return null

  return (
    <aside className='flex flex-col col-span-2 text-sm rounded-lg bg-paper-700'>
        <div className="flex flex-col items-center p-4 rounded-lg bg-red">
          <SidebarLinks />
        </div>
        <UserLibrary />
    </aside>
  )
}

export default Sidebar