'use client';

import React from 'react';
import { Music, Home, Search, Library, Plus } from 'lucide-react';
import { Playlist } from '@/lib/types/spotify';

interface SidebarProps {
  playlists: Playlist[];
  onCreatePlaylist: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, onCreatePlaylist }) => {
  return (
    <div className="w-64 bg-black h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Music className="w-8 h-8 text-green-500" />
          <span className="text-white font-bold text-xl">Spotify</span>
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
            <Home className="w-6 h-6" />
            <span className="font-semibold">Home</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
            <span className="font-semibold">Search</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-white transition-colors">
            <Library className="w-6 h-6" />
            <span className="font-semibold">Your Library</span>
          </a>
        </nav>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-gray-400 text-sm font-semibold uppercase">Playlists</h2>
          <button
            onClick={onCreatePlaylist}
            className="text-gray-400 hover:text-white transition-colors"
            title="Create playlist"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-2">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              href="#"
              className="block text-gray-400 hover:text-white transition-colors text-sm py-1 truncate"
            >
              {playlist.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;