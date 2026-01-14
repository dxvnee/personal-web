export default function AmbientGlow() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
            <div className="absolute top-1/3 right-1/2 w-96 h-64 bg-orange-500/5 rounded-full blur-[80px]" />
        </div>
    )
}