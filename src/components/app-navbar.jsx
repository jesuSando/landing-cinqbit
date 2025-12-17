import Link from "next/link"

import { Code2 } from "lucide-react"
import { ThemeToggle } from "./theme/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full border-b border-border bg-background/50 backdrop-blur flex h-16 items-center justify-between px-4 md:px-10">
            <div className="flex items-center gap-5">
                <Code2 className="h-10 w-10 text-purple-600" />
                <h1 className="text-4xl font-semibold">Cinq<span className="text-purple-600">Bit</span></h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <Link
                    href="#services"
                    className="relative text-muted-foreground hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Servicios
                </Link>
                <Link
                    href="#projects"
                    className="relative text-muted-foreground hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Proyectos
                </Link>
                <Link
                    href="#contact"
                    className="relative text-muted-foreground hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Contacto
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                    <ThemeToggle />
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                    Solicitar Demo
                </Button>
            </div>
        </header>
    )
}