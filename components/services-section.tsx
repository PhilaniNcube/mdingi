import { 
  Heart, 
  Calendar, 
  Home, 
  Baby, 
  Stethoscope, 
  Droplets 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Heart,
    title: "Family Planning",
    description: "Comprehensive family planning services including contraception counseling, fertility awareness, and reproductive health education to help you make informed decisions.",
  },
  {
    icon: Calendar,
    title: "Antenatal Care",
    description: "Regular prenatal check-ups, ultrasound monitoring, nutrition guidance, and pregnancy education to ensure a healthy pregnancy journey for you and your baby.",
  },
  {
    icon: Home,
    title: "Birth Centre / Home Birth",
    description: "Safe, comfortable birthing options in our birth centre or the comfort of your home, with skilled midwives providing continuous support throughout labor and delivery.",
  },
  {
    icon: Baby,
    title: "Postnatal Care",
    description: "Postpartum support including breastfeeding assistance, maternal recovery monitoring, emotional support, and newborn care guidance for the first weeks after birth.",
  },
  {
    icon: Stethoscope,
    title: "Baby Wellness",
    description: "Comprehensive baby care including immunizations, growth monitoring, developmental assessments, and primary care for common childhood illnesses.",
  },
  {
    icon: Droplets,
    title: "IV Drip Therapy",
    description: "Intravenous hydration and vitamin therapy for expectant mothers, postpartum recovery, and general wellness to help you feel your best.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive Care for You and Your Family
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From conception to childhood, we offer a full range of services to support 
            your growing family with expert, compassionate care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="mt-4 font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
