import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { store } from '@/routes/login';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

type LoginProps = {
    canResetPassword?: boolean;
    status?: string;
};

export default function Login({ canResetPassword = true, status }: LoginProps) {
    return (
        <>
            <Head title="Login Admin" />

            {status && (
                <div className="mb-4 rounded-md bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
                    {status}
                </div>
            )}

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="space-y-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                placeholder="admin@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                {canResetPassword && (
                                    <TextLink href="/forgot-password" className="text-sm">
                                        Lupa password?
                                    </TextLink>
                                )}
                            </div>
                            <PasswordInput
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                placeholder="Password"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center gap-3">
                            <Checkbox id="remember" name="remember" />
                            <Label htmlFor="remember" className="text-sm">
                                Ingat saya
                            </Label>
                        </div>

                        <Button className="w-full" disabled={processing}>
                            {processing && (
                                <LoaderCircle className="size-4 animate-spin" />
                            )}
                            Masuk Dashboard
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                            Belum punya akun? Hubungi administrator untuk akses
                            dashboard.
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Login.layout = {
    title: 'Login Admin',
    description: 'Masuk untuk mengelola proyek, artikel, testimoni, dan profil perusahaan.',
};
