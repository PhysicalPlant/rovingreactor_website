"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

function ContactForm() {
    const searchParams = useSearchParams();

    // Initialize formData with default values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        city: "",
        subject: "",
        message: "",
        subscribe: false,
    });

    // Set initial subject and city based on URL parameters
    useEffect(() => {
        const from = searchParams.get('from');
        const city = searchParams.get('city');

        const updates: { subject?: string; city?: string } = {};

        if (from === 'hosting') {
            updates.subject = "Hosting a Nuclear Soup";
        } else if (from === 'attending') {
            updates.subject = "Attending a Nuclear Soup";
        } else if (from === 'sponsors') {
            updates.subject = "Sponsoring a Nuclear Soup";
        }

        if (city) {
            updates.city = city;
        }

        if (Object.keys(updates).length > 0) {
            setFormData(prev => ({ ...prev, ...updates }));
        }
    }, [searchParams]);

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
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    organization: "",
                    city: "",
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

    const getCityOptions = () => {
        const city = searchParams.get('city');
        const baseOptions = [
            "Austin, TX",
            "Washington, DC",
            "Saint Paul, MN",
            "San Luis Obispo, CA",
        ];

        if (city && !baseOptions.includes(city)) {
            // Add city-specific options at the beginning of the array
            return [
                city,
                ...baseOptions
            ];
        }

        return baseOptions;
    };

    // Update the subject options to include city-specific options
    const getSubjectOptions = () => {
        const baseOptions = [
            "Attending a Nuclear Soup",
            "Hosting a Nuclear Soup",
            "Sponsoring a Nuclear Soup",
            "Nuclear Soup Media Request",
            "Nuclear Soup - Other"
        ];
        return baseOptions;
    };

    // Function to determine the message label based on the subject
    const getMessageLabel = () => {
        const subject = formData.subject.toLowerCase();

        if (subject.includes('hosting') || subject.includes('attending')) {
            return "Please include your connection to nuclear energy.";
        } else if (subject.includes('sponsoring')) {
            return "Thanks for your interest in supporting a soup night. Tell us a bit about yourself and your organization.";
        } else if (subject.includes('media')) {
            return "Great to connect! What's your outlet and what aspects of this event interest you?";
        } else {
            return "Message";
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl space-y-6 mb-8"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-orange-950 mb-1"
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
                    className="block text-sm font-medium text-orange-950 mb-1"
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
                    className="block text-sm font-medium text-orange-950 mb-1"
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
                    htmlFor="city"
                    className="block text-sm font-medium text-orange-950 mb-1"
                >
                    City you're interested in
                </label>
                <select
                    id="city"
                    className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.city}
                    onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                    }
                >
                    <option value="">Select a city</option>
                    {getCityOptions().map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-orange-950 mb-1"
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
                    {getSubjectOptions().map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-orange-950 mb-1"
                >
                    {getMessageLabel()} <span className="text-red-500">*</span>
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
                className={`px-6 py-2 text-xl text-orange-950 font-medium rounded-md text-sm
                      ${status === "loading"
                        ? "bg-gray-400"
                        : "bg-transparent border border-2 border-orange-900 hover:bg-orange-900 hover:text-white"
                    }
                      transition-colors duration-200`}
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}

export default function Contact() {
    return (
        <div className="min-h-screen">
            <main className="relative pb-0">
                <div className="mx-auto max-w-7xl pb-0">
                    <h1 className="text-5xl text-orange-900 mb-6 text-orange-900">Get in Touch About a Nuclear Soup Event</h1>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
