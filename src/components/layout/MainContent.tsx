'use client';

import React from 'react';
import { Plus, Heart } from 'lucide-react';

interface MainContentProps {
  onCreatePlaylist: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onCreatePlaylist }) => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Your Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <button
          onClick={onCreatePlaylist}
          className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform aspect-square"
        >
          <Plus className="w-16 h-16 text-white" />
          <span className="text-white font-bold text-xl">Create New Playlist</span>
        </button>
        
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg p-8 flex flex-col items-center justify-center gap-4 aspect-square">
          <Heart className="w-16 h-16 text-white" />
          <span className="text-white font-bold text-xl">Liked Songs</span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;