"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
    return (
        <NextThemesProvider
            attribute="class"
            enableSystem={false}
            enableColorScheme={false}
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}