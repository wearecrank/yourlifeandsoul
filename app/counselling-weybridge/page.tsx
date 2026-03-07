import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: "Weybridge Counselling | Integrative Therapy | Your Life and Soul",
  description:
    "Professional integrative counselling in Weybridge for children, teens & adults. Specialist HG support, anxiety & postnatal care. Online & face-to-face sessions.",
  alternates: { canonical: "/counselling-weybridge" },
}

export default function WeybridgePage() {
  return (
    <LocalLandingPage
      location="Weybridge"
      localImage="/images/weybridge.jpg"
      localImageAlt="Serene view of the River Thames at Weybridge, Surrey, reflecting the calm and peaceful setting for integrative counselling"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9966.12!2d-0.4571!3d51.3722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876045b8b3e0c3b%3A0x46e17c8c52fa29b2!2sWeybridge!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
      heroIntro="Sometimes life throws challenges at us that feel impossible to manage alone. Whether it's anxiety keeping you awake at night, relationship struggles, or concerns about your child's wellbeing, reaching out for support is a brave and important step."
      lindsayIntro="I'm Lindsay, a BACP-registered integrative counsellor working with individuals and families across Weybridge and the surrounding Surrey area. My practice is easily accessible from Weybridge town centre, Thames Street, and the surrounding villages. Whether you prefer face-to-face sessions or the convenience of online counselling, I'm here to provide compassionate, professional support."
      approachTitle="How Integrative Counselling Can Help You"
      approachContent={[
        "Every person who walks into my counselling room brings a unique story. That's why I use an integrative approach -- combining different therapeutic techniques to match what you specifically need, rather than expecting you to fit into one fixed method.",
        "Imagine counselling as a conversation that adapts to where you are today. Some sessions might focus on understanding patterns from your past that are affecting your present. Other times, we might work on practical coping strategies you can use immediately when anxiety strikes or communication breaks down.",
        "What I've found working with people in Weybridge is that many carry a lot of responsibility. High-achieving professionals, dedicated parents, people managing complex family dynamics -- all while trying to maintain the appearance that everything's under control. That pressure is exhausting.",
        "In our sessions, you don't need to have it all together. This is your space to be honest about what's really going on, without fear of judgement. We'll work collaboratively to help you feel more at ease with yourself, develop healthier coping mechanisms, and reconnect with the things that matter most to you.",
      ]}
      whoSections={[
        {
          title: "Children and Young People",
          content: [
            "Childhood isn't as carefree as it used to be. Between academic pressure, social media comparisons, friendship drama, and family changes, young people today navigate complex emotional landscapes -- often without the vocabulary or tools to express what they're experiencing.",
            "Parents in Weybridge often contact me when they've noticed changes in their child: withdrawal from activities they used to enjoy, angry outbursts, reluctance to go to school, or difficulties sleeping. These behaviours are often signs that something deeper is troubling them.",
            "I work with children facing self-esteem issues, anxiety (particularly around school performance), friendship conflicts, and difficulties managing big emotions. Teenagers particularly benefit from having a confidential space separate from family and school -- somewhere they can explore their identity, process confusing feelings, and develop emotional intelligence.",
          ],
        },
        {
          title: "Adults Facing Life's Challenges",
          content: [
            "Perhaps you've always been the person others rely on, but lately you've been wondering who's there for you. Or maybe anxiety has crept up so gradually that you didn't notice until it was affecting your sleep, your relationships, your work performance.",
            "I support adults dealing with anxiety disorders, depression, work-related stress and burnout, relationship difficulties, anger management, adverse childhood experiences, and life transitions like divorce, redundancy, or bereavement.",
            "Whatever brings you to counselling, we'll create space to unpick what's happening beneath the surface. Many clients describe finally feeling heard -- not just listened to politely, but truly understood. From that foundation, we can work towards meaningful change.",
          ],
        },
        {
          title: "Neurodiversity Support",
          content: [
            "Neurodiversity is a specialism I bring to my work in Weybridge and across Surrey. Whether it's ADHD, autism (ASD), or a suspected diagnosis that hasn't yet been confirmed, I offer counselling support that meets individuals and families where they are.",
            "Parents of neurodivergent children often carry a significant emotional load -- advocating at school, managing meltdowns, feeling misunderstood by wider family or professionals. I offer a space to process those feelings and develop practical strategies for supporting your child while also taking care of yourself.",
            "For children and young people, I work to help them understand their neurodiversity in a positive, affirming way. Building self-esteem, developing coping strategies for school and social situations, and helping them communicate their needs are all central to this work.",
            "Neurodivergent adults -- including those with a late diagnosis of ADHD or autism -- are also very welcome. Understanding how your brain works can be genuinely life-changing, and counselling can help you process a diagnosis, make sense of past experiences, and move forward with greater self-awareness.",
          ],
        },
        {
          title: "Specialist Pregnancy and Postnatal Support",
          content: [
            "Pregnancy should be a time of joy and anticipation, but for many women, it's complicated by physical illness, mental health struggles, or traumatic experiences. There's immense pressure to feel grateful and glowing, which makes it even harder when you're actually suffering.",
            "I specialise in supporting women through Hyperemesis Gravidarum (HG) -- severe pregnancy sickness that can be physically debilitating and emotionally traumatic. I offer specialist 90-minute HG debrief sessions where you can finally talk openly about how difficult the experience was.",
            "Beyond HG, I work with women experiencing postnatal depression, birth trauma, anxiety during pregnancy, challenges with bonding, and the overwhelming adjustment to motherhood. The transition to parenthood is profound, and struggling during this time doesn't make you a bad mother -- it makes you human.",
          ],
        },
      ]}
      practiceTitle="Accessing Counselling from Weybridge"
      travelOptions={[
        { icon: "car", label: "By Car", detail: "Approximately 5-10 minutes from Weybridge town centre via the A317. Parking is available nearby." },
        { icon: "train", label: "By Train", detail: "Weybridge station offers regular services. From there, it's a short bus journey or taxi ride to the practice in Addlestone." },
        { icon: "bus", label: "By Bus", detail: "Several local bus routes connect Weybridge and Addlestone with stops near the practice." },
      ]}
      onlineContent="I offer secure online video counselling, which many clients find more convenient. You might have caring responsibilities that make travelling difficult, work patterns that don't align with typical daytime appointments, or simply prefer the comfort of your own environment. Online counselling is equally effective and offers complete flexibility."
      firstSessionContent="Before committing to ongoing therapy, I offer a free telephone consultation. This is a chance for us to discuss what's troubling you, what you're hoping to achieve, and whether we'd work well together. If we decide to proceed, your first proper session will be about building rapport and understanding your story. Many clients arrive feeling nervous -- that's completely expected."
      localContextTitle="Understanding Weybridge and Mental Health Support"
      localContextContent={[
        "Weybridge is known for its affluence, beautiful riverside setting, and strong community feel. It's home to families, professionals, and retirees who've built successful lives here. But success and stability don't make anyone immune to mental health challenges.",
        "In fact, living in an area where everything appears perfect can make it harder to admit when you're struggling. There's an unspoken pressure to maintain appearances, to have the perfect family, the successful career, the well-adjusted children.",
        "Many residents commute to London or work in high-pressure careers, leading to chronic stress and limited time for self-care. Parents face intense pressure around their children's education and activities. Relationships strain under the weight of busy schedules and unspoken expectations.",
        "Seeking counselling isn't admitting defeat -- it's recognising that mental health matters as much as physical health. You deserve support, and taking that step shows strength, not weakness.",
      ]}
      localTip="Weybridge offers plenty of peaceful spots if you'd like some time to yourself after counselling. A walk along the Thames Path or through the quieter streets around St James's Church can provide valuable reflection time."
      faqs={[
        {
          question: "I'm worried about being seen coming to counselling -- is the practice discreet?",
          answer: "I completely understand this concern, especially in smaller communities. The practice in Addlestone is discreet with a private entrance, and you won't encounter other clients in a waiting room. Many Weybridge clients also choose online sessions specifically for privacy reasons. Your confidentiality is paramount, and I would never acknowledge a client outside of sessions unless they approach me first.",
        },
        {
          question: "My child goes to a competitive school -- will counselling affect their record?",
          answer: "Absolutely not. Counselling is completely separate from school and won't appear on any educational records. Many children in high-performing schools face immense pressure, and seeking support is actually a sign of proactive parenting. You're giving them tools to manage stress, build resilience, and develop emotional intelligence that will serve them throughout life.",
        },
        {
          question: "How long will I need counselling for?",
          answer: "This varies enormously depending on what you're addressing and what you're hoping to achieve. Some people find that 6-8 sessions provide the support they need for a specific issue. Others benefit from longer-term work. We'll review progress regularly, and you're always in control of when to finish.",
        },
        {
          question: "Can you help with work stress when I can't really explain what's wrong?",
          answer: "Absolutely. Many clients, particularly those in high-pressure careers, struggle to articulate what's bothering them -- they just know something feels off. That vague sense of unease, exhaustion that sleep doesn't fix, or feeling disconnected from things you used to enjoy are all valid reasons to seek counselling. You don't need to have everything figured out before you start.",
        },
        {
          question: "I'm interested in HG support but my pregnancy was a while ago -- is it too late?",
          answer: "It's never too late. Some women come to me years after their HG pregnancy because they've only just had space to process what happened, or because they're considering another pregnancy and need to work through their trauma first. The 90-minute HG debrief session gives you proper time to share your story and begin healing.",
        },
        {
          question: "Do you work with relationship issues or just individuals?",
          answer: "I work with individuals, including on relationship issues. So whilst I don't offer couples counselling where both partners attend together, I absolutely support people who are struggling within relationships. Many clients find that working on themselves individually has a positive impact on their relationships.",
        },
        {
          question: "How do I book and what if I'm not sure yet?",
          answer: "The easiest first step is to get in touch via WhatsApp for a free initial consultation. This is a no-obligation conversation where you can ask questions, tell me a bit about what's going on, and we can discuss whether counselling might help. There's no pressure to book anything.",
        },
      ]}
      nearbyLocations={[
        { label: "Counselling in Addlestone", href: "/counselling-addlestone" },
        { label: "Counselling in Chertsey", href: "/counselling-chertsey" },
        { label: "Counselling in Woking", href: "/counselling-woking" },
      ]}
    />
  )
}
