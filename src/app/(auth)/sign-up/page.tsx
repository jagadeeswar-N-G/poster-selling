"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { trpc } from "@/trpc/client";

import { ZodError } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/components/authProvider";
import { SketchLogoIcon } from "@radix-ui/react-icons";

const Page = () => {
  const { login } = useAuth();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isSeller = searchParams.get("as") === "seller";
  const origin = searchParams.get("origin");

  const AuthCredentialsValidator = z.object({
    userName: z.string().min(4, {
      message: "The user name must be atleast 4 characters",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  });

  type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    login();
    toast({
      description: "You have signed in succesfully",
    });
    router.push("/");
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
          <SketchLogoIcon className="w-40 h-40"/>

            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-up"
            >
              Don&apos;t have an account?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">user name</Label>
                  <Input
                    {...register("userName")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.userName,
                    })}
                    placeholder="User name"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.userName?.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button>Sign in</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
