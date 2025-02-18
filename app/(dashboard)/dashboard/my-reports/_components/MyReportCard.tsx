import { TimerIcon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MyReportCard = () => {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Report"
              className="w-full h-full object-cover rounded-lg"
              width={48}
              height={48}
            />
          </div>
          <div>
            <h3 className="text-gray-900 font-medium">Report Title</h3>
            <p className="text-sm text-gray-500 mt-1">
              There is a crime in the area.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <TimerIcon />
                12 minutes ago
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            Verified
          </span>
          <div className="flex items-center gap-2">
            <Link href={`/dashboard/report/edit/2`}>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-500 hover:bg-red-50 transition-colors duration-200"
              >
                Edit
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-red-500/30 text-red-500 hover:bg-red-50 transition-colors duration-200"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyReportCard;
