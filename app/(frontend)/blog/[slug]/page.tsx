import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react"
import { getPostBySlug } from "@/lib/payload"
import { RichText } from "@payloadcms/richtext-lexical/react"
import type { SerializedEditorState, SerializedLexicalNode } from "@payloadcms/richtext-lexical/lexical"

// Placeholder blog posts data - fallback when CMS is not configured
const placeholderPosts = [
  {
    id: "1",
    slug: "preparing-for-your-first-pregnancy",
    title: "Preparing for Your First Pregnancy: A Complete Guide",
    excerpt: "Everything you need to know about preparing your body and mind for the beautiful journey of pregnancy.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&h=600&fit=crop&q=80",
    category: "Pregnancy",
    author: "Dr. Mdingi",
    publishedAt: "March 1, 2026",
    readTime: "5 min read",
    content: `
      <p>Preparing for your first pregnancy is an exciting and sometimes overwhelming experience. At Mdingi Midwifery Services, we believe that the journey to motherhood begins long before conception. Here's our comprehensive guide to help you prepare.</p>
      
      <h2>Physical Preparation</h2>
      <p>Before trying to conceive, it's important to ensure your body is in optimal health. This includes:</p>
      <ul>
        <li>Scheduling a preconception check-up with your healthcare provider</li>
        <li>Starting prenatal vitamins, especially folic acid</li>
        <li>Achieving a healthy weight through balanced nutrition and exercise</li>
        <li>Eliminating alcohol, tobacco, and recreational drugs</li>
        <li>Reviewing any current medications with your doctor</li>
      </ul>
      
      <h2>Emotional Preparation</h2>
      <p>Pregnancy brings significant emotional changes. Preparing mentally is just as important as physical preparation:</p>
      <ul>
        <li>Discuss expectations and concerns with your partner</li>
        <li>Build a support network of family, friends, and healthcare providers</li>
        <li>Consider speaking with a counselor if you have anxiety about pregnancy</li>
        <li>Research and understand the stages of pregnancy</li>
      </ul>
      
      <h2>Financial Planning</h2>
      <p>Having a baby involves financial considerations. Start planning early by:</p>
      <ul>
        <li>Reviewing your health insurance coverage</li>
        <li>Creating a baby budget for essential items</li>
        <li>Understanding your maternity leave options</li>
        <li>Building an emergency savings fund</li>
      </ul>
      
      <h2>Choosing Your Care Provider</h2>
      <p>Selecting the right midwife or healthcare provider is crucial. At Mdingi Midwifery Services, we offer personalized care throughout your pregnancy journey. Our team is dedicated to supporting you every step of the way.</p>
      
      <p>Ready to start your pregnancy journey? <a href="/contact">Book a consultation</a> with our team today.</p>
    `,
  },
  {
    id: "2",
    slug: "benefits-of-breastfeeding",
    title: "The Amazing Benefits of Breastfeeding for Mother and Baby",
    excerpt: "Discover how breastfeeding nurtures both mother and child, creating lasting health benefits and a special bond.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&h=600&fit=crop&q=80",
    category: "Postnatal",
    author: "Dr. Mdingi",
    publishedAt: "February 25, 2026",
    readTime: "4 min read",
    content: `
      <p>Breastfeeding is one of the most natural and beneficial things you can do for your baby. The World Health Organization recommends exclusive breastfeeding for the first six months of life. Let's explore why.</p>
      
      <h2>Benefits for Baby</h2>
      <p>Breast milk provides optimal nutrition tailored specifically to your baby's needs:</p>
      <ul>
        <li>Contains the perfect balance of nutrients for brain development</li>
        <li>Provides antibodies that protect against infections and diseases</li>
        <li>Reduces risk of allergies and asthma</li>
        <li>Lowers risk of SIDS (Sudden Infant Death Syndrome)</li>
        <li>Promotes healthy weight gain and gut health</li>
      </ul>
      
      <h2>Benefits for Mother</h2>
      <p>Breastfeeding isn't just good for baby—it benefits mothers too:</p>
      <ul>
        <li>Helps the uterus return to its pre-pregnancy size</li>
        <li>Burns extra calories, aiding postpartum weight loss</li>
        <li>Reduces risk of breast and ovarian cancer</li>
        <li>Releases oxytocin, promoting bonding and reducing stress</li>
        <li>Saves time and money compared to formula feeding</li>
      </ul>
      
      <h2>Getting Support</h2>
      <p>While breastfeeding is natural, it doesn't always come naturally. Our postnatal care includes comprehensive breastfeeding support to help you and your baby succeed. From proper latching techniques to addressing common challenges, we're here for you.</p>
      
      <p>Need breastfeeding support? <a href="/contact">Contact us</a> to schedule a consultation with our lactation specialists.</p>
    `,
  },
  {
    id: "3",
    slug: "baby-immunization-schedule",
    title: "Understanding Your Baby's Immunization Schedule",
    excerpt: "A comprehensive guide to childhood vaccinations and why they are essential for your baby's health.",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=1200&h=600&fit=crop&q=80",
    category: "Baby Wellness",
    author: "Dr. Mdingi",
    publishedAt: "February 18, 2026",
    readTime: "6 min read",
    content: `
      <p>Immunizations are one of the most effective ways to protect your child from serious diseases. Understanding the vaccination schedule helps you keep your baby healthy and safe.</p>
      
      <h2>Why Vaccinations Matter</h2>
      <p>Vaccines work by training your baby's immune system to recognize and fight specific diseases. They have virtually eliminated many childhood diseases that were once common and deadly.</p>
      
      <h2>The Standard Schedule</h2>
      <p>The South African immunization schedule includes vaccines for:</p>
      <ul>
        <li>Birth: BCG and first Polio dose</li>
        <li>6 weeks: DTaP-IPV-Hib, Hepatitis B, Rotavirus, PCV</li>
        <li>10 weeks: DTaP-IPV-Hib, Hepatitis B</li>
        <li>14 weeks: DTaP-IPV-Hib, Hepatitis B, Rotavirus, PCV</li>
        <li>6 months: Measles</li>
        <li>9 months: PCV, Measles</li>
        <li>12 months: Measles</li>
        <li>18 months: DTaP-IPV-Hib</li>
      </ul>
      
      <h2>What to Expect</h2>
      <p>After vaccination, your baby may experience mild side effects such as:</p>
      <ul>
        <li>Slight fever</li>
        <li>Redness or swelling at the injection site</li>
        <li>Fussiness or mild discomfort</li>
      </ul>
      <p>These are normal responses and typically resolve within a day or two.</p>
      
      <h2>Our Baby Wellness Services</h2>
      <p>At Mdingi Midwifery Services, we offer comprehensive baby wellness care including all scheduled immunizations, growth monitoring, and primary care for common illnesses. <a href="/contact">Book an appointment</a> to ensure your baby stays on track with their vaccinations.</p>
    `,
  },
  {
    id: "4",
    slug: "natural-birth-what-to-expect",
    title: "Natural Birth: What to Expect and How to Prepare",
    excerpt: "Learn about the natural birth process, pain management techniques, and how to create your ideal birth plan.",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1200&h=600&fit=crop&q=80",
    category: "Birth",
    author: "Dr. Mdingi",
    publishedAt: "February 10, 2026",
    readTime: "7 min read",
    content: `
      <p>Natural birth, also known as unmedicated birth, allows you to experience labor and delivery without pain medication or medical interventions. Many women choose this path for various personal, cultural, or health reasons.</p>
      
      <h2>The Stages of Labor</h2>
      <p>Understanding what happens during labor helps you feel more prepared:</p>
      <ul>
        <li><strong>Early Labor:</strong> Contractions begin and cervix starts to dilate</li>
        <li><strong>Active Labor:</strong> Contractions intensify and cervix dilates to 10cm</li>
        <li><strong>Transition:</strong> The most intense phase before pushing begins</li>
        <li><strong>Pushing:</strong> Working with your body to deliver your baby</li>
        <li><strong>Delivery:</strong> Your baby arrives!</li>
      </ul>
      
      <h2>Natural Pain Management</h2>
      <p>There are many techniques to manage labor pain naturally:</p>
      <ul>
        <li>Breathing exercises and relaxation techniques</li>
        <li>Movement and position changes</li>
        <li>Water immersion (birth pools)</li>
        <li>Massage and counter-pressure</li>
        <li>Aromatherapy and music</li>
        <li>Support from a doula or birth partner</li>
      </ul>
      
      <h2>Creating Your Birth Plan</h2>
      <p>A birth plan communicates your preferences to your care team. Include your wishes for:</p>
      <ul>
        <li>Labor environment (lighting, music, who's present)</li>
        <li>Pain management preferences</li>
        <li>Positions for labor and delivery</li>
        <li>Immediate newborn care (skin-to-skin, delayed cord clamping)</li>
      </ul>
      
      <h2>Our Birth Centre</h2>
      <p>Mdingi Midwifery Services offers both birth centre and home birth options for low-risk pregnancies. Our skilled midwives provide continuous support throughout your labor. <a href="/contact">Contact us</a> to discuss your birth preferences.</p>
    `,
  },
  {
    id: "5",
    slug: "postpartum-recovery-tips",
    title: "Essential Postpartum Recovery Tips for New Mothers",
    excerpt: "Practical advice for healing and thriving in the weeks after giving birth, from nutrition to emotional support.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=600&fit=crop&q=80",
    category: "Postnatal",
    author: "Dr. Mdingi",
    publishedAt: "February 3, 2026",
    readTime: "5 min read",
    content: `
      <p>The postpartum period, often called the "fourth trimester," is a time of significant physical and emotional adjustment. Here's how to support your recovery while caring for your newborn.</p>
      
      <h2>Physical Recovery</h2>
      <p>Your body has done something incredible. Give it time and care:</p>
      <ul>
        <li>Rest whenever possible—sleep when baby sleeps</li>
        <li>Stay hydrated, especially if breastfeeding</li>
        <li>Eat nutritious foods to support healing</li>
        <li>Accept help with household tasks</li>
        <li>Take prescribed pain medications as needed</li>
        <li>Wait for clearance before resuming exercise</li>
      </ul>
      
      <h2>Emotional Wellbeing</h2>
      <p>It's normal to experience a range of emotions after birth:</p>
      <ul>
        <li>"Baby blues" are common in the first two weeks</li>
        <li>Talk openly about your feelings with loved ones</li>
        <li>Seek help if sadness persists beyond two weeks</li>
        <li>Connect with other new mothers for support</li>
        <li>Don't compare yourself to others or social media</li>
      </ul>
      
      <h2>Warning Signs</h2>
      <p>Contact your healthcare provider if you experience:</p>
      <ul>
        <li>Heavy bleeding or large clots</li>
        <li>Fever over 38°C</li>
        <li>Severe headaches or vision changes</li>
        <li>Thoughts of harming yourself or your baby</li>
        <li>Signs of infection at incision sites</li>
      </ul>
      
      <h2>Our Postnatal Support</h2>
      <p>Mdingi Midwifery Services offers comprehensive postnatal care including home visits, breastfeeding support, and maternal health monitoring. <a href="/contact">Schedule your postnatal appointment</a> today.</p>
    `,
  },
  {
    id: "6",
    slug: "family-planning-options",
    title: "Exploring Your Family Planning Options",
    excerpt: "An overview of contraception methods and fertility awareness to help you make informed decisions.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=600&fit=crop&q=80",
    category: "Family Planning",
    author: "Dr. Mdingi",
    publishedAt: "January 28, 2026",
    readTime: "6 min read",
    content: `
      <p>Family planning empowers you to decide if and when to have children. Understanding your options helps you make the best choice for your lifestyle and health.</p>
      
      <h2>Hormonal Methods</h2>
      <p>These methods use hormones to prevent pregnancy:</p>
      <ul>
        <li><strong>Birth control pills:</strong> Daily pills with high effectiveness when taken correctly</li>
        <li><strong>Injections:</strong> Hormonal shots given every 2-3 months</li>
        <li><strong>Implants:</strong> Small rods inserted under the skin, lasting 3-5 years</li>
        <li><strong>Hormonal IUDs:</strong> Devices placed in the uterus, lasting 3-7 years</li>
        <li><strong>Patches and rings:</strong> Weekly or monthly hormone delivery</li>
      </ul>
      
      <h2>Non-Hormonal Methods</h2>
      <p>Options that don't affect your hormones:</p>
      <ul>
        <li><strong>Copper IUD:</strong> Hormone-free, lasts up to 10 years</li>
        <li><strong>Barrier methods:</strong> Condoms, diaphragms, cervical caps</li>
        <li><strong>Fertility awareness:</strong> Tracking ovulation to avoid fertile days</li>
        <li><strong>Sterilization:</strong> Permanent options for those certain about not wanting more children</li>
      </ul>
      
      <h2>Choosing What's Right for You</h2>
      <p>Consider these factors when choosing contraception:</p>
      <ul>
        <li>Your health history and current conditions</li>
        <li>Whether you want children in the future</li>
        <li>How important is ease of use?</li>
        <li>Side effects you're willing to tolerate</li>
        <li>Protection against STIs (only condoms provide this)</li>
      </ul>
      
      <h2>Our Family Planning Services</h2>
      <p>At Mdingi Midwifery Services, we provide judgment-free family planning counseling. We'll help you explore your options and find the method that works best for you. <a href="/contact">Book a consultation</a> to discuss your family planning needs.</p>
    `,
  },
]

type Props = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  try {
    const cmsPost = await getPostBySlug(slug)
    
    if (cmsPost) {
      return {
        post: {
          id: cmsPost.id,
          slug: cmsPost.slug,
          title: cmsPost.title,
          excerpt: cmsPost.excerpt,
          image: cmsPost.featuredImage?.url || "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&h=600&fit=crop&q=80",
          category: cmsPost.category?.name || "General",
          author: cmsPost.author,
          publishedAt: cmsPost.publishedAt
            ? new Date(cmsPost.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : "Recently published",
          readTime: cmsPost.readTime || "5 min read",
          content: cmsPost.content,
        },
        isFromCMS: true,
      }
    }
    
    // Fall back to placeholder
    const placeholderPost = placeholderPosts.find((p) => p.slug === slug)
    return { post: placeholderPost, isFromCMS: false }
  } catch {
    // If Payload CMS is not configured, fall back to placeholder
    const placeholderPost = placeholderPosts.find((p) => p.slug === slug)
    return { post: placeholderPost, isFromCMS: false }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { post } = await getPost(slug)
  
  if (!post) {
    return {
      title: "Post Not Found | Mdingi Midwifery Services",
    }
  }

  return {
    title: `${post.title} | Mdingi Midwifery Services`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const { post, isFromCMS } = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
 
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[40vh] lg:h-[50vh] bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-4 lg:px-8 -mt-32 relative z-10">
          <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            
            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {isFromCMS ? (
              <div className="mt-8 prose prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground">
                <RichText data={post.content as SerializedEditorState<SerializedLexicalNode>} />
              </div>
            ) : (
              <div 
                className="mt-8 prose prose-lg max-w-none 
                  prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content as string }}
              />
            )}

            {/* CTA */}
            <div className="mt-12 p-6 rounded-xl bg-secondary/50 border border-border text-center">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Have Questions?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Our team is here to help. Book a consultation to discuss your needs.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Spacing */}
        <div className="h-16 lg:h-24" />
      </main>

    </div>
  )
}
