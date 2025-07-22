// User types
export interface User {
  id: number
  name: string
  avatar: string
  status: UserStatus
  lastMessage?: string
  lastSeen: string
  unreadCount?: number
}

export type UserStatus = 'online' | 'away' | 'offline' | 'busy'

// Message types
export interface Message {
  id: number
  sender: string
  message: string
  time: string
  avatar: string
  isOwn: boolean
  status: MessageStatus
  type?: MessageType
}

export type MessageStatus = 'sending' | 'delivered' | 'seen' | 'failed'
export type MessageType = 'text' | 'image' | 'file' | 'voice'

// Theme types
export type ThemeType = 'dark' | 'lofi' | 'synthwave' | 'aqua' | 'garden' | 'night' | 'luxury'

export interface ThemeConfig {
  name: ThemeType
  gradient: string
  displayName: string
}

// Component props
export interface AvatarProps {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  status?: UserStatus
  showStatus?: boolean
  className?: string
  onClick?: () => void
}

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
}

export interface ChatBubbleProps {
  message: Message
  index: number
}

export interface UserListItemProps {
  user: User
  index: number
  onUserClick?: (user: User) => void
}
