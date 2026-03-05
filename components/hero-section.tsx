import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Compassionate Care for Every Stage
            </span>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Nurturing You Through Every Step of Motherhood
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Mdingi Midwifery Services, we provide comprehensive maternal and child care 
              with warmth and expertise. From family planning to postnatal support, 
              we are here for you and your little ones.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services">Our Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-2 text-sm font-medium text-foreground">Personalized Care</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-2 text-sm font-medium text-foreground">Safe Environment</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-2 text-sm font-medium text-foreground">Expert Team</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1000&fit=crop&q=80"
                alt="Mother holding newborn baby in a warm, nurturing environment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">10+</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Years of Experience</p>
                  <p className="text-sm text-muted-foreground">Trusted by families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
