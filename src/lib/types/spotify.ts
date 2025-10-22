export interface SpotifyUser {
    id: string;
    display_name: string;
    email: string;
    images: { url: string }[];
  }
  
  export interface Playlist {
    id: string;
    name: string;
    images: { url: string }[];
    tracks: { total: number };
    owner: { display_name: string };
    description?: string;
  }
  
  export interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
  }