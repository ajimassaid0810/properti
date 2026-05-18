import { Head, router, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import type { Testimonial } from '@/types/property';

export default function AdminTestimonialsIndex({ testimonials }: { testimonials: Testimonial[] }) {
    const form = useForm({
        client_name: '',
        client_role: '',
        project_name: '',
        avatar_url: '',
        quote: '',
        rating: 5,
        is_published: true,
    });

    const submit = (event: FormEvent) => {
        event.preventDefault();
        form.post('/admin/testimonials', { onSuccess: () => form.reset() });
    };

    return (
        <>
            <Head title="CRUD Testimonial" />
            <div className="grid gap-6 p-4 md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
                <form onSubmit={submit} className="rounded-lg border bg-card p-6">
                    <h1 className="text-xl font-semibold">CRUD Testimonial</h1>
                    <div className="mt-5 grid gap-3">
                        <input className="field-input" placeholder="Nama client" value={form.data.client_name} onChange={(event) => form.setData('client_name', event.target.value)} />
                        <input className="field-input" placeholder="Role client" value={form.data.client_role} onChange={(event) => form.setData('client_role', event.target.value)} />
                        <input className="field-input" placeholder="Nama project" value={form.data.project_name} onChange={(event) => form.setData('project_name', event.target.value)} />
                        <input className="field-input" placeholder="Avatar URL" value={form.data.avatar_url} onChange={(event) => form.setData('avatar_url', event.target.value)} />
                        <textarea className="field-input min-h-32" placeholder="Quote" value={form.data.quote} onChange={(event) => form.setData('quote', event.target.value)} />
                        <button className="h-10 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">Tambah Testimonial</button>
                    </div>
                </form>
                <div className="rounded-lg border bg-card">
                    <div className="border-b p-5 font-semibold">Daftar testimonial</div>
                    <div className="divide-y">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <p className="font-semibold">{testimonial.client_name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.quote}</p>
                                </div>
                                <button type="button" onClick={() => router.delete(`/admin/testimonials/${testimonial.id}`)} className="rounded-md border px-3 py-2 text-sm text-red-600">
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
