import { Clock, Users, Baby, Check } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL = "https://wa.me/447843153456?text=Hello%20I%20am%20interested%20in%20counselling%20sessions"

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
      "Tailored approach to counselling",
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

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            Pricing
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Counselling Session Rates
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I believe therapy should be accessible. An initial free telephone
            consultation is offered so we can discuss your needs before
            committing.
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-semibold text-foreground">
                    {"£"}{plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.per}
                  </span>
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
          Reduced rates may be available in certain circumstances. Please get in
          touch to discuss.
        </p>
      </div>
    </section>
  )
}
