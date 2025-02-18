import {
  DangerIcon,
  PasteIcon,
  PeopleIcon,
  PlusIconDashboard,
  TickIcon,
  UserIcon,
} from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardOverview = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5 mt-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Welcome back! Here&apos;s a comprehensive overview of your reports and
          recent activities in the SafeHood community.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <PasteIcon className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              <p className="text-xs text-green-600 mt-1">↑ 23% this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <TickIcon className="text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Resolved Cases
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
              <p className="text-xs text-green-600 mt-1">67% resolution rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <PeopleIcon className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Community Members
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1.2k</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <PasteIcon className="text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
              <p className="text-xs text-red-600 mt-1">Requires attention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Reports
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Latest incidents reported in your area
              </p>
            </div>
            <Link href="/dashboard/my-reports">
              <Button
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-500 hover:bg-red-50 transition-all duration-200"
              >
                View All Reports
              </Button>
            </Link>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3].map((report) => (
            <div
              key={report}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-100 flex items-center justify-center">
                    <DangerIcon />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">
                      Suspicious Activity
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Reported suspicious individuals near Gulshan-1
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    Verified
                  </span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/dashboard/report"
          className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-200">
              <PlusIconDashboard />
            </div>
            <div>
              <h3 className="text-gray-900 font-medium group-hover:text-red-600 transition-colors duration-200">
                Report a Crime
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Submit a new crime report
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/my-reports"
          className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-200">
              <PasteIcon className="text-red-500" />
            </div>
            <div>
              <h3 className="text-gray-900 font-medium group-hover:text-red-600 transition-colors duration-200">
                My Reports
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                View and manage your reports
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/my-profile"
          className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-200">
              <UserIcon />
            </div>
            <div>
              <h3 className="text-gray-900 font-medium group-hover:text-red-600 transition-colors duration-200">
                Profile Settings
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Update your profile information
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardOverview;
