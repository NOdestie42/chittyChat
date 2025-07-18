'use client'
import React from 'react'
import { Paintbrush, PanelRight } from 'lucide-react'
import { useTheme } from '@/utils/ThemeProvider'
import MainContent from '../MainContent'
import Users from '../Users'
import SendMessage from '../SendMessage'
import Image from 'next/image'


const HomeComp = () => {
    const { setTheme } = useTheme();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className="navbar shadow-sm justify-between">
                    <a className="btn btn-ghost text-xl">ChitChatty ;)</a>
                    <div className="dropdown dropdown-end">
                        <label htmlFor="my-drawer-2" className="btn lg:hidden">
                            <PanelRight />
                        </label>
                        <div tabIndex={0} role="button" className="btn m-1">
                            <Paintbrush />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {['dark', 'lofi', 'synthwave', 'aqua', 'garden', 'night', 'luxury'].map((value, index) =>
                                <li key={index} className='py-1  px-2 cursor-pointer' onClick={() => setTheme(value)}>
                                    <a>
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <MainContent />
                <div className="px-2 w-full">
                    <SendMessage />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-0">
                    <div className="flex items-center justify-between min-h-16 bg-base-300 shadow-sm px-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="User avatar"
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <div className="font-semibold">UserName</div>
                                <div className="text-xs">Online</div>
                            </div>
                        </div>
                    </div>
                    <Users />
                </ul>
            </div>
        </div>
    )
}

export default HomeComp
