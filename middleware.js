import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // Agar user login nahi hai, toh kahan bhejna hai
  },
});

export const config = { 
  matcher: ["/dashboard/:path*", "/profile/:path*"] 
};