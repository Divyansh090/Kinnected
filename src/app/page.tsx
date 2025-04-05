"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const click = () => {
  router.push("/signin")
  }
  return (
   <div>
    hey its landing page!
    <button onClick={click} className="bg-blend-hue">click me!</button>
   </div>
  );
}
