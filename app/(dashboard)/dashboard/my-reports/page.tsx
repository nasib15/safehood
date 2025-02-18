import Pagination from "@/components/common/Pagination";
import { PlusIcon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MyReportCard from "./_components/MyReportCard";
import SearchBar from "./_components/SearchBar";

const MyReportsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5 mt-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
            My Reports
          </h1>
          <p className="text-gray-500">
            Manage and track your submitted reports
          </p>
        </div>
        <Link href="/dashboard/report">
          <Button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200">
            <PlusIcon className={"h-5 w-5"} />
            New Report
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <SearchBar />
        <div className="flex gap-4">
          <select className="block w-full px-3 py-2 border border-gray-200 bg-white text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200">
            <option value="all" className="bg-white">
              All Status
            </option>
            <option value="verified" className="bg-white">
              Verified
            </option>
            <option value="pending" className="bg-white">
              Pending
            </option>
            <option value="rejected" className="bg-white">
              Rejected
            </option>
          </select>
          <select className="block w-full px-3 py-2 border border-gray-200 bg-white text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200">
            <option value="recent" className="bg-white">
              Most Recent
            </option>
            <option value="oldest" className="bg-white">
              Oldest First
            </option>
          </select>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-200">
          {/* <div className="p-8 text-center text-gray-400">
              Loading reports...
            </div>
           reports.length === 0 ? 
            <div className="p-8 text-center text-gray-400">
              No reports found. Create your first report!
            </div> */}
          <MyReportCard />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};
export default MyReportsPage;
