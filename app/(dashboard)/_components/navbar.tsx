"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-300">Search</div>
      <UserButton />
    </div>
  );
}
