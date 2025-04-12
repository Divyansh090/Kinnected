"use client";
import LandingPage from "@/components/landingPage";
import { NavbarDemo } from "@/components/landingNavbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const click = () => {
    router.push("/signin");
  };
  return (
    <div className="bg-black text-white h-full">
      <NavbarDemo />
    </div>
  );
}
