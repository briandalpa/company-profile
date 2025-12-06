"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { BlogForm, blogSchemaForm } from "@/validations/create-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { INITIAL_CREATE_FORM } from "@/constants/blog-constant";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function Create() {
  const form = useForm<BlogForm>({
    resolver: zodResolver(blogSchemaForm),
    defaultValues: INITIAL_CREATE_FORM,
  });

  const onSubmit = (data: BlogForm) => {
    console.log("Form is valid!", data);
    toast.success("Blog posted!");
    form.reset();
    redirect("/blog");
  };

  return (
    <div className="min-h- pt-10">
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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base font-semibold">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your blog post title"
                    {...form.register("title")}
                    className="bg-background border-border"
                  />
                  {form.formState.errors.title && (
                    <p className="text-destructive text-sm">
                      {form.formState.errors.title.message}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-base font-semibold">
                    Category
                  </Label>
                  <Input
                    id="category"
                    placeholder="e.g., Innovation, Technology"
                    {...form.register("category")}
                    className="bg-background border-border"
                  />
                  {form.formState.errors.category && (
                    <p className="text-destructive text-sm">
                      {form.formState.errors.category.message}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-base font-semibold">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    rows={10}
                    placeholder="Write your blog content here..."
                    {...form.register("content")}
                    className="bg-background border-border"
                  />
                  {form.formState.errors.content && (
                    <p className="text-destructive text-sm">
                      {form.formState.errors.content.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90 py-2 hover:cursor-pointer"
                  >
                    Publish Post
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={() => redirect("/")}
                    className="flex-1 py-2 hover:cursor-pointer"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary/10 border-primary/10">
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
