"use client";

import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
return (
    <div className=" w-screen h-screen h-full flex flex-col grid place-items-center  min-h-screen bg-[#1e3a8a] p-4 sm:p-10 md:p-8 fixed inset-0 overflow-y-auto"> 
        {/* Dark background for AI feel */}
        
        <div className="relative group w-full max-w-md flex flex-col items-center">
            {/* Background Glow Effect */}
            <div className="absolute  rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="flex items-center gap-2 mb-5 group/logo cursor-default">
                <div className="w-8 h-8 bg-[#2563ab] rounded-lg flex items-center justify-center text-white font-black shadow-md shadow-blue-500/20 group-hover/logo:scale-105 transition-transform">J</div>
                <span className="text-sm font-bold tracking-wide text-slate-800 uppercase">JSL <span className="text-[#2563eb]">Works <span className="text-slate-300">PVT LTD</span></span></span>

            </div>

            <div className="relative shadow-2xl md:pr-10 mr-3 p-8 rounded-xl bg-[#fefafc] border border-slate-700 w-full max-w-md overflow-hidden">
                
                <h1 className="text-3xl font-black mb-2 text-blue-900 tracking-tight">
                    Welcome Back
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm sm:mb-8">Enter your credentials to access your account.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 py-3 md:py-0">
                    
                    {/* Email Input Group */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-semibold text-slate-600 ml-1 uppercase">Email Address</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="bg-[#0f172a] border border-slate-700 text-slate-500 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                            type="text" 
                            placeholder="name@example.com" 
                        />
                    </div>

                    {/* Password Input Group */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-semibold text-slate-600 ml-1 uppercase">Password</label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="bg-[#0f172a] border border-slate-700 text-white py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                            type="password" 
                            placeholder="••••••••" 
                        />
                    </div>

                    {/* Login Button */}
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all shadow-md active:opacity-80">
                        Sign In
                    </button>
                
                    {/* Error Message with Icon feel */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-xs px-4 py-3 rounded-lg flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            {error}
                        </div>
                    )}
                
                    {/* Register Link */}
                    <Link href={"/register"} className="text-center text-sm mt-4 text-slate-400  transition-colors">
                        Don't have an account? <span className="text-blue-500 font-semibold hover:underline">Create one</span>
                    </Link>
                </form>
            </div>
        </div>
    </div>
);
   
}