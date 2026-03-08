import Image from "next/image"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <Image
              src="/images/brand/logo_horizontal_transparent.png"
              alt="Your Life And Soul — Counselling"
              width={540}
              height={162}
              className="h-40 w-auto object-contain"
            />
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              <li>
                <a
                  href="#home"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Local pages */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="mb-4 text-center text-sm font-semibold text-foreground">
            Local Counselling Services
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <a
                href="/counselling-addlestone"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Counselling in Addlestone
              </a>
            </li>
            <li>
              <a
                href="/counselling-weybridge"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Counselling in Weybridge
              </a>
            </li>
            <li>
              <a
                href="/counselling-chertsey"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Counselling in Chertsey
              </a>
            </li>
            <li>
              <a
                href="/counselling-woking"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Counselling in Woking
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-white hover:text-primary hover:border-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get in Touch on WhatsApp
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Your Life and Soul. All rights reserved.`}
          </p>
          <a
            href="https://www.instagram.com/navigatingndparenting/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Your Life And Soul on Instagram"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @navigatingndparenting
          </a>
        </div>
      </div>
    </footer>
  )
}
