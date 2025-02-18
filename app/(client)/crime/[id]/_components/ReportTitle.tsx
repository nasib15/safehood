import {
  CalendarIcon,
  ClockIcon,
  DownIcon,
  UpIcon,
  UserIcon,
  ViewIcon,
} from "@/components/icons/Icon";

const ReportTitle = () => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Suspicious Activity Reported in Gulshan Area
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <UserIcon />
              <span>Posted by John Doe</span>
            </span>
            <span className="flex items-center gap-2">
              <CalendarIcon />
              <span>December 12, 2023</span>
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon />
              <span>2:30 PM</span>
            </span>
            <span className="flex items-center gap-2">
              <ViewIcon />
              <span>2.1k views</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200">
            <UpIcon />
            <span className="font-medium">124</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-200">
            <DownIcon />
            <span className="font-medium">12</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
          Verified
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
          High Priority
        </span>
      </div>
    </div>
  );
};
export default ReportTitle;
