"use client";
import {useState} from "react";

interface EmailSignupProps {
  buttonText: string;
  placeholderText: string;
  onSubmit: (email: string) => Promise<void>;
}

export default function EmailSignup({
  buttonText,
  placeholderText,
  onSubmit,
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter an email address");
      setStatus("error");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await onSubmit(email);
      // Create a form element to submit to MailChimp
      const form = document.createElement("form");
      form.action =
        "https://physicalplant.us5.list-manage.com/subscribe/post?u=581cc621e84b547f7f78bfc8d&amp;id=d3ea1ff41d&amp;f_id=008cbbedf0";
      form.method = "POST";
      form.target = "_blank";

      const emailInput = document.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = "EMAIL";
      emailInput.value = email;
      form.appendChild(emailInput);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="text-sm whitespace-nowrap font-gabarito">
          <span className="text-white">Stay updated:</span>
          {status === "success" && (
            <span className="text-green-500 ml-2">
              Thank you for signing up!
            </span>
          )}
        </span>
        {status !== "success" && (
          <div className="flex-grow">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  status === "error" ? errorMessage : placeholderText
                }
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 bg-gray-200 font-gabarito
                  ${
                    status === "error"
                      ? "border-red-500 placeholder-red-500"
                      : "border-gray-300"
                  }`}
                disabled={status === "loading"}
              />
            </div>
          </div>
        )}
        {status !== "success" && (
          <button
            type="submit"
            disabled={status === "loading"}
            className={`px-6 py-2 text-white font-medium rounded-md text-sm font-gabarito
              ${
                status === "loading"
                  ? "bg-transparent border border-gray-400 text-gray-400"
                  : "bg-transparent border border-white hover:bg-white hover:text-slate-800"
              } 
              transition-colors duration-200`}>
            {status === "loading" ? "Sending..." : buttonText}
          </button>
        )}
      </div>
    </form>
  );
}
