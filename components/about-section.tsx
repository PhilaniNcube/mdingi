import { CheckCircle } from "lucide-react"

const features = [
  "Personalized care plans tailored to your needs",
  "Experienced and certified midwifery team",
  "24/7 support during pregnancy and postpartum",
  "Modern facilities with a warm, home-like atmosphere",
  "Evidence-based practices for safe outcomes",
  "Support for all ages, from newborns to adults",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=533&fit=crop&q=80"
                    alt="Healthcare professional with patient"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&h=400&fit=crop&q=80"
                    alt="Newborn baby feet"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&h=400&fit=crop&q=80"
                    alt="Mother and baby bonding"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=533&fit=crop&q=80"
                    alt="Pregnant woman in a peaceful setting"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Dedicated to Supporting Women and Families
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Mdingi Midwifery Services was founded with a simple mission: to provide 
              exceptional, woman-centered care that empowers mothers and supports 
              families throughout their journey.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of experienced midwives combines clinical expertise with 
              genuine compassion. We believe every birth is unique, and every family 
              deserves care that respects their choices, culture, and values.
            </p>
            
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
