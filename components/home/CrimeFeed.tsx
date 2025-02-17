import Link from "next/link";
import { PlusIcon, SearchIcon } from "../icons/Icon";
import { Button } from "../ui/button";
import CrimeCard from "./CrimeCard";

const CrimeFeed = () => {
  return (
    <section className="py-20 bg-background/95">
      <div id="crime-posts" className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Recent Crime Reports
              </h2>
              <p className="text-muted-foreground">
                Stay informed about recent incidents in your area
              </p>
            </div>
            <Link href="/dashboard/report">
              <Button variant="destructive" size="lg" className="gap-2">
                <PlusIcon />
                Report Crime
              </Button>
            </Link>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search reports..."
                    className="w-full px-4 py-2 pl-10 bg-background border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <SearchIcon />
                </div>
              </div>
              <div className="flex gap-4">
                <select className="px-3 py-2 bg-background border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
                <select className="px-3 py-2 bg-background border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CrimeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimeFeed;
