"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { useDyslexia } from "@/components/dyslexia-provider"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dyslexiaMode, toggleDyslexia } = useDyslexia()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/images/brand/logo_horizontal_transparent.png"
            alt="Your Life And Soul — Integrative Counselling"
            width={600}
            height={180}
            className="h-20 w-auto scale-[2.0] origin-left object-contain"
            priority
          />
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDyslexia}
              title={dyslexiaMode ? "Switch to standard font" : "Switch to dyslexia-friendly font"}
              aria-pressed={dyslexiaMode}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                dyslexiaMode
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              <span className="text-sm font-bold">Aa</span>
              <span>{dyslexiaMode ? "Dyslexia on" : "Dyslexia font"}</span>
            </button>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDyslexia}
                aria-pressed={dyslexiaMode}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  dyslexiaMode
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-muted-foreground"
                }`}
              >
                <span className="font-bold">Aa</span>
                <span>{dyslexiaMode ? "Dyslexia font: on" : "Dyslexia-friendly font"}</span>
              </button>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
