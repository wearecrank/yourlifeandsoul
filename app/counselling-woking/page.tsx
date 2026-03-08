import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: "Counselling in Woking | Your Life and Soul | BACP Registered",
  description:
    "Counselling in Woking for all ages. Expert support for anxiety, depression, HG, pregnancy challenges, family issues. Face-to-face & online sessions available.",
  alternates: { canonical: "/counselling-woking" },
}

export default function WokingPage() {
  return (
    <LocalLandingPage
      location="Woking"
      localImage="/images/woking.jpg"
      localImageAlt="Woking town centre showing the Peacocks shopping centre, the Victoria Square war memorial statue, and shoppers crossing the pedestrianised square"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9958.76!2d-0.5569!3d51.3162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875cf1b33a5b3a5%3A0x4f3f6a488b8e1b3a!2sWoking!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
      heroIntro="When you're carrying emotional weight that feels too heavy to manage alone, counselling can offer the support and perspective you need."
      lindsayIntro="I'm Lindsay, an integrative counsellor registered with the BACP, and I support people from Woking and across Surrey. My practice is based in Addlestone, a short distance from Woking town centre, making it accessible whether you're travelling from the town itself, surrounding villages, or prefer the flexibility of online sessions."
      approachTitle="What Makes Integrative Counselling Different"
      approachContent={[
        "Integrative counselling isn't about following a single therapeutic rulebook. Instead, it's about meeting you where you are and using whatever approaches work best for your specific situation. Think of it like building something bespoke rather than assembling flat-pack furniture -- it's made to fit you, not the other way around.",
        "In practice, this means our sessions might look different from week to week. Perhaps one session focuses on exploring childhood experiences that are influencing current relationships. The next might be more practical, working on breathing techniques for managing panic attacks or communication strategies for family conflicts.",
        "Working with people from Woking, I've noticed how many carry stress that's become normalised. The daily commute to London, juggling demanding careers with family life, supporting children through competitive school environments -- these pressures compound until suddenly you realise you haven't felt truly relaxed in months, maybe years.",
        "My role isn't to judge how you've been coping or tell you what you should do. It's to create a safe, collaborative space where you can explore your feelings honestly, make sense of difficult experiences, and develop ways of managing that actually work for your life.",
      ]}
      whoSections={[
        {
          title: "Young People Finding Their Way",
          content: [
            "From teenagers grappling with exam stress to younger children struggling with friendship issues or family changes, young people today face pressures previous generations didn't experience. Social media creates constant comparison. Academic expectations start earlier and feel more intense.",
            "I support children and teenagers dealing with anxiety, low confidence, behavioural challenges, anger that feels uncontrollable, difficulties at school (both academic and social), and the impact of family situations like separation or bereavement.",
            "Counselling provides a confidential space that's entirely theirs. Not controlled by parents, not monitored by teachers, not performed for friends. For teenagers especially, this independence is crucial. I help them develop emotional literacy -- understanding and articulating their feelings -- which becomes a lifelong skill.",
          ],
        },
        {
          title: "Adults Navigating Complex Lives",
          content: [
            "Adulthood comes with responsibilities that seemed abstract when you were younger. Suddenly you're managing a career, relationships, possibly children, ageing parents, financial pressures, and somewhere in all of that you're supposed to maintain your own wellbeing. When something gives, it's often your own mental health.",
            "I work with adults experiencing anxiety, depression, stress related to work or relationships, anger issues, trauma from past experiences, grief and loss, and that hard-to-articulate feeling that your life isn't quite what you wanted it to be.",
            "Whatever you're facing, counselling offers space to examine it without distraction or judgement. Together, we'll work on understanding what's beneath your struggles, processing difficult emotions, challenging unhelpful thought patterns, and building strategies that help you move forward.",
          ],
        },
        {
          title: "Neurodiversity Support",
          content: [
            "Neurodiversity is a key specialism within my practice. I work with children, teenagers, adults, and the families of neurodivergent individuals -- whether they have a formal diagnosis of ADHD or autism (ASD), are awaiting assessment, or simply feel that neurodiversity might explain some of their experiences.",
            "Parents of neurodivergent children in Woking often tell me they feel exhausted and unheard -- by schools, by healthcare systems, sometimes even by their own support networks. I offer a dedicated space for parents to process the challenges they face, understand their child's world more deeply, and develop strategies that actually work in daily life.",
            "For young people, I focus on helping them understand and value their neurodivergent identity, navigate the challenges that can arise at school and in social situations, and build the emotional resilience they need to flourish. Children and teenagers who feel understood and accepted are far better equipped to manage the world around them.",
            "Adults who have received a late diagnosis -- or who are exploring whether ADHD or autism might explain lifelong patterns -- are equally welcome. Counselling can help you reframe your past experiences, understand your strengths, and develop strategies to support your wellbeing going forward.",
          ],
        },
        {
          title: "Pregnancy, Birth, and New Motherhood",
          content: [
            "There's a cultural narrative that pregnancy and new motherhood should be blissful. The reality is often far more complicated, and women who struggle during this time frequently feel isolated and guilty for not experiencing the joy they're \"supposed\" to feel.",
            "I have specialist experience supporting women with Hyperemesis Gravidarum (HG) -- severe pregnancy sickness that goes far beyond typical morning sickness. HG can be devastating, affecting every aspect of your life. I offer extended 90-minute HG debrief sessions where you can process the full impact of this experience.",
            "I also support women dealing with antenatal anxiety or depression, postnatal depression, birth trauma, difficulties bonding with your baby, and the overwhelming adjustment to motherhood. Finding that difficult doesn't mean you're ungrateful or unsuited to motherhood -- it means you're human.",
          ],
        },
      ]}
      practiceTitle="Getting to Sessions from Woking"
      travelOptions={[
        { icon: "car", label: "By Car", detail: "The drive from Woking to Addlestone takes approximately 15-20 minutes via the A320 or A245. Parking is available near the practice." },
        { icon: "train", label: "By Train", detail: "Woking station connects to several nearby stations. From there, you can take a short bus journey or taxi to reach the practice." },
        { icon: "bus", label: "By Bus", detail: "Local bus services connect Woking and Addlestone with convenient stops." },
      ]}
      onlineContent="If getting to face-to-face sessions isn't practical -- perhaps due to childcare, work schedules, or simply preferring to stay in your own space -- I offer online counselling via secure video call. The therapeutic relationship develops just as effectively online, and many clients appreciate the convenience and privacy it offers."
      firstSessionContent="I offer a free initial telephone consultation, giving us both a chance to discuss what's going on and whether counselling feels like the right fit. There's no obligation to proceed after this call -- it's simply an opportunity to explore your options without pressure. Sessions last 50 minutes (or 90 minutes for HG debriefs) and the atmosphere is relaxed and informal."
      localContextTitle="Life in Woking and When to Seek Support"
      localContextContent={[
        "Woking has transformed significantly over recent decades from a quieter Surrey town to a bustling hub with excellent transport links to London. This growth brings opportunities but also pressures. Many Woking residents commute long hours, face competitive housing markets, and juggle multiple responsibilities.",
        "The town's proximity to London means many people working in high-stress careers live here, bringing work pressures home with them. Families face expectations around education, activities, and maintaining a certain lifestyle.",
        "There's also a tendency in affluent areas like Surrey to assume that having material comfort means you shouldn't struggle emotionally. But mental health doesn't discriminate based on postcode or bank balance. Anxiety, depression, trauma, relationship problems -- these affect people regardless of their circumstances.",
        "Recognising that you need support and actually seeking it out are two different things. Counselling doesn't require you to be at breaking point -- it's equally valuable for managing stress before it becomes overwhelming.",
      ]}
      localTip="Woking offers plenty of green spaces like Goldsworth Park and the Basingstoke Canal for quiet reflection after sessions. Building time for yourself into your day -- even just 30 minutes -- is part of prioritising your wellbeing."
      faqs={[
        {
          question: "I commute to London for work -- can I fit counselling into my schedule?",
          answer: "Yes, this is a common challenge for Woking residents, and I offer flexible options. I have some early morning and evening appointments specifically for commuters. Online sessions offer even more flexibility -- you could have a session before leaving for work, during a lunch break, or after you get home. Some clients schedule fortnightly rather than weekly sessions if time is particularly tight.",
        },
        {
          question: "Will my employer find out I'm having counselling?",
          answer: "No, unless you choose to tell them. Counselling is completely confidential. If you're using an Employee Assistance Programme (EAP) to fund sessions, the provider knows you're accessing counselling but not the details of what we discuss. Many clients simply block out the time in their calendar as a personal appointment.",
        },
        {
          question: "Can counselling help with anger that I don't know how to control?",
          answer: "Absolutely. Anger is often a secondary emotion -- underneath it might be frustration, hurt, fear, or feeling unheard. In counselling, we explore what triggers your anger, what it's trying to communicate, and develop healthier ways to express and manage it. This isn't about suppressing anger but understanding it and responding rather than reacting.",
        },
        {
          question: "I'm considering pregnancy after HG -- can you help me prepare?",
          answer: "Yes, this is exactly the kind of support I offer. The decision to have another pregnancy after HG is enormously difficult, often involving grief over the experience, fear of it happening again, and conflicting feelings. We can work through your feelings about the previous pregnancy and develop a support plan. Some clients also appreciate having ongoing support during a subsequent pregnancy.",
        },
        {
          question: "My teenager won't talk to us -- how does counselling help?",
          answer: "Teenagers often find it easier to open up to someone outside their family system. There's no history of conflicts, no worry about disappointing you, and no family dynamics complicating the conversation. I provide that neutral space where they can explore their feelings without judgement. Whilst I maintain their confidentiality, I do encourage age-appropriate communication with parents.",
        },
        {
          question: "What's the difference between integrative counselling and CBT?",
          answer: "Cognitive Behavioural Therapy (CBT) is a specific type of therapy focusing on the connection between thoughts, feelings, and behaviours. Integrative counselling draws on multiple therapeutic approaches including elements of CBT, but also psychodynamic work, person-centred therapy, and others. It's more flexible and adapts to what you need rather than following a fixed structure.",
        },
        {
          question: "Can online counselling really be as effective as face-to-face?",
          answer: "Yes, research shows online counselling can be just as effective as face-to-face for many issues. The therapeutic relationship develops in exactly the same way -- it's the connection and the work we do together that matters, not the medium. The main requirements are a private space where you won't be interrupted and a good internet connection.",
        },
      ]}
      nearbyLocations={[
        { label: "Counselling in Addlestone", href: "/counselling-addlestone" },
        { label: "Counselling in Weybridge", href: "/counselling-weybridge" },
        { label: "Counselling in Chertsey", href: "/counselling-chertsey" },
      ]}
    />
  )
}
