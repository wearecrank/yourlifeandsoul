import Image from "next/image"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Peaceful Surrey countryside scene, reflecting the calm and restorative nature of counselling at Your Life And Soul"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-4 flex justify-center pt-8">
          <Image
            src="/images/brand/icon_white_512.png"
            alt="Your Life And Soul flower logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain drop-shadow-lg"
            priority
          />
        </div>
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-secondary/80">
          Your Life And Soul
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-secondary md:text-5xl lg:text-6xl text-balance">
          Counselling for a Better You
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary/90 max-w-xl mx-auto text-pretty">
          {"Your life does not get better by chance, it gets better by change."}
        </p>
        <p className="mt-2 text-sm italic text-secondary/70">{"Jim Rohn"}</p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-transparent bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-white hover:text-primary hover:border-primary"
          >
            How We Can Help
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/40 px-7 py-3 text-sm font-medium text-secondary transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
