import { Head } from '@inertiajs/react';
import { BookOpen, CalendarDays } from 'lucide-react';
import { PublicLayout } from '@/components/public/public-layout';
import { SectionHeading } from '@/components/public/section-heading';
import type { BlogPost } from '@/types/property';

const categories = ['Investasi properti', 'Tips rumah', 'Tips KPR', 'Interior modern'];

export default function Blog({ posts }: { posts: BlogPost[] }) {
    return (
        <PublicLayout>
            <Head title="Blog Properti">
                <meta name="description" content="Artikel properti SEO friendly tentang investasi properti, tips rumah, KPR, dan interior modern." />
            </Head>
            <section className="bg-[#071527] px-5 pb-20 pt-36 text-white lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold tracking-[0.26em] text-[#d8b76d] uppercase">Property insight</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">Artikel properti untuk keputusan beli yang lebih percaya diri.</h1>
                </div>
            </section>

            <section className="px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Kategori" title="Topik populer" />
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <span key={category} className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#071527] shadow-sm">
                                {category}
                            </span>
                        ))}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {posts.map((post) => (
                            <article key={post.id} className="overflow-hidden rounded-lg bg-white shadow-[0_20px_60px_rgba(7,21,39,0.08)]">
                                <img src={post.cover_image} alt={post.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                                <div className="p-7">
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#667085]">
                                        <span className="inline-flex items-center gap-2 rounded-md bg-[#f8f6f1] px-3 py-2 text-[#9d7a2f]">
                                            <BookOpen className="size-4" />
                                            {post.category}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <CalendarDays className="size-4" />
                                            SEO friendly
                                        </span>
                                    </div>
                                    <h2 className="mt-5 text-2xl font-semibold text-[#071527]">{post.title}</h2>
                                    <p className="mt-4 text-sm leading-7 text-[#667085]">{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
