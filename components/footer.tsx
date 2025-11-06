import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/gayatri-logo.png"
                  alt="Gayatri Electricals and Electronics"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold">Gayatri Electricals and Electronics</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming bare structures into fully operational spaces since 1998.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/profile" className="hover:text-foreground">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-foreground">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+916401450954" className="hover:text-foreground">
                  +91 6401450954
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+917674950954" className="hover:text-foreground">
                  +91 7674950954
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:gayatrielectricalworks@gmail.com" className="hover:text-foreground">
                  gayatrielectricalworks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gayatri Electricals and Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
