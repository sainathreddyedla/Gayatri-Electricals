import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, FolderKanban, Building2, IndianRupee } from "lucide-react"

export default function TrackRecordPage() {
  const stats = [
    {
      icon: TrendingUp,
      value: "25+",
      label: "Years of Experience",
      description: "Delivering excellence since 1998",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clients",
      description: "Trusted by businesses across sectors",
    },
    {
      icon: FolderKanban,
      value: "500+",
      label: "Projects Managed",
      description: "Successfully completed and delivered",
    },
    {
      icon: Building2,
      value: "1M+",
      label: "Area Worked (SFT)",
      description: "Square feet of space transformed",
    },
    {
      icon: IndianRupee,
      value: "₹10 Crore+",
      label: "Capex Managed",
      description: "Total capital expenditure handled",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-14.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Track Record</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              A proven history of delivering exceptional results across diverse projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-2 transition-all hover:border-primary/50">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mb-2 text-4xl font-bold text-accent">{stat.value}</div>
                    <div className="mb-2 text-lg font-semibold">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Highlights */}
          <div className="mt-16 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-8 text-center text-2xl font-bold">Our Impact</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 text-2xl font-bold text-primary">Education</div>
                <p className="text-sm text-muted-foreground">
                  Completed projects for leading schools including Delhi Public School, Jubilee Public School, and Hyderabad Public
                  School
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-2xl font-bold text-primary">Healthcare</div>
                <p className="text-sm text-muted-foreground">
                  Specialized installations for Apple Diagnostics and 31 Tesla Diagnostics branches (ongoing)
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-2xl font-bold text-primary">Corporate</div>
                <p className="text-sm text-muted-foreground">
                  Delivered turnkey solutions for offices including MEDTEC, MetaMinds, and Gangavaram Port
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-2xl font-bold text-primary">Retail</div>
                <p className="text-sm text-muted-foreground">
                  Complete store fitting ready to operate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
