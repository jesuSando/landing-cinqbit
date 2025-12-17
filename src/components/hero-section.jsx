import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen container mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        >
            <h1 className="text-balance text-foreground/90 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Innovación y soporte a tu alcance
            </h1>

            <p
                className="text-pretty text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                Desarrollamos software empresarial que impulsa el crecimiento de tu negocio. Experiencia técnica y resultados garantizados.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/#projects">
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base w-full sm:w-auto items-center cursor-pointer"
                    >
                        Explorar Proyectos
                    </Button>

                </Link>

                <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto bg-transparent items-center cursor-pointer">
                    Contacto
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <p className="mt-16 text-sm text-muted-foreground">Confiado por empresas líderes en tecnología</p>
        </section>
    )
}