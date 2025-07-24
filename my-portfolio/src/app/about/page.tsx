"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import CrocodileIcon from "../../icons/crocodile.svg";

export default function AboutPage() {
  const fullText = "About Me";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayed]);

  const techStacks = [
    "Python",
    "Node.js",
    "Ruby on Rails",
    "Java",
    "Vue",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "TailwindCSS",
    "SQL",
    "Docker",
    "RESTful APIs",
    "Code Review",
    "Automated Testing",
    "CI/CD",
    "Git",
    "Agile",
    "AWS",
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-2 sm:px-4">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl flex items-center mb-8 justify-center md:justify-start">
          <h1 className="text-4xl md:text-6xl font-sans text-primary-500 text-center md:text-left">
            {displayed}
          </h1>
          <CrocodileIcon className="w-16 h-16 md:w-20 md:h-20 ml-4 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        </div>
        <div className="w-full max-w-4xl bg-primary-50 rounded-xl shadow-md px-4 sm:px-8 lg:px-16 py-8 mb-8 transition-colors">
          <p className="text-lg md:text-xl font-sans text-primary-600 leading-relaxed text-left px-0">
            I am a Full Stack Software Engineer passionate about building
            robust, scalable, and user-focused web applications. My experience
            spans the development and optimization of billing, invoicing, and
            subscription management systems, always prioritizing code quality,
            maintainability, and system reliability. I thrive in agile,
            cross-functional teams and committed to best practices in code
            review, testing, and CI/CD.
            <br />
            <br />
            Currently, I am deepening my expertise in cloud computing—especially
            AWS—and continuously embracing new technologies to drive innovation.
            You can find my main tech stack highlighted below.
          </p>
          <div className="bg-primary-100 rounded-xl shadow-md p-4 sm:p-8 mt-8 transition-colors w-full">
            <h2 className="text-2xl font-bold text-primary-600 mb-4 text-left">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3 justify-start">
              {techStacks.map((stack) => (
                <span
                  key={stack}
                  className="bg-primary-200 text-primary-700 px-3 py-1 rounded font-medium transition-transform duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 w-full max-w-4xl">
          <a
            href="/Luiz_Seixas_Resume.pdf"
            download
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-sans text-lg font-semibold hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            Download CV
          </a>
          <Link
            href="/projects"
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-sans text-lg font-semibold hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-sans text-lg font-semibold hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
