'use client';

import React from 'react';
import { Music } from 'lucide-react';
import { initiateSpotifyLogin } from '@/lib/spotify/auth';
import { SPOTIFY_CONFIG } from '@/lib/spotify/config';

const LoginPage: React.FC = () => {
  const handleSpotifyLogin = async () => {
    await initiateSpotifyLogin(
      SPOTIFY_CONFIG.clientId,
      SPOTIFY_CONFIG.redirectUri,
      SPOTIFY_CONFIG.scopes
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <Music className="w-12 h-12 text-black" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Spotify Playlist Maker
        </h1>
        
        <p className="text-gray-400 mb-8 text-lg">
          Create and manage your Spotify playlists with ease
        </p>
        
        <button
          onClick={handleSpotifyLogin}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
        >
          <Music className="w-6 h-6" />
          Login with Spotify
        </button>
        
        <p className="text-gray-500 text-sm mt-6">
          We'll need access to view and manage your playlists
        </p>
      </div>
    </div>
  );
};

export default LoginPage;