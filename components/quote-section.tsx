export function QuoteSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-primary/40" />
        <blockquote>
          <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl text-pretty">
            {"Let go of who you think you\u2019re supposed to be; embrace who you are."}
          </p>
          <footer className="mt-6 text-sm font-medium text-muted-foreground">
            {"Bren\u00e9 Brown"}
          </footer>
        </blockquote>
        <div className="mx-auto mt-6 h-px w-16 bg-primary/40" />
      </div>
    </section>
  )
}
