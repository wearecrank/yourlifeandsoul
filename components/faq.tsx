"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is counselling?",
    answer:
      "Counselling draws on a range of therapeutic approaches and tailors them to suit your individual needs. Rather than following a single method, techniques from different modalities are combined to create a personalised experience that best supports you on your journey.",
  },
  {
    question: "What happens in the first session?",
    answer:
      "Before we begin, I offer a free initial telephone consultation so we can discuss what you are looking for and whether we are a good fit. The first face-to-face session is about getting to know each other, understanding your situation and agreeing on how we will work together going forward.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This varies from person to person. Some people find that a few sessions are enough, while others benefit from longer-term work. We will regularly review how things are going and you are always free to end therapy when you feel ready.",
  },
  {
    question: "Is everything I say confidential?",
    answer:
      "Yes, confidentiality is a cornerstone of our work together. What you share in sessions stays between us, with very few exceptions which I will explain clearly at the start. I follow the BACP Ethical Framework for the Counselling Professions.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer both face-to-face and online sessions. Online sessions work well for many clients and can offer greater flexibility, particularly for those with busy schedules or who find it more comfortable to be in their own space.",
  },
  {
    question: "Can you work with children and teenagers?",
    answer:
      "Yes, I work with children, teenagers and adults. For younger clients, parental consent is required and I will discuss how the process works, including how confidentiality applies, before we begin.",
  },
  {
    question: "What is Hyperemesis Gravidarum (HG)?",
    answer:
      "Hyperemesis Gravidarum is a severe form of pregnancy sickness that goes far beyond typical morning sickness. It can have a significant impact on physical and emotional wellbeing. I specialise in supporting women who have experienced HG, both during and after pregnancy.",
  },
  {
    question: "What are your qualifications?",
    answer:
      "I am a qualified Counsellor and a registered member of the British Association for Counselling and Psychotherapy (BACP), member number 379263. I adhere to the BACP Ethical Framework and undertake regular supervision and continuing professional development.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            FAQ
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Counselling FAQs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Common questions about counselling at Your Life And Soul.
            If there is anything else you would like to know, please do not
            hesitate to get in touch.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-secondary/50"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-medium text-foreground md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index
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
  )
}
