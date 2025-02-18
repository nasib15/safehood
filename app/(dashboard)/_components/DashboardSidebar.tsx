"use client";

import { BarIcon, ExitIcon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo3.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dashboardNavLinks } from "../lib/dashboardNavLinks";
import DashboardSidebarItem from "./DashboardSidebarItem";

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
                src={
                  "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
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
