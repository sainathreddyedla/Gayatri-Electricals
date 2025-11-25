import Image from "next/image";
import { Footer } from "@/components/footer";
import {
  Zap,
  Droplets,
  Hammer,
  Layers,
  Paintbrush,
  Activity,
  Network,
  Building,
} from "lucide-react";

export default function ExpertisePage() {
  const expertiseAreas = [
    {
      icon: Zap,
      images: [
        "/images/expertise/electrical-installation-1.jpg",
        "/images/expertise/electrical-installation-2.jpg",
        "/images/expertise/electrical-installation-3.jpg",
      ],
      title: "Electrical Works & Installations",
      description:
        "Complete wiring, lighting, and load management systems for commercial and healthcare facilities.",
      tags: ["Wiring", "Lighting", "Load Management"],
    },
    {
      icon: Building,
      images: [
        "/images/expertise/retail-1.jpg",
        "/images/expertise/retail-2.jpg",
        "/images/expertise/retail-3.jpg",
        "/images/expertise/retail-4.jpg",
        "/images/expertise/retail-5.jpg",
      ],
      title: "Retail",
      description:
        "Customized retail fit-outs featuring precision carpentry, modular racks, illuminated signage, digital displays, HVAC setup",
      tags: [
        "Merchandising Setup",
        "Shop Floor Development ",
        "Visual Merchandising",
      ],
    },
    {
      icon: Droplets,
      images: [
        "/images/expertise/plumbing-1.png",
        "/images/expertise/plumbing-2.png",
      ], // Updated plumbing image file extensions to .png
      title: "Plumbing & Sanitary Installations",
      description:
        "Piping, fixtures, and efficient water management for all project types.",
      tags: ["Piping", "Fixtures", "Water Management"],
    },
    {
      icon: Hammer,
      images: [
        "/images/expertise/carpentry-1.jpg",
        "/images/expertise/carpentry-2.jpg",
      ],
      title: "Carpentry & Joinery",
      description:
        "Custom furniture, partitions, and wood finishes crafted to design specifications.",
      tags: ["Furniture", "Partitions", "Wood Finishes"],
    },
    {
      icon: Layers,
      images: [
        "/images/expertise/lighting-1.jpg",
        "/images/expertise/lighting-2.jpg",
      ],
      title: "False Ceiling & Lighting",
      description:
        "Gypsum, grid, and decorative ceiling systems with integrated lighting for modern interiors.",
      tags: ["Gypsum", "Grid Systems", "Integrated Lighting"],
    },
    // {
    //   icon: Paintbrush,
    //   images: ["/images/expertise/acp-cladding.jpg"],
    //   title: "ACP Cladding & Fabrication",
    //   description:
    //     "Durable and aesthetic exterior aluminum composite panel construction.",
    //   tags: ["ACP Panels", "Fabrication", "Exterior Finish"],
    // },
    {
      icon: Activity,
      images: [
        "/images/expertise/medical-device-1.jpg",
        "/images/expertise/medical-device-2.jpg",
        "/images/expertise/medical-device-3.jpg",
      ],
      title: "Medical Devices Installation",
      description:
        "Specialized setup and alignment of medical and diagnostic equipment, ensuring safety and compliance.",
      tags: ["MRI Rooms", "Medical Equipment", "Safety Compliance"],
    },
    {
      icon: Network,
      images: [
        "/images/expertise/networking-1.jpg",
        "/images/expertise/networking-2.jpg",
      ],
      title: "Networking",
      description:
        "Complete network infrastructure setup including active and passive networking for modern commercial and office spaces.",
      tags: ["Infrastructure", "Cabling", "Network Setup"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-14.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Our Core Expertise
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Comprehensive services across all major trades and specialized
              installations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="flex flex-col gap-6">
                  {/* Title and Description */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-2 text-2xl font-bold">{area.title}</h2>
                      <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Photo Gallery */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {area.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${area.title} ${imgIndex + 1}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  {index < expertiseAreas.length - 1 && (
                    <div className="h-px bg-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
