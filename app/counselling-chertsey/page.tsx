import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: "Chertsey Counselling | Integrative Therapy | Your Life and Soul",
  description:
    "Integrative counselling in Chertsey for children, teens & adults. Specialist support for anxiety, HG, pregnancy & postnatal care. Face-to-face & online sessions available.",
  alternates: { canonical: "/counselling-chertsey" },
}

export default function ChertseyPage() {
  return (
    <LocalLandingPage
      location="Chertsey"
      localImage="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chertsey%2C_The_Old_Town_Hall_-_geograph.org.uk_-_546171.jpg/640px-Chertsey%2C_The_Old_Town_Hall_-_geograph.org.uk_-_546171.jpg"
      localImageAlt="Chertsey Old Town Hall, built in 1851 in Italianate style, on the high street in Chertsey town centre, Surrey. Photo by Nigel Cox, CC BY-SA 2.0"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9966.12!2d-0.5074!3d51.3902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053e5bcf3f9b%3A0x6daeacd4c89cefd0!2sChertsey%2C%20Surrey!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
      heroIntro="Life can feel overwhelming at times -- whether you're a parent trying to understand your child, an adult carrying too much stress, or someone navigating a difficult season. Having the right support nearby makes all the difference."
      lindsayIntro="I'm Lindsay, a BACP-registered integrative counsellor, and I work with people of all ages from children and teenagers to adults. My practice serves Chertsey and the wider Runnymede area. Chertsey is one of Surrey's oldest market towns, with a strong community spirit and great transport links -- making it convenient to reach whether you're coming from the town centre, Chertsey Meads, or travelling in from nearby Addlestone, Weybridge, or Woking. Online sessions via secure video call are also available if that works better for you."
      approachTitle="A Counselling Approach Tailored to You"
      approachContent={[
        "Integrative counselling means I don't take a one-size-fits-all approach. Instead, I draw on a range of therapeutic methods to build a plan that fits your life, your personality, and what you're going through right now.",
        "Some clients need space to explore deeper patterns -- understanding how early experiences or family dynamics might be shaping how they feel today. Others need practical tools they can use immediately: strategies for managing anxiety, improving communication, or coping with a difficult situation.",
        "Chertsey is a busy commuter town, home to families, professionals, and people from all walks of life. Many people here are managing a great deal -- work pressures, school runs, caring for elderly relatives, or simply the relentless pace of modern life. My integrative approach respects that reality and works at your pace.",
        "What remains constant is the quality of our therapeutic relationship. Counselling works best when you feel genuinely safe, heard, and understood. From that foundation, real change becomes possible.",
      ]}
      whoSections={[
        {
          title: "Supporting Children and Teenagers",
          content: [
            "Young people in Chertsey face many of the same pressures as children across the country -- exam stress, social media, friendship difficulties, and the challenge of growing up -- but they don't always have the words to express what they're feeling.",
            "I work with children and teenagers experiencing anxiety, low self-esteem, emotional regulation difficulties, and challenges at school or home. Parents often notice their child has become withdrawn, irritable, or reluctant to go to school. These are often signs that something deeper needs attention.",
            "For teenagers especially, having a confidential space outside of family and school is invaluable. They're forming their identity, processing intense emotions, and facing real pressures. I help young people build emotional resilience and develop healthy coping strategies that will carry them into adulthood.",
            "I also offer support to parents -- helping you understand what your child might be experiencing and how best to communicate with them through difficult periods.",
          ],
        },
        {
          title: "Adults and Life's Challenges",
          content: [
            "Sometimes life throws more at us than we can handle alone. Anxiety, low mood, relationship difficulties, bereavement, work stress, or simply a persistent feeling that something isn't right -- these are all valid reasons to seek support.",
            "I work with adults dealing with depression, anxiety, anger, adverse childhood experiences, attachment difficulties, and major life transitions such as divorce, redundancy, or parenthood. Many clients describe feeling stuck -- knowing something needs to change, but not quite sure how to move forward.",
            "Chertsey's proximity to London means many residents face the particular pressures of long commutes and high-pressure careers. I understand that kind of exhaustion, and I work to create sessions that are genuinely useful -- not just a space to vent, but a place where things actually shift.",
          ],
        },
        {
          title: "Neurodiversity Support",
          content: [
            "Neurodiversity is a specialism I'm proud to offer across the Runnymede and Chertsey area. Whether your child has been diagnosed with ADHD or autism (ASD), you're on a long waiting list for assessment, or you're an adult who has recently received a diagnosis, counselling can offer meaningful support at every stage.",
            "Parents of neurodivergent children often face unique pressures -- endless school meetings, fighting for the right support, managing behaviour that others don't understand, and trying to parent in a way that truly fits your child. I offer a space to process those challenges, reduce isolation, and build practical strategies tailored to your family.",
            "For children and young people, I work in an affirming, strengths-based way. Helping them understand and take pride in their neurodivergent identity, develop emotional regulation skills, and navigate social and academic challenges with greater confidence is central to the work we do together.",
            "Neurodivergent adults -- particularly those who received their diagnosis later in life -- often find counselling invaluable for making sense of their experiences, processing any grief around earlier struggles, and moving forward with a clearer, kinder understanding of themselves.",
          ],
        },
        {
          title: "Pregnancy, Postnatal Support, and Hyperemesis Gravidarum",
          content: [
            "Pregnancy and early parenthood can be some of the most challenging times in a person's life, despite the expectation to feel only joy. The reality is far more complex, and you deserve support that reflects that.",
            "I specialise in supporting women who have experienced Hyperemesis Gravidarum (HG) -- severe pregnancy sickness that goes far beyond ordinary morning sickness. HG can be physically and emotionally devastating, and many women find they need dedicated space to process the experience. I offer specialist 90-minute HG debrief sessions for exactly this purpose.",
            "Beyond HG, I support women dealing with postnatal depression, pregnancy-related anxiety, birth trauma, attachment difficulties with their baby, and the profound emotional adjustment to becoming a mother. You don't have to struggle through this alone.",
          ],
        },
      ]}
      practiceTitle="Visiting My Practice from Chertsey"
      travelOptions={[
        { icon: "car", label: "By Car", detail: "Chertsey is just off junction 11 of the M25 and easily accessible via the A320. The practice in Addlestone is approximately 5-10 minutes by car from Chertsey town centre." },
        { icon: "train", label: "By Train", detail: "Chertsey railway station has regular South Western Railway services. Weybridge station, 11 minutes away, offers faster connections to London Waterloo. From either station, the practice is a short bus ride or taxi journey." },
        { icon: "bus", label: "By Bus", detail: "Local bus routes connect Chertsey with Addlestone and the surrounding area, with stops close to the practice." },
      ]}
      onlineContent="If travelling isn't practical -- perhaps you have young children at home, work shifts, or simply feel more comfortable in your own space -- I offer secure online sessions via video call. Online counselling is just as effective as face-to-face therapy and gives you greater flexibility over when and where you access support."
      firstSessionContent="Your first session is simply a conversation. There's no pressure and no expectation that you'll have everything figured out. We'll talk about what's brought you here, what you're hoping for, and how we might work together. Many people feel anxious before that first session -- that's entirely normal, and I'll do everything I can to put you at ease from the moment we speak."
      localContextTitle="About Chertsey and Mental Wellbeing"
      localContextContent={[
        "Chertsey is one of Surrey's oldest towns, with a history stretching back to the founding of Chertsey Abbey in 666 AD. Today it's a thriving community within the Borough of Runnymede, home to families, commuters, and long-established residents who value its blend of history, green space, and convenient location.",
        "The town sits within easy reach of the M25 and has good rail links to London, making it attractive to professionals who commute to the city. Thorpe Park is on its northern edge, and green spaces like Chertsey Meads and St Ann's Hill offer welcome breathing room. St Peter's Hospital serves the wider community.",
        "Life in a commuter town like Chertsey carries its own pressures. Long working hours, financial stress, the demands of family life, and the feeling of always being 'on' are challenges many residents share. There's also sometimes a reluctance to ask for help -- a sense that you should be managing on your own.",
        "Seeking counselling isn't a weakness. It's one of the most practical things you can do to protect your mental health and improve your quality of life -- for yourself and for the people around you.",
      ]}
      localTip="After your session, Chertsey Meads or a walk along the Thames Path near Chertsey Bridge can be a wonderful way to process your thoughts in a peaceful setting. Many clients find that time in nature after a session deepens the work we've done together."
      faqs={[
        {
          question: "I live in Chertsey -- how far is the practice?",
          answer: "The practice is in Addlestone, which is approximately 5-10 minutes by car from Chertsey town centre, or accessible by local bus. If travelling is difficult, I offer online sessions which many Chertsey clients find equally effective and much more convenient.",
        },
        {
          question: "My teenager is struggling but refuses to see anyone -- what can I do?",
          answer: "This is one of the most common situations parents face. Sometimes it helps to frame counselling not as 'seeing a therapist' but as having a private space to talk. I'm also happy to have an initial chat with you as a parent, to help you understand what your teenager might be experiencing and how to approach the conversation with them. Occasionally, a teenager becomes more willing once they know the sessions are completely confidential and they're in control.",
        },
        {
          question: "Can you help with anxiety that's affecting my work?",
          answer: "Absolutely. Work-related anxiety is one of the most common reasons adults seek counselling. Whether it's performance anxiety, fear of conflict, imposter syndrome, or chronic stress from a demanding role, counselling can help you understand what's driving it and develop strategies to manage it effectively. Many clients find their work performance actually improves as a result of addressing the underlying anxiety.",
        },
        {
          question: "I had HG during a previous pregnancy -- can I still access support?",
          answer: "Yes, absolutely -- and it's more common than you might think to process HG long after the pregnancy. Some women come to me years later, particularly when they're considering another pregnancy and need to work through the fear and trauma before deciding. The 90-minute HG debrief session gives you proper time and space to share your full experience.",
        },
        {
          question: "How many sessions will I need?",
          answer: "This depends entirely on what you're working through and what feels right for you. Some clients find 6-8 sessions address a specific concern effectively. Others benefit from longer-term work. We'll review progress regularly, and you're always in control. There's no obligation to commit to a fixed number of sessions at the start.",
        },
        {
          question: "Is what I say in sessions really kept private?",
          answer: "Yes. Everything discussed in our sessions is confidential. The only exceptions are circumstances where I believe there is a serious risk of harm -- to you or someone else -- in which case I have both an ethical and legal duty to act. I follow the BACP Ethical Framework and take confidentiality very seriously. I would always discuss any concerns with you first wherever it is safe to do so.",
        },
        {
          question: "How do I get started?",
          answer: "The easiest way is to reach out via WhatsApp for a free initial telephone consultation. This is a no-pressure, no-obligation conversation where we can discuss what's brought you here, answer any questions you have, and explore whether working together feels right. You don't need to have everything figured out before you call.",
        },
      ]}
      nearbyLocations={[
        { label: "Counselling in Addlestone", href: "/counselling-addlestone" },
        { label: "Counselling in Weybridge", href: "/counselling-weybridge" },
        { label: "Counselling in Woking", href: "/counselling-woking" },
      ]}
    />
  )
}
