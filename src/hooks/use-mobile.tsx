
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Start with undefined to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    // Create the media query once
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler function
    const handleChange = () => {
      setIsMobile(mql.matches)
    }
    
    // Set initial value
    handleChange()
    
    // Modern event listener
    mql.addEventListener("change", handleChange)
    
    // Cleanup
    return () => {
      mql.removeEventListener("change", handleChange)
    }
  }, [])

  // Return boolean (false as fallback when undefined)
  return isMobile === undefined ? false : isMobile
}
