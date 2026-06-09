import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    review: "",
  });
  const [rating, setRating] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: formData.name,
      service: formData.service,
      review: formData.review,
      rating,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    setFormData({
      name: "",
      email: "",
      service: "",
      review: "",
    });

    setRating(5);
    console.log(formData);
  };

  //   Load Reviews
  //   const [reviews, setReviews] = useState(() => {
  //     const savedReviews = localStorage.getItem("reviews");
  //     return savedReviews ? JSON.parse(savedReviews) : [];
  //   });

  //   Save Reviews
  //   useEffect(() => {
  //     localStorage.setItem("reviews", JSON.stringify(reviews));
  //   }, [reviews]);
  const Topreviews = [
    {
      name: "Rahul Sharma",
      service: "GST Registration",
      rating: 5,
      review:
        "Excellent service and very professional team. My GST registration was completed quickly and without any hassle.",
    },

    {
      name: "Priya Verma",
      service: "Trademark Registration",
      rating: 5,
      review:
        "The trademark registration process was smooth and transparent. The team kept me updated at every step.",
    },

    {
      name: "Amit Gupta",
      service: "Private Limited Company Registration",
      rating: 4,
      review:
        "Great support throughout the company incorporation process. Documentation and filing were handled efficiently.",
    },

    {
      name: "Sneha Kapoor",
      service: "MSME / Udyam Registration",
      rating: 5,
      review:
        "Quick registration and excellent customer support. I received my Udyam certificate much faster than expected.",
    },

    {
      name: "Vikram Singh",
      service: "FSSAI License",
      rating: 4,
      review:
        "Professional guidance for obtaining my FSSAI license. The team explained the requirements clearly and completed the process on time.",
    },

    {
      name: "Neha Agarwal",
      service: "Income Tax Return Filing",
      rating: 5,
      review:
        "Highly satisfied with the tax filing service. The experts were knowledgeable and helped maximize eligible deductions.",
    },
  ];

  const feedbackBenefits = [
    {
      title: "Helps Us Improve",
      desc: "Your suggestions and feedback help us enhance our services and provide a better experience to every client.",
    },
    {
      title: "Supports Other Businesses",
      desc: "Honest reviews help other business owners make informed decisions when choosing professional services.",
    },
    {
      title: "Recognizes Quality Service",
      desc: "Your feedback motivates our team and helps us maintain high standards of customer satisfaction.",
    },
    {
      title: "Builds Trust & Transparency",
      desc: "Client reviews create transparency and strengthen trust between businesses and service providers.",
    },
  ];
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-6 md:p-8">
          {/* Header */}
          <div className="mb-10">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Customer Review Portal
            </span>

            <h1 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Share Your Experience
            </h1>

            <p className="text-gray-600 mt-3 max-w-3xl">
              Your feedback helps us improve our services and assists other
              businesses in making informed decisions.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {[
                "✓ Verified Feedback",
                "✓ Quick Submission",
                "✓ 100% Secure",
              ].map((item, index) => (
                <span
                  key={index}
                  className="border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Review Form */}

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
            {/* Left */}
            <div>
              <label className="block mb-2 font-medium text-[#0F2A44]">
                Full Name
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />

              <label className="block mt-5 mb-2 font-medium text-[#0F2A44]">
                Email Address
              </label>

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />

              <label className="block mt-5 mb-2 font-medium text-[#0F2A44]">
                Service Used
              </label>

              <input
                type="text"
                value={formData.service}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    service: e.target.value,
                  })
                }
                placeholder="GST Registration / Trademark / MSME"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>

            {/* Right */}
            <div>
              <label className="block mb-2 font-medium text-[#0F2A44]">
                Select Rating
              </label>

              <div className="flex flex-wrap gap-3 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`px-5 flex items-center gap-1 py-3 rounded-xl border transition ${
                      rating === star
                        ? "bg-green-600 text-white border-green-600"
                        : "border-gray-300 hover:border-green-500"
                    }`}
                  >
                    {star} <FaStar className="text-yellow-500" />
                  </button>
                ))}
              </div>

              <label className="block mb-2 font-medium text-[#0F2A44]">
                Review Message
              </label>
              <textarea
                value={formData.review}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    review: e.target.value,
                  })
                }
                placeholder="Write your review..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />

              <button
                type="submit"
                className="mt-5 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Submit Review
              </button>
            </div>
          </form>

          {/* Stats */}
          {/* <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            {
              title: "Total Reviews",
              value: "1,250+",
            },
            {
              title: "Average Rating",
              value: "4.9 / 5",
            },
            {
              title: "Happy Clients",
              value: "5,000+",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-2xl p-6"
            >
              <p className="text-sm text-gray-500 mb-2">{item.title}</p>

              <h3 className="text-3xl font-bold text-green-600">
                {item.value}
              </h3>
            </div>
          ))}
        </div> */}

          {/* Recent Reviews */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#0F2A44] mb-6">
              Recent Reviews
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 mt-8">
              {Topreviews.length > 0 ? (
                Topreviews.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-200 rounded-3xl p-6"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>

                    <h3 className="font-semibold text-[#0F2A44]">
                      {item.name}
                    </h3>

                    <p className="text-green-600 text-sm">{item.service}</p>

                    <p className="text-gray-500 text-xs mt-1">{item.date}</p>

                    <p className="text-gray-600 mt-4 leading-7">
                      {item.review}
                    </p>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 border border-dashed border-green-300 rounded-3xl">
                  <p className="text-gray-500">No reviews submitted yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-[#0F2A44]">
              Thank You For Your Feedback
            </h3>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every review helps us improve our services and deliver a better
              experience to our clients.
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
            Why Your Feedback Matters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbackBenefits.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 text-xl font-bold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-3">
            Your Voice Helps Us Grow
          </h3>

          <p className="text-gray-700 leading-8 max-w-3xl mx-auto">
            Whether your experience was excellent or you have suggestions for
            improvement, we value every review. Your feedback helps us deliver
            better business registration, taxation, compliance, and advisory
            services to clients across India.
          </p>
        </div>
      </section>
    </>
  );
};

export default Review;
