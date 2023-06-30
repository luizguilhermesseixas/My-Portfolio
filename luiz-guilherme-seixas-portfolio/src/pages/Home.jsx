import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import SvgProgramming from '../components/SvgProgramming';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl font-roboto">
            Olá, eu sou o Luiz Guilherme!
          </h1>
          <span className="text-2xl font-roboto">
            Desenvolvedor Junior Full Stack
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
