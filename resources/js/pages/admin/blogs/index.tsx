import { Head, router, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import type { BlogPost } from '@/types/property';

const blankPost = {
    title: '',
    slug: '',
    category: 'Investasi properti',
    excerpt: '',
    content: '',
    cover_image: '',
    is_published: true,
};

export default function AdminBlogsIndex({ posts }: { posts: BlogPost[] }) {
    const form = useForm(blankPost);

    const submit = (event: FormEvent) => {
        event.preventDefault();
        form.post('/admin/blogs', { onSuccess: () => form.reset() });
    };

    return (
        <>
            <Head title="CRUD Blog" />
            <div className="grid gap-6 p-4 md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
                <form onSubmit={submit} className="rounded-lg border bg-card p-6">
                    <h1 className="text-xl font-semibold">CRUD Artikel Blog</h1>
                    <div className="mt-5 grid gap-3">
                        <input className="field-input" placeholder="Judul" value={form.data.title} onChange={(event) => form.setData('title', event.target.value)} />
                        <input className="field-input" placeholder="Slug" value={form.data.slug} onChange={(event) => form.setData('slug', event.target.value)} />
                        <select className="field-input" value={form.data.category} onChange={(event) => form.setData('category', event.target.value)}>
                            <option>Investasi properti</option>
                            <option>Tips rumah</option>
                            <option>Tips KPR</option>
                            <option>Interior modern</option>
                        </select>
                        <input className="field-input" placeholder="Cover image URL" value={form.data.cover_image} onChange={(event) => form.setData('cover_image', event.target.value)} />
                        <textarea className="field-input min-h-24" placeholder="Excerpt" value={form.data.excerpt} onChange={(event) => form.setData('excerpt', event.target.value)} />
                        <textarea className="field-input min-h-36" placeholder="Content" value={form.data.content} onChange={(event) => form.setData('content', event.target.value)} />
                        <button className="h-10 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">Tambah Artikel</button>
                    </div>
                </form>
                <div className="rounded-lg border bg-card">
                    <div className="border-b p-5 font-semibold">Daftar artikel</div>
                    <div className="divide-y">
                        {posts.map((post) => (
                            <div key={post.id} className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <p className="font-semibold">{post.title}</p>
                                    <p className="text-sm text-muted-foreground">{post.category}</p>
                                </div>
                                <button type="button" onClick={() => router.delete(`/admin/blogs/${post.id}`)} className="rounded-md border px-3 py-2 text-sm text-red-600">
                                    Hapus
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
