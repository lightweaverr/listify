import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import Spotify from "next-auth/providers/spotify";

const scope =
  "user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // providers: [
  //   SpotifyProvider({
  //     clientId: process.env.SPOTIFY_CLIENT_ID as string,
  //     clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
  //     authorization: {
  //       params: { scope },
  //     },
  //   }),
  // ],
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: `https://accounts.spotify.com/authorize?scope=${scope}`
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.scope = account.scope;

      }
      return token;
    },
    async session({ session, token }: { session: any, token: JWT }) {

      session.user.id = token.sub!;
      session.expiresAt = token.exp;
      session.accessToken = token.accessToken;
      session.refresh_token = token.refreshToken;
      session.scope = token.scope;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});



