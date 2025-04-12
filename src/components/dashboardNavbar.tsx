"use client";
import { useSession } from "next-auth/react";
import { RootSidebar } from "./rootSidebar";
import { ReactNode } from "react";
import { FaCog } from "react-icons/fa";

type DashboardNavbarProps = {
  children: ReactNode;
};

export default function DashboardNavbar({ children }: DashboardNavbarProps) {
  const { data: session } = useSession();
  return (
    <div className="flex justify-start bg-gradient-to-tr from-black/90  to-black/95 text-white">
      <div className="">
        <RootSidebar />
      </div>
      <div className="w-full h-full">
        <div className="h-13 border w-full bg-white shadow px-6 py-3 flex items-center justify-end">
         

          <div className="flex gap-6 items-center">
            <div className="text-gray-600 text-lg"><FaCog/></div>

            

            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">
                {session?.user?.name}
              </span>
              <div className="w-9 h-9 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
