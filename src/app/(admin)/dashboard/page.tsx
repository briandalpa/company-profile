"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Create Blog Post
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your insights and expertise with the aerospace community
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base font-semibold">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your blog post title"
                    className="text-lg border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-base font-semibold">
                    Category
                  </Label>
                  <Input
                    id="category"
                    placeholder="e.g., Innovation, Technology, Safety"
                    className="border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content" className="text-base font-semibold">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog post content here..."
                    rows={15}
                    className="resize-none border-border"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Supports markdown formatting
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Publish Post
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    // onClick={() => navigate("/blog")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary-light/20 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Writing Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use clear and concise language</li>
                <li>• Include relevant technical details and data</li>
                <li>• Break content into sections with subheadings</li>
                <li>• Add examples and real-world applications</li>
                <li>• Proofread before publishing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
