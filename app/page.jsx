"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4 px-6">
                {/* Hero & Contact */}
                <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <section className="text-left">
                        <h1 className="text-6xl font-bold text-txt-button">Pablo Ochoa</h1>
                        <p className="mt-4 text-xl text-primary-text">Full Stack Dev</p>
                        <p className="mt-4 text-secondary-text">Creación de herramientas web escalables orientadas a automatización e innovación con IA</p>
                    </section>

                    <section className="mt-16">
                        <div className="flex gap-6 text-2xl">
                            <a href="https://github.com/codeOchoa" target="_blank" rel="noopener noreferrer" className="hover:text-txtButton">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/pablo-m-ochoa/" target="_blank" rel="noopener noreferrer" className="hover:text-txtButton">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/pablo.ochoa.95/" target="_blank" rel="noopener noreferrer" className="hover:text-txtButton">
                                <FaInstagram />
                            </a>
                        </div>
                    </section>
                </aside>

                {/* Content */}
                <section className="pt-24 lg:w-[52%] lg:py-24">
                    {/* About Me */}
                    <div className="max-w-2xl mb-32">
                        <p className="text-secondary-text">
                            He estado aprendiendo a programar durante más de un año y descubrí una verdadera pasión por el desarrollo backend, la automatización y las 
                            tecnologías emergentes. Mi experiencia emprendedora previa me permitió desarrollar habilidades clave como autonomía, resolución de problemas y 
                            enfoque en resultados, las cuales aplico hoy al crear soluciones web escalables con propósito.
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="max-w-4xl mb-32">
                        <ul className="space-y-6">
                            <li className="border border-txt-button p-4 rounded shadow">
                                <h3 className="text-xl font-bold text-primary-text">Desarrollador BackEnd Freelance</h3>
                                <p className="text-secondary-text">Desarrollo de APIs, automatizaciones y sistemas escalables para clientes de diversos sectores.</p>
                            </li>
                            <li className="border border-txt-button p-4 rounded shadow">
                                <h3 className="text-xl font-bold text-primary-text">Proyectos Personales en FullStack</h3>
                                <p className="text-secondary-text">Implementación de soluciones completas integrando Frontend moderno y arquitecturas de BackEnd robustas.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div className="max-w-4xl mb-32">
                        <h2 className="text-3xl font-semibold text-primary-text mb-8">Proyectos</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {projects.map((p) => (
                                <div key={p.id} className="p-4 border border-txt-button rounded shadow">
                                    <h3 className="text-xl font-bold text-primary-text mb-2">{p.title}</h3>
                                    <p className="text-secondary-text">{p.stack}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}