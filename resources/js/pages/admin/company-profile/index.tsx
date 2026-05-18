import { Head, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import type { CompanyProfile } from '@/types/property';

export default function AdminCompanyProfileIndex({ company }: { company: (CompanyProfile & { id: number }) | null }) {
    const form = useForm({
        company_name: company?.company_name ?? '',
        tagline: company?.tagline ?? '',
        about: company?.about ?? '',
        history: company?.history ?? '',
        phone: company?.phone ?? '',
        whatsapp: company?.whatsapp ?? '',
        email: company?.email ?? '',
        address: company?.address ?? '',
        office_latitude: String(company?.office_latitude ?? ''),
        office_longitude: String(company?.office_longitude ?? ''),
    });

    const submit = (event: FormEvent) => {
        event.preventDefault();

        if (company?.id) {
            form.put(`/admin/company-profiles/${company.id}`);

            return;
        }

        form.post('/admin/company-profiles');
    };

    return (
        <>
            <Head title="Edit Company Profile" />
            <form onSubmit={submit} className="space-y-6 p-4 md:p-8">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Company Profile</h1>
                    <p className="mt-2 text-sm text-muted-foreground">Konten ini dipakai untuk About, Contact, footer, dan titik kantor pada map.</p>
                </div>
                <div className="grid gap-4 rounded-lg border bg-card p-6 md:grid-cols-2">
                    <input className="field-input" placeholder="Company name" value={form.data.company_name} onChange={(event) => form.setData('company_name', event.target.value)} />
                    <input className="field-input" placeholder="Tagline" value={form.data.tagline} onChange={(event) => form.setData('tagline', event.target.value)} />
                    <textarea className="field-input min-h-32 md:col-span-2" placeholder="About" value={form.data.about} onChange={(event) => form.setData('about', event.target.value)} />
                    <textarea className="field-input min-h-32 md:col-span-2" placeholder="History" value={form.data.history} onChange={(event) => form.setData('history', event.target.value)} />
                    <input className="field-input" placeholder="Phone" value={form.data.phone} onChange={(event) => form.setData('phone', event.target.value)} />
                    <input className="field-input" placeholder="WhatsApp" value={form.data.whatsapp} onChange={(event) => form.setData('whatsapp', event.target.value)} />
                    <input className="field-input" placeholder="Email" value={form.data.email} onChange={(event) => form.setData('email', event.target.value)} />
                    <input className="field-input" placeholder="Address" value={form.data.address} onChange={(event) => form.setData('address', event.target.value)} />
                    <input className="field-input" placeholder="Office latitude" value={form.data.office_latitude} onChange={(event) => form.setData('office_latitude', event.target.value)} />
                    <input className="field-input" placeholder="Office longitude" value={form.data.office_longitude} onChange={(event) => form.setData('office_longitude', event.target.value)} />
                    <button className="h-10 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground md:col-span-2">Simpan Company Profile</button>
                </div>
            </form>
        </>
    );
}
