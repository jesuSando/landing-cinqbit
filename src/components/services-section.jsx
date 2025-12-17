
import { Cloud, Database, Globe, Lock, Smartphone, Cpu } from "lucide-react"
import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card"

export default function ServicesSection() {
    const services = [
        {
            icon: Globe,
            title: "Desarrollo Web",
            description: "Aplicaciones web modernas y escalables con las últimas tecnologías",
        },
        {
            icon: Smartphone,
            title: "Apps Móviles",
            description: "Soluciones móviles nativas y multiplataforma de alto rendimiento",
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Arquitecturas cloud robustas y optimizadas para tu infraestructura",
        },
        {
            icon: Database,
            title: "Análisis de Datos",
            description: "Visualización y análisis para entender y mejorar tu negocio",
        },
        {
            icon: Lock,
            title: "Buenas Prácticas de Seguridad",
            description: "Protección básica y configuración segura de tus sistemas",
        },
        {
            icon: Cpu,
            title: "Automatización",
            description: "Optimiza procesos con soluciones de automatización inteligente",
        },
    ]

    return (
        <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Soluciones integrales de software adaptadas a las necesidades de tu empresa
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="border-border/50 hover:border-border transition-all">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    )

}