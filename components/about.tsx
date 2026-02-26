import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            About
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            About Your Life And Soul Integrative Counselling
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
            <Image
              src="/images/about.jpg"
              alt="Lindsay Salmon, integrative counsellor"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg leading-relaxed text-foreground">
              My name is Lindsay and I am an Integrative Counsellor and
              registered member of the BACP. I work with children, teenagers and
              adults and also specialise in working with women who have suffered
              Hyperemesis Gravidarum (HG).
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              I am passionate about supporting you to reconnect with yourself so
              you can trust your intuition and feel more at ease with yourself. I
              will help you explore the challenges you are facing in a safe,
              collaborative and non-judgemental space.
            </p>
            <p className="mt-6 text-lg font-medium text-primary">
              I want you to become the life and soul of your own party!
            </p>

            {/* BACP badge */}
            <a
              href="https://www.bacp.co.uk/search/Register?q=379263"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-xl bg-secondary p-6 transition-shadow hover:shadow-md"
            >
              <div className="relative h-24 w-full sm:h-28">
                <Image
                  src="/images/bacp-logo.png"
                  alt="BACP Registered Member 379263 MBACP - Professional Standards Authority Accredited Register"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
