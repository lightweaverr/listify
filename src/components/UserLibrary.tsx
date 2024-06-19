import React from 'react'
import {
    getUserLikedAlbums,
    getUserLikedArtists,
    getUserLikedPlaylists,
    getUserLikedSongs,
  } from "@/lib/actions";
import { getAuthSession } from '@/lib/serverUtils';

const UserLibrary = async () => {
  const session = await getAuthSession();

  if (!session) {
    return null;
  }

  const [playlists, albums, artists, likedSongsCount] = await Promise.all([
    getUserLikedPlaylists(session),
    getUserLikedAlbums(session),
    getUserLikedArtists(session),
    getUserLikedSongs(session).then((data) => data.total),
  ]);

  console.log(playlists);
  return (
    <div>UserLibrary</div>
  )
}

export default UserLibrary