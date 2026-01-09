'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logoutUser, getAllUsers } from '@/utils/auth';
import Link from 'next/link';

interface User {
    id: string;
    email: string;
    name: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentUser = getCurrentUser() as User | null;

        if (!currentUser) {
            router.push('/auth/login');
            return;
        }

        setUser(currentUser);

        // Get all registered users
        const users = getAllUsers() as User[];
        setAllUsers(users);
        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        logoutUser();
        router.push('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Memuat...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Dashboard
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Welcome Section */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                        <h1 className="text-4xl font-bold mb-2">Selamat datang, {user.name}! 👋</h1>
                        <p className="text-blue-100">Anda sudah berhasil login ke dashboard</p>
                    </div>
                </div>

                {/* User Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Profile Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-2xl">
                                👤
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Profile</p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Email: <span className="font-medium text-gray-900 dark:text-white">{user.email}</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                ID: <span className="font-medium text-gray-900 dark:text-white text-xs">{user.id}</span>
                            </p>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                        <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                            {allUsers.length}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Total Pengguna</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                            Termasuk akun Anda saat ini
                        </p>
                    </div>

                    {/* Quick Action Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <Link
                                href="/auth/login"
                                className="block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition text-center"
                            >
                                Login Lagi
                            </Link>
                            <Link
                                href="/auth/register"
                                className="block px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/50 transition text-center"
                            >
                                Buat Akun Baru
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Users List Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Semua Pengguna Terdaftar</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Daftar lengkap pengguna yang telah mendaftar di aplikasi
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Nama</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">ID User</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {allUsers.map((u, index) => (
                                    <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition">
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{u.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{u.email}</td>
                                        <td className="px-6 py-4 text-xs text-gray-500 dark:text-gray-500 font-mono">{u.id}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${u.id === user.id
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                                    }`}
                                            >
                                                {u.id === user.id ? '✓ Anda' : 'Pengguna'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Informasi</h3>
                    <p className="text-blue-800 dark:text-blue-400 text-sm leading-relaxed">
                        Dashboard ini menggunakan localStorage untuk menyimpan data pengguna. Data akan hilang jika Anda membersihkan browser cache.
                        Untuk aplikasi production, gunakan database seperti Firebase, MongoDB, atau PostgreSQL.
                    </p>
                </div>
            </main>
        </div>
    );
}
