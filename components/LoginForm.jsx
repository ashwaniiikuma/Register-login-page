"use client";

import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false)

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
         const res =  await signIn ("credentials",{
                email, 
                password, 
                redirect:false
            })
            if (res.error) {
                setError("invalid Credentials");
                return;
            }
            router.replace("dashboard");

        }catch (error) {
            console.log(error);
        }
    }
return(

    <div className={`w-full min-h-screen grid place-items-center p-4 sm:p-6 md:p-8 transition-colors duration-300 overflow-x-hidden ${
        isDarkMode ? "bg-[#0b0f19]" : "bg-[#1e3a8a]"
    }`}> 
        
        <div className="relative w-full max-w-sm sm:max-w-md flex  flex-col items-center mx-auto px-2 sm:px-0">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            
            <div className="flex flex-col items-center mb-4 sm:mb-5 w-full cursor-default z-10">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#2563ab] rounded-lg flex items-center justify-center text-white font-black shadow-md shadow-blue-500/20 transition-transform text-sm sm:text-base">
                        J
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-300 uppercase">
                        JSL <span className="text-[#2563eb]">Works <span className="text-slate-300">PVT LTD</span></span>
                    </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-blue-200/70 tracking-wider mt-1.5 font-medium uppercase text-center px-4">
                    Empowering Growth, Building Future
                </p>
            </div>

            <div className="w-full flex justify-end mb-3 pr-1 z-10">
                <button
                    type="button"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase transition-all shadow-md active:scale-95 ${
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
                            Light Mode
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            Dark Mode
                        </>
                    )}
                </button>
            </div>
            
            <div className={`relative shadow-2xl py-6 sm:py-8 sm:mx-w-md px-5 sm:px-6 rounded-xl border w-full transition-all duration-300 z-10 ${
                isDarkMode 
                ? "bg-[#131c2e] border-slate-700/80 shadow-black/50" 
                : "bg-[#fefafc] border-slate-200 shadow-blue-900/20"
            }`}>
                
                <h1 className={`text-xl sm:text-2xl md:text-3xl font-black mb-1.5 tracking-tight transition-colors ${
                    isDarkMode ? "text-white" : "text-blue-900"
                }`}>
                    Welcome Back
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-8">Enter your credentials to access your account.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5 w-full">
                    
                    <div className="flex flex-col gap-1 w-full">
                        <label className={`text-[10px] font-bold ml-1 uppercase tracking-wider transition-colors ${
                            isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>Email Address</label>
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="name@example.com" 
                            className={`w-full py-2.5 sm:py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm border ${
                                isDarkMode 
                                ? "bg-[#0f172a] border-slate-700 text-white placeholder:text-slate-600" 
                                : "bg-blue-50 border-blue-100 text-slate-800 placeholder:text-slate-400"
                            }`}
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label className={`text-[10px] font-bold ml-1 uppercase tracking-wider transition-colors ${
                            isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>Password</label>
                        
                        <div className="relative w-full block">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="••••••••" 
                                className={`w-full py-2.5 sm:py-3 pl-4 pr-12 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm border ${
                                    isDarkMode 
                                    ? "bg-[#0f172a] border-slate-700 text-white placeholder:text-slate-600" 
                                    : "bg-blue-50 border-blue-100 text-slate-800 placeholder:text-slate-400"
                                }`}
                            />
                            
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`absolute right-3.5 top-1/2 -translate-y-1/2 focus:outline-none p-1 flex items-center justify-center z-10 transition-colors ${
                                    isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600"
                                }`}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="w-full mt-1 sm:mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 sm:py-3 rounded-lg transition-all shadow-md active:scale-[0.99] active:opacity-90 text-sm sm:text-base">
                        Sign In
                    </button>
                
                    {error && (
                        <div className="w-full bg-red-500/10 border border-red-500/50 text-red-400 text-xs px-4 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 animate-fadeIn">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 id-pulse"></span>
                            {error}
                        </div>
                    )}
                
                    <div className="text-center text-xs sm:text-sm mt-1 sm:mt-2 text-slate-400 cursor-default">
                        Not registered?{' '}
                        <Link href="/register" className="text-blue-500 font-semibold hover:underline transition-all">
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}
    
