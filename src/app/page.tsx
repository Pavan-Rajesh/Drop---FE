import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] px-4 pt-16 pb-10">
      <section className="flex flex-col items-center gap-8 text-center max-w-2xl mx-auto lg:mt-9">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl sm:text-6xl font-bold">Drop</h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-muted-foreground">
            Where Proximity Meets Possibility
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Find Friends</Button>
          <Button variant="secondary">Drop Images</Button>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground">
          Drop helps you connect with new friends nearby and effortlessly share files within a
          customizable radius. Whether you&apos;re exploring a new place or just want to drop
          something for someone close, Drop makes it simple, private, and fun.
        </p>
      </section>
    </main>
  )
}
