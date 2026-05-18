import { Link, usePage } from '@inertiajs/react';
import { Building2, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import type { CompanyProfile } from '@/types/property';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tentang', href: '/tentang-kami' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/kontak' },
];

export function PublicLayout({
    children,
    company,
}: {
    children: ReactNode;
    company?: CompanyProfile | null;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();
    const whatsapp = company?.whatsapp ?? '6281299902026';

    return (
        <div className="min-h-screen bg-[#f8f6f1] text-[#172033]">
            <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#071527]/90 text-white shadow-[0_18px_60px_rgba(7,21,39,0.12)] backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-md border border-[#c8a45d]/40 bg-[#c8a45d]/15">
                            <Building2 className="size-5 text-[#d8b76d]" />
                        </span>
                        <span>
                            <span className="block text-sm font-semibold tracking-[0.22em] uppercase">Nirvana</span>
                            <span className="block text-xs text-white/62">Estate Development</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition hover:text-[#d8b76d] ${
                                    url === item.href ? 'text-[#d8b76d]' : 'text-white/78'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            className="inline-flex h-11 items-center gap-2 rounded-md bg-[#d8b76d] px-5 text-sm font-semibold text-[#071527] transition hover:bg-white"
                        >
                            <Phone className="size-4" />
                            Konsultasi
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((value) => !value)}
                        className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-white/10 bg-[#071527] px-5 py-5 lg:hidden">
                        <div className="grid gap-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main>{children}</main>

            <a
                href={`https://wa.me/${whatsapp}`}
                className="fixed right-5 bottom-5 z-50 inline-flex h-14 items-center gap-3 rounded-md bg-[#1f9d59] px-5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(31,157,89,0.32)] transition hover:-translate-y-1"
            >
                <Phone className="size-5" />
                WhatsApp
            </a>

            <footer className="bg-[#071527] px-5 py-12 text-white">
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
                    <div>
                        <p className="text-lg font-semibold">{company?.company_name ?? 'Nirvana Estate Development'}</p>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/62">
                            Developer properti modern untuk hunian, apartemen, dan kawasan komersial bernilai investasi tinggi.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#d8b76d]">Navigasi</p>
                        <div className="mt-3 grid gap-2 text-sm text-white/62">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href} className="hover:text-white">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-[#d8b76d]">Kontak</p>
                        <p className="mt-3 text-sm leading-7 text-white/62">{company?.address}</p>
                        <p className="mt-2 text-sm text-white/62">{company?.email}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
