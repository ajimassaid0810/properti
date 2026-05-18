import { Head, Link, useForm } from '@inertiajs/react';
import { ImageUp, MapPin } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import type { Project } from '@/types/property';

type ProjectFormData = {
    name: string;
    slug: string;
    category: string;
    location: string;
    price_start: string;
    status: string;
    thumbnail: string;
    thumbnail_file: File | null;
    short_description: string;
    description: string;
    latitude: string;
    longitude: string;
    address: string;
    is_featured: boolean;
    is_published: boolean;
};

type LeafletMap = {
    remove: () => void;
    setView: (coordinates: [number, number], zoom: number) => void;
    on: (event: 'click', handler: (event: { latlng: { lat: number; lng: number } }) => void) => void;
};

type LeafletMarker = {
    addTo: (map: LeafletMap) => LeafletMarker;
    bindPopup: (content: string) => LeafletMarker;
    openPopup: () => LeafletMarker;
    on: (event: 'dragend', handler: () => void) => void;
    getLatLng: () => { lat: number; lng: number };
};

type LeafletApi = {
    map: (element: HTMLElement) => LeafletMap;
    tileLayer: (url: string, options: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
    marker: (coordinates: [number, number], options?: Record<string, unknown>) => LeafletMarker;
    divIcon: (options: Record<string, unknown>) => unknown;
};

function leafletWindow(): { L?: LeafletApi } {
    return window as unknown as { L?: LeafletApi };
}

function loadLeaflet(): Promise<LeafletApi> {
    const existingLeaflet = leafletWindow().L;

    if (existingLeaflet) {
        return Promise.resolve(existingLeaflet);
    }

    return new Promise((resolve, reject) => {
        if (!document.querySelector('link[data-leaflet]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            link.dataset.leaflet = 'true';
            document.head.appendChild(link);
        }

        const existingScript = document.querySelector('script[data-leaflet]');

        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(leafletWindow().L as LeafletApi));

            return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        script.dataset.leaflet = 'true';
        script.onload = () => resolve(leafletWindow().L as LeafletApi);
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export default function AdminProjectForm({ project, mode }: { project: Project | null; mode: 'create' | 'edit' }) {
    const location = project?.location_detail;
    const form = useForm<ProjectFormData>({
        name: project?.name ?? '',
        slug: project?.slug ?? '',
        category: project?.category ?? 'Rumah',
        location: project?.location ?? '',
        price_start: project?.price_start ?? '',
        status: project?.status ?? 'Pre Launch',
        thumbnail: project?.thumbnail ?? '',
        thumbnail_file: null,
        short_description: project?.short_description ?? '',
        description: project?.description ?? '',
        latitude: String(location?.latitude ?? '-6.2245600'),
        longitude: String(location?.longitude ?? '106.8093300'),
        address: location?.address ?? '',
        is_featured: project?.is_featured ?? false,
        is_published: project?.is_published ?? true,
    });
    const [previewUrl, setPreviewUrl] = useState(project?.thumbnail ?? '');

    useEffect(() => {
        if (!form.data.thumbnail_file) {
            setPreviewUrl(form.data.thumbnail);

            return;
        }

        const objectUrl = URL.createObjectURL(form.data.thumbnail_file);
        setPreviewUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [form.data.thumbnail, form.data.thumbnail_file]);

    const submit = (event: FormEvent) => {
        event.preventDefault();

        if (mode === 'create') {
            form.post('/admin/projects', { forceFormData: true });

            return;
        }

        form.transform((data) => ({ ...data, _method: 'put' }));
        form.post(`/admin/projects/${project?.id}`, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title={mode === 'create' ? 'Tambah Project' : 'Edit Project'} />
            <form onSubmit={submit} className="space-y-6 p-4 md:p-8">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-semibold">{mode === 'create' ? 'Tambah Project' : 'Edit Project'}</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Upload gambar lokal dan pilih koordinat proyek langsung dari map.</p>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/admin/projects" className="inline-flex h-10 items-center rounded-md border px-4 text-sm font-semibold">
                            Batal
                        </Link>
                        <button type="submit" disabled={form.processing} className="h-10 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground">
                            Simpan
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-lg border bg-card p-6">
                        <h2 className="font-semibold">Informasi project</h2>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <Field label="Nama" error={form.errors.name}>
                                <input value={form.data.name} onChange={(event) => form.setData('name', event.target.value)} className="field-input" />
                            </Field>
                            <Field label="Slug" error={form.errors.slug}>
                                <input value={form.data.slug} onChange={(event) => form.setData('slug', event.target.value)} className="field-input" />
                            </Field>
                            <Field label="Kategori" error={form.errors.category}>
                                <select value={form.data.category} onChange={(event) => form.setData('category', event.target.value)} className="field-input">
                                    <option>Rumah</option>
                                    <option>Apartemen</option>
                                    <option>Komersial</option>
                                </select>
                            </Field>
                            <Field label="Lokasi" error={form.errors.location}>
                                <input value={form.data.location} onChange={(event) => form.setData('location', event.target.value)} className="field-input" />
                            </Field>
                            <Field label="Harga mulai" error={form.errors.price_start}>
                                <input value={form.data.price_start} onChange={(event) => form.setData('price_start', event.target.value)} className="field-input" />
                            </Field>
                            <Field label="Status" error={form.errors.status}>
                                <input value={form.data.status} onChange={(event) => form.setData('status', event.target.value)} className="field-input" />
                            </Field>

                            <div className="md:col-span-2">
                                <span className="text-sm font-medium">Thumbnail project</span>
                                <div className="mt-2 grid gap-4 rounded-lg border border-dashed bg-muted/30 p-4 md:grid-cols-[220px_1fr]">
                                    <div className="aspect-[4/3] overflow-hidden rounded-md bg-background">
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="Preview thumbnail" className="h-full w-full object-cover" />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-muted-foreground">
                                                <ImageUp className="size-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <Field label="Upload gambar baru" error={form.errors.thumbnail_file}>
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                                onChange={(event) => form.setData('thumbnail_file', event.target.files?.[0] ?? null)}
                                                className="field-input file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-primary-foreground"
                                            />
                                        </Field>
                                        <Field label="URL lama / path tersimpan" error={form.errors.thumbnail}>
                                            <input
                                                value={form.data.thumbnail}
                                                onChange={(event) => form.setData('thumbnail', event.target.value)}
                                                className="field-input"
                                                placeholder="URL lama tetap boleh dipakai, upload baru akan mengganti"
                                            />
                                        </Field>
                                        <p className="text-xs leading-5 text-muted-foreground">
                                            Data lama yang memakai URL internet tetap dipertahankan. Untuk project baru, pilih file agar gambar tersimpan di storage lokal project.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Field label="Deskripsi singkat" error={form.errors.short_description}>
                                <textarea value={form.data.short_description} onChange={(event) => form.setData('short_description', event.target.value)} className="field-input min-h-24" />
                            </Field>
                            <Field label="Deskripsi" error={form.errors.description} wide>
                                <textarea value={form.data.description} onChange={(event) => form.setData('description', event.target.value)} className="field-input min-h-40" />
                            </Field>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-lg border bg-card p-6">
                            <h2 className="font-semibold">Lokasi map proyek</h2>
                            <p className="mt-2 text-sm text-muted-foreground">Klik map atau geser marker untuk mengisi latitude dan longitude.</p>
                            <div className="mt-5 grid gap-4">
                                <LocationPickerMap
                                    latitude={form.data.latitude}
                                    longitude={form.data.longitude}
                                    onChange={(latitude, longitude) => {
                                        form.setData('latitude', latitude);
                                        form.setData('longitude', longitude);
                                    }}
                                />
                                <Field label="Latitude" error={form.errors.latitude}>
                                    <input value={form.data.latitude} onChange={(event) => form.setData('latitude', event.target.value)} className="field-input" />
                                </Field>
                                <Field label="Longitude" error={form.errors.longitude}>
                                    <input value={form.data.longitude} onChange={(event) => form.setData('longitude', event.target.value)} className="field-input" />
                                </Field>
                                <Field label="Alamat" error={form.errors.address}>
                                    <textarea value={form.data.address} onChange={(event) => form.setData('address', event.target.value)} className="field-input min-h-24" />
                                </Field>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card p-6">
                            <h2 className="font-semibold">Publikasi</h2>
                            <label className="mt-5 flex items-center gap-3 text-sm">
                                <input type="checkbox" checked={form.data.is_featured} onChange={(event) => form.setData('is_featured', event.target.checked)} />
                                Featured project
                            </label>
                            <label className="mt-4 flex items-center gap-3 text-sm">
                                <input type="checkbox" checked={form.data.is_published} onChange={(event) => form.setData('is_published', event.target.checked)} />
                                Published
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

function LocationPickerMap({
    latitude,
    longitude,
    onChange,
}: {
    latitude: string;
    longitude: string;
    onChange: (latitude: string, longitude: string) => void;
}) {
    const mapElement = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<LeafletMap | null>(null);
    const onChangeRef = useRef(onChange);
    const point = useMemo<[number, number]>(() => {
        const parsedLatitude = Number.parseFloat(latitude);
        const parsedLongitude = Number.parseFloat(longitude);

        return [Number.isFinite(parsedLatitude) ? parsedLatitude : -6.22456, Number.isFinite(parsedLongitude) ? parsedLongitude : 106.80933];
    }, [latitude, longitude]);

    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
        let isMounted = true;

        loadLeaflet().then((leaflet) => {
            if (!isMounted || !mapElement.current) {
                return;
            }

            mapInstance.current?.remove();

            const map = leaflet.map(mapElement.current);
            const icon = leaflet.divIcon({
                className: '',
                html: '<span style="display:block;width:24px;height:24px;border-radius:999px;background:#c8a45d;border:5px solid #071527;box-shadow:0 12px 30px rgba(7,21,39,.28)"></span>',
            });
            const marker = leaflet
                .marker(point, { draggable: true, icon })
                .addTo(map)
                .bindPopup('Lokasi proyek')
                .openPopup();

            mapInstance.current = map;
            map.setView(point, 14);
            leaflet
                .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                    maxZoom: 19,
                })
                .addTo(map);

            map.on('click', (event) => {
                onChangeRef.current(event.latlng.lat.toFixed(7), event.latlng.lng.toFixed(7));
            });

            marker.on('dragend', () => {
                const nextPoint = marker.getLatLng();
                onChangeRef.current(nextPoint.lat.toFixed(7), nextPoint.lng.toFixed(7));
            });
        });

        return () => {
            isMounted = false;
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, [point]);

    return (
        <div className="overflow-hidden rounded-lg border">
            <div ref={mapElement} className="h-72 bg-muted" />
            <div className="flex items-center gap-2 border-t bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                {point[0].toFixed(7)}, {point[1].toFixed(7)}
            </div>
        </div>
    );
}

function Field({ label, error, children, wide = false }: { label: string; error?: string; children: ReactNode; wide?: boolean }) {
    return (
        <label className={`grid gap-2 text-sm ${wide ? 'md:col-span-2' : ''}`}>
            <span className="font-medium">{label}</span>
            {children}
            {error && <span className="text-xs text-red-600">{error}</span>}
        </label>
    );
}
