import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Book, ArrowRight, AlertCircle, X, LogIn } from "lucide-react";
import InputField from "../../components/Auth/InputField.jsx";

function SignUpPage({ onClose, onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up attempt with:", formData);
    // Add your signup logic here
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onClose && typeof onClose === 'function') {
      onClose();
    } else {
      window.location.href = '/'; // Go to home page
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onSwitchToLogin && typeof onSwitchToLogin === 'function') {
      onSwitchToLogin(); // Switch to login page
    } else if (onClose && typeof onClose === 'function') {
      onClose(); // Close signup modal
      // Then you need to open login modal from parent component
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6 relative">
      
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
        aria-label="Close signup"
        type="button"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Left Side - Brand/Info Section */}
        <div className="hidden lg:flex flex-1 flex-col items-center justify-center text-center p-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Join Our Community
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Start your reading journey with access to thousands of books, personalized recommendations, and exclusive content.
            </p>
          </div>
          
          {/* Features List */}
          <div className="space-y-4 mt-8 text-left max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">Unlimited access to 10,000+ books</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">Personalized reading recommendations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-gray-700">Track your reading progress</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-pink-600" />
              </div>
              <span className="text-gray-700">Join reading challenges</span>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          
          {/* Mobile Logo */}
          <div className="flex justify-center lg:hidden mb-6">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Join thousands of readers in our book community
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                icon={<User className="h-5 w-5 text-gray-400" />}
                className="border-gray-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                required
              />
              
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                icon={<User className="h-5 w-5 text-gray-400" />}
                className="border-gray-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>

            {/* Email */}
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              icon={<Mail className="h-5 w-5 text-gray-400" />}
              className="border-gray-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              required
            />

            {/* Password */}
            <div>
              <InputField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                icon={<Lock className="h-5 w-5 text-gray-400" />}
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                }
                className="border-gray-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Must be at least 8 characters with letters and numbers
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-1 text-black border-gray-300 rounded focus:ring-black"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                I agree to the{" "}
                <button type="button" className="text-black font-medium hover:underline">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button type="button" className="text-black font-medium hover:underline">
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={!acceptTerms}
              className={`w-full text-white py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 transform ${
                acceptTerms 
                  ? 'bg-black hover:bg-gray-800 hover:-translate-y-0.5 shadow-md hover:shadow-lg' 
                  : 'bg-gray-400 cursor-not-allowed'
              } text-sm sm:text-base`}
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => console.log("Google sign up clicked")}
                className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                onClick={() => console.log("GitHub sign up clicked")}
                className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm sm:text-base">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={handleLoginClick}
                  className="font-semibold text-black hover:underline inline-flex items-center gap-1"
                >
                  Sign in here
                  <LogIn className="w-4 h-4" />
                </button>
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-500">
                  Your personal information is protected with bank-level security. We never share your data with third parties.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

