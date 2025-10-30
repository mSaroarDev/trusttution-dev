"use client";
import { useGetTutorAvailability, useGetTutorProfile } from "@/api/tutors/tutors.hooks";
import BackButton from "@/components/BackButton";
import RenderStatus from "@/components/RenderStatus";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@heroui/react";
import { Award, BookOpen, Calendar, CheckCircle, Clock, GraduationCap, MapPin, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TutorProfile() {
  const { tutorId } = useParams();
  const { data: tutor, isPending } = useGetTutorProfile(tutorId);
  const { data: availability, isPending: isLoadingAvailability } = useGetTutorAvailability(tutorId);

  function isAvailableNow() {
    const slots = availability?.result || [];
    const now = new Date();

    for (const slot of slots) {
      const start = new Date(slot.start);
      const finish = new Date(slot.finish);

      if (now >= start && now < finish) {
        return (
          <p className="mt-0.5 text-center text-red-500 font-medium">Not Available Right Now</p>
        );
      }
    }

    return (
      <p className="mt-0.5 text-center text-green-600 font-medium">Available Now</p>
    );;
  }


  if (isPending) {
    return (
      <>
        <div className="min-h-[90vh] flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </>
    )
  };

  if (!tutor?.result) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tutor not found</h1>
          <Link href="/tutors">
            <Button>Back to Tutors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <BackButton />

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={tutor?.result?.photo || "/placeholder.svg"}
                    alt={tutor?.result?.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-primary/20"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="font-heading font-bold text-3xl mb-2">{tutor?.result?.first_name} {tutor?.result?.last_name}</h1>
                    <p className="text-xl text-muted-foreground mb-4">{tutor?.result?.subjects?.join(" • ")}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star size={18} className="fill-primary text-primary" />
                        <span className="mt-0.5">{tutor?.result?.review_rating || "N/A"}</span>
                        {/* <span>({tutor?.result?.reviews?.length} reviews)</span> */}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="mt-0.5">{tutor?.result?.town}, {tutor?.result?.country} - {tutor?.result?.postcode}</span>
                      </div>
                      {/* <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{tutor?.result?.experience} experience</span>
                      </div> */}
                    </div>
                    <div className="mt-5">
                      <RenderStatus status={tutor?.result?.status} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-6">{tutor?.result?.title || "N/A"}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Qualifications
                    </h4>
                    <p className="text-muted-foreground">{tutor?.result?.qualifications}</p>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Teaching Levels
                    </h4>
                    <p className="text-muted-foreground">{tutor?.result?.level?.join(", ")}</p>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tutor?.result?.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill?.subject?.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle className="font-heading">Teaching Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">{tutor?.result?.teachingStyle}</p>
                <div className="space-y-2">
                  {tutor?.result?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Student Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tutor?.result?.reviews?.map((review, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(review?.rating)]?.map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm">{review?.name}</span>
                      <span className="text-xs text-muted-foreground">{review?.date}</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{review?.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-8 border-primary/20 shadow-lg">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${tutor?.result?.default_rate}/hour
                </div>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{isAvailableNow()}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Session
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Free to message • No booking fees • Cancel 24h notice</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 text-center border border-border">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Calendar integration coming soon</p>
                  <p className="text-xs text-muted-foreground mt-2">Contact tutor directly to arrange sessions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
