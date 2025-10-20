"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      faqs: [
        {
          question: "How does TrustTuition work?",
          answer: "TrustTuition connects students with qualified tutors for one-on-one online sessions. Simply tell us what you need through our quick quote form, and we'll match you with suitable tutors. You can then choose your preferred tutor and start learning immediately."
        },
        {
          question: "How much does tutoring cost?",
          answer: "Our tutoring starts from £20 per hour, with rates varying based on the tutor's experience, qualifications, and subject expertise. There are no sign-up fees, contracts, or hidden costs - you only pay for the sessions you book."
        },
        {
          question: "How quickly can I start learning?",
          answer: "Most students are matched with tutors within 24 hours of submitting their requirements. Once matched, you can typically schedule your first session within 2-3 days, depending on your and your tutor's availability."
        },
        {
          question: "Do I need any special equipment?",
          answer: "You'll need a computer, tablet, or smartphone with a stable internet connection, webcam, and microphone. Most sessions use platforms like Zoom, Skype, or Google Meet. Your tutor will guide you through the setup process."
        }
      ],
    },
    {
      title: "Booking & Payments",
      icon: "💳",
      faqs: [
        {
          question: "Do I need to sign a contract?",
          answer: "No contracts required! We believe in flexible learning. You can book sessions as needed and cancel with 24 hours' notice. There's no minimum commitment or long-term obligations."
        },
        {
          question: "How do I pay for sessions?",
          answer: "Payment is made directly to tutors after each session. Most tutors accept bank transfers, PayPal, or other secure payment methods. We'll provide you with payment details when you're matched with a tutor."
        },
        {
          question: "What's your cancellation policy?",
          answer: "You can cancel or reschedule sessions with 24 hours' notice without any charges. Cancellations with less than 24 hours' notice may incur a fee, depending on your tutor's individual policy."
        },
        {
          question: "Are there any hidden fees?",
          answer: "Absolutely not. We're committed to transparency. The hourly rate you see is what you pay - no registration fees, no commission charges, and no surprise costs."
        }
      ],
    },
    {
      title: "Tutors & Quality",
      icon: "👨‍🏫",
      faqs: [
        {
          question: "How do you select your tutors?",
          answer: "All our tutors undergo a rigorous selection process including qualification verification, DBS checks, and teaching assessments. We only accept tutors with relevant degrees, teaching experience, and excellent communication skills."
        },
        {
          question: "Can I change tutors if I'm not satisfied?",
          answer: "If you're not completely satisfied with your tutor, we'll help you find a better match at no extra cost. Your learning success is our priority, and we want you to feel comfortable with your chosen tutor."
        },
        {
          question: "What subjects do you cover?",
          answer: "We cover a wide range of subjects including Mathematics, English, Sciences (Physics, Chemistry, Biology), Languages, History, Geography, Computer Science, and many more. From primary level to university and adult learning."
        },
        {
          question: "Are your tutors DBS checked?",
          answer: "Yes, all our tutors undergo enhanced DBS checks. Your safety and peace of mind are extremely important to us, and we ensure all tutors meet our strict safeguarding standards."
        }
      ],
    },
    {
      title: "Technical & Support",
      icon: "💻",
      faqs: [
        {
          question: "What if I have technical problems during a session?",
          answer: "If technical issues occur during a session, contact your tutor immediately. Most technical problems can be resolved quickly. If a session is significantly disrupted, most tutors will offer a replacement session or partial refund."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach our support team via email at hello@trusttuition.com, phone at +44 20 1234 5678 (Monday to Friday, 9am-6pm), or through our contact form. We aim to respond to all enquiries within 24 hours."
        },
        {
          question: "What platforms do you use for online tutoring?",
          answer: "We're platform-agnostic and work with whatever suits you best. Most tutors use Zoom, Microsoft Teams, Google Meet, or Skype. Some also use interactive whiteboards and specialised educational software."
        },
        {
          question: "Can I have in-person tutoring instead?",
          answer: "While we specialise in online tutoring, some of our tutors may offer in-person sessions depending on your location. Please mention your preference in the quick quote form, and we'll try to accommodate your needs."
        }
      ],
    },
  ]

  const popularQuestions = [
    "How much does tutoring cost?",
    "Do I need to sign a contract?",
    "How quickly can I start?",
    "Can I change tutors if needed?",
    "What subjects do you cover?"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about our tutoring services, booking process, and more.
          </p>

          {/* Popular Questions Quick Links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {popularQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(`question-${index}`)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-3 py-1 bg-primary text-muted rounded-full text-sm cursor-pointer"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">24h</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">350+</div>
            <div className="text-sm text-muted-foreground">Expert Tutors</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-muted-foreground">Hidden Fees</div>
          </div>
        </div>

        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="font-heading font-bold text-2xl text-foreground">{category.title}</h2>
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 10 + faqIndex
                const isOpen = openItems.has(globalIndex)

                return (
                  <Card key={faqIndex} id={`question-${globalIndex}`} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg pr-4 text-foreground">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed pt-4 border-t">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">Check our comprehensive help centre</p>
            <Button variant="outline" size="sm" className="w-full">
              Visit Help Centre
            </Button>
          </Card>
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Get detailed answers via email</p>
            <Button variant="outline" size="sm" className="w-full">
              hello@trusttuition.com
            </Button>
          </Card>
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Speak directly with our team</p>
            <Button variant="outline" size="sm" className="w-full">
              +44 20 1234 5678
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}