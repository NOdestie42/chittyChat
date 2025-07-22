import { ThemeConfig, User, Message } from '@/types'

// Theme configurations
export const THEME_CONFIGS: ThemeConfig[] = [
  { name: 'dark', gradient: 'from-gray-800 to-gray-900', displayName: 'Dark' },
  { name: 'lofi', gradient: 'from-amber-200 to-orange-300', displayName: 'Lo-Fi' },
  { name: 'synthwave', gradient: 'from-pink-500 to-purple-600', displayName: 'Synthwave' },
  { name: 'aqua', gradient: 'from-cyan-400 to-blue-500', displayName: 'Aqua' },
  { name: 'garden', gradient: 'from-green-400 to-emerald-500', displayName: 'Garden' },
  { name: 'night', gradient: 'from-indigo-600 to-purple-700', displayName: 'Night' },
  { name: 'luxury', gradient: 'from-yellow-400 to-amber-500', displayName: 'Luxury' }
]

// Status color mappings
export const STATUS_COLORS = {
  online: 'bg-green-500',
  away: 'bg-yellow-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500'
} as const

// Animation delays
export const ANIMATION_DELAYS = {
  STAGGER_DELAY: 0.1,
  FLOAT_DELAYS: ['0s', '1s', '2s']
} as const

// Mock data
export const MOCK_USERS: User[] = [
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
]

export const MOCK_MESSAGES: Message[] = [
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
]
