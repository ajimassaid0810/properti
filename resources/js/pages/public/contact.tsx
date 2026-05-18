import { Head } from '@inertiajs/react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PublicLayout } from '@/components/public/public-layout';
import type { CompanyProfile } from '@/types/property';

export default function Contact({ company }: { company: CompanyProfile | null }) {
    const latitude = Number(company?.office_latitude ?? -6.22456);
    const longitude = Number(company?.office_longitude ?? 106.80933);
    const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;
    const contactItems: Array<{ icon: LucideIcon; label: string; value?: string | null }> = [
        { icon: Phone, label: 'Telepon', value: company?.phone },
        { icon: MessageCircle, label: 'WhatsApp', value: company?.whatsapp },
        { icon: Mail, label: 'Email', value: company?.email },
        { icon: MapPin, label: 'Alamat', value: company?.address },
    ];

    return (
        <PublicLayout company={company}>
            <Head title="Kontak">
                <meta name="description" content="Hubungi developer properti Nirvana Estate Development melalui WhatsApp, email, atau kunjungi marketing gallery." />
            </Head>
            <section className="bg-[#071527] px-5 pb-20 pt-36 text-white lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">Contact</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">Diskusikan kebutuhan properti Anda dengan advisor kami.</h1>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="grid gap-4">
                        {contactItems.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="rounded-lg bg-white p-6 shadow-[0_18px_50px_rgba(7,21,39,0.07)]">
                                <Icon className="size-6 text-[#9d7a2f]" />
                                <p className="mt-4 text-sm font-semibold text-[#667085]">{label}</p>
                                <p className="mt-2 font-semibold text-[#071527]">{value}</p>
                            </div>
                        ))}
                    </div>
                    <form className="rounded-lg bg-white p-7 shadow-[0_20px_60px_rgba(7,21,39,0.08)]">
                        <h2 className="text-2xl font-semibold text-[#071527]">Form contact</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d]" placeholder="Nama" />
                            <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d]" placeholder="WhatsApp" />
                            <input className="h-12 rounded-md border border-[#ded8cb] px-4 text-sm outline-none focus:border-[#d8b76d] md:col-span-2" placeholder="Email" />
                            <textarea className="min-h-36 rounded-md border border-[#ded8cb] px-4 py-3 text-sm outline-none focus:border-[#d8b76d] md:col-span-2" placeholder="Pesan" />
                            <button type="button" className="h-12 rounded-md bg-[#071527] font-semibold text-white md:col-span-2">
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="px-5 pb-20 lg:px-8">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#ded8cb] bg-white shadow-[0_20px_60px_rgba(7,21,39,0.08)]">
                    <iframe title="OSM kantor" src={osmUrl} className="h-[420px] w-full" loading="lazy" />
                </div>
            </section>
        </PublicLayout>
    );
}
