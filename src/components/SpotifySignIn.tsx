import { signIn } from "@/auth"
import Image from "next/image";

export default function SignIn() {

  return (

    <div className="flex flex-col items-center justify-center overflow-hidden w-full h-screen">
      <Image
        src="/images/spotify_logo.png"
        alt="spotify logo"
        width={240 * 0.7}
        height={72 * 0.7}
      />
      
        <form
          action={async () => {
            "use server"
            await signIn("spotify")
          }}
        >
          <button
            type="submit"
            className="flex px-12 py-2 mt-5 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-spotifyGreen hover:bg-opacity-80"
          >
            Signin with Spotify
          </button>
        </form>
    </div>



  )
} 