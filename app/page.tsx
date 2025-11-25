import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award, Zap } from "lucide-react";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/5 px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/10">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">
                Established 1998
              </span>
            </div>

            <h1 className="mb-8 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Raghukula Design & Build Solutions Private Limited
            </h1>

            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              We take raw structures and turn them into ready to open spaces.
              From Electrical, Plumbing to carpentry and ACP work, and Medical
              equipment installation we handle everything from start to finish.
            </p>
            {/* 
            <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Our goal is to deliver complete, reliable, and well-finished projects that clients can trust. We
              coordinate every detail, solve on-site challenges fast, and keep timelines clear. When we're done, a bare
              structure becomes a functional, polished space ready for business.
            </p> */}

            <div className="mb-12 mx-auto max-w-2xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-blue-50/50 to-indigo-50/50 p-6 shadow-lg shadow-primary/10 backdrop-blur-sm">
              <p className="text-pretty text-base leading-relaxed text-foreground font-medium">
                <span className="text-primary font-semibold">
                  Hassle-free service
                </span>{" "}
                with a{" "}
                <span className="text-primary font-semibold">
                  single point of contact
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  full accountability
                </span>{" "}
                throughout your project. No coordination headaches, no
                finger pointing, just one team delivering on every promise from
                start to finish.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-gradient-to-b from-white to-blue-50/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-2xl bg-primary/10 p-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-5xl font-bold text-primary">25+</div>
              <div className="text-sm font-medium text-muted-foreground">
                Years of Experience
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-2xl bg-accent/10 p-4 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="mb-2 text-5xl font-bold text-accent">1000+</div>
              <div className="text-sm font-medium text-muted-foreground">
                Clients Served
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-2xl bg-primary/10 p-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-5xl font-bold text-primary">500+</div>
              <div className="text-sm font-medium text-muted-foreground">
                Projects Managed
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-2xl bg-accent/10 p-4 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="mb-2 text-5xl font-bold text-accent">1M+</div>
              <div className="text-sm font-medium text-muted-foreground">
                SFT Area Worked
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Comprehensive Services
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              End-to-end turnkey project management and execution services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Design",
                description:
                  "Complete design solutions tailored to your project requirements",
              },
              {
                title: "Cost Planning",
                description: "Detailed cost analysis and budget optimization",
              },
              {
                title: "Schedule Management",
                description:
                  "Efficient timeline planning and project coordination",
              },
              {
                title: "Procurement Management",
                description:
                  "Strategic vendor management and material sourcing",
              },
              {
                title: "Construction Project Management",
                description:
                  "On-site execution with quality control and safety standards",
              },
              {
                title: "Specialized Installations",
                description:
                  "MRI rooms and medical equipment electrical installations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border-2 border-border bg-white p-8 transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
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
  );
}
