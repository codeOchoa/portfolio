"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { useFirebaseCollection } from "@/lib/useFirebaseCollection";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectTable({ projects }) {
    
    return (
        <table className="mt-12 w-full border-collapse text-left" id="content">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Año</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Proyecto</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Rol o cliente</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Tecnologías</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((proj, index) => (
                    <tr key={index} className="border-b border-slate-300/10 last:border-none">
                        <td className="py-4 pr-4 align-top text-sm">{proj.year || '—'}</td>
                        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                            <div className="block sm:hidden">
                                <a href={proj.url} className="group/link text-base text-slate-200 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
                                    {proj.title}
                                </a>
                            </div>
                            <div className="hidden sm:block">{proj.title}</div>
                        </td>
                        <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell whitespace-nowrap">{proj.client || '—'}</td>
                        <td className="hidden py-4 pr-4 align-top lg:table-cell">
                            <ul className="flex flex-wrap -translate-y-1.5">
                                {proj.tags?.map((tag) => (
                                    <li key={tag} className="my-1 mr-1.5">
                                        <div className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                            {tag}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className="hidden py-4 align-top sm:table-cell">
                            <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-400 hover:text-teal-300"
                            >
                                {new URL(proj.url).hostname}
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProjectTable