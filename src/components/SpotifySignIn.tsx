"use client";


import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };
  return (

    <div className="flex flex-col items-center justify-center overflow-hidden w-full h-screen">
         <Image
            src="/images/spotify_logo.png"
            alt="spotify logo"
            width={240*0.7}
            height={72*0.7}
        />
         <button
        className="flex px-12 py-2 mt-5 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-spotifyGreen hover:bg-opacity-80"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>


   
  )
} 