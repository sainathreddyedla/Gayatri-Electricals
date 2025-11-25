import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { CheckCircle2 } from "lucide-react";

export default function BiographyPage() {
  const services = [
    "Design",
    "Cost Planning",
    "Schedule Management",
    "Procurement Management",
    "Construction Project Management",
    "Specialized Electrical Installations (MRI & Medical Equipment)",
    "FAS (Fire / Access / Sprinkler)",
    "Networking (Active & Passive)",
    "Closeout and Handover",
    "Maintenance Services",
  ];

  const expertise = [
    "Electrical works",
    "Plumbing",
    "HVAC",
    "Carpentry",
    "False Ceiling",
    "Painting",
    "Flooring",
    "ACP Cladding",
    "Merchandising Setup",
    "Shop Floor Development",
    "Visual Merchandising",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-14.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Our Story
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Decades of excellence in turnkey project management and execution
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Main Biography */}
          <div className="mb-12 space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Raghukula Projects Pvt Ltd is the private limited transformation
              of Gayatri Electricals and Electronics, which was founded by Mr.
              Sampath Reddy Edla. This evolution carries forward the company’s
              strong legacy of technical excellence while expanding into
              comprehensive, modern turnkey project solutions.
            </p>

            <p>
              Our expertise spans all major trades, including electrical works,
              plumbing, HVAC, carpentry, false ceiling, painting, flooring, and
              ACP cladding. We also provide specialized electrical installations
              for MRI rooms and medical equipment, ensuring strict adherence to
              safety, performance, and healthcare standards.
            </p>

            <p>
              Whether it's a retail store, commercial outlet, corporate
              facility, or healthcare center, we bring the same commitment to
              quality, coordination, and timely delivery. Our team integrates
              seamlessly at any project stage, offering solutions that maximize
              financial performance, optimize resources, and add long-term value
              for our clients.
            </p>

            <p>
              With decades of on-ground experience backed by modern project
              management practices, we ensure every project is delivered with
              clarity, control, and craftsmanship. Our collaborative and
              enterprising mindset, combined with national business strength
              and diverse industry expertise, empowers us to deliver
              exceptional outcomes on every single project, every single time.
            </p>
          </div>

          {/* Services Grid */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Our Services Include</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
