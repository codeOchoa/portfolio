"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { useFirebaseCollection } from "@/lib/useFirebaseCollection";
import { Skeleton } from "@/components/ui/skeleton";

function ExperienceSection() {
    const { data: experiences = [], isLoading, error } = useFirebaseCollection("experiences");

    if (error) {
        return (
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Experiencias de trabajo">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Proyectos</h2>
                <p className="text-red-500">Error 404</p>
            </section>
        );
    }

    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Experiencias de trabajo"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experiencias
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {isLoading
                        ? [...Array(2)].map((_, i) => (
                            <li key={i} className="mb-12">
                                <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                                    <div className="sm:col-span-2">
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                    <div className="sm:col-span-6 space-y-2">
                                        <Skeleton className="h-5 w-3/4" />
                                        <Skeleton className="h-4 w-full" />
                                        <div className="flex gap-2 mt-2">
                                            <Skeleton className="h-6 w-20 rounded-full" />
                                            <Skeleton className="h-6 w-16 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                        : experiences.map((item) => (
                            <li key={item.title} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.date}>
                                        {item.date}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    aria-label={`${item.title} at ${item.company} (opens in a new tab)`}
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {item.title} ·{" "}
                                                        <span className="inline-block">
                                                            {item.company}
                                                            <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">{item.description}</p>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {item.tags.map((tag) => (
                                                <li key={tag} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tag}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ol>
                <div className="mt-12">
                    <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                        href="https://firebasestorage.googleapis.com/v0/b/portfolio-codeochoa.firebasestorage.app/o/CV_PabloMO_LI_es.pdf?alt=media&token=393200d6-8b0c-4f30-9879-7a2460e93b7a"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Ver currículum completo"
                    >
                        <span className="inline-block">
                            Ver currículum completo
                            <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;