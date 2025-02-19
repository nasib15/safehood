"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "About",
      href: "/about",
      description: "Learn more about our mission and values.",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with us.",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 relative min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <>
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </NavigationMenuLink>
                  </>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href="/" className="flex lg:justify-center">
          <p className="text-2xl font-semibold pl-4">SafeHood</p>
        </Link>
        <div className="flex justify-end w-full gap-4">
          <Link href="/login">
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg pt-6 container gap-4 p-6 rounded-b-md">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link href={item.href} className="flex flex-col gap-2">
                    <p className="text-lg">{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
