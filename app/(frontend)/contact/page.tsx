import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us | Mdingi Midwifery Services",
  description: "Book an appointment or get in touch with Mdingi Midwifery Services. We are here to support you through every stage of pregnancy and beyond.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 00 000 0000"],
    action: { href: "tel:+27000000000", label: "Call now" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mdingi.co.za"],
    action: { href: "mailto:info@mdingi.co.za", label: "Send email" },
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["11193 Nareng Street, ","Daveyton, ", "Johannesburg," ,"1520"],
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 2pm"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
 
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your journey with us? Fill out the form below or contact 
              us directly. We are here to answer your questions and provide the care you need.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-border">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels. For emergencies, 
                  please call us directly.
                </p>
                
                <div className="space-y-4 pt-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        {item.action && (
                          <a
                            href={item.action.href}
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-1 inline-block"
                          >
                            {item.action.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency Notice */}
                <div className="p-4 rounded-xl bg-accent border border-border">
                  <h3 className="font-medium text-foreground">Emergency?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    If you are experiencing a medical emergency, please call emergency 
                    services immediately or proceed to your nearest hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
