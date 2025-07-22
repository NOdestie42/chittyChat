import { useEffect, RefObject } from 'react'

export const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: () => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refs.every(ref => 
        ref.current && !ref.current.contains(event.target as Node)
      )
      
      if (isOutside) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [refs, handler, enabled])
}
