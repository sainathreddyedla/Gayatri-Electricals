import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

const expertiseDetails: Record<
  string,
  {
    title: string
    description: string
    details: string[]
    benefits: string[]
  }
> = {
  "electrical-works": {
    title: "Electrical Works & Installations",
    description:
      "Complete wiring, lighting, and load management systems for commercial and healthcare facilities. Our electrical services ensure safety, efficiency, and compliance with all regulatory standards.",
    details: [
      "Complete electrical wiring and distribution systems",
      "Advanced lighting design and installation",
      "Load management and power optimization",
      "Emergency backup systems",
      "Energy-efficient solutions",
      "Compliance with safety standards",
    ],
    benefits: [
      "Reduced energy costs",
      "Enhanced safety and reliability",
      "Future-ready infrastructure",
      "Minimal downtime",
    ],
  },
  plumbing: {
    title: "Plumbing & Sanitary Installations",
    description:
      "Comprehensive piping, fixtures, and efficient water management systems designed for durability and optimal performance across all project types.",
    details: [
      "Complete piping systems installation",
      "High-quality fixture installation",
      "Water supply and drainage systems",
      "Efficient water management solutions",
      "Leak detection and prevention",
      "Maintenance and repair services",
    ],
    benefits: [
      "Water conservation",
      "Long-lasting installations",
      "Reduced maintenance costs",
      "Improved hygiene standards",
    ],
  },
  carpentry: {
    title: "Carpentry & Joinery",
    description:
      "Custom furniture, partitions, and wood finishes crafted to exact design specifications, combining functionality with aesthetic appeal.",
    details: [
      "Custom furniture design and fabrication",
      "Wooden partitions and dividers",
      "Decorative wood finishes",
      "Built-in storage solutions",
      "Door and window frames",
      "Specialized joinery work",
    ],
    benefits: ["Tailored to your space", "High-quality craftsmanship", "Durable materials", "Enhanced aesthetics"],
  },
  "false-ceiling": {
    title: "False Ceiling & Lighting",
    description:
      "Modern ceiling systems including gypsum, grid, and decorative options with integrated lighting solutions for contemporary interiors.",
    details: [
      "Gypsum board ceiling installation",
      "Grid ceiling systems",
      "Decorative ceiling designs",
      "Integrated lighting solutions",
      "Acoustic ceiling treatments",
      "Concealed services management",
    ],
    benefits: ["Improved aesthetics", "Better acoustics", "Energy-efficient lighting", "Easy maintenance access"],
  },
  // "acp-cladding": {
  //   title: "ACP Cladding & Fabrication",
  //   description:
  //     "Durable and aesthetic exterior aluminum composite panel construction that enhances building appearance while providing weather protection.",
  //   details: [
  //     "Aluminum composite panel installation",
  //     "Custom fabrication services",
  //     "Weather-resistant exterior finish",
  //     "Color and design customization",
  //     "Structural support systems",
  //     "Long-lasting protection",
  //   ],
  //   benefits: ["Enhanced curb appeal", "Weather protection", "Low maintenance", "Cost-effective solution"],
  // },
  "medical-devices": {
    title: "Medical Devices Installation",
    description:
      "Specialized setup and alignment of medical and diagnostic equipment, including MRI room electrical installations, ensuring strict safety and compliance standards.",
    details: [
      "MRI room electrical installations",
      "Medical equipment setup and alignment",
      "Safety compliance verification",
      "Specialized power requirements",
      "Shielding and grounding systems",
      "Integration with existing infrastructure",
    ],
    benefits: ["Healthcare compliance", "Patient safety", "Equipment reliability", "Expert technical support"],
  },
  "project-management": {
    title: "Project Management",
    description:
      "Comprehensive end-to-end execution, vendor coordination, quality checks, and timely delivery of turnkey projects with complete accountability.",
    details: [
      "Complete project planning and scheduling",
      "Vendor and subcontractor coordination",
      "Quality control and assurance",
      "Budget management and cost optimization",
      "Timeline adherence and reporting",
      "Risk management and mitigation",
    ],
    benefits: ["Single point of contact", "Timely project delivery", "Cost optimization", "Quality assurance"],
  },
  networking: {
    title: "Networking",
    description:
      "Complete network infrastructure setup for modern commercial and office spaces, ensuring reliable connectivity and future scalability.",
    details: [
      "Structured cabling systems",
      "Network rack installation",
      "WiFi infrastructure setup",
      "Cable management solutions",
      "Testing and certification",
      "Future-ready scalability",
    ],
    benefits: ["Reliable connectivity", "Scalable infrastructure", "Professional installation", "Reduced downtime"],
  },
}

export default function ExpertiseDetailPage({ params }: { params: { slug: string } }) {
  const expertise = expertiseDetails[params.slug]

  if (!expertise) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/expertise">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Expertise
            </Link>
          </Button>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">{expertise.title}</h1>
            <p className="text-pretty text-lg text-muted-foreground">{expertise.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold">What We Offer</h2>
                <ul className="space-y-3">
                  {expertise.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold">Key Benefits</h2>
                <ul className="space-y-3">
                  {expertise.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
                <p className="mb-6 text-muted-foreground">
                  Contact us to discuss your project requirements and get a detailed quote.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
