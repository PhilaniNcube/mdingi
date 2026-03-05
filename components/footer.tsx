import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const services = [
  { name: "Family Planning", href: "/#services" },
  { name: "Antenatal Care", href: "/#services" },
  { name: "Birth Centre / Home Birth", href: "/#services" },
  { name: "Postnatal Care", href: "/#services" },
  { name: "Baby Wellness", href: "/#services" },
  { name: "IV Drip Therapy", href: "/#services" },
]

const quickLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Our Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Book Appointment", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-primary-foreground">
                Mdingi
              </span>
              <span className="block text-xs text-background/70 tracking-wide">
                Midwifery Services
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Supporting women before, during, and after pregnancy with compassionate, 
              professional care for the whole family.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-background">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-background">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-background">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/70 mt-0.5 shrink-0" />
                <span className="text-sm text-background/70">
                  123 Healthcare Drive<br />
                  Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/70 shrink-0" />
                <a
                  href="tel:+27000000000"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  +27 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/70 shrink-0" />
                <a
                  href="mailto:info@mdingi.co.za"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  info@mdingi.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-background/70 mt-0.5 shrink-0" />
                <span className="text-sm text-background/70">
                  Mon - Fri: 8am - 6pm<br />
                  Sat: 9am - 2pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} Mdingi Midwifery Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
