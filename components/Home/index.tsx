'use client'
import React from 'react'
import { Paintbrush, PanelRight, MessageCircle, Sparkles } from 'lucide-react'
import { useTheme } from '@/utils/ThemeProvider'
import MainContent from '../MainContent'
import Users from '../Users'
import SendMessage from '../SendMessage'
import Image from 'next/image'


const getThemeGradient = (theme: string) => {
    const gradients: { [key: string]: string } = {
        dark: 'from-gray-800 to-gray-900',
        lofi: 'from-amber-200 to-orange-300',
        synthwave: 'from-pink-500 to-purple-600',
        aqua: 'from-cyan-400 to-blue-500',
        garden: 'from-green-400 to-emerald-500',
        night: 'from-indigo-600 to-purple-700',
        luxury: 'from-yellow-400 to-amber-500'
    };
    return gradients[theme] || 'from-blue-400 to-purple-500';
};

const HomeComp = () => {
    const { setTheme } = useTheme();

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className="navbar glass shadow-lg justify-between backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 animate-fade-in-up">
                            <MessageCircle className="w-8 h-8 text-primary animate-pulse-glow" />
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                ChitChatty
                            </span>
                            <Sparkles className="w-5 h-5 text-yellow-500 animate-float" />
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden hover:bg-white/20 transition-all duration-300">
                            <PanelRight className="w-5 h-5" />
                        </label>
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-white/20 transition-all duration-300 m-1">
                            <Paintbrush className="w-5 h-5" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu glass rounded-2xl z-50 w-56 p-3 shadow-2xl border border-white/20 animate-fade-in-up">
                            <li className="menu-title text-xs font-semibold opacity-70 mb-2">Choose Theme</li>
                            {['dark', 'lofi', 'synthwave', 'aqua', 'garden', 'night', 'luxury'].map((value, index) =>
                                <li key={index} className='mb-1'>
                                    <a
                                        onClick={() => setTheme(value)}
                                        className="rounded-xl hover:bg-white/20 transition-all duration-300 capitalize font-medium"
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getThemeGradient(value)}`}></div>
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <MainContent />
                <div className="px-4 w-full pb-4">
                    <SendMessage />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay backdrop-blur-sm"></label>
                <div className="glass-dark min-h-full w-80 border-r border-white/10">
                    <div className="flex items-center justify-between min-h-16 glass shadow-lg px-4 border-b border-white/10">
                        <div className="flex items-center gap-3 animate-fade-in-up">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="User avatar"
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover ring-2 ring-primary/50 transition-all duration-300 hover:ring-primary"
                                />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-glow"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-base-content">UserName</div>
                                <div className="text-xs text-green-500 font-medium flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    Online
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <Users />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
