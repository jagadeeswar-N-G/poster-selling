"use client"

import React, { Children, ReactNode, useState } from 'react'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { trpc } from '@/trpc/client'
import {httpBatchLink} from '@trpc/client'

const Providers = ({children}: {children: ReactNode} ) => {
    const [queryclient] = useState(()=> new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options){
                    return fetch(url, {
                        ...options,
                        credentials: 'include'
                    })
                }
            })
        ]
    }))
  return (
    <trpc.Provider client={trpcClient} queryClient={queryclient}>
        <QueryClientProvider client={queryclient}>
            {children}
        </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers
