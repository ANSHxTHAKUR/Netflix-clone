import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV==='production' ) global.prismadb = client;

export default client;

// we are doing this because of nextJs Hot Reloading because on every code change our code updated and re runs so what happen
// with the prisma client that it creates multiple PrismaClient because globals files are not affected by hot reloading