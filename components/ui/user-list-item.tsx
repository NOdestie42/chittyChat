import React from 'react'
import { MessageCircle, Phone, Video } from 'lucide-react'
import { cn, truncateText } from '@/lib/utils'
import { UserListItemProps } from '@/types'
import Avatar from './avatar'

const UserListItem: React.FC<UserListItemProps> = ({ user, index, onUserClick }) => {
  return (
    <div 
      className={cn(
        'group flex items-center space-x-3 px-4 py-3 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-xl mx-2 animate-fade-in-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onUserClick?.(user)}
    >
      <div className="relative">
        <Avatar
          src={user.avatar}
          alt={`${user.name} avatar`}
          size="md"
          status={user.status}
          showStatus
          className="group-hover:ring-primary/30 transition-all duration-300"
        />
        
        {user.unreadCount && user.unreadCount > 0 && (
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
        {user.lastMessage && (
          <div className="text-sm text-base-content/70 truncate">
            {truncateText(user.lastMessage, 30)}
          </div>
        )}
        <div className="text-xs text-base-content/50 capitalize">{user.status}</div>
      </div>

      {/* Quick action buttons */}
      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            // Handle message action
          }}
        >
          <MessageCircle size={14} />
        </button>
        <button 
          className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            // Handle call action
          }}
        >
          <Phone size={14} />
        </button>
        <button 
          className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            // Handle video action
          }}
        >
          <Video size={14} />
        </button>
      </div>
    </div>
  )
}

export default UserListItem
