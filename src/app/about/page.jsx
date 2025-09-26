import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Heart, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in tutor selection and student support.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "We're passionate about education and helping students achieve their potential.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We build lasting relationships between students, tutors, and families.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Every tutor is carefully vetted and committed to delivering exceptional results.",
    },
  ]

  const stats = [
    { number: "2000+", label: "Happy Students" },
    { number: "350+", label: "Expert Tutors" },
    { number: "15,000+", label: "Sessions Completed" },
    { number: "4.9/5", label: "Average Rating" },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former teacher with 15 years in education. Passionate about making quality tutoring accessible to all.",
      image: "/team-sarah-ceo.jpg",
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Academic Standards",
      bio: "PhD in Education, ensures all our tutors meet the highest academic and teaching standards.",
      image: "/team-james-academic.jpg",
    },
    {
      name: "Emma Thompson",
      role: "Student Success Manager",
      bio: "Dedicated to ensuring every student has the best possible learning experience with us.",
      image: "/team-emma-success.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">About TrustTuition</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            We're on a mission to make quality education accessible to everyone through personalised, affordable online
            tutoring.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At TrustTuition, we believe that every student deserves access to high-quality, personalised education.
              Our platform connects learners with expert tutors who are passionate about teaching and committed to
              helping students achieve their academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">What We Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide a trusted platform where students can find qualified tutors for one-on-one online learning
                  sessions. From GCSE to A-Level and beyond, we cover all major subjects with experienced educators who
                  understand how to make learning engaging and effective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Why We're Different</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional tutoring agencies, we believe in transparency and flexibility. No contracts, no
                  hidden fees, just honest pricing and quality education. We carefully vet every tutor and provide
                  ongoing support to ensure the best possible learning experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">The numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 text-primary rounded-full w-fit">{value.icon}</div>
                  <CardTitle className="font-heading text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">The people behind TrustTuition</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="font-heading font-bold text-3xl mb-6 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  TrustTuition was founded in 2020 by Sarah Mitchell, a former secondary school teacher who saw
                  firsthand how traditional education systems often failed to meet individual student needs. After 15
                  years in the classroom, Sarah recognized that personalised, one-on-one instruction could transform
                  learning outcomes for students of all abilities.
                </p>
                <p className="leading-relaxed">
                  Starting with just five tutors and a simple website, TrustTuition has grown into a thriving community
                  of over 350 expert educators serving more than 2,000 students across the UK. Our success stems from
                  our unwavering commitment to quality, transparency, and putting student success first.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to innovate and expand our services while staying true to our core mission: making
                  excellent education accessible, affordable, and effective for every student who needs it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Join Our Learning Community</h2>
          <p className="text-xl mb-8">
            Ready to start your learning journey with expert tutors?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quick-quote">
              <Button size="lg" variant="secondary" className="px-8 bg-primary hover:border-primary border text-primary-foreground hover:bg-primary-foreground hover:text-primary py-4 text-lg font-semibold">
                Get Started Today
              </Button>
            </a>
            <a href="/tutors">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg text-primary hover:bg-primary border-primary hover:text-primary-foreground">
                Meet Our Tutors
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}