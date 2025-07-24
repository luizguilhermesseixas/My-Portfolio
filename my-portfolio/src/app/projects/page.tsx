"use client";
import React, { useEffect, useState } from "react";
import CrabIcon from "@/icons/crab.svg";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "Short description of the project.",
    image: "/images/default.webp", // Ensure this file exists at public/images/default.webp
    techs: ["React", "Node.js", "TailwindCSS"],
    link: "https://github.com/seuprojeto1",
  },
  {
    title: "Project Two",
    description: "Another project description.",
    image: "/images/default.webp",
    techs: ["Go", "PostgreSQL", "Docker"],
    link: "https://github.com/seuprojeto2",
  },
];

export default function ProjectsPage() {
  const fullText = "My Projects";
  const [displayed, setDisplayed] = useState("");
  const [current, setCurrent] = useState(0);

  const prevProject = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const project = projects[current];

  useEffect(() => {
    if (displayed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayed]);

  return (
    <section className="max-w-5xl mx-auto py-16 px-2 sm:px-4">
      <div className="w-full max-w-3xl flex justify-center md:justify-start items-center mb-8 mx-auto">
        <h1 className="text-4xl md:text-6xl font-sans text-primary-500 text-center md:text-left">
          {displayed}
        </h1>
        <CrabIcon className="w-14 h-14 md:w-20 md:h-20 ml-4 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
      </div>
      <div className="w-full max-w-3xl bg-primary-50 rounded-xl shadow-lg p-8 flex flex-col items-center mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center gap-6">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={180}
            className="w-full md:w-1/3 rounded-lg object-cover shadow"
            style={{ maxHeight: 180 }}
          />
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-primary-600">
              {project.title}
            </h2>
            <p className="text-primary-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary-200 text-primary-700 px-3 py-1 rounded font-medium text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary-700 hover:underline font-semibold"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-8">
          <button
            onClick={prevProject}
            className="px-4 py-2 rounded bg-primary-200 text-primary-700 hover:bg-primary-600 hover:text-primary-50 transition-colors"
          >
            Anterior
          </button>
          <span className="text-primary-700">
            {current + 1} / {projects.length}
          </span>
          <button
            onClick={nextProject}
            className="px-4 py-2 rounded bg-primary-200 text-primary-700 hover:bg-primary-600 hover:text-primary-50 transition-colors"
          >
            Próximo
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mx-auto mt-10">
        <a
          href="/Luiz_Seixas_Resume.pdf"
          download
          className="flex-1 basis-0 w-full border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
        >
          Download CV
        </a>
        <a
          href="/contact"
          className="flex-1 basis-0 w-full border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
        >
          Contact
        </a>
        <a
          href="/about"
          className="flex-1 basis-0 w-full border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
        >
          About
        </a>
      </div>
    </section>
  );
}
