"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
  login: {
    uuid: string;
  };
}

export default function TeamsPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        setTeam(data.results);
      } catch {
        toast.error("Error", {
          description: "Failed to load team members. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const teamData = [
    {
      role: "Chief Executive Officer",
      bio: "Strategic leader driving AERVI's vision to redefine commercial aviation through innovation, precision, and global collaboration.",
    },
    {
      role: "Chief Technology Officer",
      bio: "Architect of AERVI's digital aircraft platforms, advancing intelligent systems and next-generation flight technologies.",
    },
    {
      role: "VP of Engineering",
      bio: "Leading multidisciplinary engineering teams to deliver high-performance, scalable aircraft architectures.",
    },
    {
      role: "VP of Operations",
      bio: "Optimizing smart manufacturing ecosystems to ensure efficiency, reliability, and production excellence.",
    },
    {
      role: "Lead Aircraft Designer",
      bio: "Shaping AERVI's design philosophy with a focus on aerodynamic efficiency, passenger experience, and sustainability.",
    },
    {
      role: "Senior Aerodynamics Engineer",
      bio: "Specialist in airflow optimization and drag reduction for next-generation, fuel-efficient aircraft.",
    },
    {
      role: "Manufacturing Director",
      bio: "Driving implementation of digital factories and precision assembly techniques across AERVI facilities.",
    },
    {
      role: "Quality Assurance Lead",
      bio: "Maintaining uncompromising standards through advanced testing, validation, and continuous improvement systems.",
    },
    {
      role: "R&D Manager",
      bio: "Accelerating breakthroughs in sustainable propulsion, lightweight materials, and future-ready aircraft systems.",
    },
    {
      role: "Supply Chain Director",
      bio: "Building resilient global supply networks focused on speed, transparency, and long-term partnerships.",
    },
    {
      role: "Safety & Compliance Officer",
      bio: "Embedding safety-first culture through rigorous certification strategy and risk management frameworks.",
    },
    {
      role: "Customer Relations Manager",
      bio: "Cultivating strategic airline and partner relationships to deliver long-term value and trust.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A multidisciplinary team of engineers, designers, and specialists
              working together to advance next-generation aircraft and aerospace
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="w-full aspect-square bg-muted rounded-xl mb-4" />
                    <div className="h-4 bg-muted rounded mb-2" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card
                  key={member.login.uuid}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6 space-y-4 pt-0">
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                      <Image
                        src={member.picture.large}
                        alt={`${member.name.first} ${member.name.last}`}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">
                        {member.name.first} {member.name.last}
                      </h3>
                      <p className="text-sm text-primary dark:text-secondary font-medium">
                        {teamData[index].role}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {teamData[index].bio}
                      </p>
                      <div className="pt-3 space-y-2 border-t border-border">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {member.location.city}, {member.location.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re building the future of aerospace through precision
              engineering, bold ideas, and world-class craftsmanship. If
              you&apos;re driven to create what&apos;s next in aviation,
              we&apos;d love to connect.
            </p>
            <div className="pt-4">
              <a
                href="mailto:contact@aervi.aero"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
