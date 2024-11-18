export default function Home() {
  return (
    <main className="relative h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{backgroundImage: "url('/img/rr-hero-image.jpg')"}}
      />
      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="uppercase text-4xl font-bold mb-3">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy
          </h1>
          <p className="text-xl">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy designed to welcome thousands of visitors — and spark
            thousands of conversations — at events like SXSW, the Daytona 500,
            the Minnesota State Fair, and more.
          </p>

          <p>
            This 15-minute video tells the story of the project and its
            origins...
          </p>
        </div>
        <div className="relative pt-[56.25%] w-full mt-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2FRqVq971qU"
            title="Roving Reactor Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
