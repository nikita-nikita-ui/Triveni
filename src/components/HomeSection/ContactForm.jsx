import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        enquiry: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form Data Submitted:', formData);
    };

    // Animation variants
    const fadeInRight = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
    };

    return (
        <section className="relative w-full min-h-screen bg-[#FDFBF7] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
            {/* Background Subtle Pattern Overlay (Simulated via Tailwind background graphics) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* LEFT COLUMN: Contact Info */}
                <motion.div
                    className="lg:col-span-5 space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                >
                    <div className="space-y-3">

                        <p className="text-green-700 font-semibold tracking-wide anim-fade-up">
                            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100/80 to-green-100/80 text-green-800 text-sm font-semibold px-6 py-2.5 rounded-full border border-yellow-200/50 shadow-[0_8px_30px_rgb(250,204,21,0.08)] transition-all duration-500 hover:scale-105 hover:from-blue-50 hover:to-green-50 hover:text-blue-700 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] cursor-default">
                                Contact Now
                            </span>
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black !text-[#10B981] tracking-tight">
                            GET IN TOUCH NOW
                        </h2>
                      
                   
                    </div>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                        Reach out to the <span className="font-bold text-gray-800">Triveni</span> team for personalized support, product inquiries, or partnership opportunities.
                    </p>

                    {/* Info Blocks */}
                    <div className="space-y-6 pt-4">
                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#15803D] text-white p-3.5 rounded-full shadow-md flex-shrink-0">
                                <Phone size={20} className="fill-current" />
                            </div>
                            <div>
                                <h4 className="!text-[#15803D] font-bold text-sm">Have Question?</h4>
                                <p className="text-gray-800 font-semibold mt-0.5 text-base hover:text-[#10B981] transition-colors">
                                    +91-9216139713
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#15803D] text-white p-3.5 rounded-full shadow-md flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="!text-[#15803D] font-bold text-sm">Write Email</h4>
                                <a href="mailto:info@trivenichemicals.co.in" className="text-gray-800 font-semibold mt-0.5 text-base block hover:text-[#10B981] transition-colors">
                                    info@trivenichemicals.co.in
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#15803D] text-white p-3.5 rounded-full shadow-md flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="!text-[#15803D] font-bold text-sm">Visit Now</h4>
                                <p className="text-gray-700 font-medium mt-0.5 text-sm md:text-base leading-snug max-w-sm">
                                    401-B, IV th Floor, Usha Kiran Building, Azadpur Commercial Complex, New Delhi-110033 INDIA
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* MIDDLE DECORATIVE ELEMENT (Floating Ring) */}
                <div className="hidden lg:flex lg:col-span-1 justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#10B981] flex items-center justify-center animate-bounce">
                        <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <motion.div
                    className="lg:col-span-6 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border border-transparent bg-white shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border border-transparent bg-white shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-xl border border-transparent bg-white shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-xl border border-transparent bg-white shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                name="enquiry"
                                rows="5"
                                placeholder="Your Enquiry"
                                value={formData.enquiry}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-xl border border-transparent bg-white shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] resize-none transition-all"
                                required
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-3.5 bg-[#0F2980] text-white font-bold rounded-full shadow-lg hover:bg-[#1E3A8A] transition-colors tracking-wide text-base cursor-pointer"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}