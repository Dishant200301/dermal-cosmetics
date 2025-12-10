import React from "react";

interface HolographicCardProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}

export default function HolographicCard({
    title = "Premium Treatment",
    description = "Experience cutting-edge dermatology with our advanced holographic technology",
    icon
}: HolographicCardProps) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black p-4">
            <div className="relative w-full max-w-[400px] h-[280px] rounded-[20px] bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.4),0_0_80px_rgba(138,43,226,0.2)] group cursor-pointer border border-[rgba(255,255,255,0.05)]">

                {/* HOLOGRAPHIC BORDER GLOW */}
                <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-sm" />
                </div>

                {/* HOLOGRAPHIC LIGHT SWEEP */}
                <div
                    className="
            absolute top-[-50%] left-[-50%] w-[200%] h-[200%]
            bg-gradient-to-b from-transparent via-[rgba(0,255,255,0.15)] to-transparent
            rotate-[-45deg]
            opacity-0 transition-all duration-700 ease-out
            group-hover:opacity-100 group-hover:translate-y-full
          "
                />

                {/* SHIMMER EFFECT */}
                <div
                    className="
            absolute top-0 left-[-100%] w-[50%] h-full
            bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent
            skew-x-[-20deg]
            opacity-0 transition-all duration-1000
            group-hover:opacity-100 group-hover:left-[150%]
          "
                />

                {/* RADIAL GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,43,226,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center px-8 py-6 space-y-4">

                    {/* ICON */}
                    {icon ? (
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-cyan-400/50">
                            {icon}
                        </div>
                    ) : (
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-cyan-400/50">
                            <svg
                                className="w-8 h-8 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                        </div>
                    )}

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 group-hover:scale-105">
                        {title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-400 leading-relaxed transition-all duration-500 group-hover:text-gray-300">
                        {description}
                    </p>

                    {/* DECORATIVE LINE */}
                    <div className="w-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full" />
                </div>

                {/* CORNER ACCENTS */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

            </div>
        </div>
    );
}
