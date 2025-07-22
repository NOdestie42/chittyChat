import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { THEME_CONFIGS, STATUS_COLORS } from '@/constants'
import { ThemeType, UserStatus } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThemeGradient(theme: ThemeType): string {
  const themeConfig = THEME_CONFIGS.find(config => config.name === theme)
  return themeConfig?.gradient || 'from-blue-400 to-purple-500'
}

export function getStatusColor(status: UserStatus): string {
  return STATUS_COLORS[status]
}

export function formatTime(time: string): string {
  // Add time formatting logic here
  return time
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
