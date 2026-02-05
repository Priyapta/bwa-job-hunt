"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSignInScema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function SignInPage() {
  const form = useForm<z.infer<typeof formSignInScema>>({
    resolver: zodResolver(formSignInScema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof formSignInScema>) => {
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });
    console.log(authenticated);
    if (authenticated?.error) {
      toast.error("Failed", {
        description: "Email or password maybe wrong",
      });
      return;
    }
    router.push("/");
  };
  return (
    <div>
      <div className=" text-3xl text-center font-semibold mb-7">
        Welcome Back,
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="text-gray-500 text-sm">
            Don't have account?{" "}
            <Link href="/signup" className="text-primary font-medium">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SignInPage;
