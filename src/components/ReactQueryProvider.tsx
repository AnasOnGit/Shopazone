"use client"

import React, { ReactElement } from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient()

interface Props {
 children: React.ReactNode   
}

function ReactQueryProvider({children}: Props): ReactElement {
    return (
        <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
}

export default ReactQueryProvider
