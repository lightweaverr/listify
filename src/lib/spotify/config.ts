export const SPOTIFY_CONFIG = {
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '',
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || '',
    scopes: [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify'
    ].join(' ')
  };