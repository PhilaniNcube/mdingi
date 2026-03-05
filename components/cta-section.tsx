import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to Begin Your Journey With Us?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Whether you are planning for pregnancy, expecting, or looking for care for 
            your little one, we are here to support you every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book an Appointment
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+27000000000" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
