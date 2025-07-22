import React from 'react'
import Image from 'next/image'
import { cn, getStatusColor } from '@/lib/utils'
import { AvatarProps } from '@/types'

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  status,
  showStatus = false,
  className,
  onClick
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const statusSizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  }

  return (
    <div className={cn('relative inline-block', className)}>
      <div
        className={cn(
          sizeClasses[size],
          'rounded-full overflow-hidden ring-2 ring-transparent hover:ring-primary/30 transition-all duration-300',
          onClick && 'cursor-pointer'
        )}
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
          className={cn(
            'absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-white',
            statusSizes[size],
            getStatusColor(status),
            status === 'online' && 'animate-pulse'
          )}
        />
      )}
    </div>
  )
}

export default Avatar
