"use client";
import React, { useEffect, useState } from "react";

import GithubIcon from "@/icons/github.svg";
import LinkedinIcon from "@/icons/linkedin.svg";
import MailIcon from "@/icons/mail.svg";
import MapIcon from "@/icons/map.svg";
import PhoneIcon from "@/icons/phone.svg";
import LionIcon from "@/icons/lion.svg";

export default function ContactPage() {
  const fullText = "Contact Me";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayed]);

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
      icon: <LinkedinIcon className="w-5 h-5 text-primary-500" />,
      label: "linkedin.com/in/luiz-guilherme-schiavon-seixas",
      href: "https://www.linkedin.com/in/luiz-guilherme-schiavon-seixas",
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-primary-500" />,
      label: "github.com/luizguilhermesseixas",
      href: "https://github.com/luizguilhermesseixas",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-2 sm:px-4">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl flex items-center mb-8 justify-center md:justify-start">
          <h1 className="text-4xl md:text-6xl font-sans text-primary-500 text-center md:text-left">
            {displayed}
          </h1>
          <LionIcon className="w-14 h-14 md:w-20 md:h-20 ml-4 transition-transform duration-300 hover:-translate-y-2 hover:rotate-6" />
        </div>
        <div className="w-full max-w-xl bg-primary-50 rounded-xl shadow-lg p-8 flex flex-col gap-6">
          {contactInfos.map((info) => (
            <div
              key={info.label}
              className="flex items-center gap-4 bg-primary-200 rounded-lg px-5 py-4 shadow hover:shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              {info.icon}
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-primary-700 text-lg hover:underline break-all"
                >
                  {info.label}
                </a>
              ) : (
                <span className="text-primary-700 text-lg">{info.label}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full max-w-xl">
          <a
            href="/Luiz_Seixas_Resume.pdf"
            download
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            Download CV
          </a>
          <a
            href="/projects"
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="flex-1 border border-primary-500 text-primary-500 px-8 py-3 rounded font-semibold text-lg hover:bg-primary-500 hover:text-primary-50 transition-colors text-center"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
