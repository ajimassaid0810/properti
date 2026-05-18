import { Head, Link } from '@inertiajs/react';
import { Building2, FileText, MessageSquareQuote, Settings2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Project } from '@/types/property';

export default function AdminDashboard({
    stats,
    latestProjects,
}: {
    stats: { projects: number; blogs: number; testimonials: number; companyProfiles: number };
    latestProjects: Project[];
}) {
    const cards: Array<{ icon: LucideIcon; label: string; value: number; href: string }> = [
        { icon: Building2, label: 'Project', value: stats.projects, href: '/admin/projects' },
        { icon: FileText, label: 'Artikel blog', value: stats.blogs, href: '/admin/blogs' },
        { icon: MessageSquareQuote, label: 'Testimonial', value: stats.testimonials, href: '/admin/testimonials' },
        { icon: Settings2, label: 'Company profile', value: stats.companyProfiles, href: '/admin/company-profiles' },
    ];

    return (
        <>
            <Head title="Admin Panel" />
            <div className="space-y-6 p-4 md:p-8">
                <div>
                    <h1 className="text-2xl font-semibold">Admin Panel Properti</h1>
                    <p className="mt-2 text-sm text-muted-foreground">Kelola project, gallery, blog, testimonial, company profile, dan lokasi map proyek.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                    {cards.map(({ icon: Icon, label, value, href }) => (
                        <Link key={label} href={href} className="rounded-lg border bg-card p-5 shadow-sm transition hover:-translate-y-1">
                            <Icon className="size-5 text-[#9d7a2f]" />
                            <p className="mt-4 text-sm text-muted-foreground">{label}</p>
                            <p className="mt-1 text-3xl font-bold">{value}</p>
                        </Link>
                    ))}
                </div>
                <div className="rounded-lg border bg-card">
                    <div className="flex items-center justify-between border-b p-5">
                        <h2 className="font-semibold">Project terbaru</h2>
                        <Link href="/admin/projects" className="text-sm font-semibold text-[#9d7a2f]">
                            Kelola project
                        </Link>
                    </div>
                    <div className="divide-y">
                        {latestProjects.map((project) => (
                            <div key={project.id} className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <p className="font-semibold">{project.name}</p>
                                    <p className="text-sm text-muted-foreground">{project.location}</p>
                                </div>
                                <span className="rounded-md bg-muted px-3 py-2 text-sm">{project.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
