import SignupFormDemo from "@/components/signupForm";
import { DotBackground } from "@/components/ui/dotBackgroung";

export default function SignUp() {
  return (
    <div className="h-svh w-full ">
      <div className="absolute inset-0 z-0 h-full w-full">
        <DotBackground />
      </div>
      <div className="flex justify-center items-center h-full w-full relative z-10">
        <SignupFormDemo />
      </div>
    </div>
  );
}
