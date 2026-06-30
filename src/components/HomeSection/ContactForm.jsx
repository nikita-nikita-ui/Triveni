import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="relative w-full min-h-screen bg-slate-50 py-20 px-6 overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-green-200/50 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[120px]"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block py-1 px-4 rounded-full bg-green-100 text-green-700 font-bold text-sm tracking-widest uppercase">
              Let's Connect
            </span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Get in touch <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                with our team.
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md">
              We are here to help. Reach out to us for any inquiries,
              partnerships, or support.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Phone, title: "Call Us", detail: "+91-9216139713" },
              {
                icon: Mail,
                title: "Email Us",
                detail: "info@trivenichemicals.co.in",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                detail: "401-B, Usha Kiran Building, New Delhi-110033",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-slate-800 font-semibold">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-green-500 focus:ring-0 transition-all"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-green-500 focus:ring-0 transition-all"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-green-500 focus:ring-0 transition-all"
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-green-500 focus:ring-0 transition-all"
            required
          />
          <textarea
            name="enquiry"
            rows="4"
            placeholder="Your Enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-green-500 focus:ring-0 transition-all resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
          >
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
