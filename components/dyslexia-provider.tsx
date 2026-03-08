"use client"

import { createContext, useContext, useEffect, useState } from "react"

const STORAGE_KEY = "dyslexia-font"

interface DyslexiaContextType {
  dyslexiaMode: boolean
  toggleDyslexia: () => void
}

const DyslexiaContext = createContext<DyslexiaContextType>({
  dyslexiaMode: false,
  toggleDyslexia: () => {},
})

export function useDyslexia() {
  return useContext(DyslexiaContext)
}

export function DyslexiaProvider({ children }: { children: React.ReactNode }) {
  const [dyslexiaMode, setDyslexiaMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "true") {
      setDyslexiaMode(true)
      document.documentElement.setAttribute("data-dyslexic", "true")
    }
  }, [])

  const toggleDyslexia = () => {
    setDyslexiaMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.setAttribute("data-dyslexic", "true")
        localStorage.setItem(STORAGE_KEY, "true")
      } else {
        document.documentElement.removeAttribute("data-dyslexic")
        localStorage.setItem(STORAGE_KEY, "false")
      }
      return next
    })
  }

  return (
    <DyslexiaContext.Provider value={{ dyslexiaMode, toggleDyslexia }}>
      {children}
    </DyslexiaContext.Provider>
  )
}
