import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  variant = 'spinner', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const dotSizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  if (variant === 'spinner') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="animate-spin rounded-full border-2 border-primary/30 border-t-primary h-full w-full"></div>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        <div className={`${dotSizeClasses[size]} bg-primary rounded-full animate-bounce`}></div>
        <div className={`${dotSizeClasses[size]} bg-primary rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
        <div className={`${dotSizeClasses[size]} bg-primary rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse ${className}`}></div>
    )
  }

  return null
}

export default Loading
