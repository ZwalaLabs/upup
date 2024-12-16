import Image from "next/image";

const features = [
  { name: "Community AMAs", icon: "🎯" },
  { name: "Product Launches", icon: "🚀" },
  { name: "Team Q&As", icon: "👥" },
  { name: "Expert Sessions", icon: "💡" },
  { name: "Town Halls", icon: "🏛️" },
  { name: "Investor Updates", icon: "📈" },
  { name: "Customer Feedback", icon: "💬" },
  { name: "Educational Events", icon: "📚" },
  { name: "Ask Me Anything", icon: "❓" },
];

export function Coverage() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-teal-600">
          Perfect for every scenario
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Use cases?
          <br />
          We've got you covered.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          From community engagement to team updates, Upup makes every AMA
          session effortless.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-3">
        {features.map((feature) => (
          <span
            key={feature.name}
            className="inline-flex items-center gap-x-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
          >
            {feature.icon} {feature.name}
          </span>
        ))}
      </div>
    </section>
  );
}
