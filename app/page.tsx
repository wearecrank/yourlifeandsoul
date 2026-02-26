import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { QuoteBanner } from "@/components/quote-banner"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { QuoteSection } from "@/components/quote-section"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Your Life And Soul Integrative Counselling",
  description:
    "Professional integrative counselling for children, teenagers and adults. BACP registered counsellor Lindsay Salmon provides a safe, collaborative and non-judgemental space.",
  provider: {
    "@type": "Person",
    name: "Lindsay Salmon",
    jobTitle: "Integrative Counsellor",
    memberOf: {
      "@type": "Organization",
      name: "British Association for Counselling and Psychotherapy",
      alternateName: "BACP",
    },
  },
  serviceType: [
    "Integrative Counselling",
    "Child Counselling",
    "Teenager Counselling",
    "Adult Counselling",
    "Couples Counselling",
    "Family Counselling",
    "Pregnancy Counselling",
    "Hyperemesis Gravidarum Support",
  ],
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is integrative counselling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integrative counselling draws on a range of therapeutic approaches and tailors them to suit your individual needs. Rather than following a single method, techniques from different modalities are combined to create a personalised experience that best supports you on your journey.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in the first counselling session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before beginning, a free initial telephone consultation is offered so you can discuss what you are looking for and whether it is a good fit. The first face-to-face session is about getting to know each other, understanding your situation and agreeing on how to work together going forward.",
      },
    },
    {
      "@type": "Question",
      name: "How many counselling sessions will I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This varies from person to person. Some people find that a few sessions are enough, while others benefit from longer-term work. Sessions are regularly reviewed and you are always free to end therapy when you feel ready.",
      },
    },
    {
      "@type": "Question",
      name: "Is counselling confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, confidentiality is a cornerstone of the therapeutic relationship. What you share in sessions stays between you and your counsellor, with very few exceptions which are explained clearly at the start. The BACP Ethical Framework for the Counselling Professions is followed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online integrative counselling sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both face-to-face and online sessions are offered. Online counselling sessions work well for many clients and can offer greater flexibility, particularly for those with busy schedules or who find it more comfortable to be in their own space.",
      },
    },
    {
      "@type": "Question",
      name: "What is Hyperemesis Gravidarum (HG)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hyperemesis Gravidarum is a severe form of pregnancy sickness that goes far beyond typical morning sickness. It can have a significant impact on physical and emotional wellbeing. Your Life And Soul specialises in supporting women who have experienced HG, both during and after pregnancy.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Navigation />
        <Hero />
        <About />
        <QuoteBanner />
        <Services />
        <Pricing />
        <QuoteSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
