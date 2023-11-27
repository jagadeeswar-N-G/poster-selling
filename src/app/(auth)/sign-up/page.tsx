"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
import { z } from "zod";
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/Validators/signUpValidators";

const Page = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({ // we are giving the generic type
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onsubmit = ({email, password} : TAuthCredentialsValidator ) => {
    //send this data to the backend
  }
  const router = useRouter();

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-40 w-40" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email"> Email</Label>
                  <Input
                  {...register('email')}
                    className={cn("mt-2", {
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="Email"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password"> Password</Label>
                  <Input
                  {...register('password')}
                    className={cn("mt-2", {
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="******"
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
