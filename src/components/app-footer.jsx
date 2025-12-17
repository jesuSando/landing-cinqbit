import Link from "next/link"
import { Code2, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="h-6 w-6" />
                            <span className="text-lg font-semibold">CinqBit</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Innovación y soporte a tu alcance.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Desarrollo Web
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Apps Móviles
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Cloud Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Consultoría
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Casos de Éxito
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Síguenos</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2025 CinqBit. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Privacidad
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Términos
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
