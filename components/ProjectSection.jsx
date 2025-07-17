"use client";

import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useFirebaseCollection } from "@/lib/useFirebaseCollection";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectSection() {
    const { data: projects, isLoading, error } = useFirebaseCollection("projects");

    if (error) {
        return (
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Proyectos seleccionados">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Proyectos</h2>
                <p className="text-red-500">Error 404</p>
            </section>
        );
    }

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Proyectos seleccionados">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Proyectos</h2>
            </div>
            <div className="max-w-4xl mb-32">
                <div>
                    <ul className="group/list">
                        {isLoading ? (
                            [...Array(3)].map((_, i) => (
                                <li key={i} className="mb-12">
                                    <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                                        <div className="sm:col-span-2">
                                            <Skeleton className="aspect-video w-full h-[100px] rounded" />
                                        </div>
                                        <div className="sm:col-span-6">
                                            <Skeleton className="h-6 w-2/3 mb-2" />
                                            <Skeleton className="h-4 w-full mb-2" />
                                            <Skeleton className="h-4 w-5/6 mb-2" />
                                            <div className="flex gap-2 mt-4">
                                                {[...Array(3)].map((_, j) => (
                                                    <Skeleton key={j} className="h-6 w-20 rounded-full" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            projects?.map((proj) => (
                                <li key={proj.title} className="mb-12">
                                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                    href={proj.url}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    aria-label={proj.label}>
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {proj.title.split(" ")[0]}
                                                        <span className="inline-block">{proj.title.split(" ")[1]}
                                                            <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 
                                                                group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 
                                                                motion-reduce:transition-none ml-1 translate-y-px"/>
                                                        </span>
                                                    </span>
                                                </a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">{proj.description}</p>
                                            <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                                href={proj.github}
                                                target="_blank"
                                                rel="noreferrer noopener">
                                            </a>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                {proj.tags.map((tag) => (
                                                    <li key={tag} className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                            {tag}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Image alt={proj.title + " preview"}
                                            loading="lazy"
                                            width={200}
                                            height={48}
                                            className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                            src={proj.image}/>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="mt-12">
                    <a href="/archive" className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Ver el archivo completo del proyecto</span>
                        <FiArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;