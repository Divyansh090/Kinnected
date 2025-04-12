"use client";
import DashboardPage from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const handleClick = () => {
    signOut();
    router.push("/");
  };
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <DashboardPage />
      </div>
    );
  }
  return (
    <div>
      Please Log In you Account <Link href="/signin">By clicking here !</Link>
    </div>
  );
}
