import React from 'react'

const ProfileNav = () => {
    return (

        <nav class="bg-gray-100 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-3 px-6  shadow sm:items-baseline w-full">
            <div class="mb-2 sm:mb-0">
                <div className='flex justify-center items-center'>
                    <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                    <h3 className="ml-4 font-bold text-2xl">Jhon Doe</h3>


                </div>
            </div>
           {/*  <div>
                <a href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
                <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
                <a href="/three" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
            </div> */}
        </nav>
    )
}

export default ProfileNav