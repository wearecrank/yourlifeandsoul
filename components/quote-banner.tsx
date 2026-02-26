export function QuoteBanner() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote>
          <p className="font-serif text-xl leading-relaxed text-primary-foreground md:text-2xl text-pretty">
            {"In this world of stress, counselling can be the ultimate gift of self care \u2013 like gym membership for the heart and mind!"}
          </p>
          <footer className="mt-6 text-sm font-medium text-primary-foreground/70">
            {"Lindsay Salmon \u2014 Founder"}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
