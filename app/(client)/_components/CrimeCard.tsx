import { DownIcon, MapIcon, UpIcon, ViewIcon } from "@/components/icons/Icon";
import Image from "next/image";
import Link from "next/link";

const CrimeCard = () => {
  return (
    <Link
      href={`/crime/1`}
      className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 hover:shadow-md transition-all duration-200"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <Image
          src="https://plus.unsplash.com/premium_photo-1673543757560-061f5222201c?q=80&w=2940&auto=format&fit=crop"
          alt="Crime report"
          className="object-cover transition-transform group-hover:scale-105 duration-700"
          width={409}
          height={272}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              Verified
            </span>
            <span className="text-sm text-gray-500">12/12/2021</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200">
              <UpIcon />
              <span className="text-xs font-medium">124</span>
            </button>
            <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-200">
              <DownIcon />
              <span className="text-xs font-medium">12</span>
            </button>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
          A crime report
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          There was a crime in the area of the report. This is a detailed
          description of what happened during the incident.
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <MapIcon />
            <span className="text-sm text-gray-500">Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-sm text-gray-500">
              <ViewIcon />
              2.1k views
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CrimeCard;
