import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import DataBase from "../../../utils/db";
import bcrypt from "bcryptjs";
import axios from "axios";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.unicToken) token.unicToken = user.unicToken;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?.unicToken) session.user.unicToken = token.unicToken;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const result = await axios.get("api/users");
        const users = result.data;
        const user = users.find((user) => user.phone == credentials.phone);
        if (user && user.passwordCode == credentials.passwordCode) {
          return {
            id: user.id,
            unicToken: user.unicToken,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            img: "124",
            buy: user.buy,
            city: user.city,
            address: user.address,
          };
        }
        throw new ("invalid phone or passwordCode");
        // DataBase.connect(() => {
        //   const getusersQuery = `SELECT * FROM users`;
        //   DataBase.query(getusersQuery, (err, result) => {
        //     if (err) {
        //       console.log("query get users error :(");
        //     } else {
        //       const user = result.find(
        //         (user) => user.phone == credentials.phone
        //       );
        //       if (user && user.passwordCode == credentials.passwordCode) {
        //         return {
        //           id: user.id,
        //           unicToken: user.unicToken,
        //           firstName: user.firstName,
        //           lastName: user.lastName,
        //           phone: user.phone,
        //           img: "124",
        //           buy: user.buy,
        //           city: user.city,
        //           address: user.address,
        //         };
        //       }
        //     //   throw new ("invalid phone or passwordCode");
        //     }
        //   });
        // });
      },
    }),
  ],
});
