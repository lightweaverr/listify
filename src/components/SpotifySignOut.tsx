"use client"
import { signOut } from "next-auth/react";


export default function SignOut() {
  const logout = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  
  return (
    <div className="m-2 py-1 px-3 rounded-full bg-zinc-700 hover:bg-opacity-50">
        <button onClick={logout} > Sign Out </button>
    </div>
    
  )
} 


