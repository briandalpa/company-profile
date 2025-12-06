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

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { DarkmodeToggle } from "../common/darkmode-toggle";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/products" },
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
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex w-1/3 items-center">
          <Link href="/">
            <Image
              src="/aervi-logo.svg"
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
          <Button className="bg-secondary hover:bg-primary/90">
            <Link href="/blog/create">Create Blog</Link>
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
              <div className="flex w-full items-center pl-4 py-2">
                <Link href="/">
                  <Image
                    src="/aervi-logo.svg"
                    alt="company logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>

              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

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
                  className="w-full bg-secondary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/blog/create">Create Blog</Link>
                </Button>

                <div className="absolute bottom-4 left-4">
                  <DarkmodeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
