import { Head, Link } from '@inertiajs/react';
import { CalendarCheck, CheckCircle2, Home, MessageCircle, Ruler, ShieldCheck } from 'lucide-react';
import { OsmProjectMap } from '@/components/public/osm-project-map';
import { ProjectCard } from '@/components/public/project-card';
import { PublicLayout } from '@/components/public/public-layout';
import type { Project } from '@/types/property';

export default function ProjectShow({ project, relatedProjects }: { project: Project; relatedProjects: Project[] }) {
    const gallery = project.galleries?.length ? project.galleries : [{ id: 0, image_url: project.thumbnail, caption: project.name }];
    const location = project.location_detail ?? {
        latitude: -6.22456,
        longitude: 106.80933,
        address: project.location,
    };

    return (
        <PublicLayout>
            <Head title={project.name}>
                <meta name="description" content={project.short_description} />
            </Head>
            <section className="bg-[#071527] px-5 pb-16 pt-32 text-white lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">{project.category}</p>
                        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">{project.name}</h1>
                        <p className="mt-5 text-lg leading-8 text-white/72">{project.short_description}</p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-md bg-white/10 px-4 py-3 text-sm">{project.location}</span>
                            <span className="rounded-md bg-[#d8b76d] px-4 py-3 text-sm font-bold text-[#071527]">{project.price_start}</span>
                            <span className="rounded-md bg-white/10 px-4 py-3 text-sm">{project.status}</span>
                        </div>
                    </div>
                    <div className="image-sheen aspect-[4/3] overflow-hidden rounded-lg">
                        <img src={project.thumbnail} alt={project.name} className="h-full w-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="px-5 py-16 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
                    {gallery.slice(0, 3).map((image) => (
                        <img
                            key={image.id}
                            src={image.image_url}
                            alt={image.caption ?? project.name}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-lg object-cover shadow-[0_20px_60px_rgba(7,21,39,0.09)]"
                        />
                    ))}
                </div>
            </section>

            <section className="bg-white px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#9d7a2f] uppercase">Deskripsi</p>
                        <h2 className="mt-4 text-3xl font-semibold text-[#071527]">Hunian dan kawasan dengan detail yang dipikirkan matang.</h2>
                    </div>
                    <p className="text-base leading-8 text-[#667085]">{project.description}</p>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
                    <div className="rounded-lg bg-[#071527] p-7 text-white">
                        <Ruler className="size-7 text-[#d8b76d]" />
                        <h3 className="mt-5 text-2xl font-semibold">Site plan</h3>
                        <div className="mt-6 grid gap-3">
                            {Object.entries(project.site_plan ?? {}).map(([key, value]) => (
                                <div key={key} className="flex justify-between rounded-md bg-white/10 px-4 py-3 text-sm">
                                    <span className="capitalize text-white/62">{key.replace('_', ' ')}</span>
                                    <span className="font-semibold">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-7 shadow-[0_20px_60px_rgba(7,21,39,0.08)] lg:col-span-2">
                        <Home className="size-7 text-[#9d7a2f]" />
                        <h3 className="mt-5 text-2xl font-semibold text-[#071527]">Tipe unit</h3>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {(project.unit_types ?? []).map((unit) => (
                                <div key={unit.name} className="rounded-md border border-[#ebe6dc] p-5">
                                    <p className="font-semibold text-[#071527]">{unit.name}</p>
                                    <p className="mt-2 text-sm text-[#667085]">
                                        LT {unit.land ?? '-'} / LB {unit.building} / {unit.bedroom} KT
                                    </p>
                                    <p className="mt-4 text-lg font-bold text-[#9d7a2f]">{unit.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-semibold text-[#071527]">Fasilitas</h3>
                        <div className="mt-6 grid gap-3">
                            {(project.facilities ?? []).map((facility) => (
                                <p key={facility} className="flex items-center gap-3 rounded-md bg-[#f8f6f1] px-4 py-3 text-sm text-[#344054]">
                                    <CheckCircle2 className="size-4 text-[#9d7a2f]" />
                                    {facility}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-[#071527]">Spesifikasi bangunan</h3>
                        <div className="mt-6 grid gap-3">
                            {(project.specifications ?? []).map((specification) => (
                                <p key={specification} className="flex items-center gap-3 rounded-md bg-[#f8f6f1] px-4 py-3 text-sm text-[#344054]">
                                    <ShieldCheck className="size-4 text-[#9d7a2f]" />
                                    {specification}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <OsmProjectMap projectName={project.name} location={location} />
                </div>
            </section>

            <section className="bg-[#071527] px-5 py-20 text-white lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <CalendarCheck className="size-8 text-[#d8b76d]" />
                        <h2 className="mt-5 text-3xl font-semibold">Booking survey</h2>
                        <p className="mt-4 text-sm leading-7 text-white/68">Tinggalkan kontak untuk dijadwalkan dengan property advisor.</p>
                    </div>
                    <form className="grid gap-4 rounded-lg bg-white p-6 text-[#071527] md:grid-cols-2">
                        <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d]" placeholder="Nama lengkap" />
                        <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d]" placeholder="Nomor WhatsApp" />
                        <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d] md:col-span-2" placeholder="Jadwal survey yang diinginkan" />
                        <button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d8b76d] font-bold text-[#071527] md:col-span-2">
                            <MessageCircle className="size-4" />
                            Kirim Permintaan
                        </button>
                    </form>
                </div>
            </section>

            {relatedProjects.length > 0 && (
                <section className="px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex items-center justify-between gap-5">
                            <h2 className="text-3xl font-semibold text-[#071527]">Project lainnya</h2>
                            <Link href="/proyek" className="text-sm font-semibold text-[#9d7a2f]">
                                Lihat semua
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {relatedProjects.map((relatedProject) => (
                                <ProjectCard key={relatedProject.id} project={relatedProject} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </PublicLayout>
    );
}
