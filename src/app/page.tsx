
import SpotifySignIn from "@/components/SpotifySignIn";
import Navbar from "@/components/Navbar";
import { getAuthSession } from "@/lib/serverUtils";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getAuthSession();  


  if (!session) redirect('/login');

  return (
    <div className="">
      Home Page
    </div>
  )
}
