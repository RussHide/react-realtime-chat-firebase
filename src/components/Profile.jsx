import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Profile = () => {
  const { currentUser } = useContext(AuthContext)

    return (
        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                    src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                    alt="Avatar"
                    className="h-full w-full"
                />
            </div>
            <div className="text-sm font-semibold mt-2">{currentUser.displayName}</div>
            <div className="flex flex-row items-center mt-3">
                <button onClick={() => signOut(auth)} className="leading-none  text-white bg-indigo-400 hover:bg-indigo-400 p-2 rounded-lg">Log Out</button>
            </div>
        </div>
    )
}

export default Profile