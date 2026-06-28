"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Nav() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 border-b border-border transition-colors duration-300"
      style={{ background: "color-mix(in oklch, var(--background) 88%, transparent)" }}
    >
      <Link
        href="#hero"
        className="font-bold text-[18px] tracking-[-0.5px] text-foreground"
      >
        Minh<span className="text-primary">.</span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {(["About", "Experience", "Projects", "Contact"] as const).map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2.5">
        <a
          href="mailto:nguyenvunhathao0501@gmail.com"
          className="inline-flex items-center px-5 py-[10px] rounded-lg bg-primary text-black text-[13px] font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Hire Me
        </a>

        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent transition-colors cursor-pointer bg-transparent"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </nav>
  )
}
