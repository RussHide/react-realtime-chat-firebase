const ChatPerson = ({ displayName, uid, handleSelectNewChat, lastMessage }) => {
console.log(displayName)
    return (
        <div onClick={() => { handleSelectNewChat(uid, displayName) }} className="cursor-pointer flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div className="flex items-center justify-center h-10 w-10 bg-indigo-200 rounded-full">
                H
            </div>
            <div className="flex flex-col ">
                <div className="ml-2 text font-semibold">{displayName}</div>
                <div className="ml-2 text-sm font-semibold">{lastMessage}</div>
            </div>
        </div>
    )
}

export default ChatPerson