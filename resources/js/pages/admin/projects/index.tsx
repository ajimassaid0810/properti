import { Head, Link, router } from '@inertiajs/react';
import { Edit3, Plus, Trash2 } from 'lucide-react';
import type { Project } from '@/types/property';

type PaginatedProjects = {
    data: Project[];
};

export default function AdminProjectIndex({ projects }: { projects: PaginatedProjects }) {
    return (
        <>
            <Head title="Kelola Project" />
            <div className="space-y-6 p-4 md:p-8">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-semibold">CRUD Project</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Data ini menjadi sumber project listing, detail, gallery, dan lokasi map.</p>
                    </div>
                    <Link href="/admin/projects/create" className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">
                        <Plus className="size-4" />
                        Tambah Project
                    </Link>
                </div>
                <div className="overflow-hidden rounded-lg border bg-card">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] text-sm">
                            <thead className="bg-muted text-left">
                                <tr>
                                    <th className="p-4">Project</th>
                                    <th className="p-4">Kategori</th>
                                    <th className="p-4">Harga</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {projects.data.map((project) => (
                                    <tr key={project.id}>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img src={project.thumbnail} alt={project.name} className="size-14 rounded-md object-cover" />
                                                <div>
                                                    <p className="font-semibold">{project.name}</p>
                                                    <p className="text-muted-foreground">{project.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">{project.category}</td>
                                        <td className="p-4">{project.price_start}</td>
                                        <td className="p-4">{project.status}</td>
                                        <td className="p-4">
                                            <div className="flex justify-end gap-2">
                                                <Link href={`/admin/projects/${project.id}/edit`} className="inline-flex size-9 items-center justify-center rounded-md border">
                                                    <Edit3 className="size-4" />
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => router.delete(`/admin/projects/${project.id}`)}
                                                    className="inline-flex size-9 items-center justify-center rounded-md border text-red-600"
                                                >
                                                    <Trash2 className="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
