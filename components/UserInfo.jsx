"use client";

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";



export default function UserInfo() {

const {data: session} = useSession();

   return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col font-sans selection:bg-blue-500/30">
        
        {/* 🌐 JSL Top Announcement Banner Bar */}
    

        {/* 🌌 Main Body Section with Royal Blue Light-Mesh Aura */}
        <div className="flex-1 grid place-items-center p-4 relative bg-gradient-to-b from-[#1e3a8a]/40 via-[#0f172a] to-[#0f172a] overflow-hidden">
            
            {/* Background Branding Blur (Matches the image aura effect) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* 🛠️ Symmetrical Profile Card Wrapper */}
            <div className="relative group w-full max-w-[340px] sm:max-w-[360px] z-10">
                
                {/* Outer Smooth Border Glow Aura */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                
                {/* Main Card Body (Pure White Premium Panel aligned with Register fields) */}
                <div className="relative shadow-2xl p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 flex flex-col items-center w-full">
                    
                    {/* 👤 JSL Official Branding Avatar Frame */}
                    <div className="w-20 h-20 bg-blue-50/80 border-2 border-[#2563eb] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10 relative">
                        <span className="text-3xl text-[#2563eb] font-bold tracking-tight">
                            {session?.user?.name?.[0]?.toUpperCase() || "U"}
                        </span>
                        {/* System Status online dot */}
                        <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                    </div>

                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">User Profile</h1>
                    <p className="text-slate-400 text-xs mt-0.5 mb-6 uppercase tracking-wider font-semibold">JSL Central Network</p>

                    {/* 📦 Inner Form Element Sync Box (Clean Slate Light Theme) */}
                    <div className="w-full space-y-4 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
                        
                        {/* Name Field */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Full Name</span>
                            <span className="text-[#2563eb] font-bold text-base sm:text-lg tracking-tight truncate">
                                {session?.user?.name || "Not Available"}
                            </span>
                        </div>

                        <div className="w-full h-[1px] bg-slate-200/80"></div>

                        {/* Email Field */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Corporate Email</span>
                            <span className="text-slate-700 font-medium text-sm sm:text-base truncate">
                                {session?.user?.email || "Not Available"}
                            </span>
                        </div>
                    </div>

                    {/* 🔥 MATCHED JSL BUTTON: Fits perfectly 100% with exact shadow metrics */}
                    <button 
                        onClick={() => signOut()} 
                        className=" px-10 mt-6 bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold text-sm py-3 rounded-lg shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all tracking-wide"
                    >
                        Log Out 
                    </button>
                    
                </div>
            </div>
        </div>

        {/* 📜 Official Corporate Brand Footer */}
   
    </div>
);
}