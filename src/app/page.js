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
  ArrowRight,
  PlayCircle,
  Shield,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const steps = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Tell us what you need",
      description:
        "Share your subject, level, and learning goals with our quick quote form.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "We'll find your perfect tutor",
      description:
        "Our team matches you with qualified tutors based on your specific requirements.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
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
      reviews: 127,
      image: "/professional-female-tutor.png",
      badge: "PhD Mathematics",
    },
    {
      name: "James Wilson",
      subjects: "English Literature, History",
      rate: "£28/hour",
      rating: 4.8,
      reviews: 89,
      image: "/professional-male-tutor.png",
      badge: "Oxford Graduate",
    },
    {
      name: "Maria Garcia",
      subjects: "Spanish, French",
      rate: "£25/hour",
      rating: 4.9,
      reviews: 156,
      image: "/female-language-tutor.png",
      badge: "Native Speaker",
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
    { name: "Mathematics", icon: <Calculator className="h-8 w-8" /> },
    { name: "English", icon: <PenTool className="h-8 w-8" /> },
    { name: "Sciences", icon: <Microscope className="h-8 w-8" /> },
    { name: "Languages", icon: <Globe className="h-8 w-8" /> },
    { name: "Computer Science", icon: <Code className="h-8 w-8" /> },
    { name: "Music", icon: <Music className="h-8 w-8" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                One-to-One Online Tutoring
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
                Expert Tutors from{" "}
                <span className="text-primary">£20/hour</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Connect with qualified tutors for personalized learning. No
                contracts, no hidden fees. Just quality education tailored to
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link href="/quick-quote">
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold gap-2"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tutors">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg gap-2"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Meet Our Tutors
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/hero-img.jpg"
                alt="Tutoring services overview - Join 2000+ students learning now with Mathematics, Science & English, and Language Learning tutoring options"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">Verified Tutors</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-semibold">Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="font-semibold">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Simple Process,{" "}
              <span className="text-primary">Exceptional Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with your perfect tutor takes just a few minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary/20 to-primary/30 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <Card className="text-center border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 bg-primary text-primary-foreground rounded-2xl w-fit">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto -mt-8 mb-4 font-bold">
                      {index + 1}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Meet Our <span className="text-primary">Expert Tutors</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Qualified professionals ready to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTutors.map((tutor, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {tutor.badge}
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-background shadow-lg bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {tutor.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pt-16 text-center">
                  <CardTitle className="font-heading text-xl">
                    {tutor.name}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {tutor.subjects}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{tutor.rating}</span>
                    </div>
                    <span className="text-muted-foreground">
                      ({tutor.reviews} reviews)
                    </span>
                  </div>

                  <div className="text-2xl font-bold text-primary">
                    {tutor.rate}
                  </div>

                  <Button className="w-full gap-2">
                    View Profile
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tutors">
              <Button variant="outline" size="lg" className="gap-2">
                View All Tutors
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear what our students have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Popular <span className="text-primary">Subjects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tutoring across all major subjects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {subject.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-balance">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl  mb-8 text-balance max-w-2xl mx-auto">
            Join thousands of students who have achieved their academic goals
            with our expert tutors
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/quick-quote">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-primary border-primary border text-primary-foreground hover:text-primary cursor-pointer font-semibold gap-2"
              >
                Start Learning Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tutors">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer text-primary"
              >
                Browse All Tutors
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm ">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Free first session matching
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              24-hour cancellation
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
