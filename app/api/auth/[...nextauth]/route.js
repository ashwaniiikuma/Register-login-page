import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

 export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {}, // 

            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password)
                 throw new Error("Missing email or password");

                try {
                    await connectMongoDB();
                    
                    const emailNormalized = credentials.email.toLowerCase().trim();
                    const user = await User.findOne({email: emailNormalized });

                    if(!user) {
                        console.log("User not found in DB:", emailNormalized);
                        return null;
                    
                    }
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);

                    if(!passwordMatch){
                        console.log("User not found in DB:", emailNormalized)
                        return null;
                    }
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name || "user",
                    }

                }catch(error) {
                    console.log("Auth internal error production runtime:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}){
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}){
            if(session.user){
                session.user.id = token.id;
            }
            return session;
        }
    },

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };