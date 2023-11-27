import {createTRPCReact} from "@trpc/react-query"
import { Tapprouter } from "."

export const trpc = createTRPCReact<Tapprouter>({})