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
    "Tailwind CSS",
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
        text="About"
        className="mb-8 justify-center md:justify-start"
        icon={
          <CrocodileIcon className="w-14 h-14 md:w-20 md:h-20 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        }
      />
      <div className="bg-surface border border-line rounded-2xl shadow-sm p-6 sm:p-10">
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          I am a full-stack software engineer with experience developing and
          optimizing billing, invoicing, and subscription management systems. I
          build user-focused web applications with an emphasis on maintainable
          code, system reliability, and quality. I collaborate with
          cross-functional teams and contribute to code reviews, automated
          testing, and CI/CD practices.
        </p>
        <p className="text-lg md:text-xl text-muted leading-relaxed mt-6">
          I am currently expanding my cloud computing skills, with a particular
          focus on AWS. My core technologies and practices are listed below.
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
          Download Resume
        </ButtonLink>
        <ButtonLink href="/contact" className="flex-1">
          Get in Touch
        </ButtonLink>
      </div>
    </section>
  );
}
