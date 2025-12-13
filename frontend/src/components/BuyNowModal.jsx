import React, { useState } from "react";
import { X, Check, Shield, CreditCard, Lock, Download, Calendar, Clock, Users, Star } from "lucide-react";

function BuyNowModal({ course, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase Successful!</h3>
          <p className="text-gray-600 mb-6">
            Your purchase of <span className="font-semibold">{course.title}</span> was successful.
          </p>
          <div className="space-y-4">
            <button className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition">
              <Download className="w-5 h-5 inline mr-2" />
              Download Now
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h2>
            <p className="text-gray-600">Get instant access to {course.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left Column - Course Details */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-700">
                    <span className="font-semibold">{course.rating}</span> rating
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">
                    <span className="font-semibold">{course.students.toLocaleString()}</span> students
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">
                    <span className="font-semibold">{course.duration}</span> total length
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div>
              <h4 className="font-bold text-lg mb-4">What you'll get:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Downloadable resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Q&A support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div>
            {/* Pricing */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Course Price</span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$0</div>
                  <div className="text-gray-500 line-through text-sm">$49.99</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Free - No payment required</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Select Payment Method</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-black"
                  />
                  <CreditCard className="w-6 h-6 text-gray-600" />
                  <span className="flex-1">Credit/Debit Card</span>
                </label>
                
                <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-black"
                  />
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#003087" d="M20.067 8.478c.154 4.1-2.829 6.384-7.164 6.384h-2.643c-.55 0-1.02.394-1.106.936l-.73 4.618c-.06.38-.396.676-.782.676h-2.06c-.55 0-.836-.43-.726-.96l1.45-9.19c.11-.67.7-1.16 1.386-1.16h4.5c4.335 0 7.317-2.284 7.47-6.384z"/>
                    <path fill="#009cde" d="M7.52 6.478h-4.5c-.686 0-1.276.49-1.386 1.16L.185 16.828c-.11.53.176.96.726.96h2.06c.386 0 .722-.296.782-.676l.73-4.618c.086-.542.556-.936 1.106-.936h2.643c4.335 0 7.317-2.284 7.47-6.384h-4.5c-.686 0-1.276.49-1.386 1.16l-.73 4.618c-.086.542-.556.936-1.106.936H5.8c-.55 0-1.02.394-1.106.936l-.73 4.618c-.06.38-.396.676-.782.676H1.94"/>
                  </svg>
                  <span className="flex-1">PayPal</span>
                </label>
              </div>
            </div>

            {/* Terms */}
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 mt-1 text-black"
                />
                <span className="text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy. I understand this is a free course and no payment will be charged.
                </span>
              </label>
            </div>

            {/* Security */}
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Lock className="w-5 h-5" />
              <span className="text-sm">Secure transaction • Your information is safe</span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing || !agreedToTerms}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 ${
                isProcessing || !agreedToTerms
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Get Free Access'
              )}
            </button>

            {/* Guarantee */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-900">Money Back Guarantee</h5>
                  <p className="text-sm text-blue-700 mt-1">
                    Even though this course is free, we offer a satisfaction guarantee on all our paid courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNowModal;