"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Clock, Users, Baby, Check, ChevronDown, ChevronRight, MapPin, Monitor, Car, Train, Bike, Phone } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

interface WhoSection {
  title: string
  content: string[]
}

interface TravelOption {
  icon: "car" | "train" | "bus" | "bike"
  label: string
  detail: string
}

interface FAQ {
  question: string
  answer: string
}

interface LocalPageProps {
  location: string
  heroIntro: string
  localImage: string
  localImageAlt: string
  mapEmbedUrl: string
  lindsayIntro: string
  approachTitle: string
  approachContent: string[]
  whoSections: WhoSection[]
  practiceTitle: string
  travelOptions: TravelOption[]
  onlineContent: string
  firstSessionContent: string
  localContextTitle: string
  localContextContent: string[]
  localTip?: string
  faqs: FAQ[]
  nearbyLocations: { label: string; href: string }[]
}

const plans = [
  {
    title: "Individual Session",
    description: "Adults, teenagers or children",
    price: "60",
    per: "per session",
    icon: Clock,
    featured: true,
    features: [
      "50-minute session",
      "Face-to-face or online",
      "Safe, confidential space",
      "Tailored integrative approach",
    ],
  },
  {
    title: "HG Debrief",
    description: "In-depth Hyperemesis Gravidarum debrief",
    price: "100",
    per: "per session",
    icon: Users,
    features: [
      "90-minute session",
      "Face-to-face or online",
      "Opportunity to share your HG experience",
      "Resolve trauma from HG pregnancy",
    ],
  },
  {
    title: "Pregnancy & HG Support",
    description: "Specialist pre and postnatal counselling",
    price: "60",
    per: "per session",
    icon: Baby,
    features: [
      "50-minute session",
      "Face-to-face or online",
      "HG specialist support",
      "Flexible scheduling",
    ],
  },
]

const travelIcons = {
  car: Car,
  train: Train,
  bus: Train,
  bike: Bike,
}

export function LocalLandingPage(props: LocalPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navigation />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="bg-secondary border-b border-border pt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-3">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <a href="/" className="transition-colors hover:text-primary">
                Home
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <span className="font-medium text-foreground" aria-current="page">
                Counselling in {props.location}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src={props.localImage}
          alt={props.localImageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-secondary/80">
            Your Life And Soul
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-secondary md:text-5xl lg:text-6xl text-balance">
            Integrative Counselling in {props.location}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary/90 max-w-xl mx-auto text-pretty">
            {props.heroIntro}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="#approach"
              className="inline-flex items-center rounded-full border border-secondary/40 px-7 py-3 text-sm font-medium text-secondary transition-colors hover:bg-secondary/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg leading-relaxed text-foreground">
            {props.lindsayIntro}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            Approach
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            {props.approachTitle}
          </h2>
          {props.approachContent.map((paragraph, i) => (
            <p key={i} className="mt-6 text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Who I Work With */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            Services
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Who I Work With in {props.location}
          </h2>
          {props.whoSections.map((section, i) => (
            <div key={i} className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {section.title}
              </h3>
              {section.content.map((paragraph, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Getting Here */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            Location
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            {props.practiceTitle}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {props.travelOptions.map((option, i) => {
              const Icon = travelIcons[option.icon] || MapPin
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{option.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{option.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Monitor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Online Sessions</p>
              <p className="mt-1 text-sm text-muted-foreground">{props.onlineContent}</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          {props.mapEmbedUrl && (
            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              <iframe
                src={props.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${props.location} town centre`}
              />
            </div>
          )}

          <div className="mt-8 rounded-xl bg-primary/5 border border-primary/20 p-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Your First Session</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {props.firstSessionContent}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
              Pricing
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              Integrative Counselling Session Rates
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I believe therapy should be accessible. An initial free telephone
              consultation is offered so we can discuss your needs before committing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.title}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-md ${
                    plan.featured
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {plan.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-semibold text-foreground">
                      {"£"}{plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.per}</span>
                  </div>
                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                      plan.featured
                        ? "bg-primary text-primary-foreground hover:bg-accent"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Get in Touch
                  </a>
                </div>
              )
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Reduced rates may be available in certain circumstances. Please get in touch to discuss.
          </p>
        </div>
      </section>

      {/* Local Context */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            {props.location}
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            {props.localContextTitle}
          </h2>
          {props.localContextContent.map((paragraph, i) => (
            <p key={i} className="mt-6 text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {props.localTip && (
            <div className="mt-8 rounded-xl bg-card border border-border p-6">
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                {props.localTip}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
              FAQ
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              Questions from {props.location} Clients
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {props.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-secondary/50"
                  aria-expanded={openFaq === index}
                >
                  <span className="pr-4 text-sm font-medium text-foreground md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Ready to Start Your Counselling Journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Taking the first step can feel daunting, but it is often the most
            important one. I offer a free initial telephone consultation where we
            can have a chat about what you are looking for.
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

      {/* Nearby Locations */}
      {props.nearbyLocations.length > 0 && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
              Other Areas We Serve
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {props.nearbyLocations.map((loc) => (
                <a
                  key={loc.href}
                  href={loc.href}
                  className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {loc.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
