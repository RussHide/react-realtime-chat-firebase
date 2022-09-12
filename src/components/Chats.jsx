import ChatPerson from './ChatPerson'

import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
const Chats = ({ children, handleSelectNewChat }) => {

    const [chats, setChats] = useState([])
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return () => unsub()
            }
        currentUser.uid && getChats()
    }, [currentUser.uid])
    console.log(chats);
    return (
        <div >
            <span className="font-bold">Conversations</span>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-72 overflow-y-auto">
                {children}
                {
                   Object.entries(chats)?.map((chat) => (
                        <ChatPerson key={chat[0]}
                        displayName={chat[1].userInfo.displayName}
                        lastMessage={chat[1].userInfo.lastMessage?.text}
                        handleSelectNewChat={handleSelectNewChat}
                         />
                    ))
                }
               {/*  {children}
                {
                    [
                        {
                            email: "graadev@gmail.com",
                            displayName: "prueba Hide",
                            uid: "NziCBh4zg7PPpoJbq23fHmRC7Jz2"
                        }
                    ].map((person, index) => (
                        <ChatPerson key={index} displayName={person.displayName} uid={person.uid} handleSelectNewChat={handleSelectNewChat} />
                    ))
                } */}
            </div>
        </div>
    )
}

export default Chats