import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-400 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Luiz Seixas. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            className="text-primary-300 hover:text-primary-200"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-primary-300 hover:text-primary-200"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}