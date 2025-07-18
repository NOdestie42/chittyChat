import React from 'react'
import { Check, CheckCheck, Clock } from 'lucide-react'

const ChatComp = () => {
    const messages = [
        {
            id: 1,
            sender: 'Obi-Wan Kenobi',
            message: 'You were the Chosen One! 🌟',
            time: '12:45',
            avatar: 'https://img.daisyui.com/images/profile/demo/kenobee@192.webp',
            isOwn: false,
            status: 'delivered'
        },
        {
            id: 2,
            sender: 'Anakin',
            message: 'I hate you! 😠',
            time: '12:46',
            avatar: 'https://img.daisyui.com/images/profile/demo/anakeen@192.webp',
            isOwn: true,
            status: 'seen'
        },
        {
            id: 3,
            sender: 'Obi-Wan Kenobi',
            message: 'You were my brother, Anakin! I loved you! 💔',
            time: '12:47',
            avatar: 'https://img.daisyui.com/images/profile/demo/kenobee@192.webp',
            isOwn: false,
            status: 'delivered'
        },
        {
            id: 4,
            sender: 'You',
            message: 'This is getting intense... 😅',
            time: '12:48',
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            isOwn: true,
            status: 'sending'
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'sending':
                return <Clock className="w-3 h-3 text-gray-400 animate-spin" />;
            case 'delivered':
                return <Check className="w-3 h-3 text-gray-400" />;
            case 'seen':
                return <CheckCheck className="w-3 h-3 text-blue-500" />;
            default:
                return null;
        }
    };

    return (
        <div className='h-full p-4 custom-scrollbar overflow-y-auto'>
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={msg.id}
                        className={`chat ${msg.isOwn ? 'chat-end' : 'chat-start'} animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all duration-300">
                                <img
                                    alt={`${msg.sender} avatar`}
                                    src={msg.avatar}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="chat-header flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{msg.sender}</span>
                            <time className="text-xs opacity-60 font-medium">{msg.time}</time>
                        </div>
                        <div className={`chat-bubble text-sm shadow-lg transition-all duration-300 hover:shadow-xl ${
                            msg.isOwn
                                ? 'bg-gradient-to-r from-primary to-primary-focus text-primary-content'
                                : 'glass border border-white/20'
                        }`}>
                            {msg.message}
                        </div>
                        <div className="chat-footer opacity-60 flex items-center gap-1 mt-1">
                            {msg.isOwn && getStatusIcon(msg.status)}
                            <span className="text-xs">
                                {msg.isOwn ? (
                                    msg.status === 'sending' ? 'Sending...' :
                                    msg.status === 'delivered' ? 'Delivered' : 'Seen'
                                ) : ''}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Typing indicator */}
            <div className="chat chat-start mt-4 opacity-70">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Typing user"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="chat-bubble glass border border-white/20 flex items-center gap-1">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs ml-2">typing...</span>
                </div>
            </div>
        </div>
    )
}

export default ChatComp
