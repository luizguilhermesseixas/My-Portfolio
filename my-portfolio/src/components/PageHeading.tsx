"use client";

import React, { useEffect, useState } from "react";

type PageHeadingProps = {
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function PageHeading({
  text,
  icon,
  className = "",
}: PageHeadingProps) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLength(text.length);
      return;
    }
    if (length < text.length) {
      const timeout = setTimeout(() => setLength(length + 1), 100);
      return () => clearTimeout(timeout);
    }
  }, [length, text]);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight">
        <span className="sr-only">{text}</span>
        <span aria-hidden="true" className="relative block">
          <span className="invisible">{text}</span>
          <span className="absolute inset-0">{text.slice(0, length)}</span>
        </span>
      </h1>
      {icon}
    </div>
  );
}
