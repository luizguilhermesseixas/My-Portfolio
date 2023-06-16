import React from 'react';
import { TfiHome, TfiBook, TfiDesktop } from 'react-icons/tfi';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  return (
    <header
      className="
      flex flex-col items-center md:flex-row md:justify-between
      md:items-center py-4 px-8 bg-gray-100"
    >
      <div className="flex items-center mb-4 md:mb-0 md:mr-4 text-center">
        <span
          className="text-2xl md:text-xl sm:text-lg font-bold"
        >
          Luiz Guilherme Seixas
        </span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start space-x-4">
        <button
          onClick={ () => history.push('/') }
          className="
          flex items-center space-x-2 px-2 md:px-4 py-2
          bg-blue-500 text-white rounded hover:bg-blue-600 mb-2 md:mb-0 h-full"
        >
          <TfiHome className="w-6 h-6" />
          <span
            className="hidden md:inline"
          >
            Home
          </span>
        </button>

        <button
          onClick={ () => history.push('/about') }
          className="
          flex items-center space-x-2 px-2 md:px-4 py-2
          bg-blue-500 text-white rounded hover:bg-blue-600 mb-2 md:mb-0 h-full"
        >
          <TfiBook className="w-6 h-6" />
          <span
            className="hidden md:inline"
          >
            About
          </span>
        </button>

        <button
          onClick={ () => history.push('/projects') }
          className="
          flex items-center space-x-2 px-2 md:px-4 py-2
          bg-blue-500 text-white rounded hover:bg-blue-600 flex-shrink-0 h-full"
        >
          <TfiDesktop className="w-6 h-6" />
          <span className="hidden md:inline">Projects</span>
        </button>
      </div>
    </header>

  );
}

export default Navbar;
