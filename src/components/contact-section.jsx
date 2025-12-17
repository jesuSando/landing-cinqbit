import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <Card className="bg-foreground text-muted border-0 overflow-hidden">
                <div className="bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]" />
                <div className="px-6 py-16 sm:px-12 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                        ¿Listo para comenzar tu proyecto?
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
                        Cuéntanos tu idea y transformémosla en una realidad exitosa. Nuestro equipo está listo para
                        ayudarte.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-base w-full sm:w-auto cursor-pointer">
                            <Mail className="mr-2 h-4 w-4" />
                            Contactar Ahora
                        </Button>
                       <Button size="lg" variant="default" className="h-12 px-8 text-base w-full hover:bg-background hover:text-foreground sm:w-auto cursor-pointer">
                            Conocer Equipo
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    )
}
