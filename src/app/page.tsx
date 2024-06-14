import UserAvatar from "@/components/UserAvatar";
import { auth } from "../auth"
import SpotifySignIn from "@/components/SpotifySignIn";
import SpotifySignOut from "@/components/SpotifySignOut";


export default async function Home() {
  const session = await auth();


  if (!session) return (<SpotifySignIn />)
    
  return (
    <div>
      <UserAvatar />
      <SpotifySignOut />
    </div>
  )
}
