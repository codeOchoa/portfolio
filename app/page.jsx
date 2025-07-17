"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ExperienceSection, ProjectSection } from "@/components/index";

export default function Home() {
    
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                {/* Hero & Contact */}
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                            <a href="/">Pablo Ochoa</a>
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Dev</h2>
                        <p className="mt-4 max-w-xs leading-normal">Creación de herramientas web escalables orientadas a automatización e innovación con IA</p>
                        <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 w-max">
                                <li>
                                    <a className="group flex items-center py-3" href="#about">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Acerca de mí</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center py-3 active" href="#experience">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experiencia</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center py-3" href="#projects">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Proyectos</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* Social Networks */}
                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                            <li className="mr-5 shrink-0 text-xs">
                                <span className="sr-only">GitHub</span>
                                <a href="https://github.com/codeOchoa" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-200" aria-label="GitHub" title="GitHub">
                                    <FaGithub className="h-6 w-6"/>
                                </a>
                            </li>
                            <li className="mr-5 shrink-0 text-xs">
                                <span className="sr-only">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/pablo-m-ochoa/" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-200" aria-label="LinkedIn" title="LinkedIn">
                                    <FaLinkedin className="h-6 w-6"/>
                                </a>
                            </li>
                            <li className="mr-5 shrink-0 text-xs">
                                <a href="https://www.instagram.com/pablo.ochoa.95/" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-200" aria-label="Instagram" title="Instagram">
                                    <FaInstagram className="h-6 w-6"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* Content */}
                <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                    {/* About Me */}
                    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Acerca de mí</h2>
                        </div>
                        <div>
                            <p className="mb-4 text-cadet-gray">
                                He estado aprendiendo a programar durante más de un año y descubrí una verdadera pasión por el desarrollo backend, la automatización y las 
                                tecnologías emergentes. Mi experiencia emprendedora previa me permitió desarrollar habilidades clave como autonomía, resolución de problemas y 
                                enfoque en resultados, las cuales aplico hoy al crear soluciones web escalables con propósito.
                            </p>
                        </div>
                    </section>
                    {/* Experience */}
                    <ExperienceSection/>
                    {/* Projects */}
                    <ProjectSection/>
                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                        <p>© 2025 Pablo Ochoa. Todos los derechos reservados.</p>
                    </footer>
                </main>
            </div>
        </div>
    );
}