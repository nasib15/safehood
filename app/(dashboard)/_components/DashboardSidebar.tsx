"use client";

import { BarIcon, ExitIcon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo3.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DashboardSidebarItem from "./DashboardSidebarItem";

// Dashboard Sidebar Navigation Links
const dashboardNavLinks = [
  {
    href: "/dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    label: "Overview",
  },
  {
    href: "/dashboard/profile",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    label: "Profile",
  },
  {
    href: "/dashboard/report",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    label: "Report Crime",
  },
  {
    href: "/dashboard/my-reports",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    label: "My Reports",
  },
  {
    href: "/dashboard/admin",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    label: "Admin Panel",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <section
        id="topbar"
        className={`fixed w-full min-h-screen z-50 md:flex md:w-60 md:flex-col md:inset-y-0 bg-gray-50 border-r border-gray-200 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex-1 flex flex-col">
          {/* Logo */}
          <div className="flex-shrink-0 px-4 py-5 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={logo}
                alt="Logo"
                className="h-8 w-8 group-hover:animate-pulse transition-transform duration-300"
              />
              <span className="text-xl font-semibold text-gray-800 tracking-tight">
                Safe<span className="text-red-500">Hood</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="flex-1 px-3 space-y-1">
              {dashboardNavLinks.map((item) => (
                <DashboardSidebarItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  pathname={pathname}
                />
              ))}
            </nav>
          </div>

          {/* User Profile */}
          <div className="flex-shrink-0 border-t border-gray-200 p-4 bg-gray-100/50">
            <div className="flex items-center gap-3">
              <Image
                src={"https://via.placeholder.com/40"}
                alt={"User"}
                className="h-10 w-10 rounded-full border-2 border-gray-200 hover:border-red-500/50 transition-colors duration-200"
                width={40}
                height={40}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {"User"}
                </p>
                <p className="text-xs text-gray-500 truncate">{"nehal"}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all duration-200 hover:scale-105"
              >
                <ExitIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all duration-200 hover:scale-105"
        >
          <BarIcon isMobileMenuOpen={isMobileMenuOpen} />
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
