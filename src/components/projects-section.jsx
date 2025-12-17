import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
    const projects = [
        {
            title: "Sistema ERP Empresarial",
            description:
                "Plataforma integral de gestión empresarial con módulos de inventario, contabilidad y recursos humanos.",
            tags: ["React", "Node.js", "PostgreSQL"],
            category: "Enterprise",
        },
        {
            title: "App de Fintech",
            description:
                "Aplicación móvil de pagos y transferencias con seguridad de nivel bancario y análisis en tiempo real.",
            tags: ["React Native", "AWS", "Stripe"],
            category: "Mobile",
        },
        {
            title: "Plataforma E-Learning",
            description:
                "Sistema de gestión de aprendizaje con videoconferencias, evaluaciones automatizadas y seguimiento de progreso.",
            tags: ["Next.js", "WebRTC", "MongoDB"],
            category: "Education",
        },
        {
            title: "Dashboard Analytics",
            description:
                "Herramienta de visualización de datos con informes personalizados y métricas de negocio en tiempo real.",
            tags: ["TypeScript", "D3.js", "Python"],
            category: "Data",
        },
        {
            title: "CRM Personalizado",
            description: "Sistema de gestión de relaciones con clientes optimizado para equipos de ventas y marketing.",
            tags: ["Vue.js", "Laravel", "Redis"],
            category: "Business",
        },
        {
            title: "IoT Management",
            description:
                "Plataforma de control y monitoreo de dispositivos IoT con análisis predictivo y alertas automáticas.",
            tags: ["React", "MQTT", "InfluxDB"],
            category: "IoT",
        },
    ]

    return (
        <section id="projects" className="bg-muted/30 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos Destacados</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Casos de éxito que demuestran nuestra experiencia y capacidad técnica
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-card hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                    <Badge variant="secondary" className="text-xs">
                                        {project.category}
                                    </Badge>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
