"use client";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
};

export default function Button({ children, loading, className, disabled, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled || loading}
            aria-busy={loading}
            className={cn(
                `
                w-full
                bg-linear-to-r from-indigo-600 to-purple-600
                text-white
                py-3 px-4
                rounded-lg
                font-semibold
                transition-all
                duration-200
                hover:from-indigo-700 hover:to-purple-700
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                transform hover:scale-[1.02]
                disabled:opacity-50 disabled:cursor-not-allowed
                `,
                className
            )}
        >
            <span className={cn("flex items-center justify-center gap-2", loading && "opacity-0")}>{children}</span>
        </button>
    );
}
