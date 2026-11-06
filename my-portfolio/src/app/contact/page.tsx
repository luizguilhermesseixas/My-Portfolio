import React from "react";
import PageHeading from "../../components/PageHeading";
import ButtonLink from "../../components/ButtonLink";

import GithubIcon from "../../icons/github.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import MailIcon from "../../icons/mail.svg";
import MapIcon from "../../icons/map.svg";
import PhoneIcon from "../../icons/phone.svg";
import LionIcon from "../../icons/lion.svg";

export default function ContactPage() {
  const contactInfos = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      label: "luizseixasusa@gmail.com",
      href: "mailto:luizseixasusa@gmail.com",
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "+1 645 237-9799",
      href: "tel:+16452379799",
    },
    {
      icon: <MapIcon className="w-5 h-5" />,
      label: "Miami, FL, USA",
      href: null,
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "linkedin.com/in/luiz-guilherme-schiavon-seixas",
      href: "https://www.linkedin.com/in/luiz-guilherme-schiavon-seixas",
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      label: "github.com/luizguilhermesseixas",
      href: "https://github.com/luizguilhermesseixas",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <PageHeading
        text="Contact Me"
        className="mb-8 justify-center md:justify-start"
        icon={
          <LionIcon className="w-14 h-14 md:w-20 md:h-20 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        }
      />
      <ul className="bg-surface border border-line rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-3">
        {contactInfos.map((info) => (
          <li
            key={info.label}
            className="flex items-center gap-4 bg-surface-muted rounded-lg px-4 py-4"
          >
            <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-primary-100">
              {info.icon}
            </span>
            {info.href ? (
              <a
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-heading text-base sm:text-lg hover:underline break-all"
              >
                {info.label}
              </a>
            ) : (
              <span className="text-heading text-base sm:text-lg">
                {info.label}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <ButtonLink href="/projects" variant="primary" className="flex-1">
          View Projects
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
