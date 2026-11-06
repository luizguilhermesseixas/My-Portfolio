import React from "react";
import CrocodileIcon from "../../icons/crocodile.svg";
import PageHeading from "../../components/PageHeading";
import ButtonLink from "../../components/ButtonLink";

export default function AboutPage() {
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
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <PageHeading
        text="About Me"
        className="mb-8 justify-center md:justify-start"
        icon={
          <CrocodileIcon className="w-14 h-14 md:w-20 md:h-20 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        }
      />
      <div className="bg-surface border border-line rounded-2xl shadow-sm p-6 sm:p-10">
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          I am a Full Stack Software Engineer passionate about building robust,
          scalable, and user-focused web applications. My experience spans the
          development and optimization of billing, invoicing, and subscription
          management systems, always prioritizing code quality,
          maintainability, and system reliability. I thrive in agile,
          cross-functional teams and committed to best practices in code
          review, testing, and CI/CD.
        </p>
        <p className="text-lg md:text-xl text-muted leading-relaxed mt-6">
          Currently, I am deepening my expertise in cloud computing—especially
          AWS—and continuously embracing new technologies to drive innovation.
          You can find my main tech stack highlighted below.
        </p>
        <div className="bg-surface-muted rounded-xl p-5 sm:p-6 mt-8">
          <h2 className="text-2xl font-bold text-heading mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {techStacks.map((stack) => (
              <li
                key={stack}
                className="bg-chip text-chip-text px-3 py-1 rounded-full text-sm font-medium"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <ButtonLink href="/projects" variant="primary" className="flex-1">
          View Projects
        </ButtonLink>
        <ButtonLink href="/Luiz_Seixas_Resume.pdf" download className="flex-1">
          Download CV
        </ButtonLink>
        <ButtonLink href="/contact" className="flex-1">
          Contact Me
        </ButtonLink>
      </div>
    </section>
  );
}
