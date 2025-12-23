import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Book,
  ArrowRight,
  UserPlus,
  AlertCircle,
  X,
} from "lucide-react";
import InputField from "../../components/Auth/InputField.jsx";
import { isValidEmail } from "../../utils/validation.js";

function LoginPage({ onClose, onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    const emailValue = formData.email.trim();
    const passwordValue = formData.password.trim();

    if (!emailValue) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(emailValue)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!passwordValue) {
      nextErrors.password = "Password is required.";
    } else if (passwordValue.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Submit login here
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSignupClick = () => {
    if (onSwitchToSignup) onSwitchToSignup();
  };

  return (
    <div className="relative w-full">
      {/* Close Button */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition border border-gray-200"
        aria-label="Close login"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">

          {/* Left Section */}
          <div className="hidden lg:flex flex-1 flex-col justify-center text-center p-8">
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome Back
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Continue your learning journey with personalized content.
            </p>

            <div className="mt-8 space-y-4 text-left max-w-sm mx-auto">
              {[
                "Access to 10,000+ books",
                "Personalized recommendations",
                "Sync across devices",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mx-auto">

            <div className="flex justify-center lg:hidden mb-6">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                <Book className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-gray-600">
                Enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                icon={<Mail className="w-5 h-5 text-gray-400" />}
                className={errors.email ? "border-red-300 focus:ring-red-500" : ""}
                error={errors.email}
                required
              />

              {/* Password */}
              <InputField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                icon={<Lock className="w-5 h-5 text-gray-400" />}
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                }
                className={errors.password ? "border-red-300 focus:ring-red-500" : ""}
                error={errors.password}
                required
              />

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Sign In
              </button>

              <div className="text-center mt-6 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={handleSignupClick}
                  className="font-semibold text-black hover:underline inline-flex items-center gap-1"
                >
                  Sign up now <UserPlus className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 p-3 bg-gray-50 rounded-lg text-xs text-gray-500 flex gap-2">
                <AlertCircle className="w-4 h-4" />
                Your data is secure and encrypted.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


