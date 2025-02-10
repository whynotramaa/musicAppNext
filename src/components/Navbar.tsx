"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarMenu  () {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Contact">
        <HoveredLink href="/">Instagram</HoveredLink> <br />
        <HoveredLink href="/">Twitter</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <HoveredLink href="/">DSA</HoveredLink> <br />
        <HoveredLink href="/">React</HoveredLink> <br />
        <HoveredLink href="/">NEXT JS</HoveredLink>
        </MenuItem>

      </Menu>
    </div>
  );
}
