import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await dbConnect();
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
              role: "user",
            });
          }
          return true;
        } catch (error) {
          console.error("Error checking/creating user during sign in:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session }) {
      try {
        await dbConnect();
        // Fetch user from db to get user id and role
        const dbUser = await User.findOne({ email: session.user?.email });
        if (dbUser) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (session.user as any).id = dbUser._id.toString();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (session.user as any).role = dbUser.role;
        }
      } catch (error) {
        console.error("Error fetching user session:", error);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
