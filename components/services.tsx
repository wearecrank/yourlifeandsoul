import Image from "next/image"
import {
  Heart,
  Baby,
  Brain,
  Users,
  Shield,
  Frown,
  Flame,
  Sparkles,
  Activity,
  Puzzle,
  BookOpen,
  MessageCircle,
  HandHeart,
} from "lucide-react"

const generalServices = [
  { label: "Family dynamics", icon: Users },
  { label: "Attachment difficulties", icon: Heart },
  { label: "Adverse Childhood Events", icon: Shield },
  { label: "Worries & feeling low", icon: Frown },
  { label: "Self esteem", icon: Sparkles },
  { label: "Depression", icon: Frown },
  { label: "Anxiety", icon: Brain },
  { label: "Anger", icon: Flame },
]

const pregnancyServices = [
  { label: "Attachment difficulties", icon: Heart },
  { label: "Post Natal Depression", icon: Frown },
  { label: "Pregnancy Related Issues", icon: Baby },
  { label: "Hyperemesis Gravidarum (HG)", icon: Activity },
  { label: "HG recovery", icon: Sparkles },
]

const neurodivergenceServices = [
  { label: "ADHD", icon: Activity },
  { label: "ASD (Autism Spectrum)", icon: Puzzle },
  { label: "Supporting parents of neurodivergent children", icon: HandHeart },
  { label: "Helping children understand their diagnosis", icon: BookOpen },
  { label: "Building confidence & self-identity", icon: Sparkles },
  { label: "Parent-child communication strategies", icon: MessageCircle },
  { label: "Navigating school & social challenges", icon: Users },
  { label: "Emotional regulation support", icon: Brain },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            Services
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            How Counselling Can Help
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Every person is unique. Our approach draws on multiple
            therapeutic modalities to create a tailored counselling plan that works for you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {/* Children, Teens & Adults */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <div className="relative h-56 w-full">
              <Image
                src="/images/services-children.jpg"
                alt="Young person looking upward with hope, representing counselling support for children, teenagers and adults at Your Life And Soul"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block rounded-full bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  Children, Teens & Adults
                </span>
              </div>
            </div>
            <div className="p-8">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {generalServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <li
                      key={service.label}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">
                        {service.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-white hover:text-primary hover:border-primary"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Pregnancy and beyond */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <div className="relative h-56 w-full">
              <Image
                src="/images/services-pregnancy.jpg"
                alt="Calm shoreline at golden hour, representing specialist counselling support for pregnancy, postnatal wellbeing and Hyperemesis Gravidarum at Your Life And Soul"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block rounded-full bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  Pregnancy & Beyond
                </span>
              </div>
            </div>
            <div className="p-8">
              <ul className="flex flex-col gap-3">
                {pregnancyServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <li
                      key={service.label}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">
                        {service.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-white hover:text-primary hover:border-primary"
              >
                Get in touch
              </a>
            </div>
          </div>
          {/* Neurodivergence */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm lg:col-span-2 xl:col-span-1">
            <div className="relative h-56 w-full">
              <Image
                src="/images/services-neurodivergence.jpg"
                alt="Parent and child doing activities together in a warm, supportive home environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block rounded-full bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  Neurodivergence
                </span>
              </div>
            </div>
            <div className="p-8">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {neurodivergenceServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <li
                      key={service.label}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">
                        {service.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-white hover:text-primary hover:border-primary"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
