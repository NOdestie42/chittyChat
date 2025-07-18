import Image from 'next/image'
import React from 'react'
import { MessageCircle, Phone, Video } from 'lucide-react'

const Users = () => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            status: 'online',
            lastMessage: 'Hey there! How are you?',
            lastSeen: '2 min ago',
            unreadCount: 3
        },
        {
            id: 2,
            name: 'Sarah Wilson',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            status: 'online',
            lastMessage: 'Can we schedule a meeting?',
            lastSeen: '5 min ago',
            unreadCount: 1
        },
        {
            id: 3,
            name: 'Mike Johnson',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            status: 'away',
            lastMessage: 'Thanks for the help!',
            lastSeen: '1 hour ago',
            unreadCount: 0
        },
        {
            id: 4,
            name: 'Emma Davis',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            status: 'offline',
            lastMessage: 'See you tomorrow!',
            lastSeen: '2 hours ago',
            unreadCount: 0
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'bg-green-500';
            case 'away': return 'bg-yellow-500';
            case 'offline': return 'bg-gray-400';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="py-4">
            <div className="px-4 mb-4">
                <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-wider">
                    Conversations
                </h3>
            </div>

            <div className="space-y-2">
                {users.map((user, index) => (
                    <div
                        key={user.id}
                        className="group flex items-center space-x-3 px-4 py-3 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-xl mx-2 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="relative">
                            <Image
                                src={user.avatar}
                                alt={`${user.name} avatar`}
                                width={48}
                                height={48}
                                className="rounded-full object-cover w-12 h-12 ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-300"
                            />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                            {user.unreadCount > 0 && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                                    {user.unreadCount}
                                </div>
                            )}
                        </div>

                        <div className='flex-1 min-w-0'>
                            <div className="flex items-center justify-between">
                                <div className="font-semibold text-base-content truncate">{user.name}</div>
                                <div className="text-xs text-base-content/60 flex-shrink-0">{user.lastSeen}</div>
                            </div>
                            <div className="text-sm text-base-content/70 truncate">{user.lastMessage}</div>
                            <div className="text-xs text-base-content/50 capitalize">{user.status}</div>
                        </div>

                        {/* Quick action buttons */}
                        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300">
                                <MessageCircle size={14} />
                            </button>
                            <button className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300">
                                <Phone size={14} />
                            </button>
                            <button className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300">
                                <Video size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add contact button */}
            <div className="px-4 mt-6">
                <button className="w-full glass rounded-xl py-3 px-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <span className="text-sm font-medium">+ Add New Contact</span>
                </button>
            </div>
        </div>
    )
}

export default Users
