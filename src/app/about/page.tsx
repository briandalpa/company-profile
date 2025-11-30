import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-facility.jpg";
import Image from "next/image";

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
      title: "COMAC Founded",
      description:
        "Commercial Aircraft Corporation of China, Ltd. officially established in Shanghai.",
    },
    {
      year: "2010",
      title: "C909 Maiden Flight",
      description:
        "China's first new-generation regional jet successfully completes its maiden flight.",
    },
    {
      year: "2015",
      title: "C919 Rollout",
      description:
        "China's first homegrown large passenger aircraft is unveiled to the world.",
    },
    {
      year: "2017",
      title: "C919 Maiden Flight",
      description:
        "The C919 completes its first successful test flight, marking a major milestone.",
    },
    {
      year: "2022",
      title: "C909 & C919 Deliveries",
      description:
        "ARJ21 enters stable commercial operation; the first C919 is delivered to China Eastern Airlines.",
    },
    {
      year: "2023",
      title: "C919 Commercial Service",
      description:
        "C919 completes its first commercial passenger flight, entering official market operation.",
    },
    {
      year: "2024",
      title: "Global Market Expansion",
      description:
        "International interest increases; COMAC opens and expands global offices and cooperation programs.",
    },
  ];

  const values = [
    {
      title: "Mission-Driven",
      description:
        "Committed to letting China-made large aircraft fly in the blue sky.",
    },
    {
      title: "Safety & Responsibility",
      description:
        "Building aircraft that prioritize safety, reliability, and public trust.",
    },
    {
      title: "Perseverance",
      description:
        "Guided by the spirit of 'never give up' throughout long-term development cycles.",
    },
    {
      title: "Innovation & Advancement",
      description:
        "Pursuing breakthroughs to make commercial aviation more efficient, economical, and sustainable.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About COMAC</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commercial Aircraft Corporation of China, Ltd. (COMAC), founded in
              2008 in Shanghai, is China&apos;s primary developer of large
              passenger aircraft. The company oversees the design,
              manufacturing, testing, and global support of trunk liner and
              regional jet programs, advancing safe, economical, and
              environmentally friendly commercial aviation.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage}
              alt="COMAC manufacturing facility"
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
                To let China-made large aircraft fly in the blue sky by
                developing safe, cost-effective, comfortable, and
                environmentally friendly commercial aircraft that meet global
                aviation needs.
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
                    To deliver safer, more economical, comfortable, and
                    environment-friendly commercial aircraft, and to build COMAC
                    into a globally competitive aerospace manufacturer.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        10K+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Team Members
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
              Key milestones in COMAC&apos;s evolution as a global aerospace
              leader
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
                          <span className="text-2xl font-bold text-primary">
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
              COMAC&apos;s culture is built on long-term vision, innovation, and
              the drive to strengthen China&apos;s aviation industry. The “Four
              Long-Terms” and a spirit of perseverance guide every stage of
              aircraft development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With teams across research, manufacturing, and global operations,
              COMAC fosters collaboration, creativity, and technical excellence.
              The company is committed to shaping the future of commercial
              aviation with safe and reliable aircraft.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
