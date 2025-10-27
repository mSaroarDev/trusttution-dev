"use client"
import { useResetPassword } from "@/api/auth/auth.hooks"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { handleErrorMessage } from "@/helpers/handleErrorMessage"
import { showToaster } from "@/helpers/useToaster"
import { ArrowLeft, Eye, EyeOff, GraduationCap, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { CgSpinner } from "react-icons/cg"

export default function ResetPasswordMain() {
  const { replace } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const searchParams = useSearchParams();
  const token = searchParams.get('token')

  const { mutateAsync: resetPassword, isPending } = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError(true);
      showToaster("error", "Passwords do not match");
      return
    };

    // eslint-disable-next-line no-unused-vars
    const { password, confirmPassword } = formData;
    const payload = {
      password,
      token
    }
    try {
      const res = await resetPassword(payload);
      if (res?.success) {
        showToaster("success", res?.message || "Password reset successful! Please login.");
        replace("/login");
      }
    } catch (error) {
      showToaster("error", handleErrorMessage(error))
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
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
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 ${error ? "border-red-500" : " border-slate-300"} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 ${error ? "border-red-500" : " border-slate-300"} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <Button type="submit" className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 py-3">
                  {isPending ? <CgSpinner size={20} className="animate-spin" /> : "Confirm and Reset Password"}
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
