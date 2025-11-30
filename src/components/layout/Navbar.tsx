"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";
// import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  // const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Service", path: "/products" },
    { name: "Teams", path: "/teams" },
    { name: "Blog", path: "/blog" },
  ];
  */

  // const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background shadow-sm" : "bg-background"
      )}
    >
      <div className="flex w-full items-center justify-between px-37 py-6">
        {" "}
        <Link href="/">
          <Image
            src="/comac-logo.svg"
            alt="company logo"
            width={60}
            height={60}
            className=""
          />
        </Link>
        <div className="flex w-full items-center justify-center gap-3 hover:cursor-pointer">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/products">Products & Service</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Company Profile</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Chairman&apos;s Oration</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Management Overview</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">About Us</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>
                  Products & Service
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">C909</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">C919</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">C929</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Operation Support & Service</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Market Forecast Report</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/teams">Teams</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <Button className="bg-primary hover:bg-primary/90">
            <Link href="/dashboard">Create Blog</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

/*
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
*/
