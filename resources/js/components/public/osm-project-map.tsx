import { LocateFixed, MapPinned, Navigation, Route } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ProjectLocation } from '@/types/property';

type LeafletMap = {
    remove: () => void;
    setView: (coordinates: [number, number], zoom: number) => void;
};

type LeafletApi = {
    map: (element: HTMLElement) => LeafletMap;
    tileLayer: (url: string, options: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
    marker: (coordinates: [number, number], options?: Record<string, unknown>) => {
        addTo: (map: LeafletMap) => { bindPopup: (content: string) => { openPopup: () => void } };
    };
    polyline: (coordinates: Array<[number, number]>, options?: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
    divIcon: (options: Record<string, unknown>) => unknown;
};

declare global {
    interface Window {
        L?: LeafletApi;
    }
}

const defaultPoint = {
    latitude: -6.22456,
    longitude: 106.80933,
};

function toNumber(value: string | number): number {
    return typeof value === 'number' ? value : Number.parseFloat(value);
}

function haversineDistance(from: { latitude: number; longitude: number }, to: { latitude: number; longitude: number }): number {
    const earthRadius = 6371;
    const deltaLatitude = ((to.latitude - from.latitude) * Math.PI) / 180;
    const deltaLongitude = ((to.longitude - from.longitude) * Math.PI) / 180;
    const startLatitude = (from.latitude * Math.PI) / 180;
    const endLatitude = (to.latitude * Math.PI) / 180;
    const angle =
        Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
        Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);

    return earthRadius * 2 * Math.atan2(Math.sqrt(angle), Math.sqrt(1 - angle));
}

function loadLeaflet(): Promise<LeafletApi> {
    if (window.L) {
        return Promise.resolve(window.L);
    }

    return new Promise((resolve, reject) => {
        const existingLink = document.querySelector('link[data-leaflet]');

        if (!existingLink) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            link.dataset.leaflet = 'true';
            document.head.appendChild(link);
        }

        const existingScript = document.querySelector('script[data-leaflet]');

        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(window.L as LeafletApi));

            return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        script.dataset.leaflet = 'true';
        script.onload = () => resolve(window.L as LeafletApi);
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export function OsmProjectMap({
    projectName,
    location,
}: {
    projectName: string;
    location: ProjectLocation;
}) {
    const mapElement = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<LeafletMap | null>(null);
    const projectPoint = useMemo(
        () => ({
            latitude: toNumber(location.latitude),
            longitude: toNumber(location.longitude),
        }),
        [location.latitude, location.longitude],
    );
    const [origin, setOrigin] = useState(defaultPoint);
    const [manualLatitude, setManualLatitude] = useState(String(defaultPoint.latitude));
    const [manualLongitude, setManualLongitude] = useState(String(defaultPoint.longitude));
    const [status, setStatus] = useState('Titik default kantor Jakarta digunakan.');

    const distance = haversineDistance(origin, projectPoint);
    const estimatedMinutes = Math.max(8, Math.round((distance / 32) * 60));
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${projectPoint.latitude},${projectPoint.longitude}`;

    useEffect(() => {
        let isMounted = true;

        loadLeaflet().then((leaflet) => {
            if (!isMounted || !mapElement.current) {
                return;
            }

            mapInstance.current?.remove();
            const map = leaflet.map(mapElement.current);
            mapInstance.current = map;
            map.setView([projectPoint.latitude, projectPoint.longitude], 13);

            leaflet
                .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                    maxZoom: 19,
                })
                .addTo(map);

            const icon = leaflet.divIcon({
                className: '',
                html: '<span style="display:block;width:24px;height:24px;border-radius:999px;background:#d8b76d;border:5px solid #071527;box-shadow:0 12px 30px rgba(7,21,39,.28)"></span>',
            });

            leaflet
                .marker([projectPoint.latitude, projectPoint.longitude], { icon })
                .addTo(map)
                .bindPopup(`<strong>${projectName}</strong><br>${location.address}`)
                .openPopup();

            leaflet.marker([origin.latitude, origin.longitude]).addTo(map);
            leaflet
                .polyline(
                    [
                        [origin.latitude, origin.longitude],
                        [projectPoint.latitude, projectPoint.longitude],
                    ],
                    { color: '#c8a45d', weight: 4, dashArray: '10 10' },
                )
                .addTo(map);
        });

        return () => {
            isMounted = false;
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, [location.address, origin, projectName, projectPoint.latitude, projectPoint.longitude]);

    const detectLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Browser tidak mendukung GPS. Titik default tetap digunakan.');

            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const nextOrigin = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                setOrigin(nextOrigin);
                setManualLatitude(String(nextOrigin.latitude.toFixed(7)));
                setManualLongitude(String(nextOrigin.longitude.toFixed(7)));
                setStatus('Lokasi Anda berhasil digunakan.');
            },
            () => {
                setStatus('GPS ditolak. Titik default/manual tetap digunakan.');
            },
        );
    };

    const applyManualPoint = () => {
        const latitude = Number.parseFloat(manualLatitude);
        const longitude = Number.parseFloat(manualLongitude);

        if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
            setStatus('Koordinat manual belum valid.');

            return;
        }

        setOrigin({ latitude, longitude });
        setStatus('Titik pembanding manual digunakan.');
    };

    return (
        <section className="rounded-lg border border-[#ded8cb] bg-white p-4 shadow-[0_22px_70px_rgba(7,21,39,0.08)] md:p-6">
            <div className="mb-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                    <p className="text-xs font-bold tracking-[0.22em] text-[#9d7a2f] uppercase">Lokasi proyek</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#071527]">{projectName}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">{location.address}</p>
                    <p className="mt-1 text-xs text-[#667085]">
                        Koordinat: {projectPoint.latitude.toFixed(7)}, {projectPoint.longitude.toFixed(7)}
                    </p>
                </div>
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#071527] px-4 text-sm font-semibold text-white hover:bg-[#d8b76d] hover:text-[#071527]"
                >
                    <Navigation className="size-4" />
                    Buka di Google Maps
                </a>
            </div>

            <div ref={mapElement} className="h-[360px] overflow-hidden rounded-lg bg-[#e7e2d8] md:h-[460px]" />

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
                <div className="rounded-md bg-[#f8f6f1] p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#071527]">
                        <Route className="size-4 text-[#9d7a2f]" />
                        Estimasi jarak
                    </div>
                    <p className="mt-2 text-3xl font-bold text-[#071527]">{distance.toFixed(1)} KM</p>
                    <p className="text-sm text-[#667085]">Estimasi {estimatedMinutes} menit perjalanan.</p>
                </div>

                <div className="rounded-md bg-[#f8f6f1] p-4">
                    <button
                        type="button"
                        onClick={detectLocation}
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#d8b76d] text-sm font-semibold text-[#071527]"
                    >
                        <LocateFixed className="size-4" />
                        Gunakan Lokasi Saya
                    </button>
                    <p className="mt-3 text-xs leading-5 text-[#667085]">{status}</p>
                </div>

                <div className="rounded-md bg-[#f8f6f1] p-4">
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            value={manualLatitude}
                            onChange={(event) => setManualLatitude(event.target.value)}
                            className="h-11 rounded-md border border-[#ded8cb] bg-white px-3 text-sm outline-none focus:border-[#d8b76d]"
                            aria-label="Latitude pembanding"
                        />
                        <input
                            value={manualLongitude}
                            onChange={(event) => setManualLongitude(event.target.value)}
                            className="h-11 rounded-md border border-[#ded8cb] bg-white px-3 text-sm outline-none focus:border-[#d8b76d]"
                            aria-label="Longitude pembanding"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={applyManualPoint}
                        className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#071527] text-sm font-semibold text-[#071527]"
                    >
                        <MapPinned className="size-4" />
                        Pakai Titik Ini
                    </button>
                </div>
            </div>
        </section>
    );
}
