import { Link } from 'react-router-dom'
import cleaningServiceSVG from '../../assets/cleaning-service.svg'

export default function ExploreServices () {
    return (
        <section>
        <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Cleaning Service"
              src={cleaningServiceSVG}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Find services nearby you</h2>
          <Link
            to="/explore-services" // Replace with the actual route you want to link to
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Explore Services
          </Link>
        </div>
        </div>
      </div>
      </section>
    )
}
