import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Leadership Profile</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Meet the experienced professionals driving excellence in every project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Head Profile */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-accent">Head</div>
                    <h2 className="text-2xl font-bold">Sainath Reddy Edla</h2>
                  </div>
                </div>

                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Master's in Engineering Management with specialized expertise in Supply Chain Management, Strategic
                  Sourcing, and Data Analytics. Proven track record in vendor management, cost optimization, and
                  end-to-end project execution. Skilled in leveraging ERP systems (SAP, NetSuite), advanced analytics
                  (Python, SQL, Power BI, Tableau), and Lean Six Sigma methodologies to drive operational efficiency and
                  deliver measurable business results across complex supply chain operations.
                </p>
              </CardContent>
            </Card>

            {/* Director Profile */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-accent">Director</div>
                    <h2 className="text-2xl font-bold">Sampath Reddy Edla</h2>
                  </div>
                </div>

                <p className="text-pretty leading-relaxed text-muted-foreground">
                  With 25 years of experience in Construction and Utility Services, Sampath leads with deep technical
                  expertise and on ground execution knowledge. His leadership ensures that every project meets the
                  highest standards of quality, safety, and reliability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">Combined Expertise</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Projects Led</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">₹10Cr+</div>
                <div className="text-sm text-muted-foreground">Capex Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
