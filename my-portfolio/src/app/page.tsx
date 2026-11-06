import React from "react";
import DinosaurIcon from "../icons/dinosaur.svg";
import PageHeading from "../components/PageHeading";
import ButtonLink from "../components/ButtonLink";

export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-28 flex flex-col items-center md:items-start text-center md:text-left">
      <PageHeading
        text="Hi, I'm Luiz Seixas!"
        className="flex-col md:flex-row md:items-end"
        icon={
          <DinosaurIcon className="w-16 h-16 md:w-24 md:h-24 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        }
      />
      <h2 className="text-xl md:text-3xl text-muted mt-8 max-w-2xl leading-snug">
        Software Engineer passionate about building robust and efficient
        solutions.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
        <ButtonLink href="/projects" variant="primary">
          View Projects
        </ButtonLink>
        <ButtonLink href="/Luiz_Seixas_Resume.pdf" download>
          Download CV
        </ButtonLink>
      </div>
    </section>
  );
}
