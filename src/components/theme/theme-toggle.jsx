"use client"

import * as React from "react"
import { Moon, Sun, Palette, PaletteIcon } from "lucide-react"
import { useTheme } from "next-themes"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
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
            <Button variant="outline" size="icon" disabled>
                <Palette className="h-4 w-4" />
            </Button>
        )
    }

    const setThemeAndSave = (value) => {
        document.cookie = `theme=${value}; path=/; max-age=31536000`
        setTheme(value)
    }


    const getThemeIcon = () => {
        switch (theme) {
            case "light": return <Sun className="h-4 w-4" />
            case "dark": return <Moon className="h-4 w-4" />
            default: return <Sun className="h-4 w-4" />
        }
    }

    const getThemeName = () => {
        switch (theme) {
            case "light": return "Claro"
            case "dark": return "Oscuro"
            default: return "Claro"
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="relative">
                                {getThemeIcon()}
                                <span className="sr-only">Cambiar tema</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setThemeAndSave("light")} className="flex gap-2">
                                <Sun className="h-4 w-4" />
                                Claro
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => setThemeAndSave("dark")} className="flex gap-2">
                                <Moon className="h-4 w-4" />
                                Oscuro
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Tema actual: {getThemeName()}</p>
                    <p className="text-xs text-muted-foreground">Haz clic para cambiar</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}