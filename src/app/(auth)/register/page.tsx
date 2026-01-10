'use client'

import { registerAction } from "@/features/auth/auth.action"
import { useActionState } from "react"

export default function RegisterPage() {
    const [state, formAction] = useActionState(registerAction, null);

    return (
        <form action = {formAction} className="space-y-4 max-w-sm">
            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border p-2 w-full"
            />

            <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="border p-2 w-full"
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="border p-2 w-full"
            />

            <button className="bg-black text-white px-4 py-2">
                Register
            </button>

            {state?.message && (
                <p className="text-red-500">{state.message}</p>
            )}

        </form>
    )
}

