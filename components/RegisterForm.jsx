"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation";


export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email,  setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
    
        if (!name, !email, !password) {
            setError("All fields are necessary.");
            return
        }


        try{
            const resUserExists = await fetch('api/userExists',{
                method: "POST",
                header:{
                    "content-Type": "application/json"
                },
                body: JSON.stringify ({
                    email
                }),
            });
            const {user} = await resUserExists.json();

            if(user) {
                setError("User already exists.");
                return;
            }

           const res =  await fetch('api/register', {
                method: "POST",
                heades: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),

            });
            if(res.ok) {
                const form = e.target;
                form.reset();
                router.push("/")
            }else{
                setError("Registration failed. Please try again.");
                console.log("user registration failed.");
            }

        }catch (error) {
            setError("Something went wrong. connection error.");
            console.log("Error during registration", error);
        }

    };



    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Password:", password)

    return (
        //Theme UPDATE: using JSL work Brand  Splite-Screen Layout
       


    <div className="min-h-screen w-full  flex flex-col md:flex-row bg-[#f8fafc] overflow-x-hidden"> 
       {/* //Left side: JSL work brand power panel */}
        <div className=" w-full right-0 md:w-1/2 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-8 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

            {/* company Logo & Minimal Tagline */}
            <div className="relative z-10">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">JSL WORKS</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-cyan-200 font-medium">PVT LTD</span>
                    
            </div>
            <p className=" text-xs text-blue-200 mt-1 italic">"Stop guessing and start engineering."</p>
            </div>

            {/* Center Core Dynamic Section */}
            <div className="my-auto relative z-10 py-12">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Welcom to <span className="text-cyan-300">JSLWORK</span></h1>
            <p className="text-lg text-blue-100 mt-4 max-w-md font-medium">AI Development, Telecom & Global SDG Innovation</p>
            
            <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg">
                <p className="text-sm text-yellow-300 tracking-wide font-medium">विद्या परं बलमेतत् सर्वं ध्रुवं नित्यम्</p>
                <p className="text-[11px] text-blue-200">(Knowledge is the supreme strength)</p>
            </div>
            </div>

            {/* Bottom Authenticity Badges */}
            <div className="relative z-10 flex flex-wrap gap-4 item-center text-sx text-blue-200 border-t border-white/10 pt-6" >
                <div className="flex item-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full">
                    <span>Made in India</span>
                    <span>IN</span>
                </div>
                <div className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm ">
                    DPIIT-Recognized Startup
                </div>
            </div>


        </div>

       
       
       
        {/* Deep Dark Background */}
        
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4 sm:p-8 bg-slate-50/40 min-h-screen bg-white">
            {/* Glow Aura Effect */}
            
            <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl p-9 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.05)] transt duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
               
                <h1 className="text-3xl font-extrabold text-blue-900 mb-1.5 tracking-tight">
                    Create Account
                </h1>
                <p className="text-slate-300 text-sm mb-8">Register as an official employee  to access the central network</p>

             
                

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Full Name Input */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-xs font-semibold text-slate-600  uppercase tracking-widest">Full Name</label>
                        <input 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all text-sm text-slate-800 bg-slate-50/50"
                            type="text" 
                            placeholder="Full Name" 
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1">

                        <label className="text-xs font-semibold text-slate-600  uppercase tracking-widest">Corporate Email</label>
                        
                        <input 
                            onChange={(e) => setEmail(e.target.value)}

                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all text-sm text-slate-800 bg-slate-50/50"
                            
                            type="email" 
                            placeholder="john@example.com" 
                        />
                    </div>

    <div className="flex flex-col gap-1.5 relative">
    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Password</label>
    <div className="relative">
        <input 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2.5 pr-12 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all text-sm text-slate-800 bg-slate-50/50"
            type={showPassword ? "text" : "password"} // ✨ Dynamic Type Change
            value={password}
            placeholder="••••••••" 
        />
        {/* ✨ Eye Toggle Button */}
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute  right-3.5 md:right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none p-1 flex items-center justify-center z-10"
        >
            {showPassword ? (
                // 👁️ Open Eye Icon (Show Password)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            ) : (
                // 🙈 Closed Eye Icon (Hide Password)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )}
        </button>
    </div>
</div>
 {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-xs px-2 py-2 rounded-lg flex items-center gap-2 animate-shake">
                            <span className="w-1.5 h-1.5 rounded-full animnate-pulse bg-red-500"></span>
                            {error}
                        </div>
                    )}

                    {/* Register Button with Advanced Shadow & Click Feel */}
                <div className="w-full justify-center items-center text-center ">
             <button className="px-30 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-md active:scale-[0.98] active:opacity-80">
    Register
</button>
                </div>
 

                
                    {/* Error Message */}
                 
                    {/* Login Link */}
                    <div className="text-center mt-6">

                   
                    <Link href={"/"} className="text-center text-sm  text-slate-500  transition-colors">
                        Already registered? <span className="text-[#2563eb] font-semibold hover:underline">Sign In </span>
                    </Link>
                     </div>
                </form>

               
            </div>
             <footer className="mt-8 text-center border-t px-10 border-slate-100 pt-6">
                    <p className="text-[11px] text-slate-400 tracking-wide">
                        Developed & Validated by: <span className="font-semibold text-slate-600">Ashwani</span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                        © 2026 JSL WORKS PVT LTD. All Rights Reserved.
                    </p>
                </footer>
        </div>
        
    </div>

    
);
}