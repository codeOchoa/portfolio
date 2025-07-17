import ProjectTable from '@/components/ProjectTable';
import { getProjects } from '@/lib/useFirebaseCollection';

export const metadata = {
    title: 'Archivo | Pablo Ochoa',
    description: 'Listado completo de proyectos desarrollados por Pablo Ochoa.',
};

export default async function ArchivePage() {
    const projects = await getProjects();

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:py-24">
                <a href="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
                    <svg className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                    Volver al inicio
                </a>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Todos los proyectos</h1>
                <ProjectTable projects={projects} />
            </div>
        </div>
    );
}