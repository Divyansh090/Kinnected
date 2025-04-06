"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlowingEffect } from "./ui/glowing-effect";

export default function SignInForm() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // router.push("/dashboard");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none  p-4 md:rounded-2xl md:p-8 bg-black text-white relative">
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={50}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative border-0.75">
        <h2 className="text-xl font-bold text-neutral-200 flex justify-center items-center">
          Welcome to Kinnected
        </h2>
        <p className="mt-2 max-w-sm text-sm  text-neutral-300"></p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-medium text-white  bg-zinc-800 from-zinc-900 to-zinc-900 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign In &rarr;
            <BottomGradient />
          </button>

          <p className="flex justify-center items-center text-gray-300 text-sm gap-1 mt-1 opacity-70 ">
            If you don't have an account
            <Link className="text-blue-300 underline " href="/signup">
              {" "}
              Sign Up
            </Link>
          </p>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent  to-transparent via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn  relative flex h-10 w-full items-center justify-start space-x-2 rounded-md  px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-300" />
              <span className="text-sm text-neutral-300">GitHub</span>
              <BottomGradient />
            </button>
            <button
              className="group/btn  relative flex h-10 w-full items-center justify-start space-x-2 rounded-md  px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
              <span className="text-sm text-neutral-300">Google</span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
