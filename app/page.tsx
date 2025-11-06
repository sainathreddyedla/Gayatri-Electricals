import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Award, Zap } from "lucide-react"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-medical-equipment.jpg"
            alt="Medical equipment installation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Established 1998</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Gayatri Electricals and Electronics
            </h1>

            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We take raw structures and turn them into ready to open spaces. From Electrical, Plumbing to carpentry and
              ACP work, and Medical equipment installation we handle everything from start to finish.
            </p>

            <p className="mb-10 text-pretty text-base leading-relaxed text-muted-foreground">
              Our goal is to deliver complete, reliable, and well-finished projects that clients can trust. We
              coordinate every detail, solve on-site challenges fast, and keep timelines clear. When we're done, a bare
              structure becomes a functional, polished space ready for business.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-1 text-4xl font-bold text-accent">25+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>

            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-1 text-4xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>

            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-1 text-4xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Projects Managed</div>
            </div>

            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-1 text-4xl font-bold text-accent">1M+</div>
              <div className="text-sm text-muted-foreground">SFT Area Worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Services</h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              End-to-end turnkey project management and execution services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Design",
                description: "Complete design solutions tailored to your project requirements",
              },
              {
                title: "Cost Planning",
                description: "Detailed cost analysis and budget optimization",
              },
              {
                title: "Schedule Management",
                description: "Efficient timeline planning and project coordination",
              },
              {
                title: "Procurement Management",
                description: "Strategic vendor management and material sourcing",
              },
              {
                title: "Construction Project Management",
                description: "On-site execution with quality control and safety standards",
              },
              {
                title: "Specialized Installations",
                description: "MRI rooms and medical equipment electrical installations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
