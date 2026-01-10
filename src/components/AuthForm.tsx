"use client";

import { useState, useTransition } from "react";
import { AuthInput, authSchema } from "@/lib/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AuthFormProps {
  type: "login" | "register";
  onSubmitAction: (data: AuthInput) => Promise<{ success: boolean; message: string }>;
}

export default function AuthForm({ type, onSubmitAction }: AuthFormProps) {
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<AuthInput>({
    resolver: zodResolver(authSchema),
  });

  const handleFormSubmit = (data: AuthInput) => {
    setMsg("");
    startTransition(async () => {
      const res = await onSubmitAction(data);
      setMsg(res.message);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 w-full max-w-sm p-4 border rounded-lg">
      <h2 className="text-xl font-bold capitalize">{type}</h2>
      
      <div>
        <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input {...register("password")} type="password" placeholder="Password" className="w-full p-2 border rounded" />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <button disabled={isPending} className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400">
        {isPending ? "Loading..." : type === "login" ? "Masuk" : "Daftar Sekarang"}
      </button>

      {msg && <p className="text-center text-sm font-medium">{msg}</p>}
    </form>
  );
}