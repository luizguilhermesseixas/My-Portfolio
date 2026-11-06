import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Luiz Seixas. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-primary-300">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            className="underline underline-offset-2 hover:text-primary-50"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="underline underline-offset-2 hover:text-primary-50"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
