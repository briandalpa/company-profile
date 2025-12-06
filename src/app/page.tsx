import {
  ArrowRight,
  Plane,
  BadgeCheck,
  Handshake,
  Award,
  Factory,
  Settings,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-aircraft.png";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AERVI | Home",
};

export default function HomePage() {
  const stats = [
    { icon: Plane, value: "3", label: "Aircraft Programs" },
    { icon: BadgeCheck, value: "180+", label: "Aircraft Delivered" },
    { icon: Handshake, value: "1,200+", label: "Global Orders" },
    { icon: Award, value: "15+ Years", label: "Engineering Excellence" },
  ];

  const services = [
    {
      title: "Aircraft Design & Engineering",
      description:
        "End-to-end aircraft design for regional and narrow-body platforms, engineered to international airworthiness standards.",
      icon: Settings,
    },
    {
      title: "Advanced Manufacturing",
      description:
        "Integrated digital manufacturing and final assembly across AERVI's smart production facilities.",
      icon: Factory,
    },
    {
      title: "Research & Innovation",
      description:
        "Frontier research in sustainable materials, aerodynamics, and next-generation flight systems.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-20 lg:pt-30 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-light/30 via-background to-accent/20 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary dark:text-secondary dark:bg-secondary/10">
                <span className="w-2 h-2 bg-primary dark:bg-secondary rounded-full animate-pulse" />
                <span>Powering Singapore&apos;s Aviation Future</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting the Future of{" "}
                <span className="text-secondary">Aviation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                AERVI (Aero Engineering & Research for Visionary Innovation) is
                a Singapore-based aerospace engineering company focused on the
                design, manufacturing, and advancement of next-generation
                commercial aircraft. Through precision engineering, digital
                manufacturing, and a commitment to sustainable innovation, AERVI
                delivers aircraft platforms built for efficiency, reliability,
                and global connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/products">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-accent-green/20 rounded-3xl blur-3xl" />
              <Image
                src={heroImage}
                alt="Modern commercial aircraft"
                className="relative w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl dark:bg-secondary/10">
                  <stat.icon className="w-6 h-6 text-primary dark:text-secondary" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Integrated capabilities across aircraft engineering, smart
              manufacturing, and next-generation aerospace technologies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-linear-to-br from-primary to-primary/80 border-0 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Take Flight?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Join the new era of intelligent aviation. Discover how AERVI
                  is shaping the future of commercial flight through advanced
                  engineering, sustainable manufacturing, and bold technological
                  vision.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/blog">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
