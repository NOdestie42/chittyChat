import React from 'react'
import { Check, CheckCheck, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ChatBubbleProps } from '@/types'
import Avatar from './avatar'

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, index }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sending':
        return <Clock className="w-3 h-3 text-gray-400 animate-spin" />
      case 'delivered':
        return <Check className="w-3 h-3 text-gray-400" />
      case 'seen':
        return <CheckCheck className="w-3 h-3 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'sending':
        return 'Sending...'
      case 'delivered':
        return 'Delivered'
      case 'seen':
        return 'Seen'
      default:
        return ''
    }
  }

  return (
    <div 
      className={cn(
        'chat animate-fade-in-up',
        message.isOwn ? 'chat-end' : 'chat-start'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="chat-image avatar">
        <Avatar
          src={message.avatar}
          alt={`${message.sender} avatar`}
          size="sm"
          className="ring-2 ring-primary/20 hover:ring-primary/50 transition-all duration-300"
        />
      </div>
      
      <div className="chat-header flex items-center gap-2 mb-1">
        <span className="font-semibold text-sm">{message.sender}</span>
        <time className="text-xs opacity-60 font-medium">{message.time}</time>
      </div>
      
      <div className={cn(
        'chat-bubble text-sm shadow-lg transition-all duration-300 hover:shadow-xl',
        message.isOwn 
          ? 'bg-gradient-to-r from-primary to-primary-focus text-primary-content' 
          : 'glass border border-white/20'
      )}>
        {message.message}
      </div>
      
      <div className="chat-footer opacity-60 flex items-center gap-1 mt-1">
        {message.isOwn && getStatusIcon(message.status)}
        <span className="text-xs">
          {message.isOwn ? getStatusText(message.status) : ''}
        </span>
      </div>
    </div>
  )
}

export default ChatBubble
