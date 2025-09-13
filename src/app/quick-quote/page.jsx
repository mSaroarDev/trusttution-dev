import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, Users, BookOpen } from "lucide-react"

export default function QuickQuotePage() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      title: "Quick Response",
      description: "Get matched with suitable tutors within 24 hours",
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: "Perfect Match",
      description: "We find tutors that match your specific requirements",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-yellow-600" />,
      title: "No Obligation",
      description: "Free quotes with no commitment required",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Get Your Quick Quote</h1>
          <p className="text-xl text-gray-300 mb-8">
            Tell us what you need and we'll match you with the perfect tutor in minutes.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Request Your Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                {/* JotForm Embed Placeholder */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">JotForm Integration</h3>
                  <p className="text-gray-600 mb-4">
                    This is where your JotForm will be embedded. The form will collect:
                  </p>
                  <ul className="text-left text-sm text-gray-600 space-y-1 max-w-md mx-auto">
                    <li>• Subject and level needed</li>
                    <li>• Preferred schedule and frequency</li>
                    <li>• Learning goals and requirements</li>
                    <li>• Contact information</li>
                    <li>• Budget preferences</li>
                  </ul>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Integration Ready:</strong> Simply replace this placeholder with your JotForm embed code.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Why Choose Our Quote Service?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-slate-900 text-white">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <span>We review your requirements within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <span>We match you with 2-3 suitable tutors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <span>You choose your preferred tutor and start learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Need help right away?</p>
              <Button variant="outline" size="lg">
                Call us: +44 20 1234 5678
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
