
import GoogleProvider from "next-auth/providers/google";



export const options = {

    providers: [
      GoogleProvider({ 
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    // callbacks: {
    //   async signIn({ account, profile }) {
    //     if (account.provider === "google") {
    //       console.log(account , profile);
    //       return account
    //     }
    //     return true // Do different verification for other providers that don't have `email_verified`
    //   },
    // }
  }