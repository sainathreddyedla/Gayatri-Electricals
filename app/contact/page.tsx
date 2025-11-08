import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Ready to transform your space? Contact us to discuss your project requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <p className="mb-8 text-pretty text-muted-foreground">
                  We're here to answer your questions and discuss how we can help bring your project to life. Reach out
                  to us through any of the following channels.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <div className="space-y-1">
                        <div>
                          <a href="tel:+916401450954" className="text-muted-foreground hover:text-foreground">
                            +91 6401450954
                          </a>
                        </div>
                        <div>
                          <a href="tel:+917674950954" className="text-muted-foreground hover:text-foreground">
                            +91 7674950954
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <a
                        href="mailto:gayatrielectricalworks@gmail.com"
                        className="break-all text-muted-foreground hover:text-foreground"
                      >
                        gayatrielectricalworks@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Open 7 Days a Week</p>
                      <p className="text-muted-foreground">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Service Areas</h3>
                      <p className="text-muted-foreground">Serving clients across the country</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Why Choose Us?</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">25+ Years of Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Proven track record since 1998 in delivering exceptional turnkey projects
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">Comprehensive Services</h3>
                      <p className="text-sm text-muted-foreground">
                        From electrical to carpentry, we handle every aspect of your project
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">Quality Assurance</h3>
                      <p className="text-sm text-muted-foreground">
                        Strict adherence to safety standards and quality control at every stage
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">Timely Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear timelines and efficient project management ensure on-time completion
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">Specialized Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Medical equipment and MRI room installations with healthcare compliance
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-accent">Single Point of Contact</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete accountability and coordination for hassle-free execution
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">Ready to Start Your Project?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us today for a consultation and detailed quote. We'll work with you to understand your
                    requirements and deliver a solution that exceeds expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-blue-50/50 to-indigo-50/50 p-8 shadow-lg">
            <h2 className="mb-8 text-center text-2xl font-bold">Our Track Record</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center group">
                <div className="mb-3 inline-block rounded-xl bg-gradient-to-br from-accent to-primary px-6 py-3 shadow-lg shadow-accent/20 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/30">
                  <div className="text-4xl font-extrabold text-white">1000+</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center group">
                <div className="mb-3 inline-block rounded-xl bg-gradient-to-br from-primary to-accent px-6 py-3 shadow-lg shadow-primary/20 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30">
                  <div className="text-4xl font-extrabold text-white">500+</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="mb-3 inline-block rounded-xl bg-gradient-to-br from-accent to-primary px-6 py-3 shadow-lg shadow-accent/20 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/30">
                  <div className="text-4xl font-extrabold text-white">1M+</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">SFT Area Worked</div>
              </div>
              <div className="text-center group">
                <div className="mb-3 inline-block rounded-xl bg-gradient-to-br from-primary to-accent px-6 py-3 shadow-lg shadow-primary/20 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30">
                  <div className="text-4xl font-extrabold text-white">₹10Cr+</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Capex Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
