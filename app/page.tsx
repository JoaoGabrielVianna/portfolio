'use client'
import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx"
import Card from "./components/card/Card";
import { programmingLanguages, projects, socialmedia } from './data/data'

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <main className="flex flex-col items-center bg-background-color gap-12 sm:gap-24">
      <header className="w-full p-8  flex items-center justify-between sm:justify-evenly bg-background-header-color z-[1]">
        <h1 className="font-poppins font-normal">VIANNA</h1>
        <nav className={clsx(
          showNavbar ? 'w-full h-[90%] bg-background-header-color p-8' : 'hidden ',
          'sm:flex sm:static absolute right-0 bottom-0 sm:w-auto'
        )}>
          <ul className={clsx(
            showNavbar && "flex-col",
            "flex sm:flex-row gap-16 text-primary-color",
          )}>
            <li><a href="#inicio" onClick={() => setShowNavbar(false)}>Início</a></li>
            <li><a href="#experiencia" onClick={() => setShowNavbar(false)}>Experiência</a></li>
            <li><a href="#projetos" onClick={() => setShowNavbar(false)}>Projetos</a></li>
            <li><a href="#contato" onClick={() => setShowNavbar(false)}>Contato</a></li>
          </ul>
        </nav>
        <Image
          width={16}
          height={16}
          src="/assets/svgs/menu.svg"
          alt="menu"
          className="flex sm:hidden cursor-pointer"
          onClick={() => setShowNavbar(!showNavbar)} />
      </header>

      <section id="inicio" className="flex flex-col items-center gap-8">
        <div className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] relative ">
          <div className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-orange-blue-gradient rounded-[100%] animate-spin "></div>
          <Image
            width={250}
            height={250}
            alt="1"
            src="/assets/svgs/avatar.svg"
            className="border-[5px]  absolute left-0 top-0"
          />
        </div>
        <h1 className=" text-[24px] sm:text-[54px] text-center font-extrabold">
          Transformando Código
          <br />em <strong className="text-gradient bg-orange-gradient">Experiência</strong>
        </h1>

        <p className="text-center px-4 sm:w-[58%]">
          Sou Engenheiro de Computação full stack com mais de  1 ano de experiência profissional, especializado em desenvolvimento frontend.
          Minha experiência reside no Next.js, criando soluções elegantes e eficientes.
          Desenvolvo interfaces dinâmicas e responsivas, garantindo uma experiência de usuário excepcional.
        </p>

        <div className="flex gap-8  ">
          <button className="p-4 rounded-full  bg-primary-color">
            Entrar em Contato
          </button>
          <button className="p-4 rounded-full border-2 border-primary-color text-primary-color">
            Download CV
          </button>
        </div>
      </section>

      <section className="px-8 flex flex-col gap-8  items-center">
        <h1 className="text-gradient bg-black-gradient font-bold text-3xl">EXPERIÊNCIAS COM</h1>
        <div className="flex gap-8 sm:gap-16">
          {programmingLanguages.map((item, index) =>
            <Image
              key={index}
              width={42}
              height={42}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer" />
          )}
        </div>
      </section>

      <section id="projetos" className="flex flex-col gap-8 items-center">
        <h1 className="text-gradient bg-orange-gradient font-bold text-3xl">PROJETOS</h1>
        {projects.map((item, index) =>
          <Card
            key={index}
            src={item.src}
            title={item.title}
          />)}
      </section>

      <section id="experiencia" className="flex flex-col gap-8 items-center px-8 sm:w-[50vw]">
        <h1 className="text-gradient bg-blue-gradient font-bold text-3xl">EXPERIÊNCIAS</h1>

        <div className="flex flex-col gap-2 sm:flex-row  justify-between  w-full">
          <div className="flex gap-4">
            <Image
              width={22}
              height={22}
              alt="sonoflow"
              src="assets/svgs/moon-icon.svg" />
            <h1 className="font-bold ">Engenheiro de Software no Sonoflow</h1>
          </div>
          <div>
            <h2>fev 2024 - Present</h2>
          </div>
        </div>

        <div>
          <p className="text-[.7rem] sm:text-[1rem]">Como Engenheiro de Software no Sonoflow, fui responsável pelo desenvolvimento do aplicativo e do dashboard da empresa. Trabalhando juntamente com um designer, criei soluções práticas que otimizaram a eficiência e a experiência do usuário, atendendo às necessidades dos nossos clientes de forma eficaz.</p>
        </div>
      </section>

      <footer id="contato" className="p-16 flex flex-col gap-8">
        <h1 className="font-bold text-[1rem]">Contato</h1>
        <div className="flex flex-col gap-4">
          {socialmedia.map((item, index) =>
            <div className="flex gap-4" key={index}>
              <Image
                width={18}
                height={18}
                alt="instagram"
                src={item.icon} />
              <h2>{item.title}</h2>
            </div>
          )}
        </div>
      </footer>

    </main>
  );
}
