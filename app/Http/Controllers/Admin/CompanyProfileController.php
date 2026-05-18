<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CompanyProfile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CompanyProfileController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/company-profile/index', [
            'company' => CompanyProfile::query()->latest()->first(),
        ]);
    }

    public function create(): RedirectResponse
    {
        return redirect()->route('admin.company-profiles.index');
    }

    public function store(Request $request): RedirectResponse
    {
        CompanyProfile::query()->create($this->validatedData($request));

        return back()->with('success', 'Company profile berhasil dibuat.');
    }

    public function show(CompanyProfile $companyProfile): RedirectResponse
    {
        return redirect()->route('admin.company-profiles.index');
    }

    public function edit(CompanyProfile $companyProfile): RedirectResponse
    {
        return redirect()->route('admin.company-profiles.index');
    }

    public function update(Request $request, CompanyProfile $companyProfile): RedirectResponse
    {
        $companyProfile->update($this->validatedData($request));

        return back()->with('success', 'Company profile berhasil diperbarui.');
    }

    public function destroy(CompanyProfile $companyProfile): RedirectResponse
    {
        $companyProfile->delete();

        return back()->with('success', 'Company profile berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedData(Request $request): array
    {
        $validated = $request->validate([
            'company_name' => ['required', 'string', 'max:255'],
            'tagline' => ['nullable', 'string', 'max:255'],
            'about' => ['required', 'string'],
            'history' => ['nullable', 'string'],
            'phone' => ['nullable', 'string', 'max:255'],
            'whatsapp' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email'],
            'address' => ['nullable', 'string'],
            'office_latitude' => ['nullable', 'numeric', 'between:-90,90'],
            'office_longitude' => ['nullable', 'numeric', 'between:-180,180'],
        ]);

        return [
            ...$validated,
            'vision_mission' => ['vision' => 'Menjadi developer properti terpercaya.', 'mission' => ['Membangun lokasi strategis', 'Memberikan layanan transparan']],
            'core_values' => ['Integrity', 'Craftsmanship', 'Customer Centric', 'Long Term Value'],
            'legalities' => ['NIB', 'PBG/IMB', 'Sertifikat HGB'],
            'timeline' => [['year' => '2026', 'title' => 'Portfolio diperbarui']],
            'social_links' => [],
        ];
    }
}
