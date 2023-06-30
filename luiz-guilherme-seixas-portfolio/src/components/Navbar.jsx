import React, { useState } from 'react';
/* import { FaBars } from 'react-icons/fa'; */
import { TfiHome, TfiBook, TfiDesktop, TfiMenu } from 'react-icons/tfi';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex flex-col md:flex-row md:justify-between
      md:items-center py-4 px-8 bg-[#f4f4f2]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span
            className="text-2xl text-[#243a69]
          md:text-xl font-roboto"
          >
            Luiz Guilherme Seixas
          </span>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={ toggleMenu } className="p-2 text-[#243a69]">
            <TfiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:ml-auto">
        <button
          onClick={ () => history.push('/') }
          className="hidden md:flex items-center
          space-x-2 px-2 py-2 border-b-4 border-transparent
        text-[#5b88a5]  hover:border-[#243a69] hover:text-[#243a69]"
        >
          <TfiHome className="w-6 h-6" />
          <span className="hidden md:inline">Home</span>
        </button>

        <button
          onClick={ () => history.push('/about') }
          className="hidden md:flex items-center
          space-x-2 px-2 py-2 border-b-4 border-transparent
        text-[#5b88a5]  hover:border-[#243a69] hover:text-[#243a69]"
        >
          <TfiBook className="w-6 h-6" />
          <span className="hidden md:inline">About</span>
        </button>

        <button
          onClick={ () => history.push('/projects') }
          className="hidden md:flex items-center
          space-x-2 px-2 py-2 border-b-4 border-transparent
        text-[#5b88a5]  hover:border-[#243a69] hover:text-[#243a69]"
        >
          <TfiDesktop className="w-6 h-6" />
          <span className="hidden md:inline">Projects</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={ () => history.push('/') }
              className="flex items-center space-x-2 text-[#243a69]"
            >
              <TfiHome className="w-6 h-6" />
              <span className="ml-2">Home</span>
            </button>
            <div className="h-0.5 bg-[#243a69]" />

            <button
              onClick={ () => history.push('/about') }
              className="flex items-center space-x-2 text-[#243a69]"
            >
              <TfiBook className="w-6 h-6" />
              <span className="ml-2">About</span>
            </button>
            <div className="h-0.5 bg-[#243a69]" />

            <button
              onClick={ () => history.push('/projects') }
              className="flex items-center space-x-2 text-[#243a69]"
            >
              <TfiDesktop className="w-6 h-6" />
              <span className="ml-2">Projects</span>
            </button>
            <div className="h-0.5 bg-[#243a69]" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
