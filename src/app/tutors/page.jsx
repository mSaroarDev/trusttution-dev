"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Search, Filter, MapPin, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [priceRange, setPriceRange] = useState([20, 60])

  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "French",
    "Spanish",
    "Computer Science",
  ]

  const levels = ["Primary", "GCSE", "A-Level", "University", "Adult Learning"]

  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subjects: ["Mathematics", "Physics"],
      level: ["GCSE", "A-Level"],
      rate: 35,
      rating: 4.9,
      reviews: 127,
      location: "London",
      experience: "8 years",
      qualifications: "PhD Mathematics, Imperial College",
      image: "/professional-female-tutor.png",
      availability: "Available today",
      bio: "Experienced mathematics and physics tutor with a passion for helping students achieve their potential.",
    },
    {
      id: 2,
      name: "James Wilson",
      subjects: ["English", "History"],
      level: ["GCSE", "A-Level"],
      rate: 28,
      rating: 4.8,
      reviews: 89,
      location: "Manchester",
      experience: "5 years",
      qualifications: "MA English Literature, Oxford",
      image: "/professional-male-tutor.png",
      availability: "Available tomorrow",
      bio: "Passionate English and History tutor dedicated to making learning engaging and effective.",
    },
    {
      id: 3,
      name: "Maria Garcia",
      subjects: ["Spanish", "French"],
      level: ["GCSE", "A-Level", "Adult Learning"],
      rate: 25,
      rating: 4.9,
      reviews: 156,
      location: "Birmingham",
      experience: "6 years",
      qualifications: "BA Modern Languages, Cambridge",
      image: "/female-language-tutor.png",
      availability: "Available today",
      bio: "Native Spanish speaker with extensive experience teaching languages to all age groups.",
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      subjects: ["Chemistry", "Biology"],
      level: ["GCSE", "A-Level", "University"],
      rate: 40,
      rating: 4.7,
      reviews: 203,
      location: "Edinburgh",
      experience: "10 years",
      qualifications: "PhD Chemistry, University of Edinburgh",
      image: "/professional-asian-male-tutor.jpg",
      availability: "Available this week",
      bio: "Research scientist and experienced tutor specializing in advanced chemistry and biology.",
    },
    {
      id: 5,
      name: "Emma Thompson",
      subjects: ["Mathematics", "Computer Science"],
      level: ["GCSE", "A-Level", "University"],
      rate: 32,
      rating: 4.8,
      reviews: 94,
      location: "Bristol",
      experience: "4 years",
      qualifications: "MSc Computer Science, Bristol University",
      image: "/young-female-computer-science-tutor.jpg",
      availability: "Available today",
      bio: "Software engineer turned tutor, making complex concepts simple and accessible.",
    },
    {
      id: 6,
      name: "Robert Davies",
      subjects: ["Physics", "Mathematics"],
      level: ["A-Level", "University"],
      rate: 45,
      rating: 4.9,
      reviews: 178,
      location: "Cardiff",
      experience: "12 years",
      qualifications: "PhD Physics, Cardiff University",
      image: "/experienced-male-physics-professor.jpg",
      availability: "Available this week",
      bio: "Former university lecturer with extensive experience in advanced physics and mathematics.",
    },
  ]

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesSubject = selectedSubject === "all" || tutor.subjects.includes(selectedSubject)

    const matchesLevel = selectedLevel === "all" || tutor.level.includes(selectedLevel)

    const matchesPrice = tutor.rate >= priceRange[0] && tutor.rate <= priceRange[1]

    return matchesSearch && matchesSubject && matchesLevel && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Find Your Perfect Tutor</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our network of expert tutors and find the perfect match for your learning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search tutors or subjects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Subject Filter */}
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="all">All Levels</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">£{priceRange[0]}</span>
              <input
                type="range"
                min="20"
                max="60"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                className="flex-1 accent-primary"
              />
              <span className="text-sm text-gray-600">£{priceRange[1]}</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredTutors.length} of {tutors.length} tutors
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <img
                    src={tutor.image || "/placeholder.svg"}
                    alt={tutor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardTitle className="font-heading text-xl">{tutor.name}</CardTitle>
                  <CardDescription className="text-base">{tutor.subjects.join(", ")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{tutor.rating}</span>
                      <span className="text-sm text-muted-foreground">({tutor.reviews} reviews)</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">£{tutor.rate}/hr</span>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{tutor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{tutor.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{tutor.experience} experience</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{tutor.bio}</p>

                  <div className="flex gap-2 pt-2">
                    <Link href={`/tutors/${tutor.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View Profile
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Book Session</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">No tutors found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}