"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ArrowLeft, GraduationCap, CheckCircle } from "lucide-react"
import { useSendResetLink } from "@/api/auth/auth.hooks"
import { showToaster } from "@/helpers/useToaster"
import { handleErrorMessage } from "@/helpers/handleErrorMessage";
import { CgSpinner } from "react-icons/cg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {mutateAsync: sendLink, isPending} = useSendResetLink();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendLink({email});
      if(res?.success){
        showToaster("success", res?.message || "Reset link sent successfully");
        setIsSubmitted(true)
      }
    } catch (error) {
      showToaster("error", handleErrorMessage(error) || "Failed to send reset link. Please try again.");
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                <GraduationCap className="h-10 w-10 text-yellow-400" />
                <span className="font-heading font-bold text-2xl">TrustTuition</span>
              </Link>
            </div>

            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Check your email</h2>
                <p className="text-gray-600 mb-6">
                  {`We've sent a password reset link to`} <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  {`Didn't receive the email? Check your spam folder or try again with a different email address.`}
                </p>
                <div className="space-y-3">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full bg-transparent">
                    Try different email
                  </Button>
                  <Link href="/login" className="block">
                    <Button className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300">Back to Sign In</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <GraduationCap className="h-10 w-10 text-yellow-400" />
              <span className="font-heading font-bold text-2xl">TrustTuition</span>
            </Link>
            <h2 className="font-heading font-bold text-3xl text-gray-900">Forgot your password?</h2>
            <p className="mt-2 text-gray-600">{`No worries, we'll send you reset instructions`}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center font-heading text-xl">Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {`Enter the email address associated with your account and we'll send you a link to reset your
                    password.`}
                  </p>
                </div>

                {/* Reset Button */}
                <Button type="submit" className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 py-3">
                  {isPending ? <CgSpinner size={20} className="animate-spin" /> : "Send Reset Link"}
                </Button>
              </form>

              {/* Back to Login */}
              <div className="mt-6">
                <Link
                  href="/login"
                  className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
