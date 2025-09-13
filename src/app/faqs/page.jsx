"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

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
      faqs: [
        {
          question: "How does TrustTuition work?",
          answer:
            "TrustTuition connects students with qualified tutors for one-on-one online sessions. Simply tell us what you need through our quick quote form, and we'll match you with suitable tutors. You can then choose your preferred tutor and start learning immediately.",
        },
        {
          question: "How much does tutoring cost?",
          answer:
            "Our tutoring starts from £20 per hour, with rates varying based on the tutor's experience, qualifications, and subject expertise. There are no sign-up fees, contracts, or hidden costs - you only pay for the sessions you book.",
        },
        {
          question: "How quickly can I start learning?",
          answer:
            "Most students are matched with tutors within 24 hours of submitting their requirements. Once matched, you can typically schedule your first session within 2-3 days, depending on your and your tutor's availability.",
        },
      ],
    },
    {
      title: "Booking & Payments",
      faqs: [
        {
          question: "Do I need to sign a contract?",
          answer:
            "No contracts required! We believe in flexible learning. You can book sessions as needed and cancel with 24 hours notice. There's no minimum commitment or long-term obligations.",
        },
        {
          question: "How do I pay for sessions?",
          answer:
            "Payment is made directly to tutors after each session. Most tutors accept bank transfers, PayPal, or other secure payment methods. We'll provide you with payment details when you're matched with a tutor.",
        },
        {
          question: "What's your cancellation policy?",
          answer:
            "You can cancel or reschedule sessions with 24 hours notice without any charges. Cancellations with less than 24 hours notice may incur a fee, depending on your tutor's individual policy.",
        },
      ],
    },
    {
      title: "Tutors & Quality",
      faqs: [
        {
          question: "How do you select your tutors?",
          answer:
            "All our tutors undergo a rigorous selection process including qualification verification, DBS checks, and teaching assessments. We only accept tutors with relevant degrees, teaching experience, and excellent communication skills.",
        },
        {
          question: "Can I change tutors if I'm not satisfied?",
          answer:
            "If you're not completely satisfied with your tutor, we'll help you find a better match at no extra cost. Your learning success is our priority, and we want you to feel comfortable with your chosen tutor.",
        },
        {
          question: "What subjects do you cover?",
          answer:
            "We cover a wide range of subjects including Mathematics, English, Sciences (Physics, Chemistry, Biology), Languages, History, Geography, Computer Science, and many more. From primary level to university and adult learning.",
        },
      ],
    },
    {
      title: "Technical & Support",
      faqs: [
        {
          question: "What technology do I need for online sessions?",
          answer:
            "You'll need a computer, tablet, or smartphone with a stable internet connection, webcam, and microphone. Most sessions use platforms like Zoom, Skype, or Google Meet. Your tutor will guide you through the setup process.",
        },
        {
          question: "What if I have technical problems during a session?",
          answer:
            "If technical issues occur during a session, contact your tutor immediately. Most technical problems can be resolved quickly. If a session is significantly disrupted, most tutors will offer a replacement session or partial refund.",
        },
        {
          question: "How do I contact support?",
          answer:
            "You can reach our support team via email at hello@trusttuition.com, phone at +44 20 1234 5678 (Mon-Fri, 9am-6pm), or through our contact form. We aim to respond to all inquiries within 24 hours.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to common questions about our tutoring services, booking process, and more.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="font-heading font-bold text-2xl mb-6 text-slate-900">{category.title}</h2>
            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 10 + faqIndex // Create unique index
                const isOpen = openItems.has(globalIndex)

                return (
                  <Card key={faqIndex} className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <Card className="bg-slate-900 text-white mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-slate-900 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:hello@trusttuition.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
              >
                Email Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
