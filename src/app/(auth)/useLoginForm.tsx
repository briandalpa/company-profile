import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "./login";
import { redirect } from "next/navigation";

export const useLoginForm = () => {
  const form = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
    redirect("/dashboard");
  };

  return { form, onSubmit };
};
