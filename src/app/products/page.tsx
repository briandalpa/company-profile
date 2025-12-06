import {
  GraduationCap,
  WrenchIcon,
  Settings,
  LightbulbIcon,
  PlaneTakeoff,
  Plane,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import a90Image from "@/assets/a90-aircraft.jpg";
import a190Image from "@/assets/a190-aircraft.jpg";
import a300Image from "@/assets/a300-aircraft.jpg";
import Image from "next/image";

export const metadata = {
  title: "AERVI | Products & Services",
};

export default function ProductsPage() {
  const products = [
    {
      name: "AERVI A90",
      image: a90Image,
      description:
        "A90 is a next-generation regional jet engineered for short to medium-haul routes, optimized for fuel efficiency, low operating cost, and regional airport flexibility.",
      specifications: [
        "Seating: 80 to 98 passengers",
        "Range: 2,800 to 3,900 kilometers",
        "Cruise Speed: Mach 0.78",
        "Primary Use: Regional commercial operations",
      ],
      status: "Active service with regional carriers",
    },
    {
      name: "AERVI A190",
      image: a190Image,
      description:
        "A190 is a narrow-body commercial aircraft designed to deliver high efficiency, passenger comfort, and advanced digital flight systems for high-frequency routes.",
      specifications: [
        "Seating: 160 to 195 passengers",
        "Range: 4,200 to 5,800 kilometers",
        "Avionics: Full digital glass cockpit",
        "Primary Use: Medium-haul commercial routes",
      ],
      status: "Certified and in commercial operation",
    },
    {
      name: "AERVI A300",
      image: a300Image,
      description:
        "A300 is a wide-body aircraft platform developed for long-haul international travel, focusing on cabin comfort, advanced composite materials, and reduced fuel burn.",
      specifications: [
        "Seating: 260 to 310 passengers",
        "Category: Wide-body aircraft",
        "Focus: Long-range international transport",
      ],
      status: "Engineering validation phase",
    },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Pilot & Crew Training",
      description:
        "Comprehensive training programs for pilots, flight crews, and technical teams using advanced simulators and real-world operational scenarios.",
      features: [
        "Full-flight simulators",
        "Type rating programs",
        "Cabin crew safety training",
        "Maintenance certification courses",
        "Digital training manuals",
      ],
      color: "secondary",
    },
    {
      icon: Plane,
      title: "Operational Technical Support",
      description:
        "End-to-end technical assistance for airline operations, performance optimization, and real-time operational advisory services.",
      features: [
        "On-site field engineering",
        "Performance analysis",
        "Flight operations software",
        "Technical documentation",
        "24/7 engineering support",
      ],
      color: "secondary",
    },
    {
      icon: WrenchIcon,
      title: "Spare Parts & Logistics",
      description:
        "Global spare parts supply and logistics support to minimize aircraft downtime and keep fleets operating reliably.",
      features: [
        "AOG rapid response support",
        "Global parts distribution",
        "Component repair coordination",
      ],
      color: "secondary",
    },
    {
      icon: Settings,
      title: "Maintenance & MRO Support",
      description:
        "Maintenance engineering support for aircraft reliability, inspections, and structural modifications across the fleet lifecycle.",
      features: [
        "Scheduled maintenance planning",
        "Aircraft modification support",
        "Ground equipment technical services",
        "Maintenance documentation",
      ],
      color: "secondary",
    },
    {
      icon: LightbulbIcon,
      title: "Digital & Engineering Solutions",
      description:
        "Advanced digital engineering services including flight data analytics and customized aircraft solutions.",
      features: [
        "Flight data monitoring",
        "Predictive maintenance analytics",
        "Custom aircraft configurations",
      ],
      color: "secondary",
    },
    {
      icon: PlaneTakeoff,
      title: "AERVI Nexus",
      description:
        "A digital customer platform providing access to technical resources, fleet data, and operational tools.",
      features: [
        "Fleet management dashboard",
        "Real-time flight performance monitoring",
        "Maintenance scheduling and tracking",
        "Digital access to technical manuals",
      ],
      color: "secondary",
    },
  ];

  const testimonials = [
    {
      quote:
        "AERVI aircraft have transformed our regional network. The reliability and operating economics have exceeded industry expectations.",
      author: "Daniel Tan",
      role: "Fleet Operations Director, Pacific Skies Airways",
    },
    {
      quote:
        "The engineering support from AERVI has been world-class. Their technical team operates with speed, precision, and real partnership.",
      author: "Amelia Hart",
      role: "Chief Technical Officer, Aurora Air Group",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-light/20 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advanced aircraft platforms built on precision engineering,
              digital innovation, and globally recognized airworthiness
              standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-linear-to-r from-primary/10 via-background group hover:shadow-xl transition-all duration-300 animate-fade-in border-border overflow-hidden py-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent md:bg-linear-to-r" />
                    <div className="absolute bottom-6 left-6 md:hidden">
                      <h3 className="text-3xl font-bold text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6 text-primary hover:text-secondary transition-all duration-300">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 hidden md:block dark:text-secondary">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed dark:text-foreground">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-primary dark:text-secondary">
                        Key Specifications
                      </h4>
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 dark:bg-secondary" />
                          <span className="text-sm text-muted-foreground dark:text-foreground">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                        <span className="text-sm font-medium text-secondary">
                          {product.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-light/20 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              End-to-end aviation support designed around reliability,
              efficiency, and operational excellence — built to keep fleets
              mission ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-${service.color}/10 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-2 pt-6 border-t border-border">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by aviation partners across the globe
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8 space-y-6">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
