import { SpotifyUser, Playlist } from '../types/spotify';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

export const fetchUserProfile = async (token: string): Promise<SpotifyUser | null> => {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const fetchUserPlaylists = async (token: string): Promise<Playlist[]> => {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE}/me/playlists?limit=50`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
};

export const createPlaylist = async (
  token: string,
  userId: string,
  name: string,
  description: string = '',
  isPublic: boolean = true
): Promise<Playlist | null> => {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE}/users/${userId}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        public: isPublic,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating playlist:', error);
    return null;
  }
};