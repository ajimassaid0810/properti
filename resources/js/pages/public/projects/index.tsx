import { Head, Link } from '@inertiajs/react';
import { ProjectCard } from '@/components/public/project-card';
import { PublicLayout } from '@/components/public/public-layout';
import { SectionHeading } from '@/components/public/section-heading';
import type { Project } from '@/types/property';

const categories = ['', 'Rumah', 'Apartemen', 'Komersial'];

export default function ProjectIndex({ projects, activeCategory }: { projects: Project[]; activeCategory?: string }) {
    return (
        <PublicLayout>
            <Head title="Daftar Proyek Properti">
                <meta name="description" content="Daftar proyek properti rumah, apartemen, dan komersial dengan lokasi strategis." />
            </Head>
            <section className="bg-[#071527] px-5 pb-20 pt-36 text-white lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">Project listing</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">Pilih aset properti terbaik untuk dihuni atau diinvestasikan.</h1>
                </div>
            </section>
            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Filter project" title="Portfolio proyek aktif" />
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => {
                            const href = category ? `/proyek?category=${encodeURIComponent(category)}` : '/proyek';
                            const active = (activeCategory ?? '') === category;

                            return (
                                <Link
                                    key={category || 'Semua'}
                                    href={href}
                                    className={`rounded-md px-5 py-3 text-sm font-semibold transition ${
                                        active ? 'bg-[#071527] text-white' : 'bg-white text-[#071527] hover:bg-[#d8b76d]'
                                    }`}
                                >
                                    {category || 'Semua'}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
