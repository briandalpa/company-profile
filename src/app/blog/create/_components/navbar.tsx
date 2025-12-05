"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { LogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { signOut } from "@/actions/auth-action";

export default function DashboardNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Service", path: "/products" },
    { name: "Teams", path: "/teams" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex w-1/3 items-center">
          <Link href="/">
            <Image
              src="/comac-logo.svg"
              alt="company logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-1/3 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive(link.path) &&
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex w-1/3 items-center justify-end gap-4">
          <Button
            className="bg-destructive hover:bg-destructive/90 dark:hover:bg-destructive/60 dark:bg-destructive/70 rounded-full hover:cursor-pointer"
            onClick={() => signOut()}
          >
            <LogOut />
            <Link href="/">Log out</Link>
          </Button>
          <DarkmodeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center -mr-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[280px] sm:w-[350px] p-3">
              {/* Mobile Navbar Content */}
              <SheetTitle>
                <div className="flex w-full items-center pl-4 py-4">
                  <Link href="/">
                    <Image
                      src="/comac-logo.svg"
                      alt="company logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-all",
                        isActive(link.path)
                          ? "bg-transparent text-primary font-bold dark:text-secondary"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Buttons + Dark Mode */}
                <div className="mt-8 border-t pt-6 space-y-3 px-4">
                  <Button
                    className="w-full bg-destructive rounded-full"
                    asChild
                    onClick={() => signOut()}
                  >
                    <Link href="/blog/create">
                      <LogOut />
                      Log Out
                    </Link>
                  </Button>
                  <div className="absolute bottom-4 left-4">
                    <DarkmodeToggle />
                  </div>
                </div>
              </SheetTitle>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
