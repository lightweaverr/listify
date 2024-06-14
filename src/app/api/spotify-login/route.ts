import { NextResponse } from "next/server";
import querystring from 'querystring';

export async function GET(req: Request) {
    let redirect_uri = 'http://localhost:3000';

    var state = 'wieufrahdnaiwrfs';
    var scope = 'user-read-private user-read-email';
  
    
    const redirectUrl = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    })
    console.log('redirecting')
    return NextResponse.redirect(redirectUrl);
}