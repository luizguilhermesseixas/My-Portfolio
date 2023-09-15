import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-2">
      <span className="text-base font-roboto font-bold mb-1 text-[#243a69]">SIGA-ME</span>

      <div className="flex space-x-2 mb-2 text-[#243a69]">
        <a href="https://github.com/luizguilhermesseixas" aria-label="github">
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/luiz-guilherme-schiavon-seixas/" aria-label="linkedin">
          <AiFillLinkedin className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/schiavgui/" aria-label="instagram">
          <AiFillInstagram className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/Luizguiss" aria-label="twitter">
          <AiFillTwitterCircle className="w-6 h-6" />
        </a>
      </div>
    </footer>

  );
}

export default Footer;
