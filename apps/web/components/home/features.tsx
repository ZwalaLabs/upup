import { Check } from "lucide-react";

export function Features() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-gray-50/60 p-8 ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Simple Setup
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Create an AMA room in seconds. No complex configuration needed.
            </p>
            <p className="mt-6 flex items-center gap-x-2 text-sm text-gray-600">
              <Check className="h-5 w-5 text-teal-500" />
              One-click setup
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50/60 p-8 ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Smart Sorting
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Questions are automatically sorted by audience engagement. Focus
              on what matters most.
            </p>
            <p className="mt-6 flex items-center gap-x-2 text-sm text-gray-600">
              <Check className="h-5 w-5 text-teal-500" />
              Upvote system
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50/60 p-8 ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Real-time Interaction
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Live updates, instant notifications, and seamless audience
              participation.
            </p>
            <p className="mt-6 flex items-center gap-x-2 text-sm text-gray-600">
              <Check className="h-5 w-5 text-teal-500" />
              Live updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
