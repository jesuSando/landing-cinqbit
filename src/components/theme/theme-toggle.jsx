"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch disabled />
                <Moon className="h-4 w-4" />
            </div>
        )
    }

    const setThemeAndSave = (value) => {
        document.cookie = `theme=${value}; path=/; max-age=31536000`
        setTheme(value)
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setThemeAndSave(newTheme)
    }

    const getThemeIcon = () => {
        if (theme === "dark") {
            return <Moon className="h-4 w-4" />
        }
        return <Sun className="h-4 w-4" />
    }

    const getThemeName = () => {
        if (theme === "dark") {
            return "Oscuro"
        }
        return "Claro"
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4" />
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={toggleTheme}
                            aria-label="Cambiar tema"
                        />
                        <Moon className="h-4 w-4" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Tema actual: {getThemeName()}</p>
                    <p className="text-xs text-muted-foreground">Haz clic para cambiar</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}