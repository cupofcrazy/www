import { MutableRefObject, useEffect, useState } from "react"


interface Position {
  x: number,
  y: number
}
export const useTooltip = (ref: MutableRefObject<HTMLElement>) => {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })


  useEffect(() => {
    ref.current.addEventListener('mouseenter', (e) => handlePointer(e))
    ref.current.addEventListener('mouseleave', (e) => setIsActive(false))
    return () => ref.current.removeEventListener('mouseenter', (e) => handlePointer(e))
  }, [])

  const handlePointer = (e: MouseEvent) => {
    const rect = ref.current.getBoundingClientRect()
    const { top, left } = rect

    setIsActive(true)
    setPosition({
      x: left,
      y: top
    })
  }

  return { position, isActive }
}