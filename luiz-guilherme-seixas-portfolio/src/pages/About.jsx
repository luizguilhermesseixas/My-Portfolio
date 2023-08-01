import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SvgFeelingProud from '../components/SvgFeelingProud';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Card "Sobre Mim" */}
        <div className="flex-1 md:flex-2 mt-8 md:mt-0">
          {' '}
          {/* Adicionamos a classe 'mt-4 md:mt-0' */}
          <div className="p-8 mx-auto bg-[#f4f4f2] md:text-center shadow-xl shadow-[#5b88a5] rounded-lg max-w-md">
            <h1 className="text-2xl text-[#243a69] font-mono font-bold mb-4">Sobre Mim</h1>
            <p className="mt-4 font-mono text-[#243a69]">
              Seu texto sobre você vai aqui. Pode falar sobre suas experiências em programação, suas habilidades, o que você gosta de fazer no seu tempo livre, etc.
            </p>
          </div>
        </div>
        {/* SVG */}
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
