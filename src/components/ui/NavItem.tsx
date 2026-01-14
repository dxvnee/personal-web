import { cn } from "@/lib/utils";
import { NavColor, navColors } from "@/styles/palette";
import React from "react";

type NavItemProps = {
  href: string;
  color: NavColor;
  children: React.ReactNode;
};

export default function NavItem({ href, color, children }: NavItemProps) {
  const c = navColors[color];

  return (
    <a href={href} className={cn("relative px-4 py-2 text-sm text-gray-400 transition-colors group", c.text)}>
      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Hover background */}
      <span className={cn("absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity", c.bg)} />

      {/* Glow underline */}
      <span className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-3/4 transition-all", c.line, c.glow)} />
    </a>
  );
}
