import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="mx-auto max-w-4xl text-center">

                <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    Innovación y soporte <span className="text-foreground/90">a tu alcance</span>
                </h1>

                <p className="text-pretty text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Desarrollamos software empresarial que impulsa el crecimiento de tu negocio. Experiencia técnica y resultados garantizados.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base w-full sm:w-auto"
                    >
                        Explorar Proyectos
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto bg-transparent">
                        Contacto
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-16 text-sm text-muted-foreground">Confiado por empresas líderes en tecnología</div>
            </div>
        </section>
    )
}
