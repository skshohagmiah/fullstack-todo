
import GoogleProvider from "next-auth/providers/google";
import { User } from "./modals";



export const options = {

    providers: [
      GoogleProvider({ 
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    callbacks: {
      async signIn(user, account, profile) {
        // Handle user registration or any other logic here
        console.log(user.user.name)
        const existingUser = await User.findOne({ email: user.user.email });
  
        if (!existingUser) {
          // If the user doesn't exist, create a new user in the database
          await User.create({
            name: user.user.name,
            email: user.user.email,
            img:user.user.image
            // Add other fields as needed
          });
          return true
        }
  
        return true; // Return true to continue the sign-in process
      },
    },
  }