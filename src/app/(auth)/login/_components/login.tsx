"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { LoginForm, loginSchema } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { INITIAL_LOGIN_FORM } from "@/constants/auth-constant";

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Login Required</CardTitle>
          <p className="text-center text-muted-foreground">
            Please login to create blog posts
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="name@example.com"
                    className="border-border"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="password"
                    placeholder="********"
                    className="border-border"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Login
            </Button>
            <CardFooter className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground">
                Use your email and password to login
              </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
