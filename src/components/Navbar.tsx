import React from 'react'
import UserAvatar from './UserAvatar'
import SpotifySignOut from './SpotifySignOut'
import ListifyIcon from './ListifyIcon'
import { getAuthSession } from '@/lib/serverUtils';

const Navbar = async () => {

  const session = await getAuthSession();

  if (!session) return null;

  return (
    <div className='p-1 mb-2 bg-paper-700 rounded-lg flex items-center justify-between'>
        <div className='ml-1'>
          <ListifyIcon  width={"40"} height={"40"} />
        </div>
        <UserAvatar />
        <SpotifySignOut />
    </div>
  )
}

export default Navbar