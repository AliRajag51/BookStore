import React, { useState } from "react";
import { X } from "lucide-react";
import ModalHeader from "../../components/BuyNowModal/ModalHeader.jsx";
import CourseDetails from "../../components/BuyNowModal/CourseDetails.jsx";
import BenefitList from "../../components/BuyNowModal/BenefitList.jsx";
import PricingBox from "../../components/BuyNowModal/PricingBox.jsx";
import PaymentOption from "../../components/BuyNowModal/PaymentOption.jsx";
import SecurityNotice from "../../components/BuyNowModal/SecurityNotice.jsx";
import GuaranteeBox from "../../components/BuyNowModal/GuaranteeBox.jsx";
import SuccessState from "../../components/BuyNowModal/SuccessState.jsx";

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
    return <SuccessState course={course} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <ModalHeader
          title="Complete Your Purchase"
          subtitle={`Get instant access to ${course.title}`}
          onClose={onClose}
          icon={<X className="w-6 h-6 text-gray-600" />}
        />

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left Column - Course Details */}
          <div>
            <CourseDetails course={course} />
            <BenefitList
              items={[
                "Full lifetime access",
                "Certificate of completion",
                "Downloadable resources",
                "Q&A support",
              ]}
            />
          </div>

          {/* Right Column - Payment */}
          <div>
            {/* Pricing */}
            <PricingBox />

            {/* Payment Method */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Select Payment Method</h4>
              <div className="space-y-3">
                <PaymentOption
                  value="credit-card"
                  label="Credit/Debit Card"
                  isSelected={paymentMethod === "credit-card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />

                <PaymentOption
                  value="paypal"
                  label="PayPal"
                  isSelected={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  icon={
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#003087" d="M20.067 8.478c.154 4.1-2.829 6.384-7.164 6.384h-2.643c-.55 0-1.02.394-1.106.936l-.73 4.618c-.06.38-.396.676-.782.676h-2.06c-.55 0-.836-.43-.726-.96l1.45-9.19c.11-.67.7-1.16 1.386-1.16h4.5c4.335 0 7.317-2.284 7.47-6.384z"/>
                      <path fill="#009cde" d="M7.52 6.478h-4.5c-.686 0-1.276.49-1.386 1.16L.185 16.828c-.11.53.176.96.726.96h2.06c.386 0 .722-.296.782-.676l.73-4.618c.086-.542.556-.936 1.106-.936h2.643c4.335 0 7.317-2.284 7.47-6.384h-4.5c-.686 0-1.276.49-1.386 1.16l-.73 4.618c-.086.542-.556.936-1.106.936H5.8c-.55 0-1.02.394-1.106.936l-.73 4.618c-.06.38-.396.676-.782.676H1.94"/>
                    </svg>
                  }
                />
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
                  I agree to the Terms of Service and Privacy Policy. I
                  understand this is a free course and no payment will be
                  charged.
                </span>
              </label>
            </div>

            {/* Security */}
            <SecurityNotice text="Secure transaction ƒ?› Your information is safe" />

            {/* Submit Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing || !agreedToTerms}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 ${
                isProcessing || !agreedToTerms
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg"
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
                "Get Free Access"
              )}
            </button>

            {/* Guarantee */}
            <GuaranteeBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNowModal;
