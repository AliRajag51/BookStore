import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AlertCircle, Lock } from "lucide-react";
import InputField from "../../components/Auth/InputField.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    const passwordValue = formData.password.trim();
    const confirmValue = formData.confirmPassword.trim();

    if (!token) {
      nextErrors.token = "Reset token is missing.";
    }
    if (!passwordValue) {
      nextErrors.password = "Password is required.";
    } else if (passwordValue.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }
    if (!confirmValue) {
      nextErrors.confirmPassword = "Confirm password is required.";
    } else if (passwordValue !== confirmValue) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setServerError("");
    setServerMessage("");

    try {
      const response = await fetch(`${API_URL}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ token, password: passwordValue }),
      });

      const data = await response.json();
      if (!response.ok) {
        setServerError(data.message || "Reset failed");
        return;
      }

      setServerMessage(data.message || "Password reset successful.");
      setFormData({ password: "", confirmPassword: "" });
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setServerError("Reset failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6 min-h-[70vh]">
      <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mx-auto">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Reset Password
          </h2>
          <p className="text-gray-600">
            Enter a new password for your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.token && (
            <p className="text-sm text-red-600" role="alert">
              {errors.token}
            </p>
          )}
          {serverError && (
            <p className="text-sm text-red-600" role="alert">
              {serverError}
            </p>
          )}
          {serverMessage && (
            <p className="text-sm text-green-700" role="status">
              {serverMessage}
            </p>
          )}

          <InputField
            label="New Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a new password"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            className={errors.password ? "border-red-300 focus:ring-red-500" : ""}
            error={errors.password}
            required
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            className={errors.confirmPassword ? "border-red-300 focus:ring-red-500" : ""}
            error={errors.confirmPassword}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting || !token}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-60"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>

          <div className="mt-6 p-3 bg-gray-50 rounded-lg text-xs text-gray-500 flex gap-2">
            <AlertCircle className="w-4 h-4" />
            Your password must be at least 8 characters.
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
