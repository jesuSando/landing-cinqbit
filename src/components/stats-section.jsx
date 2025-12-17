export default function StatsSection() {
    const stats = [
        {
            value: "100%",
            label: "Código a medida",
            description: "Nada de plantillas genéricas",
        },
        {
            value: "Startup friendly",
            label: "Enfoque",
            description: "Pensado para emprendedores",
        },
        {
            value: "Transparente",
            label: "Proceso de trabajo",
            description: "Comunicación clara en cada etapa",
        },
        {
            value: "Full Stack",
            label: "Desarrollo",
            description: "Frontend, backend y despliegue",
        },
    ]

    return (
        <section className="border-y border-border/40 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm font-medium mb-1">{stat.label}</div>
                            <div className="text-xs text-muted-foreground">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
