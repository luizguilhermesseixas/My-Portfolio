/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SvgFeelingProud from '../components/SvgFeelingProud';

function About() {
  const history = useHistory();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="flex flex-col md:flex-row items-center
        md:items-center px-4 md:px-8 mt-4 md:mt-8"
      >
        <div className="flex-1 md:flex-2 md:mr-4 mt-4 md:mt-0">
          <div
            className="p-8 mx-auto bg-[#f4f4f2] text-center md:text-center shadow-xl
            shadow-[#5b88a5] rounded-lg max-w-md"
          >
            <h1 className="text-2xl text-[#243a69] font-bold mb-4">Sobre Mim</h1>
            <p className="mt-4 text-[#243a69]">
              Seu texto sobre você vai aqui.
              Pode falar sobre suas experiências em programação,
              suas habilidades, o que você gosta de fazer no seu tempo livre, etc.
            </p>
            <div className="mt-10 space-y-2 md:space-y-0 md:flex md:justify-center">
              <button
                onClick={ () => history.push('/projects') }
                className="w-full md:w-auto p-4 text-white bg-[#5b88a5]
                hover:bg-[#243a69] md:mx-2 font-mono rounded-2xl"
              >
                Meus Projetos
              </button>
              <button
                onClick={ () => history.push('/contact') }
                className="w-full md:w-auto p-4 text-white bg-[#5b88a5]
                hover:bg-[#243a69] font-mono rounded-2xl"
              >
                Fale comigo
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-20">
          <SvgFeelingProud />
        </div>
      </div>
      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>

  );
}

export default About;
