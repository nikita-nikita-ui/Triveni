import { motion } from "framer-motion";

export default function Contactus() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold !text-green-600">
            GET IN TOUCH
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Reach out for personalized support, product inquiries, or partnership opportunities.
            We’re ready to help farmers, distributors, and agro-professionals.
          </p>

          {/* CONTACT INFO */}
       <div className="space-y-3">

  {/* PHONE */}
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 bg-green-700 rounded-full flex items-center justify-center text-white">
      
      {/* Phone Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.125 
          1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 
          1.125 0 01-1.38.335 12.035 12.035 0 01-6.37-6.37 1.125 1.125 0 01.335-1.38l1.293-.97a1.125 
          1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.09-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>

    </div>
    <span>+91-9216139713</span>
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 bg-green-700 rounded-full flex items-center justify-center text-white">

      {/* Email Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 
          2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 
          2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 
          4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75"
        />
      </svg>

    </div>
    <span>info@example.com</span>
  </div>

</div>

          {/* CARDS */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
  {[
    {
      title: "Head Office",
      desc: "401-B, IV th Floor, Usha Kiran Building, Azadpur Commercial Complex, New Delhi-110033 INDIA",
    },
    {
      title: "Admin Office",
      desc: "SCO-3, Phase 382, Sector-60 Mohali-160059 INDIA",
    },
    {
      title: "Unit-1",
      desc: "C-63 to 65, Industrial Area, Kotlapura-151204 (Punjab) INDIA",
    },
    {
      title: "Unit-2",
      desc: "IGC, Phase-1, Samba-184121 (Jammu & Kashmir) INDIA",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-xl shadow-md border"
    >
      <h3 className="font-semibold !text-green-600">
        {item.title}
      </h3>

      {/* SINGLE ADDRESS ONLY */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 pb-0"
        >
          {/* FORM WRAPPER WITH GAP */}
          <div className="flex flex-col gap-3">

            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Mobile Number" />

            <textarea
              placeholder="Your Enquiry"
              rows={5}
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-green-700 text-white py-3 rounded-full font-semibold"
            >
              Submit
            </motion.button>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 transition"
    />
  );
}