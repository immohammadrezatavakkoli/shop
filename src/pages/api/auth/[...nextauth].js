import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import Customer from "models/Customer";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  name: "credentials",
  credentials : {},
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {

        try {
          await connectDB();
        } catch (err) {
          throw new Error(err);
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Invalid data");
        }

        const customer = await Customer.findOne({ email: email });

        if (!customer) {
          throw new Error("شما حساب کاربری ندارید!");
        }

        const isValid = await verifyPassword(password, customer.password);

        if (!isValid) {
          throw new Error("نام کاربری یا کلمه عبور اشتباه است!");
        }

        return { email };
      },
    }),
    // GoogleProvider({
    //   clientId : "433421990652-sgdkifvlaq3e4tjc2jsqfsfkb002imuf.apps.googleusercontent.com",
    //   clientSecret: "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"
    // }),
  ],
  session: { 
    strategy: "jwt" 
  }
};

export default NextAuth(authOptions);