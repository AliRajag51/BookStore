import React from "react";
import { describe, it, expect } from "vitest";
import CheckoutPage from "../pages/Checkout/CheckoutPage.jsx";
import { renderWithProviders, screen } from "./testUtils.jsx";

describe("CheckoutPage", () => {
  it("shows empty cart message when no items", () => {
    renderWithProviders(<CheckoutPage />);
    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });
});
