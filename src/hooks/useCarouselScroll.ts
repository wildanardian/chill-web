import {useCallback, useEffect, useRef, useState} from 'react'

export function useCarouselScroll() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const left = el.scrollLeft
    const cw = el.clientWidth
    const sw = el.scrollWidth
    setCanScrollLeft(left > 1)
    setCanScrollRight(left + cw < sw - 1)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    update()
    const onScroll = () => update()
    el.addEventListener('scroll', onScroll, {passive: true})
    const ro = new ResizeObserver(() => update())
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', onScroll)
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollLeft = useCallback(() => {
    const el = ref.current
    if (!el) return
    const distance = el.clientWidth
    el.scrollBy({left: -distance, behavior: 'smooth'})
  }, [])

  const scrollRight = useCallback(() => {
    const el = ref.current
    if (!el) return
    const distance = el.clientWidth
    el.scrollBy({left: distance, behavior: 'smooth'})
  }, [])

  return {ref, scrollLeft, scrollRight, canScrollLeft, canScrollRight}
}

export default useCarouselScroll
