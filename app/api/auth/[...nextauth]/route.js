// import prisma from "@/components/db";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

import { options } from "@/components/options";
import NextAuth from "next-auth";

// const prisma = new PrismaClient()




const handler = NextAuth(options)

export { handler as GET, handler as POST };

