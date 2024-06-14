
import { signIn } from "@/auth"
import Image from "next/image";

export default function SignIn() {
  return (

    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
         <Image
            src="/images/spotify_logo.png"
            alt="spotify logo"
            width={240*0.7}
            height={72*0.7}
        />
         <form action={async () => {
                "use server"
                await signIn("spotify")
            }}>
            <button 
                className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
                type="submit">
                Login
            </button>
        </form>
    </div>


   
  )
} 