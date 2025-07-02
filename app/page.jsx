"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <main className="flex flex-col items-center justify-center px-6 py-20">
            {/* Hero */}
            <section className="text-center mb-32">
                <h1 className="text-6xl font-bold">Pablo Ochoa</h1>
                <p className="mt-4 text-xl text-gray-600">Full Stack Web Developer</p>
            </section>

            {/* Sobre Mí */}
            <section className="max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">Sobre Mí</h2>
                <p className="text-gray-700">
                    Soy Desarrollador Full Stack. Me especializo en construir APIs robustas, bases de datos escalables y soluciones seguras que conectan el Frontend con la lógica empresarial.
                </p>
            </section>

            {/* Contacto minimalista */}
            <section className="text-center mb-32">
                <p className="text-xl font-semibold">Pablo Ochoa</p>
                <p className="text-gray-600 mb-4">Construyo soluciones BackEnd eficientes y escalables</p>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/codeOchoa" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/pablo-m-ochoa/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </section>

            {/* Experiencias */}
            <section className="max-w-4xl w-full mb-32">
                <h2 className="text-3xl font-semibold text-center mb-8">Experiencias</h2>
                <ul className="space-y-6">
                    <li className="border p-4 rounded shadow">
                        <h3 className="text-xl font-bold">Desarrollador BackEnd Freelance</h3>
                        <p className="text-gray-600">Desarrollo de APIs, automatizaciones y sistemas escalables para clientes de diversos sectores.</p>
                    </li>
                    <li className="border p-4 rounded shadow">
                        <h3 className="text-xl font-bold">Proyectos Personales en FullStack</h3>
                        <p className="text-gray-600">Implementación de soluciones completas integrando Frontend moderno y arquitecturas de BackEnd robustas.</p>
                    </li>
                </ul>
            </section>

            {/* Proyectos */}
            <section className="max-w-4xl w-full mb-32">
                <h2 className="text-3xl font-semibold text-center mb-8">Proyectos</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p) => (
                        <div key={p.id} className="p-4 border rounded shadow">
                            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                            <p className="text-gray-600">{p.stack}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}