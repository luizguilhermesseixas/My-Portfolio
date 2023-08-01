import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SvgProgramming from '../components/SvgProgramming';

function Home() {
  const history = useHistory();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="flex-grow flex flex-col md:flex-row
        md:items-center justify-center p-4"
      >

        <div
          className="lg:flex w-full p-4 md:w-1/2 md:mr-4 flex flex-col
        justify-center items-center md:items-center"
        >
          <div className="text-center mt-6">
            <h1
              className="text-4xl md:text-3xl lg:text-4xl
            font-mono font-bold text-[#243a69] mb-2"
            >
              Olá, eu sou o Luiz Guilherme!
            </h1>
            <span
              className="text-xl mt-4 md:text-lg
            lg:text-xl font-mono text-[#243a69] mb-4"
            >
              Desenvolvedor Junior Full Stack
            </span>
          </div>
          <div className="mt-10 p-4 md:flex md:justify-center">
            <button
              onClick={ () => history.push('/projects') }
              className="w-full md:w-auto p-4 text-white
              bg-[#5b88a5] hover:bg-[#243a69]
              font-mono mb-2 md:mb-0 md:mr-2 rounded-2xl"
            >
              Meus Projetos
            </button>
            <button
              onClick={ () => history.push('/contact') }
              className="w-full md:w-auto p-4
            text-white bg-[#5b88a5] hover:bg-[#243a69] font-mono rounded-2xl"
            >
              Fale comigo
            </button>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4
        flex items-center justify-center md:justify-end"
        >
          <SvgProgramming />
        </div>
      </div>
      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
