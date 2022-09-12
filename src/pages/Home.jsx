import { doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import ChatPerson from '../components/ChatPerson'
import Chats from '../components/Chats'
import ChatSide from '../components/ChatSide'
import MessageInput from '../components/MessageInput'
import Profile from '../components/Profile'
import SearchUser from '../components/SearchUser'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

const Home = () => {
  const [filteredUsers, setFilteredUsers] = useState([])
  const { currentUser } = useContext(AuthContext)
  /*  useEffect(() => {
     console.log(filteredUsers);
     console.log(filteredUsers.length);
   }, [filteredUsers]) */

  const handleSelectNewChat = async (uid, displayName) => {
    console.log('actual'+currentUser.uid)
    console.log('el que pase'+uid)
    const combinedId = currentUser.uid > uid ?
      currentUser.uid + uid : uid + currentUser.uid
      console.log(combinedId);
    try {
      const res = await getDoc(doc(db, 'chats', combinedId))

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        await updateDoc(doc(db, 'usersChat', currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: uid,
            displayName: displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usersChat", uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(filteredUsers);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          {/* Title */}
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div
              className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">HideChat</div>
          </div>
          <Profile />
          <div className="flex flex-col mt-8 overflow-y-auto overflow-x-hidden">
            {/* Search User */}
            <SearchUser setFilteredUsers={setFilteredUsers} />
            {/* Conversations */}

            <div>
              <Chats handleSelectNewChat={handleSelectNewChat}>
             {/*  {
                  filteredUsers.length !== undefined ? filteredUsers.map((person, index) => (
                    <div>
                      <ChatPerson key={index} person={person} handleSelectNewChat={handleSelectNewChat} />
                      <hr />
                    </div>
                  )) : <div>
                    <p>No result</p>
                    <hr />
                  </div>
                } */}
              </Chats>
            </div>

           {/*  <div className=''>
              <div className="flex flex-row items-center justify-between text-xs mt-6">
              </div>
              <span className="font-bold">Archivied</span>
              <div className="flex flex-col space-y-1 mt-4 -mx-2">
                <ChatPerson />
              </div>
            </div> */}
          </div>
        </div>
        <ChatSide />
      </div>
    </div>
  )
}

export default Home