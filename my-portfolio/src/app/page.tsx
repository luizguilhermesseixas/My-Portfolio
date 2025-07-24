"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DinosaurIcon from "@/icons/dinosaur.svg"; // Adjust the import path as necessary

export default function HomePage() {
  const fullText = "Hi, I'm Luiz Seixas!";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayed]);

  return (
    <section className="max-w-2xl mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-2 md:gap-4 mb-4 min-h-[3.5rem]">
        <h1 className="text-4xl md:text-6xl font-sans text-primary-500 text-center md:text-left ">
          {displayed}
        </h1>
        <DinosaurIcon className="w-16 h-16 md:w-20 md:h-20 text-primary-500 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6 md:mb-[-12px]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-sans text-primary-600 mb-6 text-center md:text-left mt-8">
        Software Engineer passionate about building robust and efficient
        solutions.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-24">
        <a
          href="/Luiz_Seixas_Resume.pdf"
          download
          className="border border-primary-500 text-primary-500 px-8 py-3 rounded font-sans text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors w-full sm:w-auto max-w-xs mx-auto sm:mx-0 text-center"
        >
          Download CV
        </a>
        <Link
          href="/projects"
          className="border border-primary-500 text-primary-500 px-8 py-3 rounded font-sans text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors w-full sm:w-auto max-w-xs mx-auto sm:mx-0 text-center"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
