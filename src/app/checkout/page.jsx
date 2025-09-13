import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Shield, Clock, User, BookOpen, Calendar } from "lucide-react"

export default function CheckoutPage() {
  // Mock session data - in a real app, this would come from state/props
  const sessionData = {
    tutor: {
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      image: "/professional-female-tutor.png",
      rating: 4.9,
    },
    session: {
      date: "March 20, 2024",
      time: "3:00 PM - 4:00 PM",
      duration: "1 hour",
      rate: 35,
      type: "Online Session",
    },
  }

  const orderSummary = {
    sessionFee: sessionData.session.rate,
    platformFee: 0,
    total: sessionData.session.rate,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your booking and start learning</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                  Session Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={sessionData.tutor.image || "/placeholder.svg"}
                    alt={sessionData.tutor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{sessionData.tutor.name}</h3>
                    <p className="text-gray-600">{sessionData.tutor.subject} Tutor</p>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span>{sessionData.tutor.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{sessionData.session.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{sessionData.session.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>{sessionData.session.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span>{sessionData.session.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-yellow-600" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Payment Integration Placeholder */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Payment Integration</h3>
                  <p className="text-gray-600 mb-4">
                    This is where your payment processor (Stripe, PayPal, etc.) will be integrated.
                  </p>
                  <div className="text-left text-sm text-gray-600 space-y-1 max-w-md mx-auto">
                    <p>• Secure card payment processing</p>
                    <p>• PayPal and digital wallet support</p>
                    <p>• PCI compliant and encrypted</p>
                    <p>• Instant payment confirmation</p>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Integration Ready:</strong> Simply connect your preferred payment provider.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Secure Payment</h3>
                    <p className="text-sm text-green-700">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="font-heading">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Session Fee</span>
                    <span>£{orderSummary.sessionFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span className="text-green-600">£{orderSummary.platformFee} (Free!)</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-yellow-600">£{orderSummary.total}</span>
                  </div>
                </div>

                <Button className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg py-3">
                  Complete Booking
                </Button>

                <div className="text-center text-xs text-gray-500 space-y-1">
                  <p>By completing this booking, you agree to our</p>
                  <div className="space-x-2">
                    <a href="/terms" className="text-yellow-600 hover:underline">
                      Terms of Service
                    </a>
                    <span>and</span>
                    <a href="/privacy" className="text-yellow-600 hover:underline">
                      Privacy Policy
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Instant booking confirmation</li>
                    <li>• Tutor contact details shared</li>
                    <li>• Session link sent 24h before</li>
                    <li>• Free cancellation up to 24h</li>
                  </ul>
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
