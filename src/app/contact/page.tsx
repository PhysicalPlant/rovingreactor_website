"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import { Tabs, Tab, Box } from "@mui/material";

function DonateForm() {
  const [frequency, setFrequency] = useState<"one_time" | "monthly">(
    "one_time",
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Preset amounts based on frequency
  const oneTimeAmounts = [25, 50, 100, 500, 1000];
  const monthlyAmounts = [5, 25, 50, 100];

  const amounts = frequency === "one_time" ? oneTimeAmounts : monthlyAmounts;

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setError("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setError("");
  };

  const handleDonate = async () => {
    setError("");

    // Determine final amount
    let finalAmount: number;
    if (selectedAmount) {
      finalAmount = selectedAmount;
    } else if (customAmount) {
      finalAmount = parseFloat(customAmount);
      if (isNaN(finalAmount) || !Number.isFinite(finalAmount)) {
        setError("Please enter a valid amount");
        return;
      }
      // Validate min/max for custom amounts
      if (finalAmount < 5) {
        setError("Minimum donation amount is $5");
        return;
      }
      if (finalAmount > 10000) {
        setError("Maximum donation amount is $10,000");
        return;
      }
    } else {
      setError("Please select or enter an amount");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: frequency,
          amount: frequency === "one_time" ? finalAmount : undefined,
          tier: frequency === "monthly" ? finalAmount : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl pb-5">
      <h1 className="text-4xl text-white mb-6">Your Donation</h1>

      <p className="text-white mb-6">
        Donations are processed through Physical Plant Arts, an official
        501(c)(3) nonprofit in good standing, established in 2004. (EIN:
        20-0136247.) Donations are tax-deductible.
      </p>

      {/* Frequency Selection */}
      <div className="mb-6">
        <h2 className="text-white text-lg font-medium mb-3">Frequency</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => {
              setFrequency("one_time");
              setSelectedAmount(null);
              setCustomAmount("");
            }}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              frequency === "one_time"
                ? "bg-white text-slate-800"
                : "bg-transparent border border-white text-white hover:bg-white/10"
            }`}
          >
            One-Time
          </button>
          <button
            type="button"
            onClick={() => {
              setFrequency("monthly");
              setSelectedAmount(null);
              setCustomAmount("");
            }}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              frequency === "monthly"
                ? "bg-white text-slate-800"
                : "bg-transparent border border-white text-white hover:bg-white/10"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="mb-6">
        <h2 className="text-white text-lg font-medium mb-3">Amount (USD)</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountClick(amount)}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                selectedAmount === amount
                  ? "bg-white text-slate-800"
                  : "bg-transparent border border-white text-white hover:bg-white/10"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Amount - Only for One-Time */}
        {frequency === "one_time" && (
          <div>
            <input
              type="number"
              placeholder="$Other"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              min="5"
              max="10000"
            />
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Donate Button */}
      <button
        type="button"
        onClick={handleDonate}
        disabled={loading}
        className={`w-full px-6 py-4 rounded-md font-medium text-lg transition-colors ${
          loading
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-[#B8860B] text-white hover:bg-[#9A7209]"
        }`}
      >
        {loading ? "Processing..." : "Donate"}
      </button>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [tabIndex, setTabIndex] = useState(1); // Default to Donate tab (index 1)
  const [showDonationSuccess, setShowDonationSuccess] = useState(false);

  useEffect(() => {
    // Check for donation success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowDonationSuccess(true);
      setTabIndex(1); // Show Donate tab
      // Clean up URL after a brief delay to ensure state is set
      setTimeout(() => {
        window.history.replaceState({}, "", "/contact#donate");
      }, 100);
    } else {
      // Check hash on mount - only switch to Contact if explicitly requested
      const hash = window.location.hash;
      if (hash === "#contact") {
        setTabIndex(0);
      } else {
        // Default to Donate tab for all other cases (including #donate or no hash)
        setTabIndex(1);
      }
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#contact") {
        setTabIndex(0);
      } else {
        setTabIndex(1);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!formData.name || !formData.email) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgvedvkr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const subjectOptions = [
    "General Inquiry",
    "Brainstorming Session - Nov 5",
    "Partnership Opportunity",
    "Media Request",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <main className="relative pt-[calc(3.5rem+1px)] md:pt-8 mt-6 md:mt-8 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
          {/* Material UI Tabs Navigation */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              aria-label="Contact and Donate Tabs"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#60A5FA", // bright blue color
                },
              }}
            >
              <Tab
                label="Reach Out"
                sx={{
                  color: "white",
                  fontFamily: "Gabarito",
                  "&.Mui-selected": {
                    color: "#60A5FA", // bright blue color
                  },
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
              <Tab
                label="Donate"
                sx={{
                  color: "white",
                  fontFamily: "Gabarito",
                  "&.Mui-selected": {
                    color: "#60A5FA", // bright blue color
                  },
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            </Tabs>
          </Box>

          {/* Tab Content */}
          <Box sx={{ p: 2 }}>
            {tabIndex === 0 && (
              <>
                <h1 className="text-5xl text-white mb-6">Get in Touch</h1>
                <p className="text-white mb-6 max-w-2xl">
                  Have questions, suggestions, or partnership ideas for the
                  Roving Reactor? Use the form below to connect with us.
                </p>

                {/* Contact Form */}
                <form
                  onSubmit={handleSubmit}
                  className="max-w-2xl space-y-6 mb-8"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                  {status === "success" && (
                    <p className="text-green-500 text-sm">
                      Message sent successfully!
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`px-6 py-2 text-white font-medium rounded-md text-sm
                      ${
                        status === "loading"
                          ? "bg-gray-400"
                          : "bg-transparent border border-white hover:bg-white hover:text-slate-800"
                      }
                      transition-colors duration-200`}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}

            {tabIndex === 1 && (
              <>
                {showDonationSuccess && (
                  <div className="bg-green-900/30 border border-green-500 rounded-md p-6 mb-6">
                    <h2 className="text-2xl text-white font-bold mb-3">
                      Thank you for your donation!
                    </h2>
                    <p className="text-white mb-2">
                      Your generous support helps Physical Plant Arts bring the Roving Reactor 
                      to communities across the country.
                    </p>
                    <p className="text-white">
                      If you have any questions, please don&apos;t hesitate to{" "}
                      <a 
                        href="/contact#contact" 
                        className="text-[#8be8d9] hover:text-white underline"
                      >
                        contact us
                      </a>.
                    </p>
                    <button
                      onClick={() => setShowDonationSuccess(false)}
                      className="mt-4 text-sm text-gray-300 hover:text-white underline"
                    >
                      Make another donation
                    </button>
                  </div>
                )}
                {!showDonationSuccess && <DonateForm />}
              </>
            )}
          </Box>
        </div>

        <Footer />
      </main>
    </div>
  );
}
