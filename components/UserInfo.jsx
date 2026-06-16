"use client";

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { useState } from "react";



export default function UserInfo() {

    const {data: session} = useSession();
    const [isDarkMode, setIsDarkMode] = useState(false);


   return (
    <div className={`min-h-screen bg-[#0f172a] flex flex-col font-sans selection:bg-blue-500/30 ${
         isDarkMode ? "bg-[#0b0f19]" : "bg-[#1e3a8a]"
    }`}>
        
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
                <div className={`relative shadow-2xl p-6 sm:p-8 rounded-2xl  border  flex flex-col items-center w-full ${
                isDarkMode ? "bg-[#131c2e] border-slate-700/80" : "bg-[#e8e8e8] border-slate-500"
                }`}>
                     <div className="w-full flex justify-end mb-3 pr-1 z-10">
                <button
                    type="button"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase transition-all shadow-md active:scale-95 ${
                        isDarkMode 
                        ? "bg-amber-500 text-slate-900 hover:bg-amber-400" 
                        : "bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-700"
                    }`}
                >
                    {isDarkMode ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.62 6.38l1.58-1.58M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                            </svg>
                            LM
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            DM
                        </>
                    )}
                </button>
            </div>
                    {/* 👤 JSL Official Branding Avatar Frame */}
                    <div className="w-20 h-20 border-2 border-[#2563eb] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10 relative">
                        <span className="text-3xl text-[#2563eb] font-bold tracking-tight">
                            {session?.user?.name?.[0]?.toUpperCase() || "U"}
                        </span>
                        {/* System Status online dot */}
                        <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                    </div>

                    <h1 className={`text-xl font-bold  tracking-tight ${
                    isDarkMode ? "text-white" : "text-blue-900"
                    }`}>User Profile</h1>
                   
                    <p className="text-slate-400 text-xs mt-0.5 mb-6 uppercase tracking-wider font-semibold">JSL Central Network</p>

                    {/* 📦 Inner Form Element Sync Box (Clean Slate Light Theme) */}
                    <div className={`w-full space-y-4 p-5 rounded-xl transition-colors duration-200 ${
    isDarkMode ? "bg-slate-800/60" : "bg-slate-50/60"
}`}>

    {/* Name Field */}
    <div className="flex flex-col gap-0.5">
        <span className={`text-[10px] uppercase tracking-widest font-bold ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}>
            Full Name
        </span>
        <span className={`font-medium text-sm sm:text-base truncate ${
            isDarkMode ? "text-white" : "text-slate-800"
        }`}>
            {session?.user?.name || "Not Available"}
        </span>
    </div>

                       <div className="w-full h-[1px] bg-slate-200/80"></div>

                        {/* Email Field */}
                    <div className="flex flex-col gap-0.5 w-full">
                {/* Label: Isme se duplicate slate color hata diya aur dark/light conditional thik kiya */}
                <span className={`text-[10px] uppercase tracking-widest font-bold ${
                    isDarkMode ? "text-slate-400/90" : "text-slate-500"
                }`}>
                    Corporate Email
                </span>
                
                {/* Actual Email: Isko text-slate-700 se badal kar dark mode mein pure white/light text diya */}
                <span className={`font-medium text-sm sm:text-base truncate ${
                    isDarkMode ? "text-slate-100" : "text-slate-800"
                }`}>
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