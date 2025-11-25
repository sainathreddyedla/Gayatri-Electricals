import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { GraduationCap, Building2, Heart, Building } from "lucide-react";
import { ClientLogoCarousel } from "@/components/client-logo-carousel";

export default function PortfolioPage() {
  const sectors = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "We have successfully completed interior development and service works for schools, collaborating with both public and private clients. Our scope of work includes electrical installations, plumbing, carpentry, HVAC, false ceiling, painting, and finishing, all executed to meet high standards of safety, functionality, and design.",
      clients: [
        {
          name: "Government of Andhra Pradesh",
          logo: "/images/clients/government-andhra-pradesh.jpg",
        },
        {
          name: "Government of Telangana",
          logo: "/images/clients/government-telangana.jpg",
        },
        {
          name: "Delhi Public School",
          logo: "/images/clients/delhi-public-school.png",
        },
        {
          name: "Hyderabad Public School",
          logo: "/images/clients/hyderabad-public-school.jpg",
        },
        {
          name: "Jubilee Hills Public School",
          logo: "/images/clients/jubilee-hills-public-school.png",
        },
        {
          name: "Bharatiya Vidya Bhavan",
          logo: "/images/clients/bharatiya-vidya-bhavan.jpg",
        },
      ],
    },
    {
      icon: Building2,
      title: "Office",
      description:
        "Our team delivers complete interior and service solutions including electrical works, lighting, HVAC, plumbing, carpentry, partitions, and finishing, tailored to each client's brand and operational needs.",
      clients: [
        { name: "Kernex", logo: "/images/clients/kernex.jpg" },
        { name: "Metaminds", logo: "/images/clients/metaminds.jpg" },
        {
          name: "Gangavaram Port",
          logo: "/images/clients/gangavaram-port.jpg",
        },
        {
          name: "Glochem Industries",
          logo: "/images/clients/glochem-industries.png",
        },
        { name: "STPI", logo: "/images/clients/stpi.png" },
      ],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "We provide the expertise to develop hospitals and healthcare facilities, supporting our clients in delivering cutting-edge medical services. We also specialize in medical equipment and MRI room electrical installations, ensuring seamless integration of high-end systems that meet the demanding standards of healthcare environments.",
      clients: [
        {
          name: "Apple Diagnostics",
          logo: "/images/clients/apple-diagnostics.png",
        },
        {
          name: "Tesla Diagnostics",
          logo: "/images/clients/tesla-diagnostics.png",
        },
        {
          name: "MedTech Corporation",
          logo: "/images/clients/medtech-corporation.jpg",
        },
        {
          name: "Hetero Healthcare",
          logo: "/images/clients/hetero-healthcare.png",
        },
      ],
    },
    {
      icon: Building,
      title: "Retail",
      description:
        "Complete turnkey development of retail outlets, including interiors, MEP works, fixtures, branding elements, and final handover as a ready to open store.",
      clients: [
        { name: "Mini Klub", logo: "/images/clients/mini-klub.png" },
        { name: "FirstCry", logo: "/images/clients/firstcry.png" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-14.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Delivering excellence across education, corporate, and healthcare
              sectors
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-1">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-3xl">{sector.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {sector.description}
                    </p>

                    <div>
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
                        Notable Clients
                      </h3>
                      <ClientLogoCarousel clients={sector.clients} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Portfolio Highlights
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">
                  Major Sectors
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Satisfied Clients
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">
                  Project Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
