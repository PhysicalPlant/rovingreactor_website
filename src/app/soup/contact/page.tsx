"use client";
import React, { useState } from "react";

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
        "Attending a Nuclear Soup",
        "Hosting a Nuclear Soup",
        "Nuclear Soup Media Request",
        "Nuclear Soup -  Other",
    ];

    return (
        <div className="min-h-screen">
            <main className="relative  pb-0">
                <div className="mx-auto max-w-7xl  pb-0">

                    <>
                        <h1 className="text-5xl text-orange-900 mb-6 text-orange-900" >Get in Touch About a Nuclear Soup Event</h1>
                        <p className="text-xl text-orange-900 mb-6 max-w-2xl">
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
                                    className="block text-sm font-medium text-orange-950 mb-1"
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
                    </>
                </div>
            </main>
        </div>
    );
}
