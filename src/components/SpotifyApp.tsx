'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginPage from './auth/LoginPage';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import MainContent from './layout/MainContent';
import { SpotifyUser, Playlist } from '@/lib/types/spotify';
import { exchangeCodeForToken } from '@/lib/spotify/auth';
import { fetchUserProfile, fetchUserPlaylists } from '@/lib/spotify/api';
import { SPOTIFY_CONFIG } from '@/lib/spotify/config';

const SpotifyApp: React.FC = () => {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<SpotifyUser | null>(null);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const code = searchParams.get('code');

      if (code) {
        console.log('Processing auth code...');
        const token = await exchangeCodeForToken(
          code,
          SPOTIFY_CONFIG.clientId,
          SPOTIFY_CONFIG.redirectUri
        );
        
        if (token) {
          console.log('Token received, storing...');
          setAccessToken(token);
          sessionStorage.setItem('spotify_access_token', token);
          setIsAuthenticated(true);
          
          // Clean URL
          window.history.replaceState({}, document.title, '/');
          
          await loadUserData(token);
        } else {
          console.error('Failed to get token');
        }
      } else {
        // Check for existing token
        const token = sessionStorage.getItem('spotify_access_token');
        if (token) {
          console.log('Found existing token');
          setAccessToken(token);
          setIsAuthenticated(true);
          await loadUserData(token);
        }
      }
      
      setIsLoading(false);
    };

    initAuth();
  }, [searchParams]);

  const loadUserData = async (token: string) => {
    try {
      const [userData, playlistData] = await Promise.all([
        fetchUserProfile(token),
        fetchUserPlaylists(token)
      ]);
      
      console.log('User data loaded:', userData);
      if (userData) setUser(userData);
      setPlaylists(playlistData);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleCreatePlaylist = () => {
    alert('Create playlist modal - Coming soon!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Sidebar playlists={playlists} onCreatePlaylist={handleCreatePlaylist} />
      <div className="ml-64">
        <Header user={user} />
        <MainContent onCreatePlaylist={handleCreatePlaylist} />
      </div>
    </div>
  );
};

export default SpotifyApp;