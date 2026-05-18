import { Link } from '@inertiajs/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/types/property';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group overflow-hidden rounded-lg border border-[#ded8cb] bg-white shadow-[0_22px_70px_rgba(7,21,39,0.08)] transition duration-300 hover:-translate-y-1">
            <div className="image-sheen aspect-[4/3] bg-[#d9d4c8]">
                <img
                    src={project.thumbnail}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-md bg-[#071527] px-3 py-1 text-xs font-semibold text-white">{project.category}</span>
                    <span className="text-xs font-semibold text-[#9d7a2f]">{project.status}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#071527]">{project.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
                    <MapPin className="size-4 text-[#c8a45d]" />
                    {project.location}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#566070]">{project.short_description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#ebe6dc] pt-5">
                    <span>
                        <span className="block text-xs text-[#667085]">Mulai dari</span>
                        <span className="text-lg font-bold text-[#071527]">{project.price_start}</span>
                    </span>
                    <Link
                        href={`/proyek/${project.slug}`}
                        className="inline-flex size-11 items-center justify-center rounded-md bg-[#d8b76d] text-[#071527] transition group-hover:bg-[#071527] group-hover:text-white"
                        aria-label={`Detail ${project.name}`}
                    >
                        <ArrowUpRight className="size-5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
