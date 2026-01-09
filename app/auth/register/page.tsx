'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/utils/auth';
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Validate form
            if (!name.trim()) {
                setError('Nama tidak boleh kosong');
                setLoading(false);
                return;
            }

            if (password !== confirmPassword) {
                setError('Password tidak cocok');
                setLoading(false);
                return;
            }

            const result = registerUser(email, name, password);

            if (result.success) {
                // Redirect to dashboard
                router.push('/dashboard');
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    const passwordStrength = password
        ? password.length >= 12
            ? 'Kuat'
            : password.length >= 8
                ? 'Sedang'
                : 'Lemah'
        : '';

    const getPasswordStrengthColor = () => {
        if (!passwordStrength) return 'bg-gray-300';
        if (passwordStrength === 'Kuat') return 'bg-green-500';
        if (passwordStrength === 'Sedang') return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-block mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Daftar</h1>
                        <p className="text-gray-600 dark:text-gray-400">Buat akun baru Anda</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-red-700 dark:text-red-400 text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition dark:bg-gray-800 dark:text-white"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition dark:bg-gray-800 dark:text-white"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••"
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                            {password && (
                                <div className="mt-2 space-y-2">
                                    <div className="flex gap-2">
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className={`h-full ${getPasswordStrengthColor()}`}></div>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 w-12">
                                            {passwordStrength}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Konfirmasi Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                >
                                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                            {confirmPassword && password !== confirmPassword && (
                                <p className="mt-2 text-xs text-red-600 dark:text-red-400">Password tidak cocok</p>
                            )}
                            {confirmPassword && password === confirmPassword && (
                                <p className="mt-2 text-xs text-green-600 dark:text-green-400">✓ Password cocok</p>
                            )}
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="w-4 h-4 mt-1 rounded" required />
                            <label className="text-sm text-gray-700 dark:text-gray-300">
                                Saya setuju dengan{' '}
                                <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                                    Syarat & Ketentuan
                                </a>{' '}
                                dan{' '}
                                <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                                    Kebijakan Privasi
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Memproses...' : 'Daftar'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                        <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">atau</span>
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                    </div>

                    {/* Social Register */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                        >
                            📱 Google
                        </button>
                        <button
                            type="button"
                            className="py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                        >
                            👔 GitHub
                        </button>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                        Sudah punya akun?{' '}
                        <Link href="/auth/login" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Login di sini
                        </Link>
                    </p>
                </div>

                {/* Demo Info */}
                <div className="mt-6 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-white text-sm text-center">
                        💡 Demo: Data disimpan di localStorage, reset ulang halaman untuk test
                    </p>
                </div>
            </div>
        </div>
    );
}
