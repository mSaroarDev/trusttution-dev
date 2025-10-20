import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Effective Study Techniques That Actually Work",
      excerpt: "Discover proven study methods that can help you learn more efficiently and retain information better. From the Pomodoro Technique to active recall strategies.",
      author: "Dr. Sarah Johnson",
      date: "15 March 2024",
      category: "Study Tips",
      image: "/blog-study-techniques.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Choose the Right Tutor for Your Child",
      excerpt: "A comprehensive guide for parents on selecting the perfect tutor. Learn what qualifications to look for, questions to ask, and red flags to avoid.",
      author: "Emma Thompson",
      date: "12 March 2024",
      category: "For Parents",
      image: "/blog-choosing-tutor.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "GCSE Maths: Common Mistakes and How to Avoid Them",
      excerpt: "Identify the most frequent errors students make in GCSE Mathematics and learn practical strategies to avoid these pitfalls in your exams.",
      author: "James Wilson",
      date: "10 March 2024",
      category: "GCSE Tips",
      image: "/blog-gcse-maths.jpg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Benefits of Online Tutoring vs Traditional Face-to-Face",
      excerpt: "Explore the advantages and disadvantages of online tutoring compared to in-person sessions. Which option is right for your learning style?",
      author: "Dr. Michael Chen",
      date: "8 March 2024",
      category: "Online Learning",
      image: "/blog-online-vs-traditional.jpg",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "A-Level Physics: Mastering Complex Concepts",
      excerpt: "Break down challenging A-Level Physics topics into manageable chunks. Tips for understanding quantum mechanics, thermodynamics, and more.",
      author: "Dr. Sarah Johnson",
      date: "5 March 2024",
      category: "A-Level Tips",
      image: "/blog-physics-concepts.jpg",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Building Confidence in Mathematics: A Student's Journey",
      excerpt: "Follow one student's transformation from maths anxiety to mathematical confidence. Real strategies that worked and lessons learned along the way.",
      author: "Maria Garcia",
      date: "3 March 2024",
      category: "Success Stories",
      image: "/blog-maths-confidence.jpg",
      readTime: "4 min read",
    },
  ]

  // const categories = [
  //   "All",
  //   "Study Tips",
  //   "For Parents",
  //   "GCSE Tips",
  //   "A-Level Tips",
  //   "Online Learning",
  //   "Success Stories",
  // ]

  // const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">TrustTuition Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert insights, study tips, and educational resources to help you succeed in your learning journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Regular Posts Grid */}
        <div>
          <h2 className="font-heading font-bold text-2xl mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/50" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-heading text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="block">
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}