import React from "react";

export default function Formdetails() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Comment Card */}
      <div className="flex flex-col sm:flex-row gap-5 border-b border-gray-200 pb-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Layer Drops
              </h3>
              <p className="text-xs text-[#f4b400] font-medium mt-0.5">
                January 28, 2023 at 8:00 am
              </p>
            </div>

            <button className="border border-green-700 hover:bg-green-50 text-green-700 font-semibold px-4 py-1.5 rounded-full text-sm transition self-start sm:self-auto">
              Reply
            </button>
          </div>

          <div className="mt-4 text-gray-600 leading-relaxed text-sm space-y-2">
            <p>
              Mauris non dignissim purus, ac commodo diam. Donec sit amet
              lacinia nulla.
            </p>
            <p>
              Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
              nulla, sollicitudin at euismod.
            </p>
          </div>
        </div>
      </div>

      {/* Leave Comment */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-[#102a83] mb-6">
          Leave a Comment
        </h2>

        <form className="space-y-4">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name *"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg outline-none text-sm text-gray-700 focus:border-[#102a83] transition"
            />

            <input
              type="email"
              placeholder="Email address *"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg outline-none text-sm text-gray-700 focus:border-[#102a83] transition"
            />
          </div>

          {/* Textarea */}
          <textarea
            rows="5"
            placeholder="Comment"
            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg outline-none text-sm text-gray-700 focus:border-[#102a83] transition resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#142f97] hover:bg-[#0f267b] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}