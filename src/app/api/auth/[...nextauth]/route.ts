import bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "WhatsApp",
      type: "credentials",
      credentials: {
        phone: {
          label: "phone",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any) {
        try {
          const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: credentials.phone,
              password: credentials.password,
            }),
          });

          const user = await response.json();

          const isEqual = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isEqual) {
            return false;
          }

          console.log(user);
          return user;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    }),
  ],
  callbacks: {
    async session(session) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
