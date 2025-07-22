'use client'
import React from 'react'
import { Paintbrush, PanelRight, MessageCircle, Sparkles } from 'lucide-react'
import { useTheme } from '@/utils/ThemeProvider'
import { THEME_CONFIGS } from '@/constants'
import { getThemeGradient } from '@/lib/utils'
import MainContent from '../MainContent'
import Users from '../Users'
import SendMessage from '../SendMessage'
import Avatar from '@/components/ui/avatar'

const HomeComp = () => {
  const { setTheme } = useTheme()

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
                            {THEME_CONFIGS.map((themeConfig, index) =>
                                <li key={index} className='mb-1'>
                                    <a
                                        onClick={() => setTheme(themeConfig.name)}
                                        className="rounded-xl hover:bg-white/20 transition-all duration-300 font-medium"
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${themeConfig.gradient}`}></div>
                                        {themeConfig.displayName}
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
                            <Avatar
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="User avatar"
                                size="md"
                                status="online"
                                showStatus
                                className="ring-2 ring-primary/50 transition-all duration-300 hover:ring-primary"
                            />
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
