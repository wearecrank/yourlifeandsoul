import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

export function ContactForm() {
  return (
    <section id="contact" className="bg-secondary py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Section header */}
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Contact
        </p>
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
          Get in Touch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ready to start your counselling journey? I would love to
          hear from you. Send me a message on WhatsApp and I will get back to
          you as soon as possible.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-accent"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Get in Touch on WhatsApp
        </a>
      </div>
    </section>
  )
}
