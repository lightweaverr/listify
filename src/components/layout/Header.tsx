'use client';

import React from 'react';
import { SpotifyUser } from '@/lib/types/spotify';

interface HeaderProps {
  user: SpotifyUser | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-gradient-to-b from-gray-900 to-black p-6 flex justify-between items-center">
      <div className="flex gap-4">
        <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
          ←
        </button>
        <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
          →
        </button>
      </div>
      
      {user && (
        <div className="flex items-center gap-3">
          {user.images?.[0] ? (
            <img
              src={user.images[0].url}
              alt={user.display_name}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
          )}
          <span className="text-white font-semibold">{user.display_name}</span>
        </div>
      )}
    </header>
  );
};

export default Header;