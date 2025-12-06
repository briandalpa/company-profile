import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-facility.png";
import Image from "next/image";

export const metadata = {
  title: "AERVI | About Us",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "AERVI Founded",
      description:
        "AERVI is established in Singapore as an aerospace engineering and manufacturing company.",
    },
    {
      year: "2012",
      title: "First Regional Jet Program",
      description:
        "AERVI launches its first in-house regional aircraft development program.",
    },
    {
      year: "2016",
      title: "Digital Manufacturing Breakthrough",
      description:
        "Introduction of advanced digital production and smart assembly systems.",
    },
    {
      year: "2019",
      title: "Prototype Flight Tests",
      description:
        "Successful completion of multiple prototype test flights for next-generation platforms.",
    },
    {
      year: "2021",
      title: "First Commercial Deliveries",
      description:
        "Initial aircraft deliveries mark AERVI's entry into commercial aviation operations.",
    },
    {
      year: "2023",
      title: "Sustainable Aviation Initiative",
      description:
        "Launch of company-wide programs focused on low-emission and fuel-efficient aircraft technologies.",
    },
    {
      year: "2024",
      title: "Global Partnerships Expansion",
      description:
        "AERVI expands international partnerships and technical collaboration networks.",
    },
  ];

  const values = [
    {
      title: "Precision Engineering",
      description:
        "Building aircraft through disciplined engineering, rigorous testing, and uncompromising standards.",
    },
    {
      title: "Safety by Design",
      description:
        "Embedding safety, reliability, and resilience into every stage of development.",
    },
    {
      title: "Long-Term Vision",
      description:
        "Investing in future technologies and capabilities beyond short-term industry demands.",
    },
    {
      title: "Sustainable Innovation",
      description:
        "Advancing cleaner, smarter aviation through responsible materials and energy-efficient design.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About AERVI</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AERVI (Aero Engineering & Research for Visionary Innovation) is a
              Singapore-based aerospace engineering company founded in 2009. The
              company designs, manufactures, and supports next-generation
              commercial aircraft, focusing on efficiency, safety, and
              sustainable aviation solutions for global markets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage}
              alt="AERVI advanced manufacturing facility"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To design and deliver reliable, efficient, and environmentally
                responsible aircraft that connect regions, support growth, and
                advance global aviation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To become a globally respected aerospace manufacturer known
                    for engineering excellence, sustainable innovation, and
                    trusted aircraft platforms.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-3xl font-bold text-primary dark:text-secondary">
                        15+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary dark:text-secondary">
                        2,500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Global Team Members
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in AERVI&apos;s growth as a global aerospace
              innovator
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent-green to-primary-light" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg" />

                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-2xl font-bold text-primary dark:text-secondary">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-linear-to-br from-primary-light/20 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Culture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AERVI&apos;s culture is built on long-term vision, engineering
              discipline, and a commitment to advancing global aviation. A
              mindset of continuous improvement guides every stage of aircraft
              design and development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With teams across research, manufacturing, and international
              operations, AERVI fosters collaboration, creativity, and technical
              excellence. The company is committed to shaping the future of
              commercial aviation through safe, reliable, and forward-looking
              aircraft solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
