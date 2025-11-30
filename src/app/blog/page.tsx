"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import heroImage from "@/assets/about-facility.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  photo: StaticImageData;
}

export default function BlogPage() {
  const [blogs] = useState<BlogPost[]>([
    {
      id: "1",
      title: "The Future of Sustainable Aviation",
      excerpt:
        "Exploring COMAC's commitment to green aviation technology and our roadmap for reducing carbon emissions in commercial flight.",
      author: "Dr. Chen Wei",
      date: "2025-01-15",
      category: "Innovation",
      readTime: "5 min read",
      photo: heroImage,
    },
    {
      id: "2",
      title: "C919: A Milestone in Chinese Aerospace",
      excerpt:
        "Behind the scenes of developing China's first domestically-produced large commercial aircraft and the journey to certification.",
      author: "Li Xiaoming",
      date: "2025-01-10",
      category: "Aircraft",
      readTime: "8 min read",
      photo: heroImage,
    },
    {
      id: "3",
      title: "Advanced Materials in Modern Aircraft Design",
      excerpt:
        "How composite materials and advanced alloys are revolutionizing aircraft construction and improving performance.",
      author: "Wang Jing",
      date: "2025-01-05",
      category: "Technology",
      readTime: "6 min read",
      photo: heroImage,
    },
    {
      id: "4",
      title: "Digital Twin Technology in Manufacturing",
      excerpt:
        "Leveraging digital twin technology to optimize our manufacturing processes and ensure superior quality control.",
      author: "Zhang Ming",
      date: "2024-12-28",
      category: "Manufacturing",
      readTime: "7 min read",
      photo: heroImage,
    },
    {
      id: "5",
      title: "Safety First: Our Certification Process",
      excerpt:
        "An in-depth look at the rigorous testing and certification procedures that ensure every COMAC aircraft meets global safety standards.",
      author: "Liu Hua",
      date: "2024-12-20",
      category: "Safety",
      readTime: "10 min read",
      photo: heroImage,
    },
    {
      id: "6",
      title: "Global Partnerships Driving Innovation",
      excerpt:
        "How strategic international collaborations are accelerating technological advancement and market expansion.",
      author: "Chen Li",
      date: "2024-12-15",
      category: "Business",
      readTime: "5 min read",
      photo: heroImage,
    },
  ]);

  const categories = [
    "All",
    "Innovation",
    "Aircraft",
    "Technology",
    "Manufacturing",
    "Safety",
    "Business",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-light/20 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest news, innovations, and insights from
              COMAC&apos;s aerospace experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Card
                key={blog.id}
                className="group pt-0 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-linear-to-br from-primary/20 to-accent-green/20 relative overflow-hidden">
                    <Image src={heroImage} alt="airplane" fill className="" />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="pt-4 border-t border-border space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(blog.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No blog posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-linear-to-br from-primary to-primary/80 border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Want to Contribute?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Share your insights and expertise with the aerospace community.
                Create your own blog post and contribute to the conversation.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">
                  Write a Post <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
