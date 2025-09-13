import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Clock, TrendingUp, CheckCircle, BookOpen } from "lucide-react"

export default function BecomeTutorPage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-600" />,
      title: "Flexible Earnings",
      description: "Set your own rates and work as much or as little as you want. Top tutors earn £40+ per hour.",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Flexible Schedule",
      description: "Choose when you work. Perfect for students, professionals, or anyone seeking flexible income.",
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      title: "Rewarding Work",
      description: "Make a real difference in students' lives while sharing your knowledge and expertise.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-yellow-600" />,
      title: "Professional Growth",
      description: "Develop your teaching skills and build a reputation in your field of expertise.",
    },
  ]

  const requirements = [
    "Degree in your subject area or equivalent qualification",
    "Strong communication and interpersonal skills",
    "Passion for teaching and helping students succeed",
    "Reliable internet connection for online sessions",
    "DBS check (we can help arrange this)",
  ]

  const process = [
    {
      step: "1",
      title: "Apply Online",
      description: "Complete our application form with your qualifications and experience.",
    },
    {
      step: "2",
      title: "Interview & Assessment",
      description: "Brief interview to discuss your experience and teaching approach.",
    },
    {
      step: "3",
      title: "Profile Creation",
      description: "We help you create an attractive tutor profile to showcase your expertise.",
    },
    {
      step: "4",
      title: "Start Teaching",
      description: "Get matched with students and begin your tutoring journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Become a Tutor</h1>
          <p className="text-xl text-gray-300 mb-8 text-balance">
            Share your knowledge, inspire students, and earn great money doing what you love.
          </p>
          <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-8 py-4 text-lg">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Why Tutor With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of expert tutors and enjoy the benefits of flexible, rewarding work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">{benefit.icon}</div>
                  <CardTitle className="font-heading text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">What We're Looking For</h2>
            <p className="text-lg text-gray-600">
              We welcome applications from qualified individuals who are passionate about teaching.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">How to Get Started</h2>
            <p className="text-lg text-gray-600">Our simple 4-step process to become a tutor</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl">Ready to Apply?</CardTitle>
              <p className="text-gray-600">Complete our application form to get started.</p>
            </CardHeader>
            <CardContent>
              {/* JotForm Embed Placeholder */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Tutor Application Form</h3>
                <p className="text-gray-600 mb-4">
                  This is where your JotForm application will be embedded. The form will collect:
                </p>
                <ul className="text-left text-sm text-gray-600 space-y-1 max-w-md mx-auto">
                  <li>• Personal information and contact details</li>
                  <li>• Educational background and qualifications</li>
                  <li>• Teaching experience and subjects</li>
                  <li>• Availability and preferred rates</li>
                  <li>• References and DBS information</li>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Questions About Becoming a Tutor?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team is here to help you through the application process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300">
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              View FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
