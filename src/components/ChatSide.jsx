import React from 'react'
import FriendMessage from './FriendMessage'
import MessageInput from './MessageInput'
import ProfileNav from './ProfileNav'
import YourMessage from './YourMessage'

const ChatSide = () => {
    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <ProfileNav/>
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">
                            <FriendMessage />
                            <YourMessage />
                        </div>
                    </div>
                </div>
                <MessageInput />
            </div>
        </div>
    )
}

export default ChatSide