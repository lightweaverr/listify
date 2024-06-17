
import { signOut } from "@/auth"
 
export default function SignIn() {
  return (
    <div className="m-2 py-1 px-3 rounded-full bg-zinc-700 hover:bg-opacity-50">
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
            >
            <button type="submit">Sign Out</button>
        </form>
    </div>
    
  )
} 


