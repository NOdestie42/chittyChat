import Image from 'next/image'
import React from 'react'

const Users = () => {
    return (
        <div className="py-8 px-2">
            <div className="flex items-center space-x-3">
                <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="rounded-full object-cover object-top w-12 max-h-10"
                />
                <div className='w-full'>
                    <div className="flex items-center justify-between w-full">
                        <div className="font-semibold text-gray-900">John Doe</div>
                        <div className="text-xs">2 min ago</div>
                    </div>
                    <div className="text-sm text-gray-500">Online</div>
                </div>
            </div>
        </div>
    )
}

export default Users
