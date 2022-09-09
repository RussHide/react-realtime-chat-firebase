import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react"
import { db } from "../firebase"


const SearchUser = ({ setFilteredUsers }) => {

    const [username, setUsername] = useState('')
    const hanldeSearch = async () => {
        try {
            const q = query(collection(db, 'users'), where('displayName', '==', username))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setFilteredUsers(() => [doc.data()])
            });

        } catch (error) {
            console.log(error);
        }
    }

    const handleKey = (e) => {
        e.code === 'Enter' && hanldeSearch()
    }
    return (
        <div className="mb-6">
            <div className="relative w-full">
                <input onChange={e => setUsername(e.target.value)} onKeyDown={handleKey} type="text" placeholder='Search user' className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg className='h-6 w-6 opacity-30 hover:opacity-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default SearchUser