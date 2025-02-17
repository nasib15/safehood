import Link from "next/link";
import { PlusIcon, RightArrowIcon } from "../icons/Icon";

const Banner = () => {
  return (
    <section className="bg-[url(/banner.jpg)] bg-no-repeat bg-cover bg-center pt-20 min-h-[100vh] md:min-h-screen relative">
      <div className="absolute inset-0 bg-black/40" />{" "}
      {/* Dark overlay for better text readability */}
      <div className="max-w-screen-xl mx-auto w-11/12 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-8rem)] flex items-center py-8 md:py-0 relative z-10">
        <div className="space-y-8 pb-12 md:pb-0">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight text-center sm:text-left">
              Safe<span className="text-red-500">Hood</span>
            </h1>
            <p className="text-3xl text-center sm:text-left sm:text-4xl font-light text-white/90 leading-snug sm:leading-tight">
              Smart Crime Reporting & <br />
              Community Verification
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-100 font-light max-w-2xl leading-snug sm:leading-normal text-center sm:text-left">
            Empowering Communities Through Intelligent Crime Reporting,
            Real-Time Verification, and Collaborative Protection for a Safer
            Future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/dashboard/report"
              className="inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-200 group shadow-lg shadow-red-900/20"
            >
              <PlusIcon />
              Report a Crime
            </Link>
            <Link
              href="/#crime-posts"
              className="inline-flex items-center justify-center px-4 py-3 border border-white/30 backdrop-blur-sm text-white rounded-lg font-medium text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200 group"
            >
              <RightArrowIcon />
              Explore Crime Reports
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <span className="text-3xl md:text-4xl font-bold text-white">
                500+
              </span>
              <span className="text-sm md:text-base text-gray-200 mt-1">
                Reports Verified
              </span>
            </div>
            <div className="hidden sm:block h-16 w-px bg-white/10"></div>
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <span className="text-3xl md:text-4xl font-bold text-white">
                10k+
              </span>
              <span className="text-sm md:text-base text-gray-200 mt-1">
                Community Members
              </span>
            </div>
            <div className="hidden sm:block h-16 w-px bg-white/10"></div>
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <span className="text-3xl md:text-4xl font-bold text-white">
                24/7
              </span>
              <span className="text-sm md:text-base text-gray-200 mt-1">
                Support Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
