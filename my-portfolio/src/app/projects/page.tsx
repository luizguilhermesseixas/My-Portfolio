"use client";
import React, { useState } from "react";
import CrabIcon from "../../icons/crab.svg";
import Image from "next/image";
import PageHeading from "../../components/PageHeading";
import ButtonLink from "../../components/ButtonLink";

const projects = [
  {
    title: "Contacts-API",
    description: "REST API for contact management.",
    image: "/images/contactsAPI.webp",
    techs: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Prisma",
      "Swagger",
      "JWT",
    ],
    link: "https://github.com/luizguilhermesseixas/contacts-API",
  },
  {
    title: "Seller-VUE",
    description: "Frontend for a food delivery API.",
    image: "/images/sellerVue.webp",
    techs: ["TypeScript", "Vue.js", "Docker", "Pinia", "Vite", "CSS"],
    link: "https://github.com/luizguilhermesseixas/Seller-vue",
  },
  {
    title: "Delivery-API",
    description: "Ruby on Rails API for a food delivery application.",
    image: "/images/deliveryAPI.webp",
    techs: [
      "Ruby",
      "Rails",
      "Docker",
      "JWT",
      "SQLite3",
      "RSpec",
      "ActiveRecord",
      "Kaminari",
    ],
    link: "https://github.com/luizguilhermesseixas/delivery-api",
  },
  {
    title: "MyPortfolio",
    description: "Personal portfolio showcasing software projects and technical skills.",
    image: "/images/portfolio.webp",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/luizguilhermesseixas/my-portfolio",
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);

  const prevProject = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const project = projects[current];

  const navButton =
    "px-5 py-2 rounded-lg bg-chip text-chip-text font-medium hover:bg-accent hover:text-accent-contrast transition-colors";

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <PageHeading
        text="My Projects"
        className="mb-8 justify-center md:justify-start"
        icon={
          <CrabIcon className="w-14 h-14 md:w-20 md:h-20 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        }
      />
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Projects"
        className="bg-surface border border-line rounded-2xl shadow-sm p-5 sm:p-8"
      >
        <article
          aria-live="polite"
          className="flex flex-col md:flex-row gap-6 md:items-start"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={400}
            height={180}
            className="w-full md:w-2/5 aspect-[16/9] rounded-lg object-cover shadow"
          />
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-heading">{project.title}</h2>
            <p className="text-muted leading-relaxed">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <li
                  key={tech}
                  className="bg-chip text-chip-text px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 self-start text-accent font-semibold hover:underline"
            >
              View on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </article>
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-line">
          <button onClick={prevProject} className={navButton}>
            Previous
          </button>
          <div className="flex items-center gap-3">
            <div className="flex gap-2" aria-hidden="true">
              {projects.map((p, index) => (
                <span
                  key={p.title}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-6 bg-accent" : "w-2 bg-chip"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted text-sm">
              {current + 1} / {projects.length}
            </span>
          </div>
          <button onClick={nextProject} className={navButton}>
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <ButtonLink href="/contact" variant="primary" className="flex-1">
          Get in Touch
        </ButtonLink>
        <ButtonLink href="/Luiz_Seixas_Resume.pdf" download className="flex-1">
          Download Resume
        </ButtonLink>
        <ButtonLink href="/about" className="flex-1">
          About
        </ButtonLink>
      </div>
    </section>
  );
}
