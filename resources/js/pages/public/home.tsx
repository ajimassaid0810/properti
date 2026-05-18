import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, MapPin, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProjectCard } from '@/components/public/project-card';
import { PublicLayout } from '@/components/public/public-layout';
import { SectionHeading } from '@/components/public/section-heading';
import type { CompanyProfile, Project, Testimonial } from '@/types/property';

export default function Home({
    projects,
    featuredProjects,
    testimonials,
    company,
}: {
    projects: Project[];
    featuredProjects: Project[];
    testimonials: Testimonial[];
    company: CompanyProfile | null;
}) {
    const advantages: Array<{ icon: LucideIcon; title: string; text: string }> = [
        { icon: MapPin, title: 'Lokasi strategis', text: 'Dekat akses tol, transportasi, sekolah, dan pusat gaya hidup.' },
        { icon: ShieldCheck, title: 'Legalitas jelas', text: 'Dokumen proyek disiapkan transparan sejak proses pembelian.' },
        { icon: Sparkles, title: 'Desain elegan', text: 'Arsitektur clean dengan material tahan lama dan tata ruang efisien.' },
        { icon: TrendingUp, title: 'Nilai tumbuh', text: 'Dipilih dari kawasan dengan tren permintaan sewa dan capital gain sehat.' },
    ];

    return (
        <PublicLayout company={company}>
            <Head>
                <title>Developer Properti Premium Modern</title>
                <meta
                    name="description"
                    content="Developer properti terpercaya dengan hunian modern, lokasi strategis, dan investasi bernilai tinggi."
                />
            </Head>

            <section className="relative flex min-h-screen items-end overflow-hidden bg-[#071527] px-5 pb-16 pt-28 text-white md:items-center md:pb-0 lg:px-8">
                <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85"
                    alt="Luxury modern real estate"
                    className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,39,.92),rgba(7,21,39,.58),rgba(7,21,39,.18))]" />
                <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="reveal-up max-w-3xl">
                        <p className="mb-5 inline-flex rounded-md border border-[#d8b76d]/40 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#d8b76d] uppercase backdrop-blur">
                            Luxury real estate developer
                        </p>
                        <h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                            Membangun Hunian Modern untuk Masa Depan Anda
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
                            Developer properti terpercaya dengan lokasi strategis dan investasi bernilai tinggi.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/proyek"
                                className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[#d8b76d] px-7 text-sm font-bold text-[#071527] transition hover:bg-white"
                            >
                                Lihat Proyek
                                <ArrowRight className="size-4" />
                            </Link>
                            <Link
                                href="/kontak"
                                className="inline-flex h-13 items-center justify-center rounded-md border border-white/35 px-7 text-sm font-bold text-white transition hover:bg-white hover:text-[#071527]"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur md:p-5">
                        {[
                            ['900+', 'Unit terjual'],
                            ['12', 'Proyek strategis'],
                            ['97%', 'Kepuasan client'],
                        ].map(([value, label]) => (
                            <div key={label} className="rounded-md bg-white/10 p-4">
                                <p className="text-2xl font-bold text-[#d8b76d] md:text-4xl">{value}</p>
                                <p className="mt-2 text-xs leading-5 text-white/70">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="Featured project"
                        title="Portfolio hunian dan aset komersial dengan standar premium"
                        description="Setiap proyek dipilih dari lokasi bertumbuh, dirancang rapi, dan dipasarkan dengan legalitas yang transparan."
                    />
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {(featuredProjects.length ? featuredProjects : projects).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#9d7a2f] uppercase">Keunggulan</p>
                        <h2 className="mt-4 text-3xl font-semibold text-[#071527] md:text-5xl">Dibangun untuk nyaman dihuni dan kuat sebagai investasi.</h2>
                        <p className="mt-5 text-base leading-8 text-[#667085]">{company?.about}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {advantages.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="rounded-lg border border-[#ebe6dc] bg-[#f8f6f1] p-6">
                                <Icon className="size-6 text-[#9d7a2f]" />
                                <h3 className="mt-5 text-lg font-semibold text-[#071527]">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-[#667085]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Testimoni client" title="Dipercaya pembeli rumah pertama sampai investor properti" />
                    <div className="grid gap-5 md:grid-cols-2">
                        {testimonials.map((testimonial) => (
                            <figure key={testimonial.id} className="rounded-lg bg-white p-6 shadow-[0_20px_60px_rgba(7,21,39,0.07)]">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.avatar_url ?? ''}
                                        alt={testimonial.client_name}
                                        loading="lazy"
                                        className="size-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-[#071527]">{testimonial.client_name}</p>
                                        <p className="text-sm text-[#667085]">{testimonial.client_role}</p>
                                    </div>
                                </div>
                                <blockquote className="mt-5 text-base leading-8 text-[#344054]">"{testimonial.quote}"</blockquote>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#071527] px-5 py-16 text-white lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">Partner & perbankan</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['Mandiri', 'BCA', 'BRI', 'BNI', 'OCBC', 'BTN'].map((partner) => (
                                <span key={partner} className="rounded-md border border-white/15 px-5 py-3 text-sm text-white/72">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Link
                        href="/kontak"
                        className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[#d8b76d] px-7 text-sm font-bold text-[#071527]"
                    >
                        Jadwalkan Survey
                        <BadgeCheck className="size-4" />
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
}
