import {initTRPC} from "@trpc/server"

const t = initTRPC.context().create()  //to initialize the trpc
export const router = t.router
export const publicProcedure = t.procedure