"use client";
import React, {useState} from "react";
import Footer from "../components/Footer";
import Image from "next/image";

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
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const subjectOptions = [
    "General Inquiry",
    "Partnership Opportunity",
    "Media Request",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
          <h1 className="text-4xl text-white mb-6">Get in Touch</h1>
          <p className="text-white mb-6 max-w-2xl">
            Have questions, suggestions, or partnership ideas for the Roving
            Reactor? Use the form below to connect with us.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 mb-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={formData.name}
                onChange={(e) =>
                  setFormData({...formData, name: e.target.value})
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={formData.email}
                onChange={(e) =>
                  setFormData({...formData, email: e.target.value})
                }
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-white mb-1">
                Organization/Company
              </label>
              <input
                type="text"
                id="organization"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({...formData, organization: e.target.value})
                }
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white mb-1">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({...formData, subject: e.target.value})
                }>
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
                className="block text-sm font-medium text-white mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={formData.message}
                onChange={(e) =>
                  setFormData({...formData, message: e.target.value})
                }
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.subscribe}
                onChange={(e) =>
                  setFormData({...formData, subscribe: e.target.checked})
                }
              />
              <label
                htmlFor="subscribe"
                className="ml-2 block text-sm text-white">
                Sign me up for updates about the Roving Reactor project
              </label>
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
                    ? "bg-transparent border border-gray-400 text-gray-400"
                    : "bg-transparent border border-white hover:bg-white hover:text-slate-800"
                } 
                transition-colors duration-200`}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="max-w-2xl py-5 border-t border-white">
            <h1 className="text-4xl my-6">
              Please consider donating to the Roving Reactor Project
            </h1>
            <p>
              Donations are processed through Physical Plant Theater, an
              official 501(c)(3) nonprofit in good standing, established in
              2004. (EIN: 20-0136247.) Donations are tax-deductible.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=M2WV38SP76D5Y",
                  "_blank"
                )
              }
              className="flex items-center justify-center px-12 py-2 mt-8 mb-3 text-[#012991] font-sans font-bold rounded-full bg-[#ffd140] hover:bg-white hover:text-[#012991] transition-colors duration-200">
              <Image
                src="/img/paypal-mark-color.svg"
                alt="PayPal Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Donate with PayPal
            </button>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
