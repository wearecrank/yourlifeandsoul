import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: "Addlestone Counselling | Integrative Therapy | Your Life and Soul",
  description:
    "Integrative counselling in Addlestone for children, teens & adults. Specialist support for anxiety, HG, pregnancy & postnatal care. Face-to-face & online sessions available.",
  alternates: { canonical: "/counselling-addlestone" },
}

export default function AddlestonePage() {
  return (
    <LocalLandingPage
      location="Addlestone"
      localImage="/images/addlestone.jpg"
      localImageAlt="Peaceful view of Victory Park in Addlestone, Surrey, a calming green space near our integrative counselling practice"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9968.48!2d-0.4917!3d51.3696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876040c6aa7c101%3A0x22f46f10fa6e4e70!2sAddlestone!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
      heroIntro="Whether you're navigating stress at work, struggling with anxiety, or supporting your child through a difficult period, having someone to talk to can make all the difference."
      lindsayIntro="I'm Lindsay, an integrative counsellor registered with the BACP, and I work with people of all ages -- from children and teenagers to adults. My practice is conveniently located in the heart of Addlestone, making it easy to access whether you're coming from the town centre, Victory Park, or the surrounding areas. I also offer online sessions via video call if that suits you better."
      approachTitle="A Therapeutic Approach That Works for You"
      approachContent={[
        "Integrative counselling means I don't follow just one rigid method. Instead, I draw on different therapeutic approaches to create a tailored plan that actually fits your life and your needs. Think of it like having a toolkit rather than a single tool -- some days you might need one approach, other days something completely different works better.",
        "This flexibility is particularly valuable for the people I work with in Addlestone. Some clients come to me dealing with long-standing issues that need a deeper exploration of past experiences. Others are facing immediate challenges -- perhaps relationship difficulties, work stress, or the demands of parenting -- and need practical strategies they can use straight away.",
        "What stays consistent is the relationship we build together. Counselling works best when you feel genuinely heard and understood, not judged or rushed. I create space for you to reconnect with yourself, trust your own intuition, and discover what you truly need.",
        "Many people in our area lead busy lives juggling work, family, and other commitments. My integrative approach respects that reality. We work at your pace, focusing on what matters most to you right now.",
      ]}
      whoSections={[
        {
          title: "Supporting Children and Teenagers",
          content: [
            "Young people today face pressures that many adults don't fully understand. From academic stress and social media anxiety to friendship difficulties and family changes, childhood and adolescence can feel like navigating a maze without a map.",
            "I work with children and teenagers experiencing a range of challenges including low self-esteem, worries about school or friendships, behavioural difficulties, and emotional regulation struggles. Parents often notice their child withdrawing, becoming more irritable, or struggling to communicate what they're feeling. Counselling provides a safe outlet where young people can express themselves freely.",
            "For teenagers especially, having a confidential space outside of family and school can be invaluable. They're developing their identity, dealing with hormones, facing exam pressures, and trying to figure out who they are. I help them build emotional resilience and develop healthy coping mechanisms that will serve them well into adulthood.",
          ],
        },
        {
          title: "Working with Adults",
          content: [
            "Adult life doesn't come with a manual, and sometimes we all need support to navigate its complexities. Perhaps you're experiencing anxiety that's affecting your daily life, feeling low or unmotivated, struggling with a relationship, or dealing with a major life transition like redundancy, divorce, or bereavement.",
            "I work with adults facing depression, anxiety, relationship difficulties, work-related stress, attachment issues, and challenges around self-worth. Many clients describe feeling stuck -- knowing something needs to change but not quite sure how to move forward. Counselling offers that clarity and support.",
            "Some people come with a specific issue they want to address; others simply know they're not feeling like themselves. Both are equally valid reasons to seek support. Together, we'll explore what's underneath those feelings and work towards you feeling more grounded, confident, and at ease with yourself.",
          ],
        },
        {
          title: "Neurodiversity Support",
          content: [
            "Neurodiversity is a specialism I'm particularly passionate about. Whether you or your child has received a diagnosis of ADHD or autism (ASD), or you're still seeking answers, counselling can provide vital support at every stage of that journey.",
            "For parents in Addlestone, navigating a neurodivergent child's needs can feel isolating and exhausting. I offer support to parents to help them understand their child's experience, improve communication, and develop strategies that work for their family's unique dynamic.",
            "For children and young people, I help them understand and embrace their diagnosis, build confidence in who they are, manage emotional regulation, and navigate the social and academic challenges that can come with being neurodivergent. Building a strong sense of identity and self-worth is central to this work.",
            "I also support neurodivergent adults who may have received a late diagnosis or are learning to understand themselves through a new lens. It's never too late to explore how your neurodiversity shapes your world -- and to find strategies that help you thrive.",
          ],
        },
        {
          title: "Pregnancy, Postnatal Support, and Hyperemesis Gravidarum",
          content: [
            "Pregnancy and the postnatal period can be some of the most challenging times in a woman's life, yet there's often an expectation to feel nothing but joy. The reality is far more complex.",
            "I specialise in supporting women who've experienced Hyperemesis Gravidarum (HG) -- the severe pregnancy sickness that goes far beyond normal morning sickness. HG can be physically and emotionally traumatic, affecting your mental health, relationships, and how you feel about pregnancy itself. I offer specialist 90-minute HG debrief sessions to help you process this experience.",
            "Beyond HG, I support women dealing with postnatal depression, pregnancy-related anxiety, attachment difficulties with their baby, and the emotional adjustment to motherhood. Becoming a parent changes everything, and it's completely normal to need support during this transition.",
          ],
        },
      ]}
      practiceTitle="Visiting My Practice in Addlestone"
      travelOptions={[
        { icon: "car", label: "By Car", detail: "Convenient parking available nearby. From Addlestone town centre, it's less than a 5-minute drive." },
        { icon: "train", label: "By Public Transport", detail: "Addlestone is well-served by local bus routes, with stops close to the practice. Weybridge and Chertsey stations are both within a short drive or bus journey." },
        { icon: "bike", label: "By Bicycle", detail: "Secure bike parking is available at the practice." },
      ]}
      onlineContent="If travelling isn't convenient -- perhaps you have childcare commitments, work long hours, or simply prefer the comfort of your own space -- I offer online sessions via secure video call. Online counselling can be just as effective as face-to-face therapy and offers greater flexibility."
      firstSessionContent="Your first session will feel like a conversation. There's no pressure, no judgement -- just an opportunity for us to get to know each other and explore what's brought you here. We'll discuss what you're hoping to achieve and how we might work together. Many people feel nervous before their first session; that's completely normal, and I'll do everything I can to help you feel at ease."
      localContextTitle="About Addlestone and Seeking Support"
      localContextContent={[
        "Addlestone is a vibrant community with a mix of families, young professionals, and established residents. Located between Weybridge and Chertsey, it offers a blend of small-town charm with easy access to larger towns and London.",
        "Living in this area comes with its own pressures. Many residents commute to London or work in demanding careers in nearby towns, leading to work-life balance challenges. Young families juggle childcare, school runs, and financial pressures. Teenagers navigate the expectations of good local schools alongside social pressures.",
        "There's also an expectation -- particularly in areas like Surrey -- to have it all together. But the truth is, everyone struggles sometimes. Seeking counselling isn't a sign of weakness; it's a sign of self-awareness and strength.",
      ]}
      localTip="After your session, you might find it helpful to take a walk through Victory Park or grab a coffee from one of the local cafes. Many clients find that having some quiet time after a session helps them process what we've discussed."
      faqs={[
        {
          question: "How do I know if counselling is right for me or my family?",
          answer: "If you're asking this question, counselling is probably worth considering. Many people wait until they're in crisis, but therapy is most effective when you seek support earlier. Signs that counselling might help include persistent anxiety or low mood, difficulty managing stress, relationship struggles, concerns about your child's wellbeing, or simply feeling that something isn't quite right. I offer a free initial telephone consultation where we can discuss your situation with no pressure to commit.",
        },
        {
          question: "I live in Addlestone -- how quickly can I get an appointment?",
          answer: "I typically have availability within 1-2 weeks for new clients, though this can vary depending on demand. If you're in crisis and need urgent support, please let me know when you contact me and I'll do my best to accommodate you sooner. For those who prefer online sessions, I often have more flexible availability as there's no travel time involved.",
        },
        {
          question: "Can you help with Hyperemesis Gravidarum if I'm currently pregnant?",
          answer: "Absolutely. I specialise in supporting women through HG, both during pregnancy and afterwards. During active HG, we can work together via online sessions so you don't need to travel whilst feeling unwell. We'll focus on coping strategies, emotional support, and helping you feel less isolated. Many women find that having someone who truly understands HG makes an enormous difference to their mental health during this difficult time.",
        },
        {
          question: "Do you work with teenagers without their parents present?",
          answer: "Yes, confidentiality is crucial when working with teenagers. Sessions are private, and I won't share what's discussed with parents unless there's a safeguarding concern (which I'd discuss with your teenager first whenever possible). However, I do encourage some level of communication between teenagers and parents, and we can work together to find the right balance.",
        },
        {
          question: "What happens if I need to cancel a session?",
          answer: "I ask for 24 hours' notice if you need to cancel or reschedule. This allows me to offer the slot to someone else who might need it. Cancellations with less than 24 hours' notice may be charged at the full session rate unless there are exceptional circumstances.",
        },
        {
          question: "How much do sessions cost and do you take insurance?",
          answer: "Individual sessions are £60 for 50 minutes, with specialist HG debrief sessions at £100 for 90 minutes. I don't currently work directly with insurance companies, but I can provide receipts that you may be able to claim back depending on your policy. If cost is a genuine barrier, please speak to me about potential reduced rates.",
        },
        {
          question: "Is counselling really confidential?",
          answer: "Yes, everything discussed in our sessions is confidential with very few exceptions. The main exception is if I believe you or someone else is at serious risk of harm -- in that case, I have a professional and legal duty to take appropriate action. I follow the BACP Ethical Framework for the Counselling Professions.",
        },
      ]}
      nearbyLocations={[
        { label: "Counselling in Weybridge", href: "/counselling-weybridge" },
        { label: "Counselling in Chertsey", href: "/counselling-chertsey" },
        { label: "Counselling in Woking", href: "/counselling-woking" },
      ]}
    />
  )
}
