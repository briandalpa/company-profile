import {
  GraduationCap,
  WrenchIcon,
  Settings,
  LightbulbIcon,
  PlaneTakeoff,
  Plane,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import c909Image from "@/assets/c909-aircraft.png";
import c919Image from "@/assets/c919-aircraft.png";
import c929Image from "@/assets/c929-aircraft.png";
import Image from "next/image";

export default function ProductsPage() {
  const products = [
    {
      name: "COMAC C909",
      image: c909Image,
      description:
        "C909 aircraft is the first short-medium range turbofan regional aircraft independently developed by China in accordance with international civil aviation regulations, it owns independent intellectual property right.",
      specifications: [
        "Layout: 78 to 97 seats",
        "Range: 2,225 to 3,700 kilometers",
        "Type Certificate: December 30, 2014 (CAAC)",
        "Production Certificate: July 9, 2017 (CAAC)",
      ],
      status: "In route operation with strong market performance",
    },
    {
      name: "COMAC C919",
      image: c919Image,
      description:
        "C919 aircraft is the first jet type trunk liner independently developed by China in accordance with international airworthiness standards and owning independent intellectual property right.",
      specifications: [
        "Layout: 158 to 192 seats",
        "Range: 4,075 to 5,555 kilometers",
        "First Rollout: November 2, 2015",
        "First Flight: May 5, 2017",
        "Type Certificate: September 29, 2022 (CAAC)",
        "First Delivery: December 9, 2022",
      ],
      status: "Commercial operation since May 28, 2023",
    },
    {
      name: "COMAC C929",
      image: c929Image,
      description:
        "The baseline version of C929 wide-body aircraft accommodates 280 seats, effectively meeting the global demand for international and regional air passenger transport.",
      specifications: [
        "Layout: 280 seats (baseline)",
        "Category: Wide-body aircraft",
        "Purpose: International and regional transport",
      ],
      status: "In development",
    },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "A comprehensive training portfolio of flight, maintenance, cabin crew, and operation control personnel, real-flight, in addition with dry and wet rental services for flight simulators.",
      features: [
        "Real Flight Service",
        "Flight Training",
        "Maintenance Training",
        "Cabin Crew Training",
        "Operation Control Personnel Training",
        "Simulator Rental",
        "Training Document",
      ],
      color: "secondary",
    },
    {
      icon: Plane,
      title: "Flight and Operation Technical Support",
      description:
        "An offering of field service support, flight and operations technical support, flight operations software provision and technical advisory.",
      features: [
        "Field Service Support",
        "Airport Engineering",
        "Flight Operation Technical Support",
        "Flight Operation Technical Advisory",
        "Flight and Operation Software",
        "Flight and Operation Technical Publications",
      ],
      color: "secondary",
    },
    {
      icon: WrenchIcon,
      title: "Spare Parts Support",
      description:
        "We provide customers with 7x24 hours spares support to ensure customers can obtain the necessary spares for COMAC aircraft maintenance in time and resume normal flight.",
      features: [
        "AOG (Aircraft on Ground) Spares Support",
        "Spares Business Support",
        "7x24 hours spare parts support",
      ],
      color: "secondary",
    },
    {
      icon: Settings,
      title: "Maintenance Support",
      description:
        "Dedicated to help with aircraft maintenance and modification, maintenance solutions, reliability and support, MRO checklist, GSE technical services, maintenance-related technical publications.",
      features: [
        "Aircraft Maintenance",
        "Maintenance Engineering Support",
        "Ground Support Equipment Technical Service",
        "Maintenance Technical Publications",
      ],
      color: "secondary",
    },
    {
      icon: LightbulbIcon,
      title: "Diversified Solutions",
      description:
        "Solutions of industrial design, flight data analysis and customized solutions.",
      features: [
        "Industrial Design",
        "Flight Data Analysis",
        "Customized Solutions",
      ],
      color: "secondary",
    },
    {
      icon: PlaneTakeoff,
      title: "FLYWIN",
      description:
        "A digital access to customer service platforms, platform products and engineering drawings.",
      features: ["Intelligent Operation and Maintenance Services"],
      color: "secondary",
    },
  ];

  const testimonials = [
    {
      quote:
        "COMAC's C919 represents a significant leap in commercial aviation. The aircraft's efficiency and comfort have exceeded our expectations.",
      author: "Zhang Wei",
      role: "Fleet Manager, China Eastern Airlines",
    },
    {
      quote:
        "Working with COMAC on our fleet modernization has been exceptional. Their commitment to innovation and customer service is outstanding.",
      author: "Li Ming",
      role: "Operations Director, Air China",
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
              Leading the future of commercial aviation with independently
              developed aircraft meeting international airworthiness standards.
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
                className="bg-linear-to-r from-primary/40 via-background group hover:shadow-xl transition-all duration-300 animate-fade-in border-border overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative flex items-center justify-center h-80 md:h-auto overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full max-w-4xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                    <div className="absolute bottom-6 left-6 md:hidden">
                      <h3 className="text-3xl font-bold text-foreground">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6 text-primary hover:text-secondary transition-all duration-300">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 hidden md:block">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
                        Key Specifications
                      </h4>
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground">
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
              COMAC offers specialized and efficient customer service for
              civilian aircraft, customer is our top priority, we create value
              for customers and aim to deliver a superior service experience.
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
              Trusted by leading airlines worldwide
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
