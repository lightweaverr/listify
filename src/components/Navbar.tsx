import React from 'react'
import UserAvatar from './UserAvatar'
import SpotifySignOut from './SpotifySignOut'

const Navbar = () => {
  return (
    <div className='p-1 mb-2 bg-paper-700 rounded-lg flex items-center justify-between'>
        <UserAvatar />
        <SpotifySignOut />
    </div>
  )
}

export default Navbar