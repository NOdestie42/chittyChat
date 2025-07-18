import React from 'react'

const ChatComp = () => {
    return (
        <div className='h-full p-2'>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-8 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble text-sm">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-8 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble text-sm">I hate you!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
        </div>
    )
}

export default ChatComp
