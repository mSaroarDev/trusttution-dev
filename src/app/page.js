import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Star,
  Calculator,
  Globe,
  Microscope,
  PenTool,
  Code,
  Music,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const steps = [
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-400" />,
      title: "Tell us what you need",
      description:
        "Share your subject, level, and learning goals with our quick quote form.",
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: "We'll find your perfect tutor",
      description:
        "Our team matches you with qualified tutors based on your specific requirements.",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "Start learning immediately",
      description:
        "Book your first session and begin your personalized learning journey.",
    },
  ];

  const featuredTutors = [
    {
      name: "Dr. Sarah Johnson",
      subjects: "Mathematics, Physics",
      rate: "£35/hour",
      rating: 4.9,
      image: "/professional-female-tutor.png",
    },
    {
      name: "James Wilson",
      subjects: "English Literature, History",
      rate: "£28/hour",
      rating: 4.8,
      image: "/professional-male-tutor.png",
    },
    {
      name: "Maria Garcia",
      subjects: "Spanish, French",
      rate: "£25/hour",
      rating: 4.9,
      image: "/female-language-tutor.png",
    },
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "A-Level Student",
      content:
        "My maths grades improved from C to A* in just 3 months. The personalized approach really works!",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Parent",
      content:
        "Excellent service. My daughter's confidence in science has grown tremendously since starting.",
      rating: 5,
    },
    {
      name: "Sophie Williams",
      role: "GCSE Student",
      content:
        "The tutors are so patient and explain everything clearly. I actually enjoy studying now!",
      rating: 5,
    },
  ];

  const subjects = [
    { name: "Mathematics", icon: <Calculator className="h-6 w-6" /> },
    { name: "English", icon: <PenTool className="h-6 w-6" /> },
    { name: "Sciences", icon: <Microscope className="h-6 w-6" /> },
    { name: "Languages", icon: <Globe className="h-6 w-6" /> },
    { name: "Computer Science", icon: <Code className="h-6 w-6" /> },
    { name: "Music", icon: <Music className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              One-2-One Online Tutoring
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
              From £20/hour
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance leading-relaxed">
              Connect with expert tutors for personalized one-on-one learning.
              No contracts, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quick-quote">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
                >
                  Quick Quotation
                </Button>
              </Link>
              <Link href="/tutors">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
                >
                  Browse Tutors
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Join 2000+ happy students and 350+ expert tutors
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-balance">
              No Hassle, No Contract, No Hidden Fees
            </h2>
            <h3 className="text-2xl md:text-3xl text-yellow-600 font-semibold mb-6">
              Just One Hourly Rate
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At TrustTuition, we believe learning should be accessible and
              transparent. Every student is different, and so are our tutors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-lg mb-2">
                No sign-up fees
              </h4>
              <p className="text-muted-foreground text-sm">
                Start learning immediately without any upfront costs
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-lg mb-2">
                Direct contact with the tutors
              </h4>
              <p className="text-muted-foreground text-sm">
                We wont get in the way once youre matched
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-lg mb-2">
                Completely pay as you go
              </h4>
              <p className="text-muted-foreground text-sm">
                No contracts and cancellation at 24 hours notice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-balance">
              Connect with a tutor in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-yellow-400/50 transition-colors"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-slate-900 rounded-full w-fit">
                    {step.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Featured Tutors
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet some of our expert tutors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTutors.map((tutor, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <img
                    src={tutor.image || "/placeholder.svg"}
                    alt={tutor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="font-heading text-xl">
                    {tutor.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {tutor.subjects}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tutor.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">
                    {tutor.rate}
                  </p>
                  <Button className="w-full">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/tutors">
              <Button variant="outline" size="lg">
                View All Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              What our students say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Popular Subjects
            </h2>
            <p className="text-lg text-muted-foreground">
              Find expert tutors for any subject
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-yellow-400/50"
              >
                <div className="text-yellow-600 mb-3 flex justify-center">
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-sm">{subject.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-balance">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-balance">
            Get matched with the perfect tutor in minutes. No commitment
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quick-quote">
              <Button
                size="lg"
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-8 py-4 text-lg"
              >
                Get Quick Quote
              </Button>
            </Link>
            <Link href="/tutors">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
              >
                Browse Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
