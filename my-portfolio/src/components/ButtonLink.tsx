import React from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors text-center";

const variants = {
  primary:
    "bg-accent text-accent-contrast border border-accent hover:opacity-90",
  secondary:
    "border border-accent text-accent hover:bg-accent hover:text-accent-contrast",
};

export default function ButtonLink({
  href,
  children,
  variant = "secondary",
  download,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
