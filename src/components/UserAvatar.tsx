import Image from "next/image";
import { auth } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth();

  if (!session) return null;
 
  if (!session.user) return null
 
  return (
    <div className="flex items-center">
        <Image 
            className="m-1 rounded-full"
            src={session.user.image ? session.user.image : '/images/profile.png'}
            alt="User Profile Image"
            width={40}
            height={40}
        />
        <div className="mx-2">
            {session.user.name ? session.user.name : ''}    
        </div>
    </div>
  )
}