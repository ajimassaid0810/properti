import { Head } from '@inertiajs/react';
import { Award, FileCheck2, Gem, Handshake, Target } from 'lucide-react';
import { PublicLayout } from '@/components/public/public-layout';
import { SectionHeading } from '@/components/public/section-heading';
import type { CompanyProfile } from '@/types/property';

export default function About({ company }: { company: CompanyProfile | null }) {
    const values = company?.core_values ?? ['Integrity', 'Craftsmanship', 'Customer Centric', 'Long Term Value'];

    return (
        <PublicLayout company={company}>
            <Head title="Tentang Kami">
                <meta name="description" content="Tentang Nirvana Estate Development, developer properti modern dengan legalitas jelas dan desain premium." />
            </Head>
            <section className="bg-[#071527] px-5 pb-20 pt-36 text-white lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">About company</p>
                        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">{company?.company_name ?? 'Nirvana Estate Development'}</h1>
                    </div>
                    <p className="text-lg leading-9 text-white/72">{company?.about}</p>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <div className="rounded-lg bg-white p-8 shadow-[0_22px_70px_rgba(7,21,39,0.08)]">
                        <Award className="size-8 text-[#9d7a2f]" />
                        <h2 className="mt-6 text-3xl font-semibold text-[#071527]">Sejarah</h2>
                        <p className="mt-5 text-base leading-8 text-[#667085]">{company?.history}</p>
                    </div>
                    <div className="rounded-lg bg-[#071527] p-8 text-white shadow-[0_22px_70px_rgba(7,21,39,0.12)]">
                        <Target className="size-8 text-[#d8b76d]" />
                        <h2 className="mt-6 text-3xl font-semibold">Visi & Misi</h2>
                        <p className="mt-5 text-base leading-8 text-white/72">{company?.vision_mission?.vision}</p>
                        <div className="mt-6 grid gap-3">
                            {company?.vision_mission?.mission?.map((mission) => (
                                <p key={mission} className="rounded-md bg-white/10 px-4 py-3 text-sm text-white/78">
                                    {mission}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Core values" title="Nilai yang menjaga kualitas setiap pengembangan" />
                    <div className="grid gap-4 md:grid-cols-4">
                        {values.map((value) => (
                            <div key={value} className="rounded-lg border border-[#ebe6dc] bg-[#f8f6f1] p-6">
                                <Gem className="size-6 text-[#9d7a2f]" />
                                <p className="mt-5 font-semibold text-[#071527]">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#9d7a2f] uppercase">Legalitas</p>
                        <h2 className="mt-4 text-3xl font-semibold text-[#071527]">Corporate compliance yang transparan.</h2>
                        <div className="mt-8 grid gap-3">
                            {company?.legalities?.map((legality) => (
                                <div key={legality} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
                                    <FileCheck2 className="size-5 text-[#9d7a2f]" />
                                    <span className="text-sm text-[#344054]">{legality}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold tracking-[0.26em] text-[#9d7a2f] uppercase">Timeline</p>
                        <div className="mt-8 grid gap-4">
                            {company?.timeline?.map((item) => (
                                <div key={item.year} className="grid gap-4 rounded-lg border border-[#ded8cb] bg-white p-6 md:grid-cols-[120px_1fr]">
                                    <p className="text-3xl font-bold text-[#d8b76d]">{item.year}</p>
                                    <div className="flex items-center gap-3">
                                        <Handshake className="size-5 text-[#071527]" />
                                        <p className="font-semibold text-[#071527]">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
