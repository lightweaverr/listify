import { auth } from "../auth"
import SpotifySignIn from "@/components/SpotifySignIn";
import Navbar from "@/components/Navbar";


export default async function Home() {
  const session = await auth();


  if (!session) return (<SpotifySignIn />)

  return (
    <div className="">
      Home Page
    </div>
  )
}
