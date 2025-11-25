import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/raghukula-logo.png"
                  alt="Raghukula Design & Build Solutions Private Limited"
                  fill
                  className="object-contain scale-[2.5]"
                />
              </div>
              <span className="text-lg font-semibold">Raghukula Design & Build Solutions</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming bare structures into fully operational spaces since 1998.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/profile" className="transition-colors hover:text-primary hover:translate-x-1 inline-block">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors hover:text-primary hover:translate-x-1 inline-block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="transition-colors hover:text-primary hover:translate-x-1 inline-block">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+917674950954" className="hover:text-primary transition-colors">
                  +91 7674950954
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+916401450954" className="hover:text-primary transition-colors">
                  +91 6401450954
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@raghukula.in" className="hover:text-primary transition-colors break-all">
                  contact@raghukula.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Raghukula Design & Build Solutions Private Limiter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
