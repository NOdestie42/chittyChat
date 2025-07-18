import React from 'react'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  status?: 'online' | 'away' | 'offline' | 'busy'
  showStatus?: boolean
  className?: string
  onClick?: () => void
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  status,
  showStatus = false,
  className = '',
  onClick
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500'
  }

  const statusSizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-full overflow-hidden ring-2 ring-transparent hover:ring-primary/30 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
      
      {showStatus && status && (
        <div 
          className={`absolute -bottom-0.5 -right-0.5 ${statusSizes[size]} ${statusColors[status]} rounded-full border-2 border-white ${status === 'online' ? 'animate-pulse' : ''}`}
        ></div>
      )}
    </div>
  )
}

export default Avatar
