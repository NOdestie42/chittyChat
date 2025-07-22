import React from 'react'
import { MOCK_MESSAGES } from '@/constants'
import ChatBubble from '@/components/ui/chat-bubble'
import Avatar from '@/components/ui/avatar'

const ChatComp = () => {

  return (
    <div className='h-full p-4 custom-scrollbar overflow-y-auto'>
      <div className="space-y-4">
        {MOCK_MESSAGES.map((message, index) => (
          <ChatBubble
            key={message.id}
            message={message}
            index={index}
          />
        ))}
      </div>

      {/* Typing indicator */}
      <div className="chat chat-start mt-4 opacity-70">
        <div className="chat-image avatar">
          <Avatar
            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            alt="Typing user"
            size="sm"
          />
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
