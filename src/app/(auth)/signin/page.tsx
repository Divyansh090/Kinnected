import SignInForm from "@/components/signinForm";
import { DotBackground } from "@/components/ui/dotBackgroung";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function SignIn() {
  return (
    <div>
      <div className="absolute inset-0 z-0">
        <DotBackground />
      </div>

      <div className="flex justify-center items-center h-svh w-full relative z-10">
        <SignInForm />
      </div>
    </div>
  );
}
