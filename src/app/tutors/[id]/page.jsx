import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Clock, BookOpen, GraduationCap, Award, Calendar, MessageCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from a database
const getTutorById = (id) => {
  const tutors = {
    1: {
      id: 1,
      name: "Dr. Sarah Johnson",
      subjects: ["Mathematics", "Physics"],
      level: ["GCSE", "A-Level"],
      rate: 35,
      rating: 4.9,
      reviews: 127,
      location: "London",
      experience: "8 years",
      qualifications: "PhD Mathematics, Imperial College London",
      image: "/professional-female-tutor.png",
      availability: "Available today",
      bio: "I am a passionate mathematics and physics tutor with over 8 years of experience helping students achieve their academic goals. I hold a PhD in Mathematics from Imperial College London and have worked with students from GCSE to A-Level, helping them build confidence and excel in their studies.",
      specializations: ["Calculus", "Algebra", "Mechanics", "Thermodynamics", "Quantum Physics"],
      teachingStyle:
        "I believe in making complex concepts accessible through real-world examples and interactive problem-solving. My approach is patient, encouraging, and tailored to each student's learning style.",
      achievements: [
        "100% pass rate for A-Level students",
        "Average grade improvement of 2 levels",
        "Published researcher in applied mathematics",
      ],
      reviews: [
        {
          name: "Emma Wilson",
          rating: 5,
          comment:
            "Dr. Johnson helped me improve from a D to an A* in A-Level Maths. Her explanations are crystal clear!",
          date: "2 weeks ago",
        },
        {
          name: "James Parker",
          rating: 5,
          comment: "Excellent physics tutor. Made complex topics easy to understand. Highly recommended!",
          date: "1 month ago",
        },
        {
          name: "Sophie Chen",
          rating: 5,
          comment: "Very patient and encouraging. Helped build my confidence in mathematics significantly.",
          date: "2 months ago",
        },
      ],
    },
    // Add more tutors as needed
  }

  return tutors[id] || null
}

export default function TutorProfile({ params }) {
  const tutor = getTutorById(params.id)

  if (!tutor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tutor not found</h1>
          <Link href="/tutors">
            <Button>Back to Tutors</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/tutors" className="text-yellow-600 hover:text-yellow-700">
            ← Back to Tutors
          </Link>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={tutor.image || "/placeholder.svg"}
                    alt={tutor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="font-heading font-bold text-3xl mb-2">{tutor.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">{tutor.subjects.join(" • ")}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span>({tutor.reviews.length} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{tutor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{tutor.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{tutor.bio}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-yellow-600" />
                      Qualifications
                    </h4>
                    <p className="text-gray-600">{tutor.qualifications}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-600" />
                      Teaching Levels
                    </h4>
                    <p className="text-gray-600">{tutor.level.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tutor.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Teaching Style */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Teaching Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{tutor.teachingStyle}</p>
                <div className="space-y-2">
                  {tutor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Student Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tutor.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm">{review.name}</span>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-8">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">£{tutor.rate}/hour</div>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{tutor.availability}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Session
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Free to message • No booking fees • Cancel 24h notice</p>
                </div>
              </CardContent>
            </Card>

            {/* Availability Calendar Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Calendar integration coming soon</p>
                  <p className="text-xs text-gray-500 mt-2">Contact tutor directly to arrange sessions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
